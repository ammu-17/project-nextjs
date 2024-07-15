import React from 'react'

interface Props{
    params : {id:number}
}

const UserDetailPage = ( {params:{id}} : Props) => {
  return (
    <div>
      userdatils page {id}
    </div>
  )
}

export default UserDetailPage
