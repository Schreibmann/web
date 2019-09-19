import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AuthDesktop as Auth } from '@frontend/auth'
import { ListDesktop as Users } from '@frontend/users'
import { EditProfileDesktop as Profile } from '@frontend/profile'
import App from './App'

const Routes = () => (
  <Switch>
    <Route path='/auth' component={Auth} />
    <App>
      <Switch>
        <Route path='/users' component={Users} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </App>
  </Switch>
)

export default Routes
