/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont } from './typography';
import poppins from '../fonts/Poppins-Medium.ttf';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    * { 
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html { 
        font-size: 16px;
        box-sizing: border-box;
    }
    *, *:before, *:after { 
        box-sizing: inherit;
    }

    body { 
        font-family: ${primaryFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) => props.theme.backgroundColor};
        overflow-x: hidden;
        @font-face { 
            font-family: ${primaryFont};
            src: url(${poppins}) format('truetype');
        }
    }
    h1,
    h2,
    h3 { 
        font-weight: 600;
        margin: 0;
        padding: 0;
    }
`