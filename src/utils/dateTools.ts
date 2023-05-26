export const dateRejex = /\d{4}-\d{2}-\d{2}/
export function dateStringToObj(strdate: string) {
  if (dateRejex.test(strdate)) {
    const date = strdate.split('-').map(entry => Number(entry))
    return { day: date[2], month: date[1], year: date[0] }
  }
  throw new Error('the date entered is in unknown format')
}
