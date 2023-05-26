import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Container, Form, Msg, ProductInfo } from "./style";
import { InputContent } from "../../components/inputContent";
import { useEffect, useState } from "react";
import { Product, QrCodeInfo, productSchema, qrCodeInfoSchema } from "../../utils/schemas";
import { api } from "../../services/api";
import { useDialog } from "../../hooks/useDialog";
import { z } from "zod";

export function RegisterTag() {

  const [code, setCode] = useState('')
  const [qrCodeState, setQrCodeSatate] = useState<QrCodeInfo>()
  const [product, setProduct] = useState<Product>({} as Product)
  const [isFraction, setIsFraction] = useState<boolean>(false)
  const [status, setStatus] = useState<{ msg: string, error: boolean }>({
    msg: '',
    error: false,
  })
  const [fractionAmount, setFractionAmount] = useState<number>(0)


  useEffect(() => {
    let temp: string[] = []
    window.addEventListener('keypress', ({ key }) => {
      if (key != 'Enter') { temp.push(key) }
      if (key === 'Enter') {
        let value = ''
        temp.forEach(key => { value += key })
        value = value.replaceAll('{', '}')
        value = value.replaceAll('^', '"')
        value = value.replaceAll('`', '{')
        value = value.replaceAll('Ç', ':')
        value = value.replaceAll('â', '"a')
        value = value.replaceAll('ê', '"e')
        value = value.replaceAll('î', '"i')
        value = value.replaceAll('ô', '"o')
        value = value.replaceAll('û', '"u')
        setCode(value)
        temp = []
      }
    })
  })

  const dialog = useDialog()

  async function handleScanner(code: string) {
    try {
      const qrcodeValue = qrCodeInfoSchema.parse(JSON.parse(code))
      const fractional = qrcodeValue?.amount ? false : true

      setQrCodeSatate(qrcodeValue)
      setIsFraction(fractional)

      if (fractional) {
        setStatus({
          msg: 'Etiqueta Fracionada. Por favor insira a quantidade no campo abaixo!',
          error: true
        })
      }

      try {
        if (qrcodeValue.productId != '') {
          const productData = productSchema.parse(
            (await api.get(`/product/${qrcodeValue.productId}`)).data
          )
          setProduct(productData)

          if (productData && !fractional) {
            await handleRegister(qrcodeValue)
          }

          setCode('')
        }
      } catch (error) {
        dialog.alert({
          title: 'Erro!',
          message: 'Produto não cadastrado',
          error: true,
        })
      }

    } catch (error) {
      if (code != '') {
        dialog.alert({
          title: 'Erro!',
          message: 'Esta etiqueta está obsoleta!',
          error: true,
        })
      }
    }
  }

  async function handleRegister({ amount, productId, tagId }: QrCodeInfo) {
    try {

      const { success, msg } = z.object({
        success: z.boolean(),
        msg: z.string(),
      }).parse((await api.get('/reg', {
        params: { amount, item: productId, tag: tagId }
      })).data)

      if (success) {
        console.log(amount, productId, tagId)
        setStatus({
          msg: 'Cadastrado com Sucesso!',
          error: false
        })
        setTimeout(() => {
          setStatus({
            msg: '',
            error: false
          })
        }, 3000)
        setIsFraction(false)
        return
      }

      dialog.alert({
        title: 'Erro!',
        message: msg,
        error: !success
      })


    } catch (error) {
      console.log(error)
      dialog.alert({
        title: 'Erro!',
        message: 'Falha inesperada!',
        error: true
      })
    }
  }

  useEffect(() => {
    handleScanner(code)
  }, [code])

  return (
    <>
      <Header>

        <Link to='/'>
          voltar
        </Link>

        <h1>
          Registrar Etiquetas
        </h1>
      </Header>

      <Container>

        <h3>Informações da Etiqueta</h3>
        <ProductInfo>
          <div>
            <h5>Id do Produto</h5>
            <p>{product?.id}</p>
          </div>

          <div>
            <h5>Id da Etiqueta</h5>
            <p>{qrCodeState?.tagId}</p>
          </div>

          <div>
            <h5>Descrição Operacional</h5>
            <p>{product?.description}</p>
          </div>

          <div>
            <h5>Descrição Técnica</h5>
            <p>{product?.technicalDescription}</p>
          </div>

          <div>
            <h5>Projeto</h5>
            <p>{product?.projectNumber}</p>
          </div>

          <div>
            <h5>Partnumber</h5>
            <p>{product?.partNumber}</p>
          </div>

          <div>
            <h5>Código SAP</h5>
            <p>{product?.sapCode}</p>
          </div>

          <div>
            <h5>Quantidade do Produto</h5>
            <p>{product?.amount}</p>
          </div>

          <div>
            <h5>Etiqueta Fracionada</h5>
            <p>{qrCodeState ? isFraction ? 'SIM' : 'NÃO' : ''}</p>
          </div>

        </ProductInfo>

        <Msg error={status.error}>{status.msg}</Msg>

        {isFraction &&
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              if (qrCodeState) {
                if (fractionAmount > 0) {
                  const data = qrCodeState
                  data.amount = fractionAmount
                  handleRegister(data)
                  return
                }
                dialog.alert({
                  title: 'Erro!',
                  message: 'Preencha o pampo de quantidade para continuar!',
                  error: true
                })
              }
              setQrCodeSatate({} as QrCodeInfo)
              setProduct({} as Product)
            }}
          >

            <InputContent>

              <label>Quantidade da Embalagem</label>
              <input
                value={fractionAmount}
                onChange={e => setFractionAmount(Number(e.target.value))}
                required
                disabled={!isFraction}
                type="number"
              />

            </InputContent>


            <button
              disabled={!isFraction}
            >
              Registrar
            </button>

          </Form>}





      </Container>
    </>
  )
}
