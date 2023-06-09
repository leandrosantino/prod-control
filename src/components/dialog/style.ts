import styled from "styled-components";
import { colors } from "../../style/global";


export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 0;
  background-color: rgba(0, 0, 0, .15);
  display: flex;
  justify-content: center;
  align-items: center;

`


export const Content = styled.div<{ error: boolean }>`
  width: 350px;
  height: fit-content;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 15px 0;
  display: flex;
  flex-direction: column;
  padding: 12px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  gap: 12px;

  color: ${colors.gray[900]};

  h4{
    font-size: 20px;
    width: 100%;
    height: 25%;

  }

  p{
    font-size: 14px;
    width: 100%;
    height: 50%;
    padding: 4px 0px;
  }



  div{
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;

    button{
      padding: 4px 8px;
      border: none;
      background-color: ${colors.gray[900]};
      color: #fff;
      border-radius: 4px;

      &:last-child{
        background-color: ${({ error }) => error ? 'red' : colors.blue[500]};
      }

      &:hover{
        opacity: .9;
      }

    }

  }


`

export const PromptInput = styled.input<{ error: boolean }>`
  width: 100%;
  border: 1px solid ${({ error }) => error ? 'red' : 'black'};
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
`
