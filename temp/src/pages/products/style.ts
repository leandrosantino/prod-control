import styled from "styled-components";
import { colors } from "../../style/global";

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

  td, th{

    width: 220px;

    &:nth-child(n+3){
      width: 130px;
      text-align: center;
    }
    &:last-child{
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
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
    width:  30px;
    height: 30px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border-radius: 50%;
    text-decoration: none;
    background-color: transparent;
    color: ${colors.blue[500]};

    &:hover{
      background-color: ${colors.blue[500]};
      color: #fff;

    }
    &:active{
      opacity: 0.8;
    }
  }

`
