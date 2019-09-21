import { connect } from 'react-redux'
import { logout } from '@frontend/common/src/actions/security'
import { clear as userClear } from '@frontend/dashboard/src/constants/me'
import { clear as profileClear } from '@frontend/profile/src/constants'
import Header from '../../components/desktop/Header'

export default connect(
  state => {
    const { profile } = state.me // to prevent crash if profile = null
    return ({
      firstName: profile ? profile.firstName : 'nameless',
      lastName: profile ? profile.lastName : 'user',
  })},
  dispatch => ({
    onLogout: () => {
      dispatch({
        type: userClear,
      })
      dispatch({
        type: profileClear,
      })
      dispatch(logout())
    },
  }),
)(Header)
