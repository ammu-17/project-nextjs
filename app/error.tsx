'use client'

import React from 'react'

interface Props{
    error : Error
    reset: () => void
}

const ErrorPage = ({error , reset} : Props) => {
  return (
   <>
     <div>
       An upected error occured  </div>

       <button onClick={() => reset()}>Retry</button>
   </>
  )
}

export default ErrorPage

