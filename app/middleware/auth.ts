import { navigateTo } from 'nuxt/app'

export default function ({ req, redirect }) {
  if (process.server) {
    return
  }
  const documentCookie = document.cookie.split('; ').find((row) => row.startsWith('token='))
  const token = process.client ? documentCookie : req.cookies.token

  if (!token) {
    return navigateTo('/login')
  }
}
