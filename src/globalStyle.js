import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
::before,
::after{
padding: 0;
margin: 0;
box-sizing: border-box;
}

html{
    font-size: 62.5%;
    scroll-behavior:smooth;
    overflow-x:hidden;
}
body{
    font-size: 1.6rem;
    overflow-x:hidden;
    position:relative;
}

a{
    text-decoration:none;
}
ul,li{
    list-style:none;
}

`;
