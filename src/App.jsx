import { useState, useEffect} from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from '@/pages/home'
import Header from '@/pages/header'
import Admin from '@/pages/admin'
import Footer from '@/components/footer'

import light from '@/styles/themes/light'
import dark from '@/styles/themes/dark'

import { GlobalStyle } from '@/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

import { UseDataContext } from '@/hooks/useContext'
import usePersistedState from '@/hooks/usePersistedState'


function App() {
  const [theme, setTheme] = usePersistedState('theme', light);
  // const [auth, setAuth] = useState(false);
  // const [auth, setAuth] = useState(() => {
  //   const authValue = localStorage.getItem('auth');
  //   return authValue === 'true';
  // });

  // useEffect(() => {
  //   const authValue = localStorage.getItem('auth');
  //   if (authValue === 'true') {
  //     setAuth(true);
  //   } else {
  //     localStorage.setItem('auth', 'false');
  //     setAuth(false);
  //   }
  // }, []);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  };

  // const ProtectedRoute = ({ element: Element, ...rest }) => {
  //   return auth ? <Element {...rest} /> : <Navigate to="/" />;
  // };

  return (
    <UseDataContext>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </UseDataContext>
  );
}

export default App
