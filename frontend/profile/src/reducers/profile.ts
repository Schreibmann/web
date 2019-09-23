import { createReducer } from '@utils/reducer'
import * as actions from '../constants'

const initialState = {
  isEditing: false,
  firstName: '',
  lastName: '',
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.setEditing]: (state, { isEditing }) => ({...state, isEditing }),
  [actions.clear]: () => initialState,
})
