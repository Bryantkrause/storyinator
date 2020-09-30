import React from 'react'
import axios from 'axios'
import CharacterContext from '../../utils/CharacterContext'
import CharacterForm from '../../components/CharacterForm'
import CharacterDisplay from '../../components/CharacterDisplay'
import NavTabs from '../../components/NavBar'

class Characters extends React.Component {
  state = {
    character: '',
    level: '',
    name: '',
    proficiency: '',
    speed: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    characters: [],
    inputChange: e => {
      this.setState({ [e.target.name]: e.target.value })
    },
    characterSubmit: e => {
      e.preventDefault()
      console.log(e)
      //this.setState({ [e.target.name]: e.target.value })
      axios.post(`/character`, {
        character: this.state.character,
        level: this.state.level,
        name: this.state.name,
        proficiency: this.state.proficiency,
        speed: this.state.speed,
        strength: this.state.strength,
        dexterity: this.state.dexterity,
        constitution: this.state.constitution,
        intelligence: this.state.intelligence,
        wisdom: this.state.wisdom,
        charisma: this.state.charisma,
     })
        .then( ({data}) => {
          let arr = JSON.parse(JSON.stringify(this.state.characters))
          arr.push(data)
          this.setState({ characters: arr, character: '', name: ''  })
        })
    },
    deleteCharacter: _id => {
      console.log(_id)
      axios.delete(`/character/${_id}`,)
      .then( r => {
        axios.get('/characters')
        .then( ({data}) => this.setState({ characters: data }))
        console.log('data deleted')
        console.log(this.state)
      })
      .catch(e => console.error('cant delete', e))
    },
    getCharacters: () => {
      console.log('getting characters')
      axios.get(`/characters`)
      .then (r =>{
        console.log('characters recieved')
      })
      .catch(e => console.error('no character for you', e))
    }
  }

  componentDidMount() { // When the page loads grab the data from the database and update the characters array
    axios.get('/characters')
      .then( ({data}) => this.setState({ characters: data }))
  }

  render () {
    return (
      <CharacterContext.Provider value={this.state}>
          <NavTabs/>
          <CharacterForm />
          <CharacterDisplay />
      </CharacterContext.Provider>
    )
  }
}

export default Characters