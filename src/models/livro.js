'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.belongsTo(models.Editora, {
        foreignKey: 'id_editora'
      });
      Livro.belongsTo(models.Usuario, {
        foreignKey: 'id_criador'
      });
      Livro.belongsTo(models.Categoria, {
        foreignKey: 'id_categoria'
      });
      Livro.belongsTo(models.Autor, {
        foreignKey: 'id_autor'
      });
      
    }
  }
  Livro.init({
    titulo: DataTypes.STRING,
    qtnPagina: DataTypes.NUMBER,
    id_editora: DataTypes.NUMBER,
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