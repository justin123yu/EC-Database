require('dotenv').config() // Secures variables
const {PORT} = require('./constants')
const express = require('express') // Backend App (server)
const cors = require('cors') // HTTP headers (enable requests)
const {ORIGIN} = require("./constants/");

// initialize app
const app = express()

// middlewares
app.use(cors({origin: ORIGIN}))
app.use(express.json({extended: true})) // body parser
app.use(express.urlencoded({extended: false})) // url parser

// error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send()
  next()
})

// routes
app.use('/api', require('./routes/database'))
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port: ${PORT}`)
})
