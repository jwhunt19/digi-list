const { Digimon } = require('../database/models')

function findDigimon (req, res) {
  const { name } = req.params
  const regex = new RegExp(`^${name}$`, 'i')

  Digimon.find({ name: regex }, (err, results) => {
    if (err) res.send(err)
    res.send(results)
  })
}

module.exports = {
  findDigimon
}
