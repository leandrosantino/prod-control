import styled from 'styled-components'
import { colors } from '../../style/global'


export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  form{
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 12px;

    button{
      border: none;
      background-color: ${colors.blue[500]};
      padding: 4px 8px;
      height: 30px;
      color: #fff;
      border-radius: 4px;

      &:hover{
        opacity: .8;
      }
    }

  }



`
