module.exports = (model, Schema) => {
    const User = new Schema({
      name: String,
      age: Number,
      neckLength: Number,
      color: String,
      character: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
      dungeonMaster: { type: Schema.Types.ObjectId, ref: 'DungeonMaster' }
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'userChange' } })
  
    return model('User', User)
  }