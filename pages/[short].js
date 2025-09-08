import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function getServerSideProps(context) {
  const code = context.params.short

  const { data } = await supabase
    .from('links')
    .select('url')
    .eq('short', code)
    .single()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    redirect: {
      destination: data.url,
      permanent: false
    }
  }
}

export default function RedirectPage() {
  return null
}
