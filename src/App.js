import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ClubList from './components/ClubList'
import ClassList from './components/ClassList'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/classes/:clubId'>
          <ClassList />
        </Route>
        <Route path='/' >
          <ClubList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
