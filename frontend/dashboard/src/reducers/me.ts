import { createReducer } from '@utils/reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as actions from '../constants/me'

interface Profile {
  firstName: string
  lastName: string
}

interface User {
  id: string
  email: string
  profile: Profile | null
  registeredAt?: string | null
  lastLogonAt?: string | null
}

const initialState = {
  id: '',
  email: '',
  profile: null,
}

const reducer = createReducer(initialState, {
  [actions.load]: (state: User, { user }) => {
    if (user.profile === null) {
      user.profile.firstName = 'nameless'
      user.profile.lastName = 'user'
    }
    return ({ ...state, ...user })
  },
  [actions.clear]: () => initialState,
})

export default persistReducer(
  {
    storage,
    key: 'user',
    keyPrefix: 'aunited',
    version: 1,
  },
  reducer
)
