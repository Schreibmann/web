import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import security from '@frontend/common/src/reducers/security'
import auth from '@frontend/auth/src/reducers'
import users from '@frontend/users/src/reducers'
import profile from '@frontend/profile/src/reducers/profile'
import config from './config'
import locale from './locale'
import me from './me'

export default combineReducers({
  auth,
  config,
  locale,
  profile,
  me,
  router,
  security,
  users,
})
