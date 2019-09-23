import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Layout } from '@ui/layout'
import { Header as HeaderBase } from '@ui/header'
import { Space } from '@ui/text'
import { Link, RouteLink } from '@ui/link'
import messages from '../../messages'
import { Profile } from '../../containers/Preload';

interface Props {
  profile?: Profile | null
  intl: InjectedIntl
  onLogout: () => void
  onSetEditing: () => void
}

const Header = ({ profile, intl, onLogout, onSetEditing }: Props) => (
  <HeaderBase>
    <Layout basis='10%' />
    <RouteLink onClick={onSetEditing} to='/profile' color='ebony' hoverColor='lightGray'>
      {profile && profile.firstName}
      <Space count={3}/>
      {profile && profile.lastName}
    </RouteLink>
    <Layout grow={1} />
    <Link onClick={onLogout} size='s' weight='medium' hoverColor='blueBayoux'>
      {intl.formatMessage(messages.exit)}
    </Link>
    <Layout basis='10%' />
  </HeaderBase>
)

export default injectIntl(Header)
