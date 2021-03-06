const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// CORS
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  app.use(cors())
  next()
})

// notFound
app.use((_req, _res, next) => {
  const error = new Error('Not Found')

  error.status = 404
  next(error)
})

// catch all
app.use((error, _req, res) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

// eslint-disable-next-line no-console
app.listen(8080, () => console.log('Server is running'))
