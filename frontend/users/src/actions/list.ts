import gql from 'graphql-tag'
import * as actions from '../constants/list'

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
