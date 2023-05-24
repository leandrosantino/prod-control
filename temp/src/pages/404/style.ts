import styled from 'styled-components'
import { colors } from '../../style/global'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 72px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.gray[900]};

  h2{
    font-size: 48px;
  }

  p{
    font-size: 16px;
  }

`
