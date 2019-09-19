import { createReducer } from '@utils/reducer'
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

export default createReducer(initialState, {
  [actions.load]: (state: User, { user }) => ({ ...state, ...user }),
  [actions.clear]: () => initialState,
})
