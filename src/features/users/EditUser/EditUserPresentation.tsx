import React from 'react'
import { Table } from 'templates/Table/Table'

import { User } from '../type'
type Props = {
  users: User[]
  editUserHandler: () => void
}

export const EditUserPresentation: React.FC<Props> = (props) => {
  const { users } = props

  return <Table users={users} />
}

export default EditUserPresentation
