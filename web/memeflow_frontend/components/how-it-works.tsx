import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Zap, Trophy, Shuffle } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How MemeFlow Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              From upload to legendary status, here's how your memes flow through the platform.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">Upload & Mint</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Upload your meme image or create one with AI assistance. Instantly mint it as an NFT on Solana.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">Enter the Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your meme joins the Flow where the community votes to determine its rank and popularity.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">Climb the Ranks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  As your meme gains votes, it climbs from Common to Rare, Epic, and Legendary status with special
                  editions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Shuffle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">Remix & Evolve</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Remix popular memes to create new NFTs while automatically crediting the original creators.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
