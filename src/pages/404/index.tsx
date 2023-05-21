import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Container } from "./style";

export function NotFound() {
  return (
    <Container>

      <Header>
        <h1>Adler Pelzer Group</h1>
      </Header>


      <h2>Esta rota não existe!</h2>
      <p>
        Clique <Link to='/' >aqui</Link>, para voltar para página inicial.
      </p>


    </Container>
  )
}
