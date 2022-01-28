const knex = require('../database')

module.exports = {
  async index(req, res, next) {
    try {
      const { title, user_id, page = 1, limit = 5 } = req.query

      const query = knex('musicas')
        .limit(limit)
        .offset((page - 1) * limit)

      const countObj = knex('musicas').count()

      if (title) {
        query.where({ title: title })
      }

      if (user_id) {
        query
          .where({ user_id })
          .join('artistas', 'artistas.id', '=', 'musicas.user_id')
          .select('musicas.*', 'artistas.username')
          .where('artistas.deleted_at', null)

        countObj.where({ user_id })
      }

      const [count] = await countObj

      res.header('X-Total-Count', count['count'])

      const results = await query

      return res.json(results)
    } catch (error) {
      next(error)
    }
  },
  async create(req, res, next) {
    try {
      const { title, user_id } = req.body

      await knex('musicas').insert({ title, user_id })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  },
  async update(req, res, next) {
    try {
      const { title, user_id } = req.body
      const { id } = req.params

      await knex('musicas').update({ title, user_id }).where({ id })

      return res.send()
    } catch (error) {
      next(error)
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params

      await knex('musicas').where({ id }).update('deleted_at', new Date())

      return res.send()
    } catch (error) {
      next(error)
    }
  },
}
