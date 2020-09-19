import React from 'react'
import axios from 'axios'
import CharacterContext from '../../utils/CharacterContext'
import TaskForm from '../../components/TaskForm'
import CharacterDisplay from '../../components/CharacterDisplay'

class Characters extends React.Component {
  state = {
    character: '',
    status: '',
    characters: [],
    inputChange: e => {
      this.setState({ [e.target.name]: e.target.value })
    },
    characterSubmit: e => {
      e.preventDefault()
      console.log(e)
      //this.setState({ [e.target.name]: e.target.value })
      axios.post(`/task`, {
        task: this.state.task,
        status: this.state.status
     })
        .then( ({data}) => {
          let arr = JSON.parse(JSON.stringify(this.state.tasks))
          arr.push(data)
          this.setState({ tasks: arr, task: '', status: ''  })
        })
    },
    deleteCharacter: _id => {
      console.log(_id)
      axios.delete(`/task/${_id}`,)
      .then( r => {
        axios.get('/tasks')
        .then( ({data}) => this.setState({ tasks: data }))
        console.log('data deleted')
        console.log(this.state)
      })
      .catch(e => console.error('cant delete', e))
    },
    getTasks: () => {
      console.log('getting tasks')
      axios.get(`/tasks`)
      .then (r =>{
        console.log('tasks recieved')
      })
      .catch(e => console.error('no task for you', e))
    }
  }

  componentDidMount() { // When the page loads grab the data from the database and update the tasks array
    axios.get('/characters')
      .then( ({data}) => this.setState({ characters: data }))
  }

  render () {
    return (
      <TaskContext.Provider value={this.state}>
          <TaskForm />
          <TaskDisplay />
      </TaskContext.Provider>
    )
  }
}

export default Characters