import { supabase } from "../lib/supabase";

export async function getServerSideProps(context) {
  const { code } = context.params;

  const { data, error } = await supabase
    .from("urls")
    .select("long_url")
    .eq("code", code)
    .single();

  if (error || !data) {
    return { notFound: true };
  }

  return {
    redirect: { destination: data.long_url, permanent: false },
  };
}

export default function ShortRedirect() {
  return <p>Redirecting...</p>;
}
