'use strict';

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('autores', [
      {
        nome: 'Machado de Assis',
        nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'J.K. Rowling',
        nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Clarice Lispector',
        nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Jorge Amado',
        nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Jane Austen',
        nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Haruki Murakami',
        nacionalidade: 'Japão',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Jorge Luis Borges',
        nacionalidade: 'Argentina',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Stephen King',
        nacionalidade: 'Estados Unidos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Augusto Cury',
        nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Colleen Hoover',
        nacionalidade: 'Estados Unidos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Oscar Wilde',
        nacionalidade: 'Irlanda',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'William P. Young',
        nacionalidade: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Robert Bryndza',
        nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'George Orwell',
        nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Charles Bukowski',
        nacionalidade: 'Alemanha',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autores', null, {});
  }
};
