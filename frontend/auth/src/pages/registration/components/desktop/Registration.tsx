import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { Column, Layout, Row } from '@ui/layout'
import { RouteLink } from '@ui/link'
import { Text } from '@ui/text'
import React, { FC } from 'react'
import { InjectedIntl, injectIntl } from 'react-intl'
import messages from '../../messages'

interface Errors {
  email?: string,
  password?: string
}

interface Props {
  intl: InjectedIntl,
  confirmPassword: string
  email: string
  errors: Errors
  password: string
  onChangeConfirmPassword: (value: string) => void
  onChangeEmail: (value: string) => void
  onChangePassword: (value: string) => void
  onRegister: () => void
}

const Registration: FC<Props> = ({
  confirmPassword,
  email,
  errors,
  intl,
  password,
  onChangeConfirmPassword,
  onChangeEmail,
  onChangePassword,
  onRegister,
}: Props) => (
  <Column align='center'>
    <Layout basis={60} />
    <Text size='2xl' height='xs' weight='bold'>
      {intl.formatMessage(messages.registration)}
    </Text>
    <Layout basis={40} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.mail)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='email'
          border='lightGray'
          error={!!errors.email}
          value={email}
          onChange={onChangeEmail}
          placeholder={intl.formatMessage(messages.enterEmail)}
        />
      </Layout>
    </Row>
    <Layout basis={24}>
      { errors.email && <Row justify='center'>
        <Layout basis={360} justify='center'>
          <Text size='s' weight='normal' color='red'>
            {errors.email}
          </Text>
        </Layout>
      </Row> }
    </Layout>
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.password)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='password'
          border='lightGray'
          error={!!errors.password}
          value={password}
          onEnter={onRegister}
          onChange={onChangePassword}
          placeholder={intl.formatMessage(messages.enterPassword)}
        />
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Input
          type='password'
          border='lightGray'
          error={password !== confirmPassword}
          value={confirmPassword}
          onEnter={onRegister}
          onChange={onChangeConfirmPassword}
          placeholder={intl.formatMessage(messages.repeatPassword)}
        />
      </Layout>
    </Row>
    <Layout basis={24}>
      { errors.password && <Row justify='center'>
        <Layout basis={400} justify='center'>
          <Text size='s' weight='normal' color='red'>
            {errors.password}
          </Text>
        </Layout>
      </Row> }
    </Layout>
    <Row justify='center'>
      <Layout basis={360}>
        <Button
          text
          disabled={!email || !password || password !== confirmPassword}
          onClick={onRegister}
        >
          {intl.formatMessage(messages.register)}
        </Button>
      </Layout>
    </Row>
    <Layout basis={16} />
    <RouteLink
      to='/auth'
      size='s'
      height='xs'
      weight='medium'
      color='black'
      hoverColor='blueBayoux'
    >
      {intl.formatMessage(messages.login)}
    </RouteLink>
  </Column>
)

export default injectIntl(Registration)
