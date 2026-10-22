import { useMemo, useState } from 'react'
import { ThemeContext } from './themeContext.jsx'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((currentTheme) => (
      currentTheme === 'light' ? 'dark' : 'light'
    ))
  }

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}
