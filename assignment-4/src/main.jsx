import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RandomImage from   './random-image.jsx'
import Show from './Show.jsx'
import Input from './components/input.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RandomImage /> */}
     {/* <App />
      <Show/>
    */}
    <Input/>
  </StrictMode>,
)
