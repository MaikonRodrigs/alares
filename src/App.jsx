import usePersistedState from '@/hooks/usePersistedState'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { UseDataContext } from '@/hooks/useContext'


import Home from '@/pages/home'
import Header from '@/pages/header'


import light from '@/styles/themes/light'
import dark from '@/styles/themes/dark'

import { GlobalStyle } from '@/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'


function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  };

  return (
    <UseDataContext>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme}/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter >
    </UseDataContext>
  )
}

export default App
