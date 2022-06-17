const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Routers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rates, Comments, Users }) {
      this.hasMany(Rates, { foreignKey: 'router_id' });
      this.hasMany(Comments, { foreignKey: 'router_id' });
      this.belongsTo(Users, { foreignKey: 'user_id' });
    }
  }
  Routers.init({
    title: DataTypes.STRING,
    start: DataTypes.STRING,
    finish: DataTypes.STRING,
    location: DataTypes.STRING,
    lengthRoad: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Routers',
  });
  return Routers;
};
