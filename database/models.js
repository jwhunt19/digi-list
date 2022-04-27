const mongoose = require('mongoose')

const digimonSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  img: String,
  level: String
})

const savedDigimonSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  img: String,
  level: String,
  nickname: {
    type: String,
    unique: true
  }
})

const Digimon = mongoose.model('Digimon', digimonSchema)
const SavedDigimon = mongoose.model('Saved', savedDigimonSchema)

module.exports = {
  Digimon, SavedDigimon
}
