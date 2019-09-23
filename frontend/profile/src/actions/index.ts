import * as profileActions from '../constants'
import { init } from '@frontend/dashboard/src/actions/init'
import gql from 'graphql-tag'

export const change = (field, value) => ({
  type: profileActions.change,
  field,
  value,
})

export const setEditing = isEditing => ({
  type: profileActions.setEditing,
  isEditing,
})

export const updateProfile = () => async (dispatch, getState, client) => {
  try {
    const { firstName, lastName } = getState().profile

    const { data } = await client.mutate({
      mutation: gql`
      mutation UpdateProfile($input: UpdateProfileInput!) {
        updateProfile(input: $input) {
          errors {
            firstName
            lastName
          }
        }
      }
    `,
      variables: {
        input: {
          firstName,
          lastName,
        },
      },
    })

    if (!data.updateProfile.errors) {
      dispatch(setEditing(false))
      dispatch(init())
    }
  } catch ({ graphQLErrors, networkError, message }) {}
}
