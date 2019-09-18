import gql from 'graphql-tag'
import * as actions from '../constants/me'

export const init = () => async (dispatch, getState, client) => {

  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Me {
          me {
            id
            email
            profile {
              firstName
              lastName
            }
            registeredAt
            lastLogonAt
          }
        }
      `,
    })

    const { me } = data

    dispatch({
      type: actions.load,
      user: me,
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
