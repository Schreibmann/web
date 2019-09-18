import { connect } from 'react-redux'
import { logout } from '@frontend/common/src/actions/security'
import { clear } from '../../actions/init'
import Header from '../../components/desktop/Header'

export default connect(
  state => {
    const { profile } = state.me // to prevent crash if profile = null
    return ({
      firstName: profile ? profile.firstName : 'unnamed',
      lastName: profile ? profile.lastName : 'user',
  })},
  dispatch => ({
    onLogout: () => {
      dispatch(logout())
      dispatch(clear())
    },
  }),
)(Header)
