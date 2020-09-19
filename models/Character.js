module.exports = (model, Schema) => {
    const Character = new Schema({
        task: String,
        amount: Number,
        status: String
    })
    Task.plugin(require('mongoose-timestamp'))
    return model('Character', Character)
}