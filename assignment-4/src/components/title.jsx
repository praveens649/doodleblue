import { useEffect } from 'react'


function Title({count}){
    console.log('render');
    useEffect(()=>{
        document.title=`clicked ${count} times`;
    },[count]);
    return(
        <>
         {count}
        </>
    )
}

export default Title;