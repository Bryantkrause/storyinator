import React from 'react'
import CharacterContext from '../../utils/CharacterContext'
import { Table } from 'reactstrap'

const CharacterDisplay = () => {

  return (
    <CharacterContext.Consumer>
      {
        ({characters, deleteCharacter}) => (
          <>
            <Table dark>
              <thead>
                <tr>
                  <th><h4>#</h4></th>
                  <th><h4>name:</h4></th>
                  <th><h4>level:</h4></th>
                  <th><h4>proficiency</h4></th>
                  <th><h4>speed</h4></th>
                  <th><h4>strength</h4></th>
                  <th><h4>dexterity</h4></th>
                  <th><h4>constitution</h4></th>
                  <th><h4>intelligence</h4></th>
                  <th><h4>wisdom</h4></th>
                  <th><h4>charisma</h4></th>
                  <th><h4>Delete</h4></th>
                </tr>
              </thead>
              <tbody>
                  {
                    characters.map( ( { _id, name, level,  proficiency, speed, strength, dexterity, constitution, intelligence, wisdom, charisma}, i) =>
                      <tr key={_id}>
                        <td>{i+1}</td>
                        <td>{name}</td>
                        <td>{level}</td>
                        <td>{proficiency}</td>
                        <td>{speed}</td>
                        <td>{strength}</td>
                        <td>{dexterity}</td>
                        <td>{constitution}</td>
                        <td>{intelligence}</td>
                        <td>{wisdom}</td>
                        <td>{charisma}</td>
                        <td><button onClick={() => deleteCharacter(_id)}>Delete </button></td>
                      </tr>
                    )
                  }
              </tbody>
            </Table>
          </>
        )
      }
    </CharacterContext.Consumer>
  )
}

export default CharacterDisplay
