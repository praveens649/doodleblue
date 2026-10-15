data=[{name:"Praveen",mark:90},{name:"kiran",mark:98}]
arr=[120,60,899]
console.log(arr.reduce((total,x)=>{return total + x},0))


//ternary operator
console.log(data.find((val)=>(val.name==="kiran")).mark ?? "Not found")

//closure

const makeGreeter=(greeting)=>(name)=>{
  return `${greeting} ${name}`
}
const val=makeGreeter("Hello")("Ria")
console.log(val)

//async


async function fetchUsers(){
  try{
    const res =await  fetch("https://jsonplaceholder.typicode.com/users")
   
    const users= await res.json();
    console.log(users)
    console.log(users.map((user)=>user.username))
  }
  catch(error){
    console.log("404 error",error);
  }
}
fetchUsers()

setTimeout(()=>console.log("This is a timeout message"), 2000)
