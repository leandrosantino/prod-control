import styled from 'styled-components'
import { colors } from '../../style/global'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 72px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  h3{
    width: 600px;
    text-align: start;
    padding: 8px 0;
    margin-top: 12px;
  }

`

export const Form = styled.form`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px;

  button{
    height: 100%;
    padding: 0 8px;
    color: #fff;
    border: none;
    border-radius: 4px;
    background-color: ${colors.blue[500]};
  }

`

export const Msg = styled.div<{ error: boolean }>`
  height: 50px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${({ error }) => error ? 'red' : 'green'}
`


export const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  border: 1px solid black;
  padding: 8px;
  border-radius: 12px;

  h5{
    padding: 4px 0;
  }

  p{
    min-height: 30px;
    padding: 4px 0 ;
  }


`
