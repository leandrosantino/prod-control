import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Container } from "./style";
import { InputContent } from "../../components/inputContent";
import { useState } from "react";
import { z } from "zod";

export function Report() {

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  function handleSubmit() {


  }

  return (
    <>
      <Header>
        <Link to='/' >Voltar</Link>
        <h1>Relatórios de Produção</h1>
      </Header>

      <Container>

        <h3>Insira o período desejado para gerar o relatório</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <InputContent>
            <label>De:</label>
            <input
              value={from}
              onChange={e => setFrom(e.target.value)}
              type="date"
            />
          </InputContent>

          <InputContent>
            <label>Até:</label>
            <input
              value={to}
              onChange={e => setTo(e.target.value)}
              type="date"
            />
          </InputContent>

          <button
            type="submit"
          >
            Gerar Relatório
          </button>
        </form>

      </Container>
    </>
  )
}
