import { DataTypes } from "sequelize";
import Sequelize from "../config.js";

const Dinosaures = Sequelize.define("Dinosaures", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regime: {
    type: DataTypes.ENUM(
      "Herbivores",
      "Carnivores",
      "Piscivores",
      "Omnivores",
      "Insectovores",
    ),
    allowNull: false,
  },
  periode: {
    type: DataTypes.ENUM("Trias", "Jurassique", "Crétacé"),
    allowNull: false,
  },
});

export default Dinosaures;
