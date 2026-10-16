import react, { useState } from'react';

export default function Input({data,status,error}){
    const[search,setSearch]=useState("");
    const[debounce,setDebounce]=useState("");
    setTimeout(()=>{
        setDebounce(search);
    },1000)
    
    const [form,setForm]=useState({
        name:"",
        email:"",
        age:""
    });
const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm((prev)=>({...prev,[name]:value}))};


    return(
        <>

         <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <p>{search}</p>
        <p>{debounce}</p>


        <form onSubmit={(e)=>{e.preventDefault();console.log(form); }}>
            <input type="text" name="name" value={form.name}  onChange={handleChange} placeholder='name'/>
            <input type="text" name="email" value={form.email}  onChange={handleChange} placeholder='email'/>
            <input type="text" name="age" value={form.age} onChange={handleChange} placeholder='age'/>
            <button type='submit' onClick={handleChange}>Submit</button>
        </form>
        </>

    )
}