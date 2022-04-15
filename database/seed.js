const axios = require('axios')
const mongoose = require('mongoose')
const { Digimon } = require('./database')

const seedDigimon = async () => {
  console.log('beginning seed')
	const { data } = await axios.get('https://digimon-api.vercel.app/api/digimon');

  for (let i = 0; i < data.length; i++) {
    await Digimon.create({
      name: data[i].name,
      img: data[i].img,
      level: data[i].level,
      nickname: ''
    }, (err, digimon) => {
      if (err) return err
    })
  }

  console.log('seed complete. disconnecting...')
};

seedDigimon();
setTimeout(() => mongoose.disconnect(), 5000);