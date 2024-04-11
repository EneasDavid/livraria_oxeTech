'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorias', [
      {
        categoria: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Suspense',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Ficção',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Contos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Poesia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Autoajuda',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Fantasia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Terror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoria: 'Biografia',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
