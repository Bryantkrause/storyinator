import React from 'react'
import CharacterContext from '../../utils/CharacterContext'
import { Button, Form, Label, Input } from 'reactstrap'


const EnterForm = () => {
  return (
    <CharacterContext.Consumer>
      {
        ( { name, characterSubmit, inputChange, level} ) => (
        <Form>
          <Label htmlFor="name">name</Label>
          <Input type="text" placeholder="What's the name?" name="status" onChange={inputChange} value={name}/>
          <Label htmlFor="level">Level</Label>
          <Input type="text" placeholder="What level is the character?" name="level" onChange={inputChange} value={level}/>
          <Button id="submit" className="btn" color="primary" onClick={characterSubmit}>Add Character</Button>
        </Form>
        )
      }
    </CharacterContext.Consumer>
  )
}

export default EnterForm