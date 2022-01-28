# Pré-Requisitos
- Docker

# Dependências usadas
- node
- mysql
- knex
- express
- cors

Para executar o server da aplicação, basta utilizar o seguinte comando:
docker-compose up -d

O sistema está com um sleep na criação dos seeds, para certificar que finalize a criação da database antes da tentativa de popular a mesma.

Certifique-se que as portas utilizadas pelo sistema não estão ocupadas antes de iniciar o sistema (3306, 8080 e 8081)