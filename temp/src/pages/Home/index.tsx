import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Container, Menu } from "./style";
import { RiProfileLine } from 'react-icons/ri'
import { BsBoxSeamFill } from 'react-icons/bs'
import { HiDocumentReport } from 'react-icons/hi'
import { IoIosListBox } from 'react-icons/io'
import { MdQrCodeScanner } from 'react-icons/md'


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
        <Link to='/registerTag' >
          <span>Registrar Etiquetas</span>
          <MdQrCodeScanner size={25} />
        </Link>
        <Link to='/products' >
          <span>Ver Produtos</span>
          <BsBoxSeamFill size={25} />
        </Link>
        <Link to='/record' >
          <span>Registro de Produção</span>
          <IoIosListBox size={25} />
        </Link>
        <Link to='/report' >
          <span>Relatórios</span>
          <HiDocumentReport size={25} />
        </Link>

      </Menu>

    </Container>
  )
}
