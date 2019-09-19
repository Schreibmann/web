import { createReducer } from '@utils/reducer'
import * as actions from '../constants'

const initialState = {
  firstName: '',
  lastName: '',
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.clear]: () => initialState,
})
