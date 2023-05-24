import { useCallback, useEffect, useRef, useState } from 'react';
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

  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [productionRecord, setProductionRecord] = useState<ProductionRecord[]>()
  const [description, setDescription] = useState('')
  const [technicalDescription, setTechnicalDescription] = useState('')
  const [classification, setClassification] = useState('')
  const [ute, setUte] = useState('')
  const [date, setDate] = useState('')
  const [identification, setIdentification] = useState('')

  const dialog = useDialog()

  const cursor = useRef<string>('')
  const page = useRef<number>(1)

  useEffect(() => {

    setProductionRecord([])
    cursor.current = ''
    page.current = 1
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        getRecords()
          .then(records => {
            setProductionRecord(state => [...state ? state : [], ...records])
            console.log(productionRecord?.length)
          })
      }
    })
    const sentinel = document.querySelector('#sentinel')
    sentinel && intersectionObserver.observe(sentinel)
    return () => intersectionObserver.disconnect()

  }, [description, technicalDescription, classification, ute, date, isAuth, identification])


  useEffect(() => {
    if (productionRecord) {
      const id = productionRecord[productionRecord.length - 1]?.id
      if (id) cursor.current = id
    }
    if (cursor.current) {
      page.current = page.current + 1
      console.log(cursor.current, page.current)
    }
  }, [productionRecord])

  function loadRecords() {
    setProductionRecord([])
    cursor.current = ''
    page.current = 1
    getRecords()
      .then(records => {
        setProductionRecord(state => [...state ? state : [], ...records])
        console.log(productionRecord?.length)
      })
  }

  async function getRecords() {
    try {
      const apiResponse = await api.get('/productionRecord', {
        params: {
          cursor: cursor.current, page: page.current,
          description, technicalDescription, classification, ute, date,
          id: identification,
        }
      })
      return z.array(productionRecordSchema).parse(apiResponse.data)
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async function handleDelete(id: string) {

    dialog.question({
      title: 'Atenção!',
      message: 'Realmente deseja apagar este registro? esta ação não pode ser revertida!',

      async accept() {
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

                const { error, msg } = z.object({
                  error: z.boolean(),
                  msg: z.string()
                }).parse((await api.delete('/productionRecord', {
                  params: { id }
                })).data)

                dialog.alert({
                  title: error ? 'Erro!' : 'Sucesso!',
                  message: msg,
                  error
                })

                if (!error) {
                  loadRecords()
                }

                return
              }

              dialog.alert({
                title: 'Erro!',
                message: 'Senha inválida, tente novamente!',
                error: true
              })

            } catch (error) {
              console.log(error)
              dialog.alert({
                title: 'Falha ao realizar a operação!',
                message: 'Erro inesperado!',
                error: true
              })
            }

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
                  label='Identificação'
                  value={identification}
                  onChange={setIdentification}
                />

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
                    productionRecord?.map(entry => (

                      <tr key={entry.id}>
                        <td>{entry.id}</td>
                        <td>{entry.product.description}</td>
                        <td>{entry.product.technicalDescription}</td>
                        <td>{new Date(entry.createdAt).toLocaleString()}</td>
                        <td>{entry.product.ute}</td>
                        <td>{entry.product.classification}</td>
                        <td>{entry.amount}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(entry.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>

                    ))
                  }
                  <span id='sentinel' ></span>
                </tbody>

              </Table>


            </>
        }
      </Main>


    </Container>
  )
}
