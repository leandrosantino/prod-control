import styled, { createGlobalStyle } from "styled-components";

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
    color: #000;
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

export const colors = {
  gray: {
    200: '#e9e9e9',
    300: '#d3d3d3',
    500: '#8a8a8a',
    800: '#4a4a4a'
  },
  blue: {
    500: '#0078d4'
  }
}

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #4a4a4a;
  color: #fff;
  padding: 8px;
  top: 0;
  position: fixed;

  h1{font-size: 24px;}
  h2{font-size: 16px;}

  div{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  a{
    position: absolute;
    left: 10px;
    color: #fff;
    padding: 9px;
    border-radius: 4px;
    text-decoration: none;
    &:hover{
      background-color: rgba(255,255,255, .2)
    }
  }

`

export const Table = styled.div`
  margin-top: 112px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  border-bottom: 1px solid black;
`

export const Col = styled.div`
  width: 120px;
  height: 100%;
  font-size: 12px;

  &+div{
    text-align: center;
  }
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 72px;
  height: 40px;
  background-color: #8a8a8a;
  padding: 10px 5px;

  div{
    height: fit-content;
    font-size: 14px;
    font-weight: 600;
  }

`

