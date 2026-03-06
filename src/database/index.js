import Dinosaures from "./entities/dinosaures.entity";
import Fossiles from "./entities/fossiles.entity";
import Zones from "./entities/zones.entity";

Zones.belongsToMany(Dinosaures, {
  through: "ZoneGeographique",
  as: "zone",
  foreignKey: "dinosaureId",
});

Dinosaures.belongsTo(Fossile, {
  through: "Fossile",
  as: "fossile",
  foreignKey: "fossileId",
});

Dinosaures.belongsToMany(Zone, {
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
};
