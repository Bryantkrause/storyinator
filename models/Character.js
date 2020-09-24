module.exports = (model, Schema) => {
    const Character = new Schema({
      name: String,
      level: Number,
      proficiency: Number,
      speed: Number,
      initiative: Number,
      ac: Number,
      health: Number,
      damage: Number,
      attackModifier: Object,
      race: String,
      age: Number,
      strength: Number,
      dexterity: Number,
      constitution: Number,
      intelligence: Number,
      wisdom: Number,
      charisma: Number,
      color: String,
      user: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })
  
    return model('Character', Character)
  }