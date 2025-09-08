export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { url, custom } = req.body

    if (!url) {
      return res.status(400).json({ error: 'URL is required' })
    }

    // Agar custom code diya hai to wahi use karo
    const code = custom && custom.trim() !== '' ? custom.trim() : Math.random().toString(36).substring(2, 8)

    // TODO: abhi hum DB use nahi kar rahe, future me DB add karenge
    // Filhaal sirf response bhejna hai
    return res.status(200).json({ short: code })

  } catch (err) {
    console.error('Shorten API error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}
