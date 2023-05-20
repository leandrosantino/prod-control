import React, { useEffect, useState } from 'react'
import { z } from 'zod'
import { api } from '../../services/api'
import { Product, productSchema } from '../../utils/schemas'
import { Link } from 'react-router-dom'
import { Container, EditButton } from './style'
import { Col, Row, Title, Table } from '../../style/global'
import { Header } from '../../components/header'

export function Porducts() {

  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    (async () => {
      const apiResponse = await api.get(`/products`)
      console.log(apiResponse.data)
      setProducts(z.array(productSchema).parse(apiResponse.data))
    })()
  }, [])


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

      <Title>
        <Col style={{ width: '200px' }} >Descrição</Col>
        <Col style={{ width: '200px' }} >Descrição Técnica</Col>
        <Col >Projeto</Col>
        <Col >UTE</Col>
        <Col >Classificação</Col>
        <Col >Part Number</Col>
        <Col >Código SAP</Col>
        <Col >Quantidade</Col>
        <Col style={{ width: '70px' }} > ---- </Col>
      </Title>
      <Table>
        {products?.map(entry => (
          <Row key={entry.id} >
            <Col style={{ width: '200px' }} >{entry.description}</Col>
            <Col style={{ width: '200px' }} >{entry.technicalDescription}</Col>
            <Col >{entry.projectNumber}</Col>
            <Col >{entry.ute}</Col>
            <Col >{entry.classification}</Col>
            <Col >{entry.partNumber}</Col>
            <Col >{entry.sapCode}</Col>
            <Col >{entry.amount}</Col>
            <Col style={{ width: '70px' }} >
              <EditButton>
                <Link to={`/products/edit/${entry.id}`}>Editar</Link>
              </EditButton>
            </Col>
          </Row>
        ))}
      </Table>


    </Container>
  )
}
