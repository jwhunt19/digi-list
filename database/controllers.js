const { Digimon, SavedDigimon } = require('../database/models')

exports.findDigimon = (req, res) => {
  const { name } = req.params
  const regex = new RegExp(`^${name}$`, 'i')

  Digimon.find({ name: regex }, (err, results) => {
    if (err) res.json(err)
    res.json(results)
  })
}

exports.findAllDigimon = (req, res) => {
  Digimon.find({}, (err, results) => {
    if (err) res.json(err)
    res.json(results)
  })
}

exports.saveDigimon = (req, res) => {
  SavedDigimon.create(req.body, (err, obj) => {
    if (err) res.json(err)
    res.json(obj)
  })
}

exports.findSavedDigimon = (req, res) => {
  SavedDigimon.find({}, (err, results) => {
    if (err) res.json(err)
    res.json(results)
  })
}

exports.updateSavedDigimon = (req, res) => {
  SavedDigimon.findOneAndUpdate(req.body.name, { nickname: req.body.nickname }, (err, results) => {
    if (err) res.json(err)
    res.json(results)
  })
}

exports.deleteSavedDigimon = (req, res) => {
  SavedDigimon.findOneAndDelete(req.params.name, (err, results) => {
    if (err) res.json(err)
    res.json(results)
  })
}
