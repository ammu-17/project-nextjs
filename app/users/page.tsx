import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props{
    searchParams : {sortOrder: string}
}

const UserPage = async ({searchParams: {sortOrder}}: Props) => {

  return (
    <div>
      <h1>users</h1>
      <Link href='/users/new' className='btn'>New user</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder = {sortOrder}/>
      </Suspense>
    </div>
  )
}

export default UserPage