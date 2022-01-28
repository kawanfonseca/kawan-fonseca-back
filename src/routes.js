const express = require('express')
const routes = express.Router()

const ArtistasController = require('./controllers/ArtistasController')
const MusicasController = require('./controllers/MusicasController')

routes
  // Artistas
  .get('/artistas', ArtistasController.index)
  .post('/artistas', ArtistasController.create)
  .put('/artistas/:id', ArtistasController.update)
  .delete('/artistas/:id', ArtistasController.delete)
  // Musicas
  .get('/musicas', MusicasController.index)
  .post('/musicas', MusicasController.create)
  .put('/musicas/:id', MusicasController.update)
  .delete('/musicas/:id', MusicasController.delete)

module.exports = routes
