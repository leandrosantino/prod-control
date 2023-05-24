import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #4a4a4a;
  color: #fff;
  padding: 8px;
  top: 0;
  position: fixed;

  h1{font-size: 24px;}
  h2{font-size: 16px;}

  div{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  a{
    position: absolute;
    left: 10px;
    color: #fff;
    padding: 9px;
    border-radius: 4px;
    text-decoration: none;
    &:hover{
      background-color: rgba(255,255,255, .2)
    }
  }

`
