import { supabase } from '../../utils/supabaseClient'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { url, custom } = req.body
  if (!url) return res.status(400).json({ error: 'URL is required' })

  const short = custom || Math.random().toString(36).substring(2, 8)

  // ✅ Pehle check karo DB me
  const { data: existing, error: checkError } = await supabase
    .from('urls')
    .select('*')
    .eq('short_code', short)
    .single()

  if (existing) {
    return res.status(400).json({ error: 'Short link already exists, try another!' })
  }

  // ✅ Agar nahi hai toh insert karo
  const { data, error } = await supabase
    .from('urls')
    .insert([{ short_code: short, long_url: url }])
    .select()

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.status(200).json({ short })
}
