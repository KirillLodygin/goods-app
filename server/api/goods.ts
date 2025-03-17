import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const items = [
    {
      imgPath: '/good_1.png',
      isProgressing: true,
      isHidden: false,
      cost: '450 500 ₽',
      info: 'Сlavia Nord Grand сценическое цифровое пианино',
      id: 1
    },
    {
      imgPath: '/good_2.png',
      isProgressing: false,
      isHidden: false,
      cost: '3 285 000 ₽',
      info: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
      id: 2
    },
    {
      imgPath: '/good_3.png',
      isProgressing: false,
      isHidden: false,
      cost: '450 500 ₽',
      info: 'Сlavia Nord Grand сценическое цифровое пианино',
      id: 3
    },
    {
      imgPath: '/good_4.png',
      isProgressing: false,
      isHidden: false,
      cost: '450 500 ₽',
      info: 'Сlavia Nord Grand сценическое цифровое пианино',
      id: 4
    },
    {
      imgPath: '/good_5.png',
      isProgressing: false,
      isHidden: false,
      cost: '450 500 ₽',
      info: 'Сlavia Nord Grand сценическое цифровое пианино',
      id: 5
    },
    {
      imgPath: '/good_6.png',
      isProgressing: false,
      isHidden: true,
      cost: '450 500 ₽',
      info: 'Сlavia Nord Grand сценическое цифровое пианино',
      id: 6
    },
    {
      imgPath: '/good_7.png',
      isProgressing: true,
      isHidden: false,
      cost: '450 500 ₽',
      info: 'Сlavia Nord Grand сценическое цифровое пианино',
      id: 7
    },
    {
      imgPath: '/good_8.png',
      isProgressing: false,
      isHidden: false,
      cost: '450 500 ₽',
      info: 'Сlavia Nord Grand сценическое цифровое пианино',
      id: 8
    },

  ]

  return {
    statusCode: 200,
    body: items,
  }
})
