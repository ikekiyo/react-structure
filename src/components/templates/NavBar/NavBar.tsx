import { Disclosure } from '@headlessui/react'
import type { NextPage } from 'next'
import React from 'react'

export const NavBar: NextPage = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({}) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="rounded-md bg-gray-600 px-3 py-2 text-sm font-medium text-white"
                    >
                      ダッシュボード
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      一覧
                    </a>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      マイページ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
export default NavBar
