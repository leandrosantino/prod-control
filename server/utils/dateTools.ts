export const dateRejex = /\d{4}-\d{2}-\d{2}/


export function getRotationFromDate(now: Date) {
  let turno = '0'

  const y = now.getFullYear()
  const m = now.getMonth()
  const d = now.getDate()

  const h1 = new Date(y, m, d, 6, 10, 0)
  const h2 = new Date(y, m, d, 15, 48, 0)
  const h3 = new Date(y, m, d, 23, 59, 0)
  const h4 = new Date(y, m, d, 0, 0, 0)
  const h5 = new Date(y, m, d, 1, 9, 0)

  if (now >= h1 && now < h2) { turno = '1' }
  if (now >= h2 && now < h3) { turno = '2' }
  if (now >= h4 && now < h5) { turno = '2' }
  if (now >= h5 && now < h1) { turno = '3' }

  return turno
}

export function dateStringToObj(strdate: string) {
  if (dateRejex.test(strdate)) {
    const date = strdate.split('-').map(entry => Number(entry))
    return { day: date[2], month: date[1], year: date[0] }
  }
  throw new Error('the date entered is in unknown format')
}
