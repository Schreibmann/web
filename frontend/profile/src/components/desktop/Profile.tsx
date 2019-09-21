import React, { FC } from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import messages from '../../messages'

interface Props {
  intl: InjectedIntl
  firstName: string
  lastName: string
  onUpdate: () => void
  onChangeFirstName: (value: string) => void
  onChangeLastName: (value: string) => void
}

const ProfileDesktop: FC<Props> = ({
  intl,
  firstName,
  lastName,
  onUpdate,
  onChangeFirstName,
  onChangeLastName,
}: Props) => (
  <Column align='center'>
    <Layout basis={60} />
    <Text size='l' height='xs' weight='bold'>
      {intl.formatMessage(messages.editProfile)}
    </Text>
    <Layout basis={40} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.enterFirstName)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='text'
          border='lightGray'
          value={firstName}
          onChange={onChangeFirstName}
          placeholder={intl.formatMessage(messages.enterFirstName)}
        />
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.lastName)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='text'
          border='lightGray'
          value={lastName}
          onEnter={onUpdate}
          onChange={onChangeLastName}
          placeholder={intl.formatMessage(messages.enterlastName)}
        />
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Button text disabled={firstName === '' || lastName === ''} onClick={onUpdate}>
          {intl.formatMessage(messages.update)}
        </Button>
      </Layout>
    </Row>
  </Column>
)

export default injectIntl(ProfileDesktop)
