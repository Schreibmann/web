import { connect } from 'react-redux'
import { change, updateProfile } from '../../actions'
import ProfileDesktop from '../../components/desktop/Profile'

export default connect(
  state => ({
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    profile: state.me.profile,
  }),
  dispatch => ({
    onChangeFirstName: value => dispatch(change('firstName', value)),
    onChangeLastName: value => dispatch(change('lastName', value)),
    onUpdate: () => dispatch(updateProfile()),
  }),
)(ProfileDesktop)
