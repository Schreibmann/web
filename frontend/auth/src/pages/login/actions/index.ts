import { auth } from '@frontend/common/src/constants/security'
import gql from 'graphql-tag'
import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const login = () => async (dispatch, getState, client) => {
  const { email, password } = getState().auth.login

  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token {
              token
              expiresIn
            }
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        email,
        password,
      },
    })

    const { login: { errors, token } } = data

    if (!errors && token) {
      dispatch({
        type: auth,
        ...token,
      })
    } else {
      dispatch({
        type: actions.setErrors,
        errors,
      })
    }
  } catch (e) {}
}
