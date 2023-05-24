import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`

export const Form = styled.div`
  margin-top: 100px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px
`

export const InputCase = styled.div`

  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  label{
    font-size: 14px;
    font-weight: 600;
  }

  input{
    font-size: 14px;
    padding: 3px 5px;
    width: 150px;
  }

  select{
    font-size: 14px;
    padding: 3px 5px;
    width: 150px;
  }

`

export const BtCase = styled.div`

  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  button{
    padding: 5px 30px;
    background-color: #0078d4;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;

    &:hover{
        opacity: 0.7;
      }
      &:active{
        opacity: 0.8;
      }
  }

`

export const Msg = styled.div<{ error: boolean }>`
  color: ${({ error }) => error ? 'red' : 'green'}
`
