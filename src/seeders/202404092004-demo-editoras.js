'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('editoras',[
      {
        nomeFantasia: 'Ateliê Editorial',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Martins Fontes',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Rocco',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Grupo Companhia das Letras',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Grupo Editorial Record',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Martin Claret',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Alfaguara',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Casa das Letras',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'L&PM',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Suma',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Emece',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Objetiva',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Editorial Record Ltda',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Planeta',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Sextante',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Editora Arqueiro',
        createdAt: new Date(),
        updatedAt: new Date(),
    },{
        nomeFantasia: 'Editora Gutenberg',
        createdAt: new Date(),
        updatedAt: new Date(),
    }
     ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('editoras', null, {});
  }
};
