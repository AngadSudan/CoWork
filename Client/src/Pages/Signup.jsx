import React, { useEffect } from 'react'
import axios from 'axios';
import { io } from 'socket.io-client';
function Signup() {
  useEffect(()=>{
    const socket = io("http://localhost:8000");
    socket.on("connection", () => {
      console.log("Connected to Socket.io server");
    });
  },[])
  const [email,setemail]=React.useState('');
  const [password,setpassword]=React.useState('');
  const [username,setusername]=React.useState('');
    const Submission=(e)=>{     
        e.preventDefault();
        const data= {email,password,username};
        axios.post('http://localhost:8000/Register',data)
            .then((res)=>{
               alert('Redirecting ...')
            })
            .catch((error)=>{
                alert('username or email already exists');
            });   
    }

  return (
    <div className='grid h-screen w-full place-items-center'>
        <form onSubmit={Submission} className='flex flex-col w-[50%]'>
            <input
            type="text" 
            placeholder='email' 
            autoComplete="True" 
            value={email} 
            onChange={(e)=>{setemail(e.target.value)}} 
            className='p-2 my-2 w-1/2 border-2 border-gray-200 mx-auto' />
            
            <input 
            type="password" 
            placeholder='password' 
            autoComplete="True" 
            value={password} 
            onChange={(e)=>{setpassword(e.target.value)}} 
            className='p-2 my-2 w-1/2 border-2 border-gray-200 mx-auto' />
            

            <input 
            type="text"
            placeholder='username'
            autoComplete="True" 
            value={username}
            onChange={(e)=>{setusername(e.target.value)}}
            className='p-2 my-2 w-1/2 border-2 border-gray-200 mx-auto' />

            <button type="submit" className='p-2 w-1/2 my-2 mx-auto bg-black text-white'>Register</button>
        </form>
    </div>
  )
}

export default Signup