import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header{
    position: inherit;
    #addProd{
      left: auto;
      right: 10px;
    }
  }

`

export const Main = styled.main`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 72px);
`

export const EditButton = styled.div`
  a{
    background-color: #0078d4;
    border: none;
    border-radius: 4px;
    padding: 5px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;

    &:hover{
        opacity: 0.7;
      }
      &:active{
        opacity: 0.8;
      }
  }

`
