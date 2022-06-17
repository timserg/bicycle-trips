'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Routers}) {
      this.belongsTo(Routers, { foreignKey: 'router_id' });
    }
  }
  Rates.init({
    grade: DataTypes.STRING,
    router_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rates',
  });
  return Rates;
};
