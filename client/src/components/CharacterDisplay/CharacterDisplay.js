import React from 'react'
import CharacterContext from '../../utils/CharacterContext'
import { Table } from 'reactstrap'

const CharacterkDisplay = () => {

  return (
    <CharacterContext.Consumer>
      {
        ({characters, deleteCharacter}) => (
          <>
            <Table dark>
              <thead>
                <tr>
                  <th><h4>#</h4></th>
                  <th><h4>character</h4></th>
                  <th><h4>name:</h4></th>
                  <th><h4>Created At:</h4></th>
                  <th><h4>Delete</h4></th>
                </tr>
              </thead>
              <tbody>
                  {
                    characters.map( ( { _id, character, name, createdAt}, i) =>
                      <tr key={_id}>
                        <td>{i+1}</td>
                        <td>{character}</td>
                        <td>{name}</td>
                        <td>{createdAt}</td>
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

export default CharacterkDisplay
