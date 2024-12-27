import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
img{
    width: 100%;
    display: block;
}
a{
    text-decoration: none;
    color: black;
}

@font-face {
    font-family: 'RiaSans-ExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/RiaSans-ExtraBold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

body {
    /* background-color: #F7F0F2; */
    /* font-family: "Nanum Gothic", serif; */
    background-color: rgba(248, 247, 247, 0.7);
    /* opacity: 0.7; */
}
`;
