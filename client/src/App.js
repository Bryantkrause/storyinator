import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'
import Characters from './pages/Characters'
import Selection from './pages/Selection'

const App = () =>{
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
          <Characters/>
        </Route>

        <Route exact path="/Selection">
          <Selection/>
        </Route>



        </Switch>
      </Router>
    </div> 
  )
}

export default App;

