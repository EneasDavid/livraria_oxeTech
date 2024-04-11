'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('livros',[
    {
      Id: 1,
      IdCriador: 1, 
      Titulo: 'Dom Casmurro',
      QntPaginas: 200,
      IdAutor: 1,
      IdCategoria: 1,
      Id_Editora: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 2,
      IdCriador: 1,  
      Titulo: 'Memórias Póstumas de Brás Cubas',
      QntPaginas: 200,
      IdAutor: 1,
      IdCategoria: 1,
      Id_Editora: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 3,
      IdCriador: 1,   
      Titulo: 'Quincas Borbas',
      QntPaginas: 200,
      IdAutor: 1,
      IdCategoria: 1, 
      Id_Editora: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 4, 
      IdCriador: 1, 
      Titulo: 'Contos Fluminenses',
      QntPaginas: 150,
      IdAutor: 1,
      IdCategoria: 4,
      Id_Editora: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 5,
      IdCriador: 1, 
      Titulo: 'Histórias da Meia-Noite',
      QntPaginas: 170,
      IdAutor: 1,
      IdCategoria: 4,
      Id_Editora: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 6,
      IdCriador: 1, 
      Titulo: 'Perto do Coração Selvagem',
      QntPaginas: 160,
      IdAutor: 3,
      IdCategoria: 1,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 7,
      IdCriador: 1,  
      Titulo: 'A Hora da Estrela',
      QntPaginas: 120,
      IdAutor: 3,
      IdCategoria: 1,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 8,
      IdCriador: 1,  
      Titulo: 'Harry Potter e a Pedra Filosofal',
      QntPaginas: 300,
      IdAutor: 2,
      IdCategoria: 3, 
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 9,
      IdCriador: 1,  
      Titulo: 'Harry Potter e a Câmara Secreta',
      QntPaginas: 350,
      IdAutor: 2,
      IdCategoria: 3,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 10,
      IdCriador: 1,  
      Titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      QntPaginas: 400,
      IdAutor: 2,
      IdCategoria: 3,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 11,
      IdCriador: 1,  
      Titulo: 'Animais Fantásticos e onde habitam',
      QntPaginas: 128, 
      IdAutor: 2,
      IdCategoria: 3,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 12,
      IdCriador: 1,  
      Titulo: 'Harry Potter e o Cálice de Fogo',
      QntPaginas: 600,
      IdAutor: 2,
      IdCategoria: 3,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 13,
      IdCriador: 1,  
      Titulo: 'Harry Potter e a Ordem da Fênix',
      QntPaginas: 800,
      IdAutor: 2,
      IdCategoria: 3,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 14,
      IdCriador: 1,  
      Titulo: 'Harry Potter e o Enigma do Príncipe',
      QntPaginas: 700,
      IdAutor: 2,
      IdCategoria: 3,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 15,
      IdCriador: 1,  
      Titulo: 'Gabriela, Cravo e Canela',
      QntPaginas: 300,
      IdAutor: 4,
      IdCategoria: 1,
      Id_Editora: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 16,
      IdCriador: 1,  
      Titulo: 'Dona Flor e Seus Dois Maridos',
      QntPaginas: 400,
      IdAutor: 4,
      IdCategoria: 1,
      Id_Editora: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 17,
      IdCriador: 1,  
      Titulo: 'Tieta do Agreste',
      QntPaginas: 350,
      IdAutor: 4,
      IdCategoria: 1, 
      Id_Editora: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 18,
      IdCriador: 1,  
      Titulo: 'Orgulho e Preconceito',
      QntPaginas: 300,
      IdAutor: 5,
      IdCategoria: 1,
      Id_Editora: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 19,
      IdCriador: 1,  
      Titulo: 'A Abadia de Northanger',
      QntPaginas: 250,
      IdAutor: 5,
      IdCategoria: 1,
      Id_Editora: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 20,
      IdCriador: 1,  
      Titulo: 'Razão e Sensibilidade',
      QntPaginas: 350,
      IdAutor: 5,
      IdCategoria: 1,
      Id_Editora: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 21,
      IdCriador: 1,  
      Titulo: 'Kafka à Beira-Mar',
      QntPaginas: 500,
      IdAutor: 6,
      IdCategoria: 3, 
      Id_Editora: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 22,
      IdCriador: 1,  
      Titulo: 'Sputnik, Meu Amor',
      QntPaginas: 300,
      IdAutor: 6,
      IdCategoria: 1,
      Id_Editora: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 23,
      IdCriador: 1,  
      Titulo: '1Q84',
      QntPaginas: 1000,
      IdAutor: 6,
      IdCategoria: 3,
      Id_Editora: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 24,
      IdCriador: 1,  
      Titulo: 'O Amor é um Cão dos Diabos',
      QntPaginas: 304,
      IdAutor: 15,
      IdCategoria: 5,
      Id_Editora: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 25,
      IdCriador: 1,  
      Titulo: 'O Livro de Areia',
      QntPaginas: 200,
      IdAutor: 7,
      IdCategoria: 4,
      Id_Editora: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 26,
      IdCriador: 1,  
      Titulo: 'It: A Coisa',
      QntPaginas: 1500,
      IdAutor: 8,
      IdCategoria: 2,
      Id_Editora: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 27,
      IdCriador: 1,  
      Titulo: 'O Fervor de Buenos Aires', 
      QntPaginas: 150,
      IdAutor: 7,
      IdCategoria: 5,
      Id_Editora: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 28,
      IdCriador: 1,  
      Titulo: 'Carrie, a Estranha',
      QntPaginas: 300,
      IdAutor: 8,
      IdCategoria: 2,
      Id_Editora: 12,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 29,
      IdCriador: 1,  
      Titulo: 'Cemitério Maldito',
      QntPaginas: 400,
      IdAutor: 8,
      IdCategoria: 2,
      Id_Editora: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 30,
      IdCriador: 1,  
      Titulo: 'Um Caso Perdido',
      QntPaginas: 268,
      IdAutor: 10,
      IdCategoria: 1,
      Id_Editora: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 31,
      IdCriador: 1,  
      Titulo: 'Confesse',
      QntPaginas: 320,
      IdAutor: 10,
      IdCategoria: 1, 
      Id_Editora: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 32,
      IdCriador: 1,  
      Titulo: 'É assim que acaba',
      QntPaginas: 374,
      IdAutor: 10,
      IdCategoria: 1,
      Id_Editora: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 33,
      IdCriador: 1,  
      Titulo: 'O Vendedor de Sonhos',
      QntPaginas: 176,
      IdAutor: 9,
      IdCategoria: 3, 
      Id_Editora: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 34,
      IdCriador: 1,  
      Titulo: 'Nunca Desista de Seus Sonhos',
      QntPaginas: 140,
      IdAutor: 9,
      IdCategoria: 6, 
      Id_Editora: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 35,
      IdCriador: 1,  
      Titulo: 'Mulheres',
      QntPaginas: 291,
      IdAutor: 15,
      IdCategoria: 5,
      Id_Editora: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 36,
      IdCriador: 1,  
      Titulo: 'O Retrato de Dorian Gray',
      QntPaginas: 320,
      IdAutor: 11,
      IdCategoria: 1,
      Id_Editora: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 37,
      IdCriador: 1,  
      Titulo: 'O Príncipe Feliz e Outras Histórias',
      QntPaginas: 96,
      IdAutor: 11,
      IdCategoria: 4,
      Id_Editora: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 38,
      IdCriador: 1,  
      Titulo: 'Misto-quente',
      QntPaginas: 288,
      IdAutor: 15,
      IdCategoria: 5,
      Id_Editora: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 39,
      IdCriador: 1,  
      Titulo: 'A Cabana',
      QntPaginas: 240,
      IdAutor: 12,
      IdCategoria: 3,
      Id_Editora: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 40,
      IdCriador: 1,  
      Titulo: 'A Travessia',
      QntPaginas: 272,
      IdAutor: 12,
      IdCategoria: 3,
      Id_Editora: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 41,
      IdCriador: 1,  
      Titulo: 'A Garota no Gelo',
      QntPaginas: 396,
      IdAutor: 13,
      IdCategoria: 2,
      Id_Editora: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 42,
      IdCriador: 1,  
      Titulo: 'Uma Sombra na Escuridão',
      QntPaginas: 396,
      IdAutor: 13,
      IdCategoria: 2, 
      Id_Editora: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 43,
      IdCriador: 1,  
      Titulo: 'Sob Águas Escuras',
      QntPaginas: 352,
      IdAutor: 13,
      IdCategoria: 2,
      Id_Editora: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 44,
      IdCriador: 1,  
      Titulo: 'Você é insubstituível',
      QntPaginas: 45,
      IdAutor: 9,
      IdCategoria: 6,
      Id_Editora: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 45,
      IdCriador: 1,  
      Titulo: '1984',
      QntPaginas: 328,
      IdAutor: 14,
      IdCategoria: 3,
      Id_Editora: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 46,
      IdCriador: 1,  
      Titulo: 'A Revolução dos Bichos',
      QntPaginas: 112,
      IdAutor: 14,
      IdCategoria: 4,
      Id_Editora: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 47,
      IdCriador: 1,  
      Titulo: 'Moinhos de Vento',
      QntPaginas: 288,
      IdAutor: 14,
      IdCategoria: 3,
      Id_Editora: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 48,
      IdCriador: 1,  
      Titulo: 'Cartas na rua',
      QntPaginas: 192,
      IdAutor: 15,
      IdCategoria: 5,
      Id_Editora: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 49,
      IdCriador: 1,  
      Titulo: 'Verity',
      QntPaginas: 320,
      IdAutor: 10,
      IdCategoria: 1,
      Id_Editora: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
  },{
      Id: 50,
      IdCriador: 1,  
      Titulo: 'Todas as suas (im)perfeições',
      QntPaginas: 304,
      IdAutor: 10,
      IdCategoria: 1,
      Id_Editora: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
  }
  ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};
