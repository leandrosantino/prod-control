import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import { api } from '../../services/api'
import { Product, productFiltersSchema, productSchema } from '../../utils/schemas'
import { Link } from 'react-router-dom'
import { Container, EditButton, Main } from './style'
import { Header } from '../../components/header'
import { Table } from '../../components/table'
import { Filters } from '../../components/filters'
import { InputSearch } from '../../components/inputSearch'
import { InputContent } from '../../components/inputContent'

export function Porducts() {

  const [products, setProducts] = useState<Product[]>()
  const [description, setDescription] = useState('')
  const [technicalDescription, setTechnicalDescription] = useState('')
  const [classification, setClassification] = useState('')
  const [ute, setUte] = useState('')

  useEffect(() => {
    (async () => {
      try {

        const filterValues = productFiltersSchema.parse({
          description,
          technicalDescription,
          classification,
          ute,
        })

        const apiResponse = await api.get(`/products`, {
          params: { ...filterValues }
        })

        const data = z.array(productSchema).parse(apiResponse.data)
        setProducts(data)
      } catch {

      }

    })()
  }, [description, technicalDescription, classification, ute])



  return (
    <Container>

      <Header>
        <Link to='/' >Voltar</Link>
        <Link id='addProd' to='/products/edit' >Adicionar Produtos</Link>
        <div>
          <h1>Adler Pelzer Group</h1>
          <h2>PRODUTOS</h2>
        </div>
      </Header>

      <Main>

        <Filters>

          <InputSearch
            label='Descrição Operacional:'
            value={description}
            onChange={setDescription}
          />

          <InputSearch
            label='Descrição Técnica:'
            value={technicalDescription}
            onChange={setTechnicalDescription}
          />

          <InputContent>
            <label>Classificação:</label>
            <select
              value={classification}
              onChange={(e) => setClassification(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="WIP">WIP</option>
              <option value="ACABADO">ACABADO</option>
            </select>
          </InputContent>

          <InputContent>
            <label>UTE:</label>
            <select
              value={ute}
              onChange={(e) => setUte(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="UTE-1">UTE-1</option>
              <option value="UTE-2">UTE-2</option>
              <option value="UTE-3">UTE-3</option>
              <option value="UTE-4">UTE-4</option>
              <option value="UTE-5">UTE-5</option>
            </select>
          </InputContent>

        </Filters>

        <Table>
          <thead>
            <tr>
              <th >Descrição</th>
              <th >Descrição Técnica</th>
              <th >Projeto</th>
              <th >UTE</th>
              <th >Classificação</th>
              <th >Part Number</th>
              <th >Código SAP</th>
              <th >Quantidade</th>
              <th > ---- </th>
            </tr>
          </thead>
          <tbody>
            {products?.map(entry => (
              <tr key={entry.id} >
                <td >{entry.description}</td>
                <td >{entry.technicalDescription}</td>
                <td >{entry.projectNumber}</td>
                <td >{entry.ute}</td>
                <td >{entry.classification}</td>
                <td >{entry.partNumber}</td>
                <td >{entry.sapCode}</td>
                <td >{entry.amount}</td>
                <td >
                  <EditButton>
                    <Link to={`/products/edit/${entry.id}`}>Editar</Link>
                  </EditButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Main>



    </Container>
  )
}
