import { Component } from 'react'
import { connect } from 'react-redux'
import { init, clear } from '../actions/init'

interface Profile {
  firstName: string
  lastName: string
}

interface PreloadProps {
  token: string
  profile: Profile | null
  onInit: () => void
  onAuth: () => void
  onMain: () => void
  onClear: () => void
  onEditProfile: () => void
}

class Preload extends Component<PreloadProps> {
  componentDidMount() {
    const { token, profile, onInit, onAuth, onMain, onClear, onEditProfile }: PreloadProps = this.props

    if (!!token && !!profile) {
      onMain()
    } else if (!!token && !profile) {
      onEditProfile()
    } else if (!/^\/auth/.test(window.location.pathname)) {
      onAuth()
    }

    if (token && /^\/auth/.test(window.location.pathname)) {
      onInit()
    }
  }

  componentDidUpdate(prevProps: PreloadProps) {
    const { token, profile, onMain, onInit, onAuth, onEditProfile } = this.props

    if (prevProps.token && !token) {
      onAuth()
    }

    if (!prevProps.token && token && !profile) {
      onInit()
      onEditProfile()
    }

    if ((!prevProps.token && token && profile) || (token && prevProps.profile !== profile)) {
      onMain()
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

export default connect(
  state => ({
    token: state.security.token,
    profile: state.me.profile,
  }),
  (dispatch, { history }) => ({
    onClear: () => dispatch(clear()),
    onInit: () => dispatch(init()),
    onAuth: () => history.replace('/auth'),
    onMain: () => history.replace('/users'),
    onEditProfile: () => history.replace('/profile'),
  }),
)(Preload)
