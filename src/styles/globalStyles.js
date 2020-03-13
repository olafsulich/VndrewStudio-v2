import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {  
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
    outline:none;
  }
  button{
  border:none;
  background:none;
  cursor: pointer;
   font-family: "Montserrat", sans-serif;
  }  
  html {
    font-size: 62.5%; 
    box-sizing: border-box;

  }

  li{
    list-style:none;
  }
  
  body {
    width:100%;
    height:100vh;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    overflow-x:hidden;
    position:relative;
    margin:0;
    padding:0;
    outline:none;
  }
  a{
    text-decoration:none;
  }
  input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
    *:focus {
    outline:none;
   } 
`;

export default GlobalStyle;
