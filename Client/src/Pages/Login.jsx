import React from 'react';
import axios from 'axios';
function Login() {
    const [email,setemail]=React.useState('');
    const [password,setpassword]=React.useState('');
    const Submission=(e)=>{     
        e.preventDefault();
        const data= {email,password};
        axios.post('http://localhost:8000/Login',data)
            .then((res)=>{
                console.log('res.data',res.data);   
                
                if(res.data.success){
                    alert('user login successful');
                }else{
                    alert(`${res.data.response}`);
                }
            })
            .catch((error)=>{
                console.log('User Not Found',error)
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
            
            <button type="submit" className='p-2 w-1/2 my-2 mx-auto bg-black text-white'>Login</button>
        </form>
    </div>
  )
}

export default Login