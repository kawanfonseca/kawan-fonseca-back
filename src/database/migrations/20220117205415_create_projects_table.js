const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex => knex.schema.createTable('musicas', table =>{
    table.increments('id')
    table.text('title')
    table.text('release_date')
    table.text('description')

    // relacionamento
    table.integer('user_id')
        .references('musicas.id')
        .notNullable()
        .onDelete('CASCADE')


    table.timestamps(true, true)
}).then(() => knex.raw(onUpdateTrigger('musicas')))

exports.down = async knex => knex.schema.dropTable('musicas');
