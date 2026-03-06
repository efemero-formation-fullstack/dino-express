import sequelize from "./config.js";
import Dinosaures from "./entities/dinosaures.entity.js";
import Fossiles from "./entities/fossiles.entity.js";
import Zones from "./entities/zones.entity.js";

Zones.belongsToMany(Dinosaures, {
  through: "ZoneGeographique",
  as: "zone",
  foreignKey: "dinosaureId",
});

Dinosaures.belongsTo(Fossiles, {
  through: "Fossile",
  as: "fossile",
  foreignKey: "fossileId",
});

Dinosaures.belongsToMany(Zones, {
  through: "Dinosaure",
  as: "dinosaure",
  foreignKey: "zoneId",
});

Fossiles.belongsTo(Dinosaures, {
  through: "Dinosaure",
  as: "dinosaure",
  foreignkey: "dinosaureId",
});

export default {
  Dinosaures,
  Zones,
  Fossiles,
  sequelize
};
