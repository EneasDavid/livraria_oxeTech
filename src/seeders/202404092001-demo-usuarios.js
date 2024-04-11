'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios',[
      {
        nome:'Mariah Lins',
        senha:'123123123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        nome:'David Eneas',
        senha:'123senha',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        nome:'Gustavo Alexandre',
        senha:'senha123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        nome:'Ulpio Netto',
        senha:'123456789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        nome:'CORNO CORNO',
        senha:'123corno123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
