import { createObjectCsvWriter } from "csv-writer"
import path from "path"
import config from "../config.json"
import { prisma } from "../services/prisma"
import { getRotationFromDate } from "./dateTools"
import { ProductionRecordType } from "./schemas"
import xlsx from 'node-xlsx';

export function createWorksheetBuffer(data: ProductionRecordType[]) {

  const val = [
    [1, 2, 3],
    [true, false, null, 'sheetjs'],
    ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
    ['baz', null, 'qux'],
  ];

  const buffer = xlsx.build([{ name: 'mySheetName', data: val, options: {} }],);

  return buffer

}


export async function csvWriter(day: number, month: number, year: number) {

  try {

    let data = await prisma.productionRecord.findMany({
      where: {
        createdAt: {
          gte: new Date(year, month - 1, day, 0, 0, 0).toISOString(),
          lte: new Date(year, month - 1, day, 23, 59, 59).toISOString(),
        }
      },
      include: {
        product: true
      }
    })

    const records = data.map((record) => {
      return {
        id: record.id,
        data: new Date(record.createdAt).toLocaleDateString(),
        time: new Date(record.createdAt).toLocaleTimeString(),
        description: record.product.description,
        technicalDescription: record.product.technicalDescription,
        classification: record.product.classification,
        partNumber: record.product.partNumber,
        sapCode: record.product.sapCode,
        projectNumber: record.product.projectNumber,
        amount: record.product.amount,
        turno: getRotationFromDate(new Date(record.createdAt)),
      }
    })


    const fileDate = new Date(year, month - 1, day)
      .toLocaleDateString()
      .replace('/', '-')
      .replace('/', '-')

    const local = path.join(config.report_path, `Relatório de Produção -${fileDate}.csv`)

    const csvWriter = createObjectCsvWriter({
      path: path.resolve(local),
      header: [
        { id: 'id', title: 'Identificação da Etiqueta' },
        { id: 'data', title: 'Data' },
        { id: 'time', title: 'Hora' },
        { id: 'technicalDescription', title: 'Descricao do Porduto' },
        { id: 'description', title: 'Descricao do Operacional' },
        { id: 'classification', title: 'CLassificacao' },
        { id: 'partNumber', title: 'Part Number' },
        { id: 'sapCode', title: 'Codigo Sap' },
        { id: 'projectNumber', title: 'Projeto' },
        { id: 'amount', title: 'Quant.' },
        { id: 'turno', title: 'Turno' },
      ],
      fieldDelimiter: ';',
      encoding: 'utf8'
    });

    await csvWriter.writeRecords(records)

  } catch (error) {
    console.log(error)
    throw error
  }
}
