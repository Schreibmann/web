import { connect } from 'react-redux'
import { lifecycle } from 'recompose'
import { load, sort } from '../../actions/list'
import List from '../../components/desktop/List'

const enhance = lifecycle({
  componentDidMount() {
    const { isProfileEditing, onSetProfileEditing, onLoad } = this.props
    if (isProfileEditing) {
      onSetProfileEditing()
    } else onLoad()
  },
})

export default connect(
  state => ({
    rows: state.users.list.rows,
    isProfileEditing: state.profile.isEditing,
  }),
  (dispatch, {history}) => ({
    onLoad: () => dispatch(load()),
    onSelect: ({ value }) => dispatch(sort(value)),
    onSetProfileEditing: () => history.replace('/profile'),
  }),
)(enhance(List))
