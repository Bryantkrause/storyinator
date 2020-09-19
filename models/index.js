const { model, Schema } = require('mongoose')

module.exports = {
    User: require('./User.js')(model, Schema),
    DungeonMaster: require('./DungeonMaster.js')(model, Schema),
    Character: require('./Character.js')(model, Schema)
}