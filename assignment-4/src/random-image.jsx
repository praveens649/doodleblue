import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { RandomImageCard } from './components/random-image-card'

function RandomImage() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  const [status,setStatus]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        setLoading(true);
        setError(null);
        const res=await fetch("https://dummyjson.com/products");
        setStatus(res.status);
        if(!res.ok){
          throw new Error (`HTTP error! status: ${res.status}`);
        }
        const result =await res.json();
        setData(result.products);
      }
      catch(err){
        console.log(err);
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
      
    }
    fetchData();
  },[]);
   console.log(data)
  if(loading) return <h1>Loading context......</h1>;
   
  if(error) return <h1>{error}</h1>;
   

  return (
    <>
      <h1 className="product-card-title">Random Images</h1>
      <RandomImageCard data={data} status={status} loading={loading} error={error}/>
    </>

  )
}

export default RandomImage
