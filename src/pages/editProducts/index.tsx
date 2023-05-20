import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, BtCase, Form, InputCase, Msg } from './style'
import { api } from '../../services/api'
import { z } from 'zod'
import { productCreateSchema } from '../../utils/schemas'
import { Header } from '../../components/header'

export function EditPorducts() {

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

      const apiResponse = await api.post<{
        error: boolean,
        msg: string
      }
      >(`/products/${id ? 'edit' : 'create'}`,
        id ?
          { id, data: parsedProducts } :
          parsedProducts)

      setStatus({
        error: apiResponse.data.error,
        msg: apiResponse.data.msg
      })

    } catch (error) {
      console.log(error)
      setStatus({
        error: true,
        msg: 'Falha ao realizar operação!'
      })
    }
  }

  return (
    <Container>
      <Header>
        <Link to='/products' >Voltar</Link>
        <div>
          <h1>Adler Pelzer Group</h1>
          <h2>PRODUTOS</h2>
        </div>
      </Header>

      <Form>
        <h3>
          {
            id ?
              `Atualizar Produto: ${desc}` :
              'Adicionar Produto'
          }
        </h3>

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
          <input type="text"
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
          />
        </InputCase>

        <InputCase>
          <label>UTE:</label>
          <input type="text"
            value={ute}
            onChange={(e) => setUte(e.target.value)}
          />
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

        <Msg error={status.error} >{status.msg}</Msg>


        <BtCase>
          <button
            onClick={() => handleSubmit()}
          >Salvar</button>
        </BtCase>

      </Form>

    </Container>
  )
}
