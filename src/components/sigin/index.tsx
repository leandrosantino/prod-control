import { Container } from "./style"


type Props = {
  onAuth: () => void
}

export function Sigin({ onAuth }: Props) {

  return (
    <Container>


      <h2>Autorização</h2>

      <span>Insira a senha para acessar os dados</span>

      <input type="password" placeholder="senha" name="" id="" />

      <div>
        <button
          onClick={() => onAuth()}
        >Entrar</button>
      </div>


    </Container>
  )
}


