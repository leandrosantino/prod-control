import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

export const Header = styled.header`
  width: 100%;
  height: 72px;
  position: fixed;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 8px;
  background-color: #4a4a4a;
  color: #fff;
  font-size: 14px;
  padding-bottom: 20px;

  h1{
    font-size: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  button{
    border: none;
    border-radius: 4px;
    padding: 8px;
    background-color: #8a8a8a;
    color: #fff;
    font-weight: 600;

    &+button{
      background-color: #0078d4;
    }

    &:hover{
      opacity: 0.7;
    }
    &:active{
      opacity: 0.8;
    }


  }

  @media print {
    display: none;
  }

`

export const InputContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  margin-left: 24px;

  select{
    padding: 4px;
    border: none;
    border-radius: 4px;
    width: 260px;

  }

  input{
    padding: 4px;
    border: none;
    border-radius: 4px;
    width: 80px;
  }

  label{
    font-size: 14px;
  }

`


export const EditProduct = styled.div`
  position: fixed;
  z-index: 100;
  top: 18px;
  left: 0;
  margin-left: 10px;

  padding: 9px;

  border-radius: 4px;

  a{
    text-decoration: none;
    color: #fff;
  }
  &:hover{
    background-color: rgba(255,255,255, .2)
  }

`
