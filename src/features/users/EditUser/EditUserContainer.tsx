import React from 'react'

import UserPresentation from './EditUserPresentation'

import { User } from '../type'

type Props = {
  users: User[]
}

export const EditUserContainer: React.FC<Props> = (props) => {
  const { users } = props

  const editUserHandler = () => {
    // api call
    alert('success')
    return
  }
  return <UserPresentation users={users} editUserHandler={editUserHandler} />
}

export default EditUserContainer
