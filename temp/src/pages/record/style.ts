import styled from "styled-components";
import { colors } from "../../style/global";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  td, th {
    width: 220px;
    text-align: center;

    &:nth-child(n+4){
      width: 130px;
    }
    &:first-child{
      width: 180px;
    }
    &:last-child{
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button{
      width:  30px;
      height: 30px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      border-radius: 50%;
      background-color: transparent;
      color: red;

      &:hover{
        background-color: red;
        color: #fff;

      }

    }


  }

`

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 72px;

`
