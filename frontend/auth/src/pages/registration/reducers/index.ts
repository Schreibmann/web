import { createReducer } from '@utils/reducer'
import * as actions from '../constants'

interface Errors {
  email?: string
  password?: string
}

interface State {
  email: string
  password: string
  confirmPassword: string
  errors: Errors
}

const initialState: State = {
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({
    ...state,
    [field]: value,
    errors: {
      ...state.errors,
      [field]: '',
    },
  }),
  [actions.setErrors]: (state, { errors }) => {
    if (errors.hasOwnProperty(0)) {
      const _errors = {}
      errors[0].message.message.forEach(entry => {
        _errors[entry.property] = Object.values(entry.constraints).join('\n')
      })
      return ({ ...state, errors: _errors })
    } else return ({ ...state, errors })
  },
  [actions.clear]: () => initialState,
})
