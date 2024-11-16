import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}= useParams();
  return (
    <div className='grid h-screen w-full place-items-center'>{id}</div>
  )
}

export default User