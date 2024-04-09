'use strict';

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('autores', [
      {
        Id: 1,
        Nome: 'Machado de Assis',
        Nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 2,
        Nome: 'J.K. Rowling',
        Nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 3,
        Nome: 'Clarice Lispector',
        Nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 4,
        Nome: 'Jorge Amado',
        Nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 5,
        Nome: 'Jane Austen',
        Nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 6,
        Nome: 'Haruki Murakami',
        Nacionalidade: 'Japão',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 7,
        Nome: 'Jorge Luis Borges',
        Nacionalidade: 'Argentina',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 8,
        Nome: 'Stephen King',
        Nacionalidade: 'Estados Unidos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 9,
        Nome: 'Augusto Cury',
        Nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 10,
        Nome: 'Colleen Hoover',
        Nacionalidade: 'Estados Unidos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 11,
        Nome: 'Oscar Wilde',
        Nacionalidade: 'Irlanda',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 12,
        Nome: 'William P. Young',
        Nacionalidade: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 13,
        Nome: 'Robert Bryndza',
        Nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 14,
        Nome: 'George Orwell',
        Nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 15,
        Nome: 'Charles Bukowski',
        Nacionalidade: 'Alemanha',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autores', null, {});
  }
};
