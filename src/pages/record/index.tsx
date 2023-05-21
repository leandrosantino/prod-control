import React, { useState } from 'react';
import { Container, Main } from './style';
import { Sigin } from '../../components/sigin';
import { Header } from '../../components/header';
import { Link } from 'react-router-dom';
import { Filters } from '../../components/filters';
import { Table } from '../../components/table';
import { ProductionRecord, productionRecordSchema } from '../../utils/schemas';
import { FaTrash } from 'react-icons/fa'
import { InputSearch } from '../../components/inputSearch';
import { InputContent } from '../../components/inputContent';
import { useDialog } from '../../hooks/useDialog';
import { z } from 'zod';
import { api } from '../../services/api';



export function Record() {

  const [isAuth, setIsAuth] = useState<boolean>(true)
  const [productionRecord, setProductionRecor] = useState<ProductionRecord[]>([
    {
      id: 'clhhreaft0000m5akfne6m1zd',
      amount: 1,
      createdAt: new Date(),
      product: {
        id: 'çudhfpvoçisrng',
        amount: 1,
        classification: 'WIP',
        description: 'LIBERADO FRONT FENDER Esquerdo (LH) 521',
        technicalDescription: '519547723 ISOLAMENTO DO PARALAMA ESQ 521',
        partNumber: '21365874651',
        sapCode: '54568586',
        projectNumber: '226',
        ute: 'UTE-1'
      }
    }
  ])
  const [description, setDescription] = useState('')
  const [technicalDescription, setTechnicalDescription] = useState('')
  const [classification, setClassification] = useState('')
  const [ute, setUte] = useState('')
  const [date, setDate] = useState('')

  const dialog = useDialog()

  async function handleDelete() {

    dialog.question({
      title: 'Atenção!',
      message: 'Realmente deseja apagar este registro? esta ação não pode ser revertida!',

      async accept() {

        console.log('accept')
        dialog.prompt({
          title: 'Autenticação',
          message: 'Insira a senha para prosseguir!',
          type: 'password',
          async accept(value) {
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

                dialog.alert({
                  title: 'Sucesso!',
                  message: 'O registro foi apagado!',
                })
                return
              }

              dialog.alert({
                title: 'Erro!',
                message: 'Senha inválida, tente novamente!',
                error: true
              })

            } catch { }

          },
          refuse() { },
        })

      },
      refuse() { },
    })


  }


  return (
    <Container>

      <Header >

        <h1>Registro de Produção</h1>

        <Link to='/' >Voltar</Link>

      </Header>

      <Main>
        {
          !isAuth ?
            <Sigin onAuth={() => setIsAuth(true)} /> :
            <>

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
                  <label>Data:</label>
                  <input type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </InputContent>

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
                    <th>Id</th>
                    <th>Descição</th>
                    <th>Descição Técnica</th>
                    <th>Data</th>
                    <th>UTE</th>
                    <th>Classificação</th>
                    <th>Quantidade</th>
                    <th>----</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    productionRecord.map(entry => (
                      <tr>
                        <td>{entry.id}</td>
                        <td>{entry.product.description}</td>
                        <td>{entry.product.technicalDescription}</td>
                        <td>{entry.createdAt.toLocaleString()}</td>
                        <td>{entry.product.ute}</td>
                        <td>{entry.product.classification}</td>
                        <td>{entry.amount}</td>
                        <td>
                          <button
                            onClick={() => handleDelete()}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>

              </Table>


            </>
        }
      </Main>


    </Container>
  )
}
