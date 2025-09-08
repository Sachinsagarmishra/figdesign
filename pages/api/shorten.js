import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { url, custom } = req.body
  if (!url) return res.status(400).json({ error: 'Missing URL' })

  const short = custom && custom.trim() !== '' ? custom.trim() : Math.random().toString(36).substring(2, 7)

  const { data, error } = await supabase.from('links').insert([{ url, short }])

  if (error) return res.status(500).json({ error: error.message })

  res.status(200).json({ short })
}
