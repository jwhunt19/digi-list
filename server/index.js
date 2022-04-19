const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/digilist', { useNewUrlParser: true, useUnifiedTopology: true })

const { findDigimon } = require('../database/controllers')

const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/digimon/:name', findDigimon)

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`)
})
