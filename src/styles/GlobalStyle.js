import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 400ms ease;
    scroll-behavior: smooth;
}
html, border-style, #root {
    max-height: 100vh;
    max-width: 100%;
    width: 100%;
    height: 100%;
}
*, button, input {
    border: 0;
    background: none;
    outline: none;
    font-family: var(--font-family-sans-serif);
    font-family: 'Blinker', sans-serif;
    }
    
    html {
    
        background: ${({ theme }) => theme.colors.background};
        transition: all 400ms ease;
         scroll-behavior: smooth;
    }
    
    :root {
    --white: #D9D9D9;
    --black: #3c3c3c;
    --gray: #7A7A7A;
    --gray-light: #f2f2f2;
    --error: #ED6A5E;
    --green: #1dba01;
    --shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
    --text-shadow: 0 0 12px rgba(0,0,0,.25);
    --sm: (max-width: 720px);
    }
`;
