import React from 'react'
import UserTable from './UserTable'

const UserPage = async () => {

  return (
    <div>
      <h1>users</h1>
      <p>{ new Date().toLocaleTimeString()}</p>
      <UserTable/>
    </div>
  )
}

export default UserPage