import { Op } from "sequelize";

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
    const dinosaures = await debug.Dinosaures.findAll();
  },
  getById: async () => {},
};

export default dinoService;
