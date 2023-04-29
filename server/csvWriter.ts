import path from 'path'
import { prisma } from './pirsma'
import { createObjectCsvWriter } from 'csv-writer'

export async function csvWriter() {

  try {
    const data = await prisma.productionRecord.findMany({
      include: {
        product: true
      }
    })

    const records = data.map(record => {
      return {
        id: record.id,
        data: new Date(record.createdAt).toLocaleDateString(),
        time: new Date(record.createdAt).toLocaleTimeString(),
        description: record.product.description,
        partNumber: record.product.partNumber,
        sapCode: record.product.sapCode,
        projectNumber: record.product.projectNumber,
        amount: record.product.amount
      }
    })

    console.log(records)

    const csvWriter = createObjectCsvWriter({
      path: path.join(__dirname, '../report.csv'),
      header: [
        { id: 'id', title: 'Identificação da Etiqueta' },
        { id: 'data', title: 'Data' },
        { id: 'time', title: 'Hora' },
        { id: 'description', title: 'Descrição do Porduto' },
        { id: 'partNumber', title: 'Part Number' },
        { id: 'sapCode', title: 'Código Sap' },
        { id: 'projectNumber', title: 'Projeto' },
        { id: 'amount', title: 'Quant.' },
      ],
      fieldDelimiter: ';',
      encoding: 'utf8'
    });

    await csvWriter.writeRecords(records)

  } catch (error) {
    throw error
  }
}
