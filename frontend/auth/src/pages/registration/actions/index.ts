import gql from 'graphql-tag'
import { login } from '../../login/actions'
import { setEditing } from '@frontend/profile/src/actions'
import * as loginActions from '../../login/constants'
import * as registrationActions from '../constants'

export const change = (field, value) => ({
  type: registrationActions.change,
  field,
  value,
})

export const setErrors = errors => ({
  type: registrationActions.setErrors,
  errors,
})

export const clear = () => ({
  type: registrationActions.clear,
})

export const register = () => async (dispatch, getState, client) => {
  try {
    const { email, password } = getState().auth.registration

    const { data } = await client.mutate({
      mutation: gql`
      mutation Register($input: RegisterUserInput!) {
        register(input: $input) {
          errors {
            email
            password
          }
        }
      }
    `,
      variables: {
        input: {
          email,
          password,
        },
      },
    })

    if (data.register.errors) {
      const { errors } = data.register
      dispatch(setErrors(errors))
    } else {
      dispatch({
        type: loginActions.change,
        field: 'email',
        value: email,
      })
      dispatch({
        type: loginActions.change,
        field: 'password',
        value: password,
      })
      dispatch(login())
      dispatch(setEditing(true))
    }
  } catch ({ graphQLErrors }) {
      dispatch(setErrors(graphQLErrors))
  }
}
