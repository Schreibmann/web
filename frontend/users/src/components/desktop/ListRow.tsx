import { Profile } from '@frontend/dashboard/src/containers/Preload'
import { Layout, Row } from '@ui/layout'
import { Space, Text } from '@ui/text'
import React, { FC, Fragment } from 'react'
import { InjectedIntl, injectIntl } from 'react-intl'
import messages from '../../messages'

export interface ListRowProps {
  key?: any
  email?: string
  profile?: Profile | null
  registeredAt?: string | null
  lastLogonAt?: string | null
  intl?: InjectedIntl
}

const ListRow: FC<ListRowProps> = ({ profile, email, registeredAt, lastLogonAt, intl }: ListRowProps) => (
  <Fragment>
    <Row>
      <Layout basis='10%' />
      <Layout basis={8} />
      <Layout basis={280}>
        <Text size='s'>
          {profile && profile.firstName || 'nameless'}
          <Space />
          {profile && profile.lastName || 'user'}
        </Text>
      </Layout>
      <Layout basis={12} />
      <Layout basis={188}>
        <Text size='s'>{email}</Text>
      </Layout>
      <Layout basis={12} />
      <Layout basis={168}>
        <Text size='s'>{registeredAt && intl.formatDate(registeredAt) || 'N/A'}</Text>
      </Layout>
      <Layout basis={12} />
      <Text size='s'>
        {lastLogonAt && intl.formatDate(lastLogonAt) || 'N/A'}
        <Space />
        {intl.formatMessage(messages.at)}
        <Space />
        {lastLogonAt && intl.formatTime(lastLogonAt) || 'N/A'}
      </Text>
      <Layout basis='10%' />
    </Row>
    <Layout basis={12} />
  </Fragment>
)

export default injectIntl(ListRow)
