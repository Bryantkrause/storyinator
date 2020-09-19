const { model, Schema } = require('mongoose')

module.exports = {
    Task: require('./Character.js')(model, Schema)
}