import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export default function ShortenerForm() {
  const [url, setUrl] = useState('')
  const [custom, setCustom] = useState('')
  const [history, setHistory] = useState([])
  const [copied, setCopied] = useState(false) // ✅ for notification

  useEffect(() => {
    const saved = Cookies.get('history')
    if (saved) setHistory(JSON.parse(saved))
  }, [])

  const saveHistory = (item) => {
    const newHistory = [item, ...history]
    setHistory(newHistory)
    Cookies.set('history', JSON.stringify(newHistory))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, custom })
    })
    const data = await res.json()
    if (data.short) {
      const shortUrl = `${window.location.origin}/${data.short}`
      saveHistory({ url, shortUrl })
      setUrl('')
      setCustom('')
    } else {
      alert(data.error || 'Something went wrong')
    }
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true) // ✅ show notification
    setTimeout(() => setCopied(false), 2000) // hide after 2s
  }

  return (
    <div className="bg-dark text-white p-8 rounded-2xl shadow-2xl w-full max-w-lg">
  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input
      type="url"
      placeholder="Enter long URL"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      required
      className="p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary"
    />
    <input
      type="text"
      placeholder="Custom name (optional)"
      value={custom}
      onChange={(e) => setCustom(e.target.value)}
      className="p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary"
    />
    <button
      type="submit"
      className="px-4 py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition"
    >
      🚀 Shorten
    </button>
  </form>

  {/* Notification */}
  {copied && (
    <div className="fixed bottom-4 right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
      ✅ Copied to clipboard!
    </div>
  )}

  <div className="mt-6">
    <h2 className="text-xl font-bold mb-3 text-secondary">History</h2>
    <ul className="space-y-3">
      {history.map((item, i) => (
        <li
          key={i}
          className="flex justify-between items-center bg-gray-800 p-3 rounded-lg shadow"
        >
          <a
            href={item.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium"
          >
            {item.shortUrl}
          </a>
          <button
            onClick={() => handleCopy(item.shortUrl)}
            className="px-3 py-1 bg-secondary hover:bg-green-700 text-white rounded-lg"
          >
            Copy
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>

  )
}
