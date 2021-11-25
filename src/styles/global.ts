import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --Pink2	:#EE82EE;
        --Pink3	:#DDA0DD;
        --Pink1	:#FFB6C1;
        --Purple	:#4B0082;
        --Blue	:#8A2BE2;
        --Blue1:	#191970;
        --Blue2	:#483D8B;
        --Success	:#00FF7F;
        --Warning	:#FF0000;
        --Attention	:#FFFF00;
        --White	:#FFFFFF;
        --Background	:#FFF5EE;
        --Black	:#000000;
    }
    button{
        cursor: pointer;
    }
    div{
        display: flex;
        flex-direction: row;
    }

    *{
        background: #FFF5EE;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
`;
