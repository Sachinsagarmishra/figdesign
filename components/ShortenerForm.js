import { useState, useEffect } from 'react'

export default function ShortenerForm() {
  const [url, setUrl] = useState('')
  const [custom, setCustom] = useState('')
  const [history, setHistory] = useState([])
  const [copied, setCopied] = useState(false) // ✅ for notification
  
  useEffect(() => {
    // Using localStorage for persistence
    try {
      const saved = localStorage.getItem('history')
      if (saved) setHistory(JSON.parse(saved))
    } catch (e) {
      // Handle localStorage not available
    }
  }, [])
  
  const saveHistory = (item) => {
    const newHistory = [item, ...history]
    setHistory(newHistory)
    try {
      localStorage.setItem('history', JSON.stringify(newHistory))
    } catch (e) {
      // Handle localStorage not available
    }
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulating API call
    const data = { short: custom || 'abc123' }
    if (data.short) {
      const shortUrl = `https://figshrink.vercel.app/${data.short}`
      saveHistory({ url, shortUrl })
      setUrl('')
      setCustom('')
    } else {
      alert('Something went wrong')
    }
  }
  
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true) // ✅ show notification
    setTimeout(() => setCopied(false), 2000) // hide after 2s
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Create Short URL</h1>
        <p className="text-gray-600 mb-8 text-sm">Enter your long URL and choose a custom slug to create a short link</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">Original URL</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔗</span>
              <input
                type="url"
                placeholder="https://example.com/very/long/url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">Custom Slug</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 font-medium">#</span>
              <input
                type="text"
                placeholder="my-custom-link"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            Your short URL will be: https://figshrink.vercel.app/{custom || 'your-slug'}
          </div>
          
          <button
            type="submit"
            className="px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors"
          >
            Create Short URL
          </button>
        </form>
        
        {/* Notification */}
        {copied && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
            ✅ Copied to clipboard!
          </div>
        )}
        
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-3 text-gray-900">History</h2>
          <ul className="space-y-3">
            {history.map((item, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100"
              >
                <a
                  href={item.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium"
                >
                  {item.shortUrl}
                </a>
                <button
                  onClick={() => handleCopy(item.shortUrl)}
                  className="px-3 py-1 bg-gray-900 hover:bg-gray-800 text-white rounded-lg"
                >
                  Copy
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
