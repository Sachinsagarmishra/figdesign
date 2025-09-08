import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const code = Math.random().toString(36).substring(2, 8);

    const { error } = await supabase
      .from("urls")
      .insert([{ code, long_url: url }]);

    if (error) return res.status(500).json({ error: error.message });

    res.status(200).json({ code });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
