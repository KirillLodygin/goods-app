import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const items = [{ name: 'Наследие', image: '/logo.png' }]

  return {
    statusCode: 200,
    body: items,
  }
})
