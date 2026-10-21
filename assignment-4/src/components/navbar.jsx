import React from 'react'
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigator=useNavigate();  
  return (
    <div>
        <button onClick={() => navigator('/')}>Home</button>
        <button onClick={() => navigator('/about')}>About</button>
        <button onClick={() => navigator('/project')}>Project</button>
    </div>
  )
}

export default Navbar