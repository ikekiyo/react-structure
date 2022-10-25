import React from 'react'

import UserPresentation from './UsersPresentation'

import { User } from '../type'

type Props = {
  users: User[]
}

export const UsersContainer: React.FC<Props> = (props) => {
  const { users } = props

  return <UserPresentation users={users} />
}

export default UsersContainer
