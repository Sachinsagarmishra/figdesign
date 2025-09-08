import Cookies from 'js-cookie'

export function getHistory() {
  const saved = Cookies.get('history')
  return saved ? JSON.parse(saved) : []
}

export function saveHistory(item) {
  const history = getHistory()
  const newHistory = [item, ...history]
  Cookies.set('history', JSON.stringify(newHistory))
}
