import { connect } from 'react-redux'
import { logout } from '@frontend/common/src/actions/security'
import { setEditing } from '@frontend/profile/src/actions'
import { clear as userClear } from '@frontend/dashboard/src/constants/me'
import { clear as profileClear } from '@frontend/profile/src/constants'
import Header from '../../components/desktop/Header'

export default connect(
  state => ({
      profile: state.me.profile,
  }),
  dispatch => ({
    onLogout: () => {
      dispatch(logout())
      dispatch({
        type: userClear,
      })
      dispatch({
        type: profileClear,
      })
    },
    onSetEditing: () => dispatch(setEditing(true))
  }),
)(Header)
