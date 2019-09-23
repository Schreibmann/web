import { Profile } from '@frontend/dashboard/src/containers/Preload'
import { Layout, Row } from '@ui/layout'
import { Space, Text } from '@ui/text'
import React, { FC } from 'react'
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
    <Row>
      <Layout basis='10%' />
      <Layout basis={20} />
      <Layout basis={280}>
        <Text size='s'>
          {profile && profile.firstName || 'nameless'}
          <Space />
          {profile && profile.lastName || 'user'}
        </Text>
      </Layout>
      <Layout basis={12} />
      <Layout basis={238}>
        <Text size='s'>{email}</Text>
      </Layout>
      <Layout basis={12} />
      <Layout basis={188}>
        <Text size='s'>{registeredAt && intl.formatDate(registeredAt) || 'N/A'}</Text>
      </Layout>
      <Layout basis={12} />
      <Text size='s'>
        {lastLogonAt && intl.formatDate(lastLogonAt) || 'N/A'}
        <Space count={3}/>
        {intl.formatMessage(messages.at)}
        <Space count={3}/>
        {lastLogonAt && intl.formatTime(lastLogonAt) || 'N/A'}
      </Text>
      <Layout basis='10%' />
    </Row>
)

export default injectIntl(ListRow)
