import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,RouterProvider,Routes,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import { Chat, Home,Search, Login,User, Meeting, Signup } from './Pages'
import App from './App'
import './index.css'
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>  
      <Route path='Login' element={<Login/>}/>
      <Route path='Register' element={<Signup/>}/>
      <Route path='Search' element={<Search/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route path='Chat' element={<Chat/>}/>
      <Route path='Chat/:id' element={<Chat/>}/>
      <Route path='Meeting' element={<Meeting/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
