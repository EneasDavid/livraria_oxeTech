'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });
      Livro.belongsTo(models.Autor, {
        foreignKey: 'autor_id'
      });
      Livro.belongsTo(models.Editora, {
        foreignKey: 'editora_id'
      });
      Livro.belongsTo(models.Usuario, {
        foreignKey: 'id_criador'
      });
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