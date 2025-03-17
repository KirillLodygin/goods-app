import { navigateTo } from 'nuxt/app'

export default function ({ req, redirect }) {
  if (process.server) {
    return
  }
  const token = process.client ? document.cookie.split('; ').find((row) => row.startsWith('token=')) : req.cookies.token

  if (token) {
    return navigateTo('/products')
  } else {
    return navigateTo('/login')
  }
}
