import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export default function ShortenerForm() {
  const [longUrl, setLongUrl] = useState('')
  const [customSlug, setCustomSlug] = useState('')
  const [history, setHistory] = useState([])

  useEffect(() => {
    const saved = Cookies.get('shortHistory')
    if (saved) setHistory(JSON.parse(saved))
  }, [])

  const handleShorten = () => {
    if (!longUrl || !customSlug) return alert('Enter URL and custom slug')

    const shortUrl = `https://figdesign.vercel.app/${customSlug}`
    const newHistory = [...history, { longUrl, shortUrl }]
    setHistory(newHistory)
    Cookies.set('shortHistory', JSON.stringify(newHistory))
    setLongUrl('')
    setCustomSlug('')
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    alert('Copied: ' + text)
  }

  return (
    <div className="w-full max-w-xl p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Paste your Figma link</h2>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter long link"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Custom slug (e.g. mydesign)"
          value={customSlug}
          onChange={(e) => setCustomSlug(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleShorten}
          className="bg-purple-600 text-white p-2 rounded"
        >
          Create Short Link
        </button>
      </div>

      {history.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">Your Links</h3>
          <ul className="space-y-2">
            {history.map((h, i) => (
              <li key={i} className="flex justify-between items-center border p-2 rounded">
                <a href={h.shortUrl} target="_blank" className="text-blue-600">
                  {h.shortUrl}
                </a>
                <button
                  onClick={() => copyToClipboard(h.shortUrl)}
                  className="text-sm text-purple-600"
                >
                  Copy
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}