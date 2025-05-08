import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react"

export function FeaturedMeme() {
  return (
    <section style={{ width: "100%", padding: "3rem 0" }}>
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
          <div style={{ marginBottom: "1rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: "1.2", marginBottom: "1rem" }}>
              Featured Meme of the Day
            </h2>
            <p style={{ maxWidth: "700px", margin: "0 auto", color: "#666", fontSize: "1.1rem" }}>
              The highest ranked meme in the Flow right now.
            </p>
          </div>
          <div style={{ width: "100%", maxWidth: "48rem" }}>
            <div
              style={{
                borderRadius: "0.5rem",
                overflow: "hidden",
                backgroundColor: "white",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              }}
            >
              <div
                style={{
                  padding: "1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      height: "2rem",
                      width: "2rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(124, 58, 237, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <Image src="/placeholder.svg?height=32&width=32" alt="Creator avatar" width={32} height={32} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 500 }}>@meme_lord</p>
                    <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>Created 2 days ago</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    backgroundColor: "#f3f4f6",
                    color: "#333",
                    borderRadius: "9999px",
                    padding: "0.25rem 0.5rem",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  Legendary
                </div>
              </div>
              <div style={{ padding: 0 }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    width: "100%",
                    overflow: "hidden",
                    backgroundColor: "#f3f4f6",
                  }}
                >
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Featured meme"
                    width={1280}
                    height={720}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                    When the code finally works after 100 attempts
                  </h3>
                  <p style={{ color: "#6b7280" }}>
                    That feeling when your code compiles without errors on the first try.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  borderTop: "1px solid #f3f4f6",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Button
                    variant="ghost"
                    style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem" }}
                  >
                    <ThumbsUp style={{ width: "1rem", height: "1rem" }} />
                    <span>1.2K</span>
                  </Button>
                  <Button
                    variant="ghost"
                    style={{ display: "flex", alignItems: "center", gap: "0.25rem", padding: "0.5rem" }}
                  >
                    <ThumbsDown style={{ width: "1rem", height: "1rem" }} />
                    <span>24</span>
                  </Button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Button
                    variant="outline"
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 0.75rem" }}
                  >
                    <Share2 style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
                    Share
                  </Button>
                  <Button style={{ padding: "0.5rem 0.75rem" }}>Mint NFT</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
