import React,{useState} from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
function Chat() {
    const [message,setmessage]= useState('')
    const [messagedata,setmessagedata]= useState([]);
    const {id}= useParams();
    //post request function
    const submitted=async (e)=>{
        e.preventDefault();
        setmessage('');
        alert(message);
      }
      //get data function to be executed whenever a link is clicked
      const retrievedata= async(userid)=>{
        console.log('the id is',userid);
        const data= await axios.get(`http://localhost:8000/chat/${userid}`).then((res)=>res.data);
        setmessagedata(data);
      }
      useState(()=>{
        retrievedata(id);
      },[window.location])
  
  const data=[
    {username:"Akshat", last:"Design Ready"},
    {username:"Adheesh",last:"😂😂"},
    {username:"Aditya",last:"Yeah Kaise?"},
    {username:"Abhinav",last:"Reacted 😂 to ..."},
    {username:"Arsh",last:"Reacted 👍 to ..."}
  ]
  
  return (
    <section className='h-[87svh] w-[80%] flex mx-4 justify-evenly'>
      <div className='h-full w-[30%] pt-20 mt-4'>
        {data.map((dataelements,index)=>{
          return <>
            <NavLink to={`/chat/${dataelements.username}`} className='w-full mb-5 p-4 flex gap-10 border-2 border-zinc-800'>
              <div className='w-12 h-12 rounded-full bg-gray-300'/>
              <div>
                <h1 className='text-xl font-medium'>{dataelements.username}</h1>
                <span>{dataelements.last}</span>
              </div>
            </NavLink>
          </>
        })}
      </div> 
      {
        !id?<div className='h-full w-[60%]'></div>:<div className='h-full w-[60%] border-zinc-800 border-2 mt-4'>
        <div className='w-[80%]  bg-black border-b-2 border-zinc-800 flex justify-evenly mx-auto my-5'>
          <button className='w-[10%] my-8'>Back</button>
          <NavLink to={`/User/${id}`} className=' p-4 rounded-md w-[40%] flex justify-evenly'>
            <div className='w-12 h-12 rounded-full bg-gray-500 '/>
            <h1 className='mt-3'>{id}</h1>
          </NavLink>
          <div className=' p-4 rounded-md flex justify-evenly w-[20%]'>
            <button onClick={()=>{alert('Initiating Call')}} className='mt-3'>Call</button>
            <button onClick={()=>{alert('Initiating Video Call')}} className='mt-3'>Video</button>
          </div>
        </div>
        <div className='overflow-y-scroll h-[60%] px-12'>
          {
            messagedata.map((message,index)=>{
              return(
                <>
                  <h3 className='my-4 bg-red-400 w-fit mx-2 px-4 text-2xl' key={index}>{message.message}</h3>
                </>
              )
            })
          }
        </div>
        <div>
          <form  onSubmit={submitted} className='ml-40  w-[90%]' >
              <input
                type='text'
                placeholder='type here...'
                value={message}
                autoComplete={false}
                className='w-[70%] rounded-xl text-black h-12 mt-2 mx-2 p-4'
                onChange={(e)=>{setmessage(e.target.value)}}
                />
              <button type='submit'>Send</button>
          </form>
        </div>
      </div>
      }
      
    </section>
  )
}

export default Chat