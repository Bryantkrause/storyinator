import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'
import Characters from './pages/Characters'


const App = () =>{
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
          <Characters/>
        </Route>



        </Switch>
      </Router>
    </div> 
  )
}

export default App;

