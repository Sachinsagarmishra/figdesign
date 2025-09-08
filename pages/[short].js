import { supabase } from '../utils/supabaseClient'

export async function getServerSideProps({ params }) {
  const { short } = params

  // Database se original URL nikaalo
  const { data, error } = await supabase
    .from('urls')
    .select('long_url')
    .eq('short_code', short)
    .single()

  if (error || !data) {
    return {
      props: {},
      notFound: true, // Next.js 404 page dikhega
    }
  }

  return {
    redirect: {
      destination: data.long_url,
      permanent: false,
    },
  }
}

export default function ShortRedirect() {
  return <p>Redirecting...</p>
}
