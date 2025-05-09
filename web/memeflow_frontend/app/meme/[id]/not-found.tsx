import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 4rem)",
        width: "100%",
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          maxWidth: "32rem",
          textAlign: "center",
        }}
      >
        <AlertTriangle size={64} style={{ color: "var(--primary)" }} />
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--foreground)" }}>Meme Not Found</h1>
        <p style={{ color: "var(--muted-foreground)", fontSize: "1.125rem" }}>
          The meme you're looking for doesn't exist or has been removed from the Flow.
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Button
            asChild
            style={{
              backgroundColor: "var(--primary)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "none",
            }}
          >
            <Link href="/explore">Explore Memes</Link>
          </Button>
          <Button
            asChild
            style={{
              backgroundColor: "transparent",
              color: "var(--foreground)",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--border)",
            }}
          >
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
