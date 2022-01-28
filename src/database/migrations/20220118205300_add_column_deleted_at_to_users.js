exports.up = (knex) =>
  knex.schema.alterTable('artistas', (table) => {
    table.timestamp('deleted_at').nullable()
  })

exports.down = (knex) =>
  knex.schema.alterTable('artistas', (table) => {
    table.dropColumn('deleted_at')
  })
