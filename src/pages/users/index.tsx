// import { UsersContainer } from 'features/users/Users/UsersContainer/UsersContainer'
import SingleLayout from 'layouts/SingleLayout'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'

import { User } from '~/features/users/type'
import { UsersContainer } from '~/features/users/Users/UsersContainer'

type PageProps = {
  users: User[]
}

const UsersPage: NextPage<PageProps> = (props) => {
  const { users } = props

  return (
    <SingleLayout>
      <UsersContainer users={users} />
    </SingleLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  const props: PageProps = {
    users: [
      {
        name: '田中 太郎',
        email: 'taro.tanaka@example.com',
      },
      {
        name: '鈴木 一郎',
        email: 'ichiro.suzuki@example.com',
      },
      {
        name: '山田 二郎',
        email: 'jiro.yamada@example.com',
      },
    ],
  }
  return {
    props,
  }
}

export default UsersPage
