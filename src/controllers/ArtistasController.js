const knex = require("../database");

module.exports = {
  async index(req, res) {
    try {
      const { username, page = 1 } = req.query;

      const query = knex("artistas")
        .limit(5)
        .offset((page - 1) * 5);

      if(username){
        query.whereILike('username', `%${username}%`)
      }

      const results = await query;

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const { username } = req.body;

      await knex("artistas").insert({ username });

      return res.status(201).send()
    } catch (error) {
      next(error);
    }
  },
  async update(req,res,next){
    try{
      const { username } = req.body;
      const { id } = req.params;

      await knex('artistas')
        .update({ username })
        .where({ id })

      return res.send()
    }
    catch(error){
      next(error)
    }
  },
  async delete(req,res,next) {
    try{
      const { id } = req.params

      await knex('artistas')
        .where({id})
        .update('deleted_at', new Date())
        
      return res.send()
    }catch(error){
      next(error)
    }
  }
};
