import { createReducer } from '@utils/reducer'

const initialState = {
  apiUrl: process.env.API_URL || 'https://gateway.examine.aunited.pro/graphql/login',
}

export default createReducer(initialState, {})
