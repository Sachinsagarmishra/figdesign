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
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="url"
          placeholder="Enter long URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="p-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Custom name (optional)"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          className="p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Shorten
        </button>
      </form>

      {/* ✅ Notification */}
      {copied && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
          Copied to clipboard!
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">History</h2>
        <ul className="space-y-2">
          {history.map((item, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-100 p-2 rounded"
            >
              <a
                href={item.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                {item.shortUrl}
              </a>
              <button
                onClick={() => handleCopy(item.shortUrl)}
                className="px-2 py-1 bg-blue-500 text-white rounded"
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
