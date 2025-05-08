import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid #e5e7eb",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "2.5rem 1rem",
          "@media (min-width: 768px)": {
            flexDirection: "row",
            height: "6rem",
            padding: 0,
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "0 2rem",
            "@media (min-width: 768px)": {
              flexDirection: "row",
              gap: "0.5rem",
              padding: 0,
            },
          }}
        >
          <Image src="/memeflow.png" alt="MemeFlow Logo" width={32} height={32} style={{ borderRadius: "0.375rem" }} />
          <p
            style={{
              textAlign: "center",
              fontSize: "0.875rem",
              lineHeight: "1.7",
              color: "#6b7280",
              "@media (min-width: 768px)": {
                textAlign: "left",
              },
            }}
          >
            Built with ❤️ on Solana. © 2024 MemeFlow.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter style={{ width: "1.25rem", height: "1.25rem", color: "#6b7280" }} />
            <span
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
              }}
            >
              Twitter
            </span>
          </Link>
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Github style={{ width: "1.25rem", height: "1.25rem", color: "#6b7280" }} />
            <span
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
              }}
            >
              GitHub
            </span>
          </Link>
          <Link href="https://discord.com" target="_blank" rel="noreferrer">
            <Discord style={{ width: "1.25rem", height: "1.25rem", color: "#6b7280" }} />
            <span
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
              }}
            >
              Discord
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
