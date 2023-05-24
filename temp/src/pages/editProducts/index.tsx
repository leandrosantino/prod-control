import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, BtCase, Form, InputCase, Msg } from './style'
import { api } from '../../services/api'
import { z } from 'zod'
import { productCreateSchema } from '../../utils/schemas'
import { Header } from '../../components/header'
import { useDialog } from '../../hooks/useDialog'

export function EditPorducts() {

  const dialog = useDialog()

  const { id } = useParams<{ id: string }>()

  const [description, setDescription] = useState<string>()
  const [desc, setDesc] = useState<string>()
  const [project, setProject] = useState<string>()
  const [partNumber, setPartNumber] = useState<string>()
  const [sapCode, setSapCode] = useState<string>()
  const [amount, setAmount] = useState<number>()

  const [ute, setUte] = useState<string>()
  const [classification, setClassification] = useState<string>()
  const [technicalDescription, setTechnicalDescription] = useState<string>()

  const [status, setStatus] = useState<{ msg: string, error: boolean }>({
    error: false, msg: ''
  })

  useEffect(() => {
    setStatus({
      error: false,
      msg: ''
    })
  }, [description, project, partNumber, sapCode, amount])

  useEffect(() => {
    (async () => {
      const apiResponse = await api.get(`/product/${id}`)
      console.log(apiResponse.data)
      const product = productCreateSchema.parse(apiResponse.data)
      setDescription(product.description)
      setDesc(product.description)
      setProject(product.projectNumber)
      setPartNumber(product.partNumber)
      setSapCode(product.sapCode)
      setAmount(product.amount)
      setUte(product.ute)
      setClassification(product.classification)
      setTechnicalDescription(product.technicalDescription)
    })()
    // eslint-disable-next-line
  }, [])

  async function handleSubmit() {
    try {

      const parsedProducts = productCreateSchema.parse({
        description,
        projectNumber: project,
        partNumber,
        sapCode,
        amount,
        ute,
        classification,
        technicalDescription,
      })

      dialog.question({
        title: 'Atenção!',
        message: 'Realmente deseja salvar as alterações?',
        accept() {

          dialog.prompt({
            title: 'Autenticação',
            message: 'Insira a senha para prosseguir.',
            type: 'password',
            async accept(value: string) {
              try {
                const authResp = await api.get('/auth', {
                  params: {
                    password: value
                  }
                })
                const { isAuth } = z.object({
                  isAuth: z.boolean()
                }).parse(authResp.data)

                if (isAuth) {
                  const apiResponse = await api.post<{
                    error: boolean,
                    msg: string
                  }
                  >(`/products/${id ? 'edit' : 'create'}`,
                    id ?
                      { id, data: parsedProducts } :
                      parsedProducts)

                  dialog.alert({
                    title: apiResponse.data.error ? 'Erro ao salvar!' : 'Sucesso!',
                    message: apiResponse.data.msg,
                    error: apiResponse.data.error
                  })
                  return
                }

                dialog.alert({
                  title: 'Erro!',
                  message: 'Senha inválida, tente novamente!',
                  error: true
                })
              } catch {
                dialog.alert({
                  title: 'Falha ao realizar operação!',
                  message: 'Erro inesperado',
                  error: true
                })
              }

            },
            refuse() { },
          })

        },
        refuse() { }
      })

    } catch (error) {
      console.log(error)
      dialog.alert({
        title: 'Falha ao realizar operação!',
        message: 'Preencha todos os campos e tente novamente.',
        error: true,
      })
    }
  }

  return (
    <Container>
      <Header>
        <Link to='/products' >Voltar</Link>
        <h1>{
          id ? 'Editar Produto' : 'Adicionar Produto'
        }</h1>
      </Header>

      <Form>

        {id && <h3>{desc}</h3>}

        <InputCase>
          <label>Descrição Operacional:</label>
          <input
            style={{ width: '100%' }}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputCase>

        <InputCase>
          <label>Descrição Técnica:</label>
          <input
            style={{ width: '100%' }}
            type="text"
            value={technicalDescription}
            onChange={(e) => setTechnicalDescription(e.target.value)}
          />
        </InputCase>

        <InputCase>
          <label>Classificação:</label>
          <select
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
          >
            <option value="WIP">WIP</option>
            <option value="ACABADO">ACABADO</option>
          </select>
        </InputCase>

        <InputCase>
          <label>UTE:</label>
          <select
            value={ute}
            onChange={(e) => setUte(e.target.value)}
          >
            <option value="UTE-1">UTE-1</option>
            <option value="UTE-2">UTE-2</option>
            <option value="UTE-3">UTE-3</option>
            <option value="UTE-4">UTE-4</option>
            <option value="UTE-5">UTE-5</option>
          </select>
        </InputCase>

        <InputCase>
          <label>Projeto:</label>
          <input type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
        </InputCase>

        <InputCase>
          <label>Part Number:</label>
          <input type="text"
            value={partNumber}
            onChange={(e) => setPartNumber(e.target.value)}
          />
        </InputCase>

        <InputCase>
          <label>Código SAP:</label>
          <input type="text"
            value={sapCode}
            onChange={(e) => setSapCode(e.target.value)}
          />
        </InputCase>

        <InputCase>
          <label>Quantidade:</label>
          <input type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </InputCase>

        {/* <Msg error={status.error} >{status.msg}</Msg> */}


        <BtCase>
          <button
            onClick={() => handleSubmit()}
          >Salvar</button>
        </BtCase>

      </Form>

    </Container>
  )
}
