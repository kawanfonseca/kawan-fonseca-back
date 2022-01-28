sleep 30

cd /src
npm install

cd /src
npx knex migrate:rollback --all

cd /src
npx knex migrate:latest

cd /src
npx knex seed:run --specific 001_artistas.js

cd /src
npx knex seed:run --specific 002_musicas.js

cd /src
npm start