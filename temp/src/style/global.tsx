import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  gray: {
    200: '#e9e9e9',
    300: '#d3d3d3',
    500: '#8a8a8a',
    800: '#4a4a4a',
    900: '#1d1d1d'
  },
  blue: {
    500: '#0078d4'
  }
}



export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background-color: #fff;
    color: ${colors.gray[900]};
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }

`;

