'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros', [
      {
        titulo: 'Dom Casmurro',
        qtnPagina: 200,
        id_editora: 1,
        id_categoria: 1,
        id_criador: 2,
        id_autor: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Memórias Póstumas de Brás Cubas',
        qtnPagina: 200,
        id_editora: 1,
        id_categoria: 1,
        id_criador: 2,
        id_autor: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Quincas Borbas',
        qtnPagina: 200,
        id_editora: 1,
        id_categoria: 1,
        id_criador: 1,
        id_autor: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};
