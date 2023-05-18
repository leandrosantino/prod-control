import { Col, Table, Row, Title } from '../../style/global'
import { Container } from './style'


export function ReportList() {

  const products: any[] = [

  ]

  return (
    <Container>

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
            </Col>
          </Row>
        ))}
      </Table>

    </Container>
  )
}
