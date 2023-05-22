import styled from "styled-components";


export const Content = styled.div`
  width: 190mm;
  height: 277mm;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 80px;

  @media print {
    margin-top: 0;
  }
`

export const Container = styled.div`

.fristTag,
.secondTag {
  width: 100%;
  height: 50%;
}

.fristTag {
  border-bottom: 2px dashed #000;

  margin: 12px
}

.colorBlue {
  color: #002060;
}

.header,
.header2 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4px;
  gap: 8px;
}

.header {
  border: 1px solid #000;
}

.header2 {
  border-bottom: 2px solid #002060;
}


.header h5 {
  font-weight: 600;
}

.label {
  padding: 4px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
}

.description {
  background-color: #000;
  color: #fff;
  font-size: 16px;
  padding: 5px;
  height: 70px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  span{
    padding: 5px;
  }

  #ute{
    width: 55px;
    font-size: 14px;
  }

  div{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
  }
}

.dataContent {
  width: 100%;
  display: flex;
  align-items: start;
  gap: 8px;
}

.dataContent .frame {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.codeContent,
.codeContent2 {
  width: 100%;
  max-height: 36px;
  min-height: 36px;
  padding: 8px 8px;
  font-size: 20px;
  font-weight: 700;
}

.infoContent,
.infoContent2 {
  width: 100%;
  padding: 4px;
  text-align: center;
  font-size: 46px;
  min-height: 66px;
  font-weight: 700;
}

.codeContent,
.infoContent {
  border: 1px solid #000;
}

.codeContent2,
.infoContent2 {
  border-bottom: 2px solid #002060;
  border-top: 2px solid #002060;
}

.fifo,
.qrcode {
  width: 100%;
  height: 180px;
}

.fifo {
  border: 1px solid #000;
}

.qrcode {
  border: 2px solid #002060;
  border-right-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qrCodeContent {
  max-width: 260px;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid #002060;
}


.form {
  width: 100%;
  height: 88px;
  margin-top: 24px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 4px;
  padding: 2px;
  background-color: #c2c2c2;
}

.formFrame {
  display: flex;
  height: 33.33%;
  width: 100%;
}

.formInput {
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.widthTurno {
  width: 70px !important;
}

.formlabel {
  min-width: 123px;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
  text-align: end;
}

.footer {
  width: 100%;
  text-align: end;
  padding: 4px;
}

.footer span {
  font-weight: 600;
}


`
