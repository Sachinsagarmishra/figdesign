// pages/api/shorten.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Handle body parse
    let body = req.body;
    if (typeof body === "string") {
      body = JSON.parse(body);
    }

    const { url, customName } = body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    // Generate short code
    const code = customName ? customName : Math.random().toString(36).substring(2, 8);

    // Store in cookies (basic version, no DB)
    const existing = req.cookies?.history ? JSON.parse(req.cookies.history) : [];
    const newEntry = { code, url };
    const updated = [...existing, newEntry];

    // Set cookie for history
    res.setHeader(
      "Set-Cookie",
      `history=${JSON.stringify(updated)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=31536000`
    );

    // Return the new short link
    return res.status(200).json({
      shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/${code}`,
    });
  } catch (err) {
    console.error("Shorten API error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
