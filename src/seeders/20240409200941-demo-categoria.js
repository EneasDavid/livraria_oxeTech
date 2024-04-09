'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        Id: 1,
        Categoria: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 2,
        Categoria: 'Suspense',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 3,
        Categoria: 'Ficção',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 4,
        Categoria: 'Contos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 5,
        Categoria: 'Poesia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 6,
        Categoria: 'Autoajuda',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 7,
        Categoria: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 8,
        Categoria: 'Fantasia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 9,
        Categoria: 'Terror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 10,
        Categoria: 'Biografia',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
