import { Component } from 'react'
import { connect } from 'react-redux'
import { init } from '../actions/init'

export interface Profile {
  firstName: string
  lastName: string
}

interface PreloadProps {
  userId: any
  token: string
  profile: Profile | null
  onInit: () => void
  onAuth: () => void
  onMain: () => void
}

class Preload extends Component<PreloadProps> {
  componentDidMount() {
    const { token, onInit, onAuth, onMain }: PreloadProps = this.props

    if (!token && !/^\/auth/.test(window.location.pathname)) {
      onAuth()
    } else if (token && /^\/auth/.test(window.location.pathname)) {
      onInit()
    } else if (token) {
      onMain()
    }
  }

  componentDidUpdate(prevProps: PreloadProps) {
    const { token, onMain, onInit, onAuth, profile } = this.props

    if (!prevProps.token && token) {
      onInit()
      onMain()
    }

    if (prevProps.profile && profile) {
      onMain()
    }

    if (prevProps.token && !token) {
      onAuth()
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
    onInit: () => dispatch(init()),
    onAuth: () => history.replace('/auth'),
    onMain: () => history.replace('/users'),
  }),
)(Preload)
