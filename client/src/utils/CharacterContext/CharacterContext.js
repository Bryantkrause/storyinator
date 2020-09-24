import React, { createContext} from 'react'

const CharacterContext = createContext({
  name: '',
  level: '',
  proficiency: '',
  speed: '',
  initiative: '',
  ac: '',
  health: '',
  attackModifier:{},
  race: '',
  age: '',
  strength: '',
  dexterity: '',
  constitution: '',
  intelligence: '',
  wisdom: '',
  charisma: '',
  color: '',
  status: '',
  character: '',
  characters: [],
  handleInputChange: () => {},
  handleAddChar: () => {},
  handleToggleChar: () => {},
  handleRemoveChar: () => {}
})

export default CharacterContext