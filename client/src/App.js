import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route
} from 'react-router-dom'
import Tasks from './pages/Tasks'
import Page2 from './pages/page2'

const App = () =>{
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
          <Tasks/>
        </Route>

        <Route path="/page2">
          <Page2/>
        </Route>

        </Switch>
      </Router>
    </div> 
  )
}

export default App;
