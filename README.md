# Pré-Requisitos
- PostgreSQL
- Node

# Dependências usadas
- pg
- knex
- express
- cors

Após instalar o PostgreSQL, você deve criar uma database e configurar seus dados no arquivo server/knexfile.js
Dados a serem configurados no arquivo:
- database
- user
- password

Com isso, os seguintes comandos devem ser executados pelo terminal de comando na pasta server
1 - npm install
2 - npm knex migrate:latest
3 - npm knex seed:run --specific 001_artistas.js
4 - npm knex seed:run --specific 002_musicas.js
O primeiro comando instalará os pacotes necessários (estão listados no arquivo package.json)
O segundo comando criará as tabelas e campos usados no projeto
O terceiro e quarto comando popularão as tabelas com dados
Após isso, você deverá abrir o terminal de comando na pasta client
Para iniciar o processo, você deve utilizar o comando npm start.