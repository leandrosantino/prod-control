import { Link } from "react-router-dom";
import { Header } from "../../style/global";
import { Container, Menu } from "./style";
import { RiProfileLine } from 'react-icons/ri'
import { BsBoxSeamFill } from 'react-icons/bs'
import { HiDocumentReport } from 'react-icons/hi'


export function Home() {
  return (
    <Container>

      <Header>

        <h1>Adler Pelzer Group - Sistema de Apontamento de Produção</h1>

      </Header>

      <Menu>

        <h3>MENU</h3>

        <Link to='/tagGenerator' >
          <span>Gerar Etiquetas</span>
          <RiProfileLine size={25} />
        </Link>
        <Link to='/products' >
          <span>Ver Produtos</span>
          <BsBoxSeamFill size={25} />
        </Link>
        <Link to='/report' >
          <span>Relatório</span>
          <HiDocumentReport size={25} />
        </Link>

      </Menu>

    </Container>
  )
}
