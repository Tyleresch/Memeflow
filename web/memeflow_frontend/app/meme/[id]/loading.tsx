"use client"

import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 4rem)",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Loader2
          size={48}
          style={{
            color: "var(--primary)",
            animation: "spin 1s linear infinite",
          }}
        />
        <p style={{ color: "var(--muted-foreground)", fontSize: "1.125rem" }}>Loading meme...</p>
      </div>
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
