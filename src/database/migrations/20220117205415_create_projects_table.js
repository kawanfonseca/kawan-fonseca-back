exports.up = async (knex) =>
  knex.schema.createTable('musicas', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('release_date')
    table.longtext('description')

    // relacionamento
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('musicas')
      .notNullable()
      .onDelete('CASCADE')
    table.timestamps(true, true)
  })

exports.down = async (knex) => knex.schema.dropTable('musicas')
