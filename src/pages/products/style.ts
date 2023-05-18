import styled from "styled-components";



export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  header{
    #addProd{
      left: auto;
      right: 10px;
    }
  }

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


