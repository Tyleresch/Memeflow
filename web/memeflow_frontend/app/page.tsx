import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FeaturedMeme } from "@/components/featured-meme"
import { HowItWorks } from "@/components/how-it-works"
import { TrendingMemes } from "@/components/trending-memes"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Rank & Remix NFTs on Solana
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Transform the internet's funniest images into on-chain collectibles. Mint, rank, and remix memes in the
                Flow.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/create">
                  Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to join the Flow?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Connect your wallet and start creating, collecting, and ranking memes on Solana.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button className="w-full" size="lg">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
