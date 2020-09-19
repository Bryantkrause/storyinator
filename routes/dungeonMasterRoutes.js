const { DungeonMaster, User } = require('../models')

module.exports = app => {

  // GET all dungeonMaster
  app.get('/dm', (req, res) => {
    DungeonMaster.find()
      .populate('user')
      .then(dms => res.json(dms))
      .catch(e => console.error(e))
  })

    // GET one dungeonMaster
    app.get('/dm/:id', (req, res) => {
        DungeonMaster.findOne({ _id: req.params.id })
          .populate('user')
          .then(dms => res.json(dms))
          .catch(e => console.error(e))
      })

  // POST one dungeonMaster
  app.post('/dm', (req, res) => {
    DungeonMaster.create(req.body)
    .then( r => console.log(res.json(r)))
    .catch(e => console.error(e))

  })


    // update one dungeonMaster
    app.put('/dm/:id', (req, res) => {
      console.log("dungeonMaster put route hit")
      DungeonMaster.updateOne({ _id: req.params.id }, { $set: req.body })
      .then(({ _id }) => {
        User.updateOne({_id: req.body.user},
          {$push: {dungeonMaster: _id}
       })
         .then(() => res.sendStatus(200))
         .catch(e => console.error(e))
     })
     .catch(e => console.error(e))
 })

        // remove one dungeonMaster
        app.delete('/dm/:id', (req, res) => {
            DungeonMaster.deleteOne({ _id: req.params.id })
              .then(dm => res.json(dm))
              .catch(e => console.log(e))
      })
    }
