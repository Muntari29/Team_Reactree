import { Route, Switch } from 'react-router-dom'
import IntroPage from './pages/IntroPage'
import React from 'react'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
        <Route path="/main" exact></Route>
        <Route path="/main/:id">
          <h1>Main/id</h1>
        </Route>
        <Route path="/feed" exact>
          <h1>Feed</h1>
        </Route>
        <Route path="/feed/:id">
          <h1>Feed/id</h1>
        </Route>
        <Route path="/mytree">
          <h1>MyTree</h1>
        </Route>
        <Route path="/settings">
          <h1>Settings</h1>
        </Route>
        <Route path="*">
          <h1>NotFound</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App
