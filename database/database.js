const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/digilist', { useNewUrlParser: true, useUnifiedTopology: true });

const digimonSchema = new mongoose.Schema({
	name: String,
	img: String,
	level: String,
  nickname: String
});

const Digimon = mongoose.model('Digimon', digimonSchema);

module.exports = {
  Digimon
}