import { z } from "zod"
import { api } from "../../services/api"
import { Container } from "./style"
import { useDialog } from "../../hooks/useDialog"
import { useState } from "react"


type Props = {
  onAuth: () => void
}

export function Sigin({ onAuth }: Props) {

  const dialog = useDialog()

  const [password, setPassword] = useState<string>('')

  async function handleLogin() {
    try {
      const authResp = await api.get('/auth', {
        params: {
          password
        }
      })
      const { isAuth } = z.object({
        isAuth: z.boolean()
      }).parse(authResp.data)

      if (isAuth) {
        onAuth()
        return
      }

      dialog.alert({
        title: 'Erro!',
        message: 'Senha inválida, tente novamente!',
        error: true
      })
    } catch { }
  }

  return (
    <Container>


      <h2>Autorização</h2>

      <span>Insira a senha para acessar os dados</span>

      <input
        type="password"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <button
          onClick={() => handleLogin()}
        >Entrar</button>
      </div>


    </Container>
  )
}


