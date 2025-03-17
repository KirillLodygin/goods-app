import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const items = [
    {
      label: 'Все товары и услуги',
      value: 'allGoods',
      id: 'allGoods'
    },
    {
      type: 'separator',
    },
    {
      type: 'label',
      label: 'Категория 1',
    },
    {
      label: 'Гробы',
      value: 'coffins',
      quantity: 5,
      id: 'coffins'
    },
    {
      label: 'Урны',
      value: 'caskets',
      quantity: 15,
      id: 'caskets'
    },
    {
      type: 'separator',
    },
    {
      type: 'label',
      label: 'Категория 2',
    },
    {
      label: 'Тапки',
      value: 'slippers',
      quantity: 10,
      id: 'slippers'
    },
    {
      label: 'Покрывала',
      value: 'bedspreads',
      quantity: 5,
      id: 'bedspreads'
    },
  ]

  return {
    statusCode: 200,
    body: items,
  }
})
