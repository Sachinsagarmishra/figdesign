import Cookies from 'js-cookie'

export const saveHistory = (data) => {
  Cookies.set('shortHistory', JSON.stringify(data))
}

export const loadHistory = () => {
  const saved = Cookies.get('shortHistory')
  return saved ? JSON.parse(saved) : []
}