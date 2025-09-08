// pages/[code].js
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RedirectPage() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (!code) return;

    // history cookie read karke matching URL find karo
    const history = JSON.parse(document.cookie.split("history=")[1] || "[]");
    const match = history.find(item => item.code === code);

    if (match) {
      window.location.href = match.url;
    } else {
      alert("Link not found!");
      router.push("/");
    }
  }, [code]);

  return <p>Redirecting...</p>;
}
