import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { url, custom } = req.body

    if (!url) {
      return res.status(400).json({ error: 'URL is required' })
    }

    const code =
      custom && custom.trim() !== ''
        ? custom.trim()
        : Math.random().toString(36).substring(2, 8)

    // Insert into Supabase
    const { data, error } = await supabase
      .from('urls')
      .insert([{ short: code, long_url: url }])

    if (error) {
      console.error('Supabase insert error:', error)
      return res.status(500).json({ error: 'Failed to save to DB' })
    }

    return res.status(200).json({ short: code })
  } catch (err) {
    console.error('Shorten API error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}
