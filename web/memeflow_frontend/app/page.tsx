import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { FeaturedMeme } from "@/components/featured-meme"
import { HowItWorks } from "@/components/how-it-works"
import { TrendingMemes } from "@/components/trending-memes"

export default function Home() {
  return (
    <main style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      {/* Hero Section */}
      <section
        className="hackathon-gradient"
        style={{
          position: "relative",
          width: "100%",
          padding: "6rem 0",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Background elements */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="animate-fadeIn"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1.5rem",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  lineHeight: "1.1",
                  marginBottom: "1.5rem",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                Rank & Remix NFTs on Solana
              </h1>
              <p
                style={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  fontSize: "1.25rem",
                  opacity: 0.9,
                }}
              >
                Transform the internet's funniest images into on-chain collectibles. Mint, rank, and remix memes in the
                Flow.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                asChild
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  backgroundColor: "white",
                  color: "#7c3aed",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                <Link href="/create">
                  Start Creating <ArrowRight style={{ width: "1rem", height: "1rem", marginLeft: "0.5rem" }} />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid white",
                  borderRadius: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                <Link href="/explore">Explore Memes</Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>10K+</div>
                <div style={{ opacity: 0.8 }}>Memes Minted</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>5K+</div>
                <div style={{ opacity: 0.8 }}>Active Users</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>500+</div>
                <div style={{ opacity: 0.8 }}>Legendary Memes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Meme */}
      <FeaturedMeme />

      {/* How It Works */}
      <HowItWorks />

      {/* Trending Memes */}
      <TrendingMemes />

      {/* CTA Section */}
      <section
        style={{
          width: "100%",
          padding: "5rem 0",
          backgroundColor: "var(--muted)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            opacity: 0.1,
          }}
        >
          <Star size={40} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            opacity: 0.1,
          }}
        >
          <Star size={60} />
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div
            className="animate-slideUp"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "2rem",
              backgroundColor: "var(--card)",
              padding: "3rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  marginBottom: "1rem",
                  background: "linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ready to join the Flow?
              </h2>
              <p
                style={{
                  maxWidth: "600px",
                  margin: "0 auto",
                  color: "var(--muted-foreground)",
                  fontSize: "1.1rem",
                }}
              >
                Connect your wallet and start creating, collecting, and ranking memes on Solana.
              </p>
            </div>
            <div style={{ width: "100%", maxWidth: "350px" }}>
              <Button
                style={{
                  width: "100%",
                  padding: "1rem 1.5rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--primary)",
                  color: "white",
                  border: "none",
                }}
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
