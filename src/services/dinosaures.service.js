import { Op } from "sequelize";
import db from "../database/index.js";

const dinoService = {
  create: async () => {},
  delete: async () => {},
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
  getById: async () => {},
};

export default dinoService;
