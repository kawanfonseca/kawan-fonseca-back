const { onUpdateTrigger } = require('../../../knexfile')

exports.up = knex => knex.schema.createTable('artistas', table =>{
      table.increments('id')
      table.text('username').unique().notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
  }).then(() => knex.raw(onUpdateTrigger('artistas')))

exports.down = (knex) => knex.schema.dropTable('artistas');
