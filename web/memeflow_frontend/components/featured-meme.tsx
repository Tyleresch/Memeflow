import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react"

export function FeaturedMeme() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Meme of the Day</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The highest ranked meme in the Flow right now.
            </p>
          </div>
          <div className="w-full max-w-3xl">
            <Card className="overflow-hidden">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 overflow-hidden">
                      <Image src="/placeholder.svg?height=32&width=32" alt="Creator avatar" width={32} height={32} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">@meme_lord</p>
                      <p className="text-xs text-muted-foreground">Created 2 days ago</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="px-2 py-1">
                    Legendary
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Featured meme"
                    width={1280}
                    height={720}
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold">When the code finally works after 100 attempts</h3>
                  <p className="mt-2 text-muted-foreground">
                    That feeling when your code compiles without errors on the first try.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4 md:p-6">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>1.2K</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsDown className="h-4 w-4" />
                    <span>24</span>
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button size="sm">Mint NFT</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
