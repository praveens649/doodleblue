import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { UserCard } from './components/user-card'

function App() {
  const [data,SetData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/users")
      const data=await res.json();
      SetData(data);
    }
    fetchData()
   
  },[])
   console.log(data)
  return (
    <>
      <h1>User List</h1>
      <UserCard data={data}/>
    </>

  )
}

export default App
