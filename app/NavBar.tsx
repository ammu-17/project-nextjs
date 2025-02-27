'use client'

import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const {status, data: session} = useSession()
  // if(status === 'loading') return null;

  return (
    <div className='flex bg-slate-200 p-3'>
      <Link href = '/' className='mr-5'>Next.js</Link>
      <Link href='/users' className='mr-5'>Users</Link>
      {status === "loading" && <div>loading...</div>}
      {status === "authenticated" && 
      <div>
        {session.user!.name}
        <Link href='/api/auth/signout' className='ml-5'>Sign Out</Link>
      </div>}
      {status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
    </div>
  )
}

export default NavBar
