import React, { createContext} from 'react'

const CharacterContext = createContext({
  name: '',
  level: '',
  proficiency: '',
  speed: '',
  initiative: '',
  ac: '',
  health: '',
  attackModifiers:{},
  race: '',
  age: '',
  abilityScore: {},
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