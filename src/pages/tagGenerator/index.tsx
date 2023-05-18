import { useCallback, useState, useEffect } from "react"
import { api } from "../../services/api"
import { idListSchema, Product, productSchema } from '../../utils/schemas'
import { Container, EditProduct, Header, InputContent } from "./style"
import Tag from "../../components/Tag"
import { z } from "zod"
import { Link } from "react-router-dom"

export function TagGenerator() {

  const [idList, setIdList] = useState<string[]>()
  const [productId, setProductId] = useState<number>(1)
  const [products, setProducts] = useState<Product[]>([])
  const [amount, setAmount] = useState<number>(1)

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

        const apiResponse = await api.get(`/tags/getids/${amount}`)
        setIdList(idListSchema.parse(apiResponse.data))

      } catch (error) {
        console.log(error)
      }
    })()
  }, [amount])

  useEffect(() => {
    handleGetIds()
  }, [productId, handleGetIds])


  return (
    <Container>

      <EditProduct>
        <Link
          to='/'
        >
          Voltar
        </Link>
      </EditProduct>

      <Header>

        <h1>
          Gerador de Etiquetas
        </h1>

        <InputContent>
          <label htmlFor="product">Quant.:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </InputContent>

        <InputContent>
          <label htmlFor="product">Produto:</label>
          <select
            id="product"
            onChange={(e) => setProductId(Number(e.target.value))}
            value={productId}
          >
            {
              products?.map((entry, index) => (
                <option key={entry.id} value={index} >{entry.description} - {entry.ute}</option>
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
