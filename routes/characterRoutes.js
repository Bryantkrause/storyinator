const { Character } = require('../models')

module.exports = app => {
  app.post('/characters', (req, res) =>{
    Character.create(req.body)
    .then( response => res.json(response) )
    .catch(e => console.error(e))
  })
  app.get('/characters', (req, res) => {
    Character.find()
    .then(character => res.json(character))
    .catch(e => console.error(e))
  })
  app.get('/character/:id', (req, res) => {
    Character.findOne({ _id: req.params.id })
    .then(character => res.json(character))
    .catch(e => console.error(e))
  })
  app.delete('/characters/:id', (req, res) => {
    Character.deleteOne( { _id: req.params.id } ) // Get the row of the task of the ID.
      .then( response => res.json(response) )
      .catch(e => console.error(e))
  })
  app.put('/characters/:id', (req, res) => {
    Character.updateOne({ _id: req.params.id}, { $set: req.body})
      .then( response => res.json(response) )
      .catch(e => console.error(e))
  })
}