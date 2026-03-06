import { Op } from "sequelize";
import {
  DinoAlreadyExistError,
  DinosaureNotFoundError,
} from "../custom-errors/dinosaures.error";
import db from "../database/index.js";

const dinoService = {
  create: async (data) => {
    const existing_dino = await db.Dinosaures.findOne({
      where: {
        name: data.name,
      },
    });
    if (existing_dino) {
      throw new DinoAlreadyExistError();
    }

    const newDino = await db.Dinosaures.create(data);
    return newDino;
  },
  getAll: async (filter, pagination) => {
    const where = {};

    if (filter) {
      if (filter.name) {
        where.name = {
          [Op.iLike]: `%${filter.name}%`,
        };
      }
      if (filter.regime) {
        where.regime = filter.regime;
      }
      if (filter.periode) {
        where.periode = filter.periode;
      }
    }
    const order = [];
    if (pagination.orders) {
      if (pagination.orders.name) {
        order.push(["name", pagination.orders.name]);
      }
    }
    const dinosaures = await debug.Dinosaures.findAll({
      where,
      offset: pagination.offset,
      limit: pagination.limit,
      order,
      include: [
        {
          model: db.Zones,
          as: "zone",
        },
      ],
    });
    return dinosaures;
  },
  delete: async (dinosaureId) => {
    const dinosaure = await db.Dinosaure.findByPk(dinosaureId);
    if (!dinosaure) {
      throw new DinosaureNotFoundError();
    }

    await dinosaure.destroy();
  },
  getById: async () => {},
};

export default dinoService;
