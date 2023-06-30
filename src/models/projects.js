'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.clients, {
				foreignKey: "cid",
				onDelete: "CASCADE",
			});
    }
  }
  projects.init({
    pid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    p_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    p_description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    client_id: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
   
  }, {
    sequelize,
    modelName: 'projects',
  });
  return projects;
};