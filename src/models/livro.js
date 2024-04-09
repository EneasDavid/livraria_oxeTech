'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livro.init({
    titulo: DataTypes.STRING,
    qtnPagina: DataTypes.NUMBER,
    id_Editora: DataTypes.NUMBER,
    id_criador: DataTypes.NUMBER,
    id_categoria: DataTypes.NUMBER,
    id_autor: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Livro',
    tableName:"livros",
  });
  return Livro;
};