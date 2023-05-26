import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Container } from "./style";
import { InputContent } from "../../components/inputContent";
import { useState } from "react";
import { z } from "zod";
import { useDialog } from "../../hooks/useDialog";
import { api } from "../../services/api";
import fileDownload from 'js-file-download'
import { dateStringToObj } from "../../utils/dateTools";

export function Report() {

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [status, setStatus] = useState({
    error: false,
    msg: ''
  })
  const dialog = useDialog()

  async function handleSubmit() {
    try {

      if (from != '' && to != '') {
        setStatus({
          error: false,
          msg: 'Montando o relatótio...'
        })

        const response = await api.get('/report', {
          params: {
            from, to
          },
          responseType: 'blob'
        })

        if (!response.data.error) {

          const fromObj = dateStringToObj(from)
          const toObj = dateStringToObj(to)

          fileDownload(response.data, `Relatório de Produção (${fromObj.day}_${fromObj.month}_${fromObj.year})-(${toObj.day}_${toObj.month}_${toObj.year}).xlsx`)
          console.log(response)

          dialog.alert({
            title: 'Sucesso!',
            message: 'O relatório está pronto!',
          })

          setStatus({
            error: false,
            msg: ''
          })

          return

        }

        throw new Error('failed to generate report')
      }

      dialog.alert({
        title: 'Erro!',
        message: 'Preencha todos os campos para prosseguir!',
        error: true
      })

    } catch (error) {
      console.log(error)
      dialog.alert({
        title: 'Erro!',
        message: 'Falha ao gerar relatório.',
        error: true,
      })
    }

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
            handleSubmit()
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

        <h4>{status.msg}</h4>

      </Container>
    </>
  )
}
