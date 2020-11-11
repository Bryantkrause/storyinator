import React from 'react'
import axios from 'axios'
import CharacterContext from '../../utils/CharacterContext'
import CharacterSelection from '../../components/CharacterSelection'
import NavTabs from '../../components/NavBar'

class Selection extends React.Component {
    state = {
      character: '',
      characters: [],
      level: '',
      inputChange: e => {
        this.setState({ [e.target.name]: e.target.value })
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
              <CharacterSelection />
          </CharacterContext.Provider>
        )
      }
    }
    
    export default Selection