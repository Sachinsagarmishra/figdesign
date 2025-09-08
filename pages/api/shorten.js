import { supabase } from '../../utils/supabaseClient'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { url, custom } = req.body
  if (!url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  // Agar custom code diya hai use karo, warna random generate karo
  let short = custom && custom.trim() !== '' 
    ? custom.trim() 
    : Math.random().toString(36).substring(2, 8)

  // Database mein insert karo
  const { data, error } = await supabase
    .from('urls')
    .insert([{ short_code: short, long_url: url }])
    .select()
    .single()

  if (error) {
    console.error('Supabase insert error:', error.message)
    return res.status(500).json({ error: error.message })
  }

  return res.status(200).json({ short })
}
