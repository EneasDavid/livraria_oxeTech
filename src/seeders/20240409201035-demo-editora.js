'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('editoras',[
      {
        Id: 1,
        Nome: 'Ateliê Editorial',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 2,
        Nome: 'Martins Fontes',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 3,
        Nome: 'Rocco',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 4,
        Nome: 'Grupo Companhia das Letras',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 5,
        Nome: 'Grupo Editorial Record',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 6,
        Nome: 'Martin Claret',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 7,
        Nome: 'Alfaguara',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 8,
        Nome: 'Casa das Letras',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 9,
        Nome: 'L&PM',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 10,
        Nome: 'Suma',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 11,
        Nome: 'Emece',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 12,
        Nome: 'Objetiva',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 13,
        Nome: 'Editorial Record Ltda',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 14,
        Nome: 'Planeta',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 15,
        Nome: 'Sextante',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 16,
        Nome: 'Editora Arqueiro',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        Id: 17,
        Nome: 'Editora Gutenberg',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
     ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('editoras', null, {});
  }
};
