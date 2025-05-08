import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { FeaturedMeme } from "@/components/featured-meme"
import { HowItWorks } from "@/components/how-it-works"
import { TrendingMemes } from "@/components/trending-memes"

export default function Home() {
  return (
    <main style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      {/* Hero Section */}
      <section style={{ position: "relative", width: "100%", padding: "3rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.2", marginBottom: "1rem" }}>
                Rank & Remix NFTs on Solana
              </h1>
              <p style={{ maxWidth: "700px", margin: "0 auto", color: "#666", fontSize: "1.1rem" }}>
                Transform the internet's funniest images into on-chain collectibles. Mint, rank, and remix memes in the
                Flow.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button asChild style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Link href="/create">
                  Start Creating <ArrowRight style={{ width: "1rem", height: "1rem", marginLeft: "0.5rem" }} />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/explore">Explore Memes</Link>
              </Button>
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
      <section style={{ width: "100%", padding: "3rem 0", backgroundColor: "#f5f5f5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "2rem", fontWeight: "bold", lineHeight: "1.2", marginBottom: "1rem" }}>
                Ready to join the Flow?
              </h2>
              <p style={{ maxWidth: "600px", margin: "0 auto", color: "#666", fontSize: "1.1rem" }}>
                Connect your wallet and start creating, collecting, and ranking memes on Solana.
              </p>
            </div>
            <div style={{ width: "100%", maxWidth: "350px" }}>
              <Button style={{ width: "100%", padding: "0.75rem 1.5rem" }}>
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
