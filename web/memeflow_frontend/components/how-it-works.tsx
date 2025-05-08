import type React from "react"
import { Upload, Zap, Trophy, Shuffle } from "lucide-react"

export function HowItWorks() {
  const cardStyle: React.CSSProperties = {
    borderRadius: "0.5rem",
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    padding: "1.5rem",
  }

  const iconContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "0.5rem",
    borderRadius: "9999px",
    backgroundColor: "rgba(124, 58, 237, 0.1)",
    padding: "0.75rem",
    width: "fit-content",
    margin: "0 auto 1rem auto",
  }

  const iconStyle: React.CSSProperties = {
    width: "1.5rem",
    height: "1.5rem",
    color: "#7c3aed",
  }

  return (
    <section style={{ width: "100%", padding: "3rem 0", backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: "1.2", marginBottom: "1rem" }}>
              How MemeFlow Works
            </h2>
            <p style={{ maxWidth: "700px", margin: "0 auto", color: "#666", fontSize: "1.1rem" }}>
              From upload to legendary status, here's how your memes flow through the platform.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
              maxWidth: "1200px",
              margin: "0 auto",
              "@media (min-width: 768px)": {
                gridTemplateColumns: "repeat(2, 1fr)",
              },
              "@media (min-width: 1024px)": {
                gridTemplateColumns: "repeat(4, 1fr)",
              },
            }}
          >
            <div style={cardStyle}>
              <div style={iconContainerStyle}>
                <Upload style={iconStyle} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", textAlign: "center" }}>
                Upload & Mint
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", textAlign: "center" }}>
                Upload your meme image or create one with AI assistance. Instantly mint it as an NFT on Solana.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={iconContainerStyle}>
                <Zap style={iconStyle} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", textAlign: "center" }}>
                Enter the Flow
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", textAlign: "center" }}>
                Your meme joins the Flow where the community votes to determine its rank and popularity.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={iconContainerStyle}>
                <Trophy style={iconStyle} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", textAlign: "center" }}>
                Climb the Ranks
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", textAlign: "center" }}>
                As your meme gains votes, it climbs from Common to Rare, Epic, and Legendary status with special
                editions.
              </p>
            </div>
            <div style={cardStyle}>
              <div style={iconContainerStyle}>
                <Shuffle style={iconStyle} />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem", textAlign: "center" }}>
                Remix & Evolve
              </h3>
              <p style={{ color: "#6b7280", fontSize: "0.875rem", textAlign: "center" }}>
                Remix popular memes to create new NFTs while automatically crediting the original creators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
