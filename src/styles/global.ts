import { createGlobalStyle } from "styled-components";

//NESSE ARQUIVO ESTAO ARMAZENADOS TODAS AS VARIAVEIS E CONFIGURACOES GLOBAIS DA app
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
        --Background:#F2CCFF;
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

        /* background: #FFF5EE; */
        margin: 0;
        padding: 0;

        font-family: 'Ubuntu', sans-serif;
        box-sizing: border-box;
        text-decoration: none;

        .standard-input {
            width:60% ;
            
        }

        
.formik-form{
    display: flex;
    flex-direction: row;
}
    }

`;
