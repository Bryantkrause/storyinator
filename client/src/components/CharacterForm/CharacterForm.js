import React from 'react'
import CharacterContext from '../../utils/CharacterContext'
import { Button, Form, Label, Input } from 'reactstrap'


const EnterForm = () => {
  return (
    <CharacterContext.Consumer>
      {
        ( { name, characterSubmit, inputChange, level, proficiency, speed, strength, dexterity, constitution, intelligence, wisdom, charisma} ) => (
        <Form>
          <Label htmlFor="name">name</Label>
          <Input type="text" placeholder="What's the name?" name="name" onChange={inputChange} value={name}/>
          <Label htmlFor="level">Level</Label>
          <Input type="number" placeholder="What level is the character?" name="level" onChange={inputChange} value={level}/>
          <Label htmlFor="proficiency">proficiency</Label>
          <Input type="number" placeholder="What proficiency is the character?" name="proficiency" onChange={inputChange} value={proficiency}/>
          <Label htmlFor="speed">speed</Label>
          <Input type="number" placeholder="What level is the character?" name="speed" onChange={inputChange} value={speed}/>
          <Label htmlFor="strength">strength</Label>
          <Input type="number" placeholder="What strength is the character?" name="strength" onChange={inputChange} value={strength}/>
          <Label htmlFor="dexterity">dexterity</Label>
          <Input type="number" placeholder="What dexterity is the character?" name="dexterity" onChange={inputChange} value={dexterity}/>
          <Label htmlFor="constitution">constitution</Label>
          <Input type="number" placeholder="What constitution is the character?" name="constitution" onChange={inputChange} value={constitution}/>
          <Label htmlFor="intelligence">intelligence</Label>
          <Input type="number" placeholder="What intelligence is the character?" name="intelligence" onChange={inputChange} value={intelligence}/>
          <Label htmlFor="wisdom">wisdom</Label>
          <Input type="number" placeholder="What wisdom is the character?" name="wisdom" onChange={inputChange} value={wisdom}/>
          <Label htmlFor="charisma">charisma</Label>
          <Input type="number" placeholder="What charisma is the character?" name="charisma" onChange={inputChange} value={charisma}/>
          <Button id="submit" className="btn" color="primary" onClick={characterSubmit}>Add Character</Button>
        </Form>
        )
      }
    </CharacterContext.Consumer>
  )
}

export default EnterForm