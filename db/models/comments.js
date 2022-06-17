'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Routers, Users}) {
      this.belongsTo(Routers, { foreignKey: 'router_id' });
      this.belongsTo(Users, { foreignKey: 'user_id' });
    }
  }
  Comments.init({
    title: DataTypes.STRING,
    router_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};
