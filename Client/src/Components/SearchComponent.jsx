import React from 'react'
import { NavLink } from 'react-router-dom'
function SearchComponent({username}) {
  return (
    <NavLink to='/Chat' className='border-2 flex gap-[10svw] border-zinc-800 my-4 mx-auto w-[50%] h-fit p-4 '>
        <div className='h-12 w-12 rounded-full bg-gray-300'/>
        <NavLink to={`/chat/${username}`}>
            <h1 className='text-2xl font-semibold'>{username}</h1>
        </NavLink>
    </NavLink>
  )
}

export default SearchComponent