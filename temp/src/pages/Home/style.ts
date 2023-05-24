import styled from "styled-components";

import { colors } from "../../style/global";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Menu = styled.menu`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  background-color: ${colors.gray[200]};
  border-radius: 12px;
  padding: 28px;

  h3{
    color: ${colors.gray[800]};
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: ${colors.gray[500]};
    padding: 12px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
    gap: 8px;


    &:hover{
      opacity: 70%;
    }

  }

`



