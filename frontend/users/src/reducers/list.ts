import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'
import { User } from '../components/desktop/List'

const initialState = {
  rows: [],
  count: 0,
}

export default createReducer(initialState, {
  [actions.load]: (state, { list }) => ({ ...list }),
  [actions.clear]: () => initialState,
  [actions.sort]: (state, { sortKey }) => {
    const { rows } = state
    const getDeepValue = (deepObject: User, deepValueLiteral: string) => (
      deepValueLiteral.split('.').reduce((obj, key) => obj[key], deepObject)
    )

    const sortedUsers: User[] = rows.sort((first: User, next: User) => {
      if (getDeepValue(first, sortKey) > getDeepValue(next, sortKey)) return 1
      if (getDeepValue(first, sortKey) < getDeepValue(next, sortKey)) return -1
      return 0
    })

    return {
      ...state,
      rows: sortedUsers,
    }
  },
})
