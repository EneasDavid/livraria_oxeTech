'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Livro, {
        foreignKey: 'categoria_id'
        });
    }
  }
  Categoria.init({
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: "Categoria",
  });
  return Categoria;
};