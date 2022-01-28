exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('artistas')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('artistas').insert([
        { username: 'Oasis' },
        { username: 'Pavement' },
        { username: 'Pink Floyd' },
      ])
    })
}
