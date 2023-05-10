import { useCallback, useState, useEffect } from "react"
import { api } from "../../services/api"
import { idListSchema, Product, productSchema } from '../../utils/schemas'
import { Container, EditProduct, Header, InputContent } from "./style"
import Tag from "../../components/Tag"
import { z } from "zod"
import { Link } from "react-router-dom"

export default function Home() {

  const [idList, setIdList] = useState<string[]>()
  const [productId, setProductId] = useState<number>(1)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    (async () => {
      try {

        const apiResponse = await api.get(`/products`)
        console.log(apiResponse.data)
        setProducts(z.array(productSchema).parse(apiResponse.data))

      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const handleGetIds = useCallback(() => {
    (async () => {
      try {

        const apiResponse = await api.get(`/tags/getids/${20}`)
        setIdList(idListSchema.parse(apiResponse.data))

      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    handleGetIds()
  }, [productId, handleGetIds])


  return (
    <Container>

      <EditProduct>
        <Link
          to='/products'
        >
          Ver Produtos
        </Link>
      </EditProduct>

      <Header>

        <h1>
          Gerador de Etiquetas
        </h1>

        <InputContent>
          <label htmlFor="product">Produto:</label>
          <select
            id="product"
            onChange={(e) => setProductId(Number(e.target.value))}
            value={productId}
          >
            {
              products?.map((entry, index) => (
                <option key={entry.id} value={index} >{entry.description}</option>
              ))
            }
          </select>
        </InputContent>
        <button onClick={() => handleGetIds()}>
          Gerar Etiquetas
        </button>

        <button onClick={() => window.print()}>
          Imprimir
        </button>

      </Header>

      {
        idList?.map((id) => (
          <Tag
            key={id}
            id={id}
            product={products[productId]}
          />
        ))
      }

    </Container>
  )
}
