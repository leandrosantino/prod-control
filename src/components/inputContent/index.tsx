import styled from "styled-components";
import { colors } from "../../style/global";

export const InputContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  label{
    width: 100%;
    text-align: start;
    font-size: 12px;
    font-weight: 600;
  }

  select{
    padding: 4px 8px;
    border: none;
    border-radius: 4px;

    border: 1px solid ${colors.gray[900]};
  }

  input{
    padding: 4px;
    border: none;
    border-radius: 4px;
    width: 80px;
  }



`
