import React,{useState} from 'react'
import axios from 'axios'
import SearchComponent from '../Components/SearchComponent'
function Search() {
    const [username,setusername]=useState('')
    const [data,setdata]=useState([])
    const [counter, setCounter]= useState(0)

    const submission=async (e)=>{
        e.preventDefault();
        alert('searching for user....')
        const userdata= {username}
        const data= await axios.post('http://localhost:8000/Search',userdata)
        .then((res)=>res.data)
        .catch((err)=>{return `No Such User ${err}`});
        console.log(data);
        setCounter(counter+1);
        setdata(data);
    }
  return (
    <div className=' h-full flex flex-col justify-center items-center w-[50%] mx-auto  mt-4'>
        <form className='w-[80%]' onSubmit={submission}>
          <input 
          type='text' 
          placeholder='Search Chat' 
          name='username' 
          className='w-full rounded-xl text-black mx-5 h-8 p-4 my-8'
          value={username} 
          onChange={(e)=>{setusername(e.target.value)}}
          />
        </form> 
          {data.length===0?
            <></>:
            <>
              {data.map(
                (dataelement,index)=>{
                  //replace with a user
                  return <SearchComponent key={index} username={dataelement.username} />
                  // return <h1 key={index}>{dataelement.username}</h1>
                }
              )}
            </>
          }
        </div>
  )
}

export default Search