import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const items = [{ rating: 4.7, reviews: 19 }]

  return {
    statusCode: 200,
    body: items,
  }
})