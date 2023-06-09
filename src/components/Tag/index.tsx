import React from 'react'
import { Product } from '../../utils/schemas';
import { QRCodeCanvas } from 'qrcode.react';
import { Container, Content } from './style'

interface Props {
  id: string;
  product: Product;
  isFractional: boolean;
}

//`http://${host}:3333/reg?item=${product.id}&tag=${id}`

export default function Tag({ id, product, isFractional }: Props) {


  const qrcode = (
    <>
      < QRCodeCanvas
        id="qrCode"
        value={JSON.stringify({
          productId: product?.id,
          tagId: id,
          amount: isFractional ? 0 : product?.amount
        })}
        size={240}
        fgColor='#002060'
        bgColor={"#fff "} level={"H"}
      />
    </>
  );

  return (
    <Container>
      <Content className='container' >

        <div className='fristTag' >
          <header className='header' >
            <h2>ETIQUETA DE PRODUTO ACABADO</h2>
            <h4>ADLER PELZER PE</h4>
          </header>

          <div className='label' >DESCRIÇÃO:</div>

          <div className='description'>
            <div>
              <span>{product?.description}</span>
              <span>{product?.technicalDescription}</span>
            </div>
            <span id='ute' >{product?.ute}</span>
          </div>

          <section className='dataContent' >
            <div className='frame' >
              <div className='label' >CODIGO JEEP:</div>
              <div className='codeContent'>
                {product?.partNumber}
              </div>

              <div className='label' >CODIGO ADLER:</div>
              <div className='codeContent'>
                {product?.sapCode}
              </div>

              <div className='label' >QUANTIDADE:</div>
              <div className='infoContent'>
                {isFractional ? '' : product?.amount}
              </div>

              <div className='label' >MODELO:</div>
              <div className='infoContent' style={{ padding: 14 }} >
                {product?.projectNumber}
              </div>
            </div>

            <div className='frame' >
              <div className='label' >FIFO:</div>
              <div className='fifo'></div>

              <div className='form'>

                <div className='formFrame' >
                  <div className='formlabel' >RESPONSÁVEL:</div>
                  <div className='formInput'></div>
                </div>

                <div className='formFrame' >
                  <div className='formlabel' >OPERADOR:</div>
                  <div className='formInput'></div>
                </div>

                <div className='formFrame' >
                  <div className='formlabel' >TURNO:</div>
                  <div className='widthTurno formInput'></div>
                </div>

              </div>
            </div>
          </section>

          <div className="footer">
            <span>ID:</span> {id?.toUpperCase()}
          </div>

        </div>

        <div className='secondTag colorBlue'
          style={{ border: '2px solid #002060' }}
        >
          <header className='header2'
          >
            <h2>ETIQUETA DE PRODUTO ACABADO</h2>
            <h4>ADLER PELZER PE</h4>
          </header>

          <div className='label' >DESCRIÇÃO:</div>

          <div className='description'
            style={{ backgroundColor: '#002060' }}>
            <div>
              <span>{product?.description}</span>
              <span>{product?.technicalDescription}</span>
            </div>
            <span id='ute'>{product?.ute}</span>
          </div>



          <section className='dataContent' style={{ gap: 0 }} >
            <div className='frame' >
              <div className='label' >CODIGO JEEP:</div>
              <div className='codeContent2 colorBlue'>
                {product?.partNumber}
              </div>

              <div className='label' >CODIGO ADLER:</div>
              <div className='codeContent2 colorBlue'>
                {product?.sapCode}
              </div>

              <div className='label' >QUANTIDADE:</div>
              <div className='infoContent2 colorBlue'>
                {isFractional ? '' : product?.amount}
              </div>

              <div className='label' >MODELO:</div>
              <div className='infoContent2 colorBlue' style={{ padding: 14 }} >
                {product?.projectNumber}
              </div>
            </div>

            <div className='frame ' >
              <div className='label' >QRCODE:</div>
              <div className='qrcode colorBlue' style={{ height: 296 }} >
                <div className='qrCodeContent' >{qrcode} </div>
              </div>
            </div>
          </section>

          <div className="footer">
            <span>ID:</span> {id?.toUpperCase()}
          </div>

        </div>

      </Content>
    </Container>
  )
}
