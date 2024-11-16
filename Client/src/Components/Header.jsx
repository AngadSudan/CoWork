import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='absolute bottom-0 left-0 w-full text-white px-4 my-4 text-3xl bg-black'>
        <navbar className='flex h-16 py-auto justify-evenly'>
            {/* <h1 className='text-5xl py-2 font-bold my-auto w-1/3'>CoWork</h1> */}
            <ul className='flex justify-evenly  w-2/3'>
                <NavLink className="py-4" to='Chat'><li>Chat</li></NavLink>
                <NavLink className="py-4" to='Meeting'><li>Meeting</li></NavLink>
                <NavLink className="py-4" to='Search'><li>Search</li></NavLink>
                <NavLink className="py-4" to='/'><li>Home</li></NavLink>
                <NavLink className="py-4" to='/'><li>Logout</li></NavLink>
            </ul>
        </navbar>
    </header>
  )
}

export default Header