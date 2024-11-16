import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from './Components'
function Layout() {
  return (
    <>
    <Outlet/>
    <Header/>
    </>
  )
}

export default Layout