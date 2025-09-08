import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function getServerSideProps(context) {
  const { short } = context.params

  const { data, error } = await supabase
    .from('urls')
    .select('long_url')
    .eq('short', short)
    .single()

  if (error || !data) {
    return {
      notFound: true,
    }
  }

  return {
    redirect: {
      destination: data.long_url,
      permanent: false,
    },
  }
}

export default function RedirectPage() {
  return <p>Redirecting...</p>
}
