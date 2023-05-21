import React, { useState } from 'react';
import { Container } from './style';
import { Sigin } from '../../components/sigin';
import { ReportList } from '../../components/reportList';
import { Header } from '../../components/header';
import { Link } from 'react-router-dom';



export function Report() {

  const [isAuth, setIsAuth] = useState<boolean>(true)

  return (
    <Container>

      <Header >

        <h1>Relatório de Apontamento de Produção</h1>

        <Link to='/' >Voltar</Link>

      </Header>

      {
        !isAuth ?
          <Sigin onAuth={() => setIsAuth(true)} /> :
          <ReportList />
      }


    </Container>
  )
}
