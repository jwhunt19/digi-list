import axios from 'axios';
import mongoose from 'mongoose';
import Digimon from './database.js';

const seedDigimon = async () => {
  console.log('beginning seed')
	const { data } = await axios.get('https://digimon-api.vercel.app/api/digimon');

  for (let i = 0; i < data.length; i++) {
    await Digimon.create({
      name: data[i].name,
      img: data[i].img,
      level: data[i].level
    }, (err, digimon) => {
      if (err) return err
    })
  }

  console.log('seed complete. disconnecting...')
};

await seedDigimon();
setTimeout(() => mongoose.disconnect(), 5000);