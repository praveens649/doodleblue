import Title from "./components/title";
import { useState } from "react";

export default function Show(){
    const[count,Setcount]=useState(0);
    return(
        <>
        <Title count={count}/>
          <h1>Show Title</h1>
          <button onClick={()=>Setcount(count+1)}>Click</button>
          
        </>
    )
}