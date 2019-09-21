import gql from 'graphql-tag'
import * as userActions from '../constants/me'
import { change } from '@frontend/profile/src/constants'

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
      type: userActions.load,
      user: me,
    })

    dispatch({
      type: change,
      field: 'firstName',
      value: me.profile.firstName,
    })

    dispatch({
      type: change,
      field: 'lastName',
      value: me.profile.lastName,
    })

  } catch (e) {
    // some error handling here
    // tslint:disable-next-line:no-console
    console.log(e)
  }
}

export const clear = () => ({
  type: userActions.clear,
})
