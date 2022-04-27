const axios = require('axios')
const mongoose = require('mongoose')
const { Digimon } = require('./models');

(async () => {
  console.log('beginning seed')
  const { data } = await axios.get('https://digimon-api.vercel.app/api/digimon')
  const digimonData = []

  for (let i = 0; i < data.length; i++) {
    digimonData.push({ name: data[i].name, img: data[i].img, level: data[i].level })
  }

  mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/digilist', { useNewUrlParser: true, useUnifiedTopology: true })
  await Digimon.insertMany(digimonData) // TODO error handling
  mongoose.disconnect()

  console.log('seed complete. disconnecting...')
})()
