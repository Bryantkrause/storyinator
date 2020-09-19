const { Character, User } = require('../models')

module.exports = app => {

  // GET all characters
  app.get('/characters', (req, res) => {
    console.log('getting them characters')
    Character.find()
      // .populate('user')
      .then(characters => res.json(characters))
      .catch(e => console.error(e))
  })

    // GET one character
    app.get('/character/:id', (req, res) => {
        Character.findOne({ _id: req.params.id })
          .populate('user')
          .then(characters => res.json(characters))
          .catch(e => console.error(e))
      })

  // POST one character
  app.post('/character', (req, res) => {
    Character.create(req.body)
      .then(({ _id }) => {
        User.updateOne({_id: req.body.user},
           {$push: {character: _id}
        })
          .then(() => res.sendStatus(200))
          .catch(e => console.error(e))
      })
      .catch(e => console.error(e))
  })


    // update one character
    app.put('/characters/:id', (req, res) => {
      console.log("character put route hit")
        Character.updateOne({ _id: req.params.id }, { $set: req.body })
        .then( r => console.log(res.json(r)))
        .catch(e => console.log(e))
    })

        // remove one character
        app.delete('/characters/:id', (req, res) => {
          Character.deleteOne({ _id: req.params.id })
              .then(character => res.json(character))
              .catch(e => console.log(e))
      })
    }
