import { Profile } from '@frontend/dashboard/src/containers/Preload'
import { Column, Layout, Row } from '@ui/layout'
import { Select } from '@ui/select'
import { Text } from '@ui/text'
import React, { FC } from 'react'
import { InjectedIntl, injectIntl } from 'react-intl'
import { OptionsProps } from '../../../../ui/select/src/Select'
import messages from '../../messages'
import ListRow from './ListRow'

export interface User {
  id: string
  email: string
  profile: Profile | null
  registeredAt: string | null
  lastLogonAt: string | null
}

export interface ListProps {
  intl: InjectedIntl
  rows: User[]
  onSelect: (value: string) => void
}

const selectOptions: OptionsProps[] = [
  { value: 'id', label: 'id'},
  { value: 'email', label: 'email'},
  { value: 'profile.firstName', label: 'firstName'},
  { value: 'profile.lastName', label: 'lastName'},
  { value: 'registeredAt', label: 'registeredAt'},
  { value: 'lastLogonAt', label: 'lastLogonAt'},
]

const List: FC<ListProps> = ({ rows, intl, onSelect }: ListProps) => {

  const [trigger, fireUpdate] = React.useState(false)

  const handleChange = (selectOption: string) => {
    onSelect(selectOption)
    fireUpdate(!trigger)
  }

  return  (
    <Column>
      <Select
        isSearchable={false}
        onChange={handleChange}
        options={selectOptions}
        placeholder={intl.formatMessage(messages.sort)}
      />
      <Layout basis={60} />
      <Row>
        <Layout basis='10%' />
        <Text weight='medium' size='l'>
          {intl.formatMessage(messages.users)}
        </Text>
        <Layout basis='10%' />
      </Row>
      <Layout basis={20} />
      <Row>
        <Layout basis='10%' />
        <Layout basis={300}>
          <Layout basis={8} />
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.name)}
          </Text>
        </Layout>
        <Layout basis={200}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.email)}
          </Text>
        </Layout>
        <Layout basis={180}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.registered)}
          </Text>
        </Layout>
        <Layout basis={160}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.lastLogin)}
          </Text>
        </Layout>
        <Layout basis='10%' />
      </Row>
      <Layout basis={8} />
      {rows.map(row => <ListRow key={row.id} intl={intl} {...row} />)}
    </Column>
  )
}

export default injectIntl(List)
