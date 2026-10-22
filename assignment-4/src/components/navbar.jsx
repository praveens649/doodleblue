import { useNavigate } from 'react-router';
import { useTheme } from './themeContext.jsx'

const Navbar = () => {
    const navigator = useNavigate()
    const { theme, toggleTheme } = useTheme()

  return (
    <div>
        <button onClick={() => navigator('/')}>Home</button>
        <button onClick={() => navigator('/about')}>About</button>
        <button onClick={() => navigator('/project')}>Project</button>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
    </div>
  )
}

export default Navbar