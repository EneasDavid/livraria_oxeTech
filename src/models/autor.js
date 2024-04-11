'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      Autor.hasMany(models.Livro, {
        foreignKey: 'id_autor',
      });
    }
  }
  Autor.init({
    nome: DataTypes.STRING,
    nacionalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: "autores",
  });
  return Autor;
};