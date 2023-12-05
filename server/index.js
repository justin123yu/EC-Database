require('dotenv').config() // Secures variables
const PORT =  8080;
const express = require('express') // Backend App (server)
const cors = require('cors') // HTTP headers (enable requests)

// initialize app
const app = express()

// middlewares
app.use(cors({origin: '*'}))
app.use(express.json({extended: true})) // body parser
app.use(express.urlencoded({extended: false})) // url parser

// error handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send()
  next()
})

const pet = require('./routes/Pets');
const staff = require('./routes/Staff');
const adopter = require('./routes/Adopters');

// routes
app.use('/api/pet', pet);
app.use('/api/staff', staff);
app.use('/api/adopter', adopter);
app.listen(PORT, () => {
  console.log(`✅ Server is listening on port: ${PORT}`)
})
