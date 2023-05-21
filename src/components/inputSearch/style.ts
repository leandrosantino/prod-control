import styled from 'styled-components'
import { colors } from '../../style/global'

export const Content = styled.div`

  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  label{
    width: 100%;
    text-align: start;
    font-size: 12px;
    font-weight: 600;
  }

  div{
    width: 100%;
    border: 1px solid ${colors.gray[900]};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4px;

    input{
      padding: 0 4px;
      width: 100%;
      border: none;
      font-size: 14px;
    }

    button{
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: transparent;
      &:hover{
        opacity: .8;
      }
    }
  }

`
