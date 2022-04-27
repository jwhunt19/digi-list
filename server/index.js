const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/digilist', { useNewUrlParser: true, useUnifiedTopology: true })

const { findDigimon, findAllDigimon, saveDigimon, findSavedDigimon, updateSavedDigimon, deleteSavedDigimon } = require('../database/controllers')

const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

// Digimon Database Routes

app.get('/digimon/:name', findDigimon)

app.get('/digimon', findAllDigimon)

// Saved Digimon Database Routes

app.post('/save', saveDigimon)

app.get('/saved', findSavedDigimon)

app.patch('/update', updateSavedDigimon)

app.delete('/delete/:name', deleteSavedDigimon)

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`)
})
