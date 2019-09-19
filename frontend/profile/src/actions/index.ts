import * as dashboardActions from '@frontend/dashboard/src/constants/me'
import * as profileActions from '../constants'
import gql from 'graphql-tag'

export const change = (field, value) => ({
  type: profileActions.change,
  field,
  value,
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

    if (data.updateProfile.errors) { // some error handling here
      const { errors } = data.updateProfile
      // tslint:disable-next-line:no-console
      console.log(errors)
    } else {
      const { me, profile } = getState()

      me.profile = profile

      dispatch({
        type: dashboardActions.load,
        user: me,
      })
    }
  } catch ({ graphQLErrors, networkError, message }) { // some error handling here
      // tslint:disable-next-line:no-console
      console.log(graphQLErrors)
  }
}
