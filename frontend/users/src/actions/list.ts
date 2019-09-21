import gql from 'graphql-tag'
import * as actions from '../constants/list'
import { User } from '../components/desktop/List'

export const load = () => async (dispatch, getState, client) => {
  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Users {
          users {
            rows {
              id
              email
              profile {
                firstName
                lastName
              }
              registeredAt
              lastLogonAt
            }
            count
          }
        }
      `,
    })

    dispatch({
      type: actions.load,
      list: data.users,
    })
  } catch (e) {
    // some error handling here
    // tslint:disable-next-line:no-console
    console.log(e)
  }
}

export const clear = () => ({
  type: actions.clear,
})

export const sort = (field: string) => (dispatch, getState) => {
  const { list } = getState().users

  const getDeepValue = (deepObject: User, deepValueLiteral: string) => (
    deepValueLiteral.split('.').reduce((obj, key) => obj[key], deepObject)
  )

  const sortedUsers: User[] = list.rows.sort((first: User, next: User) => {
    if (getDeepValue(first, field) > getDeepValue(next, field)) return 1
    if (getDeepValue(first, field) < getDeepValue(next, field)) return -1
    return 0
  })

  list.rows = sortedUsers

  dispatch({
    type: actions.sort,
    list,
  })
}
