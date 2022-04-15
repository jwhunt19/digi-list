const express = require('express')
const path = require('path');

const { Digimon } = require('../database/database');

const PORT = 3000;
const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/digimon/:name', (req, res) => {
  const { name } = req.params
  const regex = new RegExp(`^${name}$`, 'i')
  Digimon.find({name:  regex}, (err, results) => {
    if (err) res.status(500).send(err)
    res.send(results)
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});