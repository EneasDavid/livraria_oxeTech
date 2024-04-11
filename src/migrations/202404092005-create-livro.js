'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      qtnPagina: {
        type: Sequelize.NUMBER
      },
      id_editora: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'editora', key: 'id' }
      },
      id_categoria: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'categoria', key: 'id' }
      },
      id_criador: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'criador', key: 'id' }
      },      
      id_autor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'autor', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  }
};