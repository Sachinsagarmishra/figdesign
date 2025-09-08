import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shorten = async () => {
    if (!url) return alert("Please enter a URL");
    const res = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    const data = await res.json();
    if (data.error) {
      alert("Error: " + data.error);
    } else {
      setShortUrl(window.location.origin + "/" + data.code);
    }
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>🚀 URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{padding:"10px", width:"300px"}}
      />
      <button onClick={shorten} style={{marginLeft:"10px", padding:"10px"}}>
        Shorten
      </button>
      {shortUrl && (
        <p>
          Your short URL:{" "}
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  );
}
