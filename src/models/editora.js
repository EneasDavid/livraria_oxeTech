'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editora extends Model {
    static associate(models) {
      Editora.hasMany(models.Livro, {
        foreignKey: 'id_editora'
      });
    }
  }
  Editora.init({
    nomeFantasia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Editora',
    tableName: "editoras",
  });
  return Editora;
};