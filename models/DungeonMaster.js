module.exports = (model, Schema) => {

    const DungeonMaster = new Schema({
      age: Number,
      campaign: String,
      encounter: String,
      region: String,
      title: {
        type: String,
        uppercase: true,
      },
      characters: [{ type: Schema.Types.ObjectId, ref: 'Characters' }],
      users: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'dmChange' } })
  
    return model('DungeonMaster', DungeonMaster)
  }