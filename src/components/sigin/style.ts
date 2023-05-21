import styled from "styled-components";
import { colors } from "../../style/global";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: fit-content;
  background-color: ${colors.gray[200]};
  border-radius: 12px;
  gap: 12px;

  padding: 28px;

  span{
    width: 70%;
  }

  input{
    width: 70%;
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
  }

  div{
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button{
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      background-color: ${colors.blue[500]};
      color: #fff;

      &:hover{
        opacity: 80%;
      }

    }


  }


`
