import { DataTypes } from "sequelize";
import Sequelize from "../config.js";

const Fossiles = Sequelize.define("Fossiles", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  lieu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  etat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Fossiles;
