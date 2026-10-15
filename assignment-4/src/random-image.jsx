import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { RandomImageCard } from './components/random-image-card'

function RandomImage() {
  const [data,SetData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
        const res=await fetch("https://dummyjson.com/products");
        const data =await res.json();
        SetData(data.products);
    }
    fetchData();
  },[]);
   console.log(data)

  return (
    <>
      <h1 className="product-card-title">Random Images</h1>
      <RandomImageCard data={data}/>
    </>

  )
}

export default RandomImage
