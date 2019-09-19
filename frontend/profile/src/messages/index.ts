import { defineMessages } from 'react-intl'

const namespace: string = 'profile'

export default defineMessages({
  editProfile: {
    id: `${namespace}.edit`,
    defaultMessage: 'Редактировать профиль',
  },
  firstName: {
    id: `${namespace}.firstName`,
    defaultMessage: 'Имя',
  },
  enterFirstName: {
    id: `${namespace}.enter_firstName`,
    defaultMessage: 'Введите ваше имя',
  },
  lastName: {
    id: `${namespace}.lastName`,
    defaultMessage: 'Фамилия',
  },
  enterlastName: {
    id: `${namespace}.enter_lastName`,
    defaultMessage: 'Введите вашу фамилию',
  },
  update: {
    id: `${namespace}.update`,
    defaultMessage: 'Обновить',
  },
})
