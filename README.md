# livraria_oxeTech
 
|Participantes|Curso|Função no porjeto|
| -------| --------------------- | --------- |
|Enéas |  Ciência da computaçao | Back End |
|Mariah |  Engenharia da Ciência | Database Administrator |
|Gustavo |  Engenharia da Ciência | Front End |

Este projeto tem como objetivo a construção de uma livraria utilizando a arquitetura MVC (Model-View-Controller) com JavaScript, integrado ao framework Express e Sequelize (ORM que auxilia a criação de projetos seguindo a arquitetura MVC através de uma integração simplificada com o banco de dados e o back end).

### Funcionalidades Previstas
> Até o presente momento foram apenas definidas funcionalidades de CRUD (Create, Read, Update, Delete) em todas as entidades existentes no banco de dados, sendo elas:
> - Livro
> - Autor
> - Usuario  

### Requisitos funcionais do Projeto 
> Os requisitos funcionais do projeto consistem em implementar operações de CRUD (Create, Read, Update, Delete) para as entidades mencionadas acima. Isso inclui a capacidade de criar, ler, atualizar e excluir registros de cada entidade.

### Tecnologias Utilizadas
> - JavaScript:
> > Linguagem de programação utilizada tanto no front-end quanto no back-end.
> - Express:
> > Framework web para Node.js, utilizado para facilitar a criação de APIs RESTful.
> - Sequelize:
> > ORM (Object-Relational Mapping) utilizado para mapear objetos JavaScript para modelos de banco de dados relacionais.

### Como Contribuir
> - Se você deseja contribuir para este projeto, siga os passos abaixo:
```
git clone https://github.com/EneasDavid/livraria_oxeTech
```
> - Clonar o repositorio
```
npm run dev
```
> - Para inicializar o projeto e deixar ele rodadndo
- CRIANDO MODELOS
- NOTA: lembre-se de adicionar o tableName:"nomeTableNoPlural"

```
npx sequelize-cli model:generate --name Autor --attributes nome:string,nacionalidade:string
```
> - Para criar um model de autor

```
npx sequelize-cli model:generate --name Categoria --attributes categoria:string
```
> - Para criar um model de categoria

```
npx sequelize-cli model:generate --name Usuario --attributes nome:string,senha:string
```
> - Para criar um model de usuario

```
npx sequelize-cli model:generate --name Editora --attributes nomeFantasia:string
```
> - Para criar um model de Editora

```
npx sequelize-cli model:generate --name Livro --attributes titulo:string,qtnPagina:number,id_Editora:number,id_criador:number,id_categoria:number,id_autor:number
```
> - Para criar um model de livro

- POPULANDO O BANCO
```
npx sequelize-cli seed:generate --name demo-autor
```
> - Para criar uma seed de autor
```
npx sequelize-cli seed:generate --name demo-categoria
```
> - Para criar uma seed de categoria
```
npx sequelize-cli seed:generate --name demo-usuario
```
> - Para criar uma seed de usuario
```
npx sequelize-cli seed:generate --name demo-editora
```
> - Para criar uma seed de editora
```
npx sequelize-cli seed:generate --name demo-livro
```
> - Para criar uma seed de livro

```
npx sequelize-cli db:seed:all
```
> - Para subir todas as informações 
