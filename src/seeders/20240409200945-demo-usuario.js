'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios',[
      {
        Id:1,
        Nome:'Mariah Lins',
        Senha:'123123123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
          Id:2,
          Nome:'David Eneas',
          Senha:'123senha',
          createdAt: new Date(),
          updatedAt: new Date(),
      },{
          Id:3,
          Nome:'Gustavo Alexandre',
          Senha:'senha123456',
          createdAt: new Date(),
          updatedAt: new Date(),
      },{
          Id:4,
          Nome:'Ulpio Netto',
          Senha:'123456789',
          createdAt: new Date(),
          updatedAt: new Date(),
      },{
          Id:5,
          Nome:'CORNO CORNO',
          Senha:'123corno123',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
