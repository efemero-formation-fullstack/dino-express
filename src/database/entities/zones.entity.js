import { DataTypes } from "sequelize";
import Sequelize from "../config.js";

const Zones = Sequelize.define("Zones", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Zones;
