import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThumbsUp } from "lucide-react"

export function TrendingMemes() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trending in the Flow</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out what's hot in the MemeFlow community right now.
            </p>
          </div>
          <div className="w-full max-w-5xl">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="common">Common</TabsTrigger>
                <TabsTrigger value="rare">Rare</TabsTrigger>
                <TabsTrigger value="epic">Epic</TabsTrigger>
                <TabsTrigger value="legendary">Legendary</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Link href={`/meme/${i}`} key={i}>
                      <Card className="overflow-hidden transition-all hover:shadow-lg">
                        <CardHeader className="p-0">
                          <div className="relative aspect-square w-full overflow-hidden bg-muted">
                            <Image
                              src={`/placeholder.svg?height=300&width=300&text=Meme ${i}`}
                              alt={`Trending meme ${i}`}
                              width={300}
                              height={300}
                              className="object-cover"
                            />
                            <Badge variant="secondary" className="absolute top-2 right-2 px-2 py-1">
                              {i % 4 === 0 ? "Legendary" : i % 3 === 0 ? "Epic" : i % 2 === 0 ? "Rare" : "Common"}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <h3 className="font-medium line-clamp-1">Trending Meme Title {i}</h3>
                          <p className="text-xs text-muted-foreground">@creator_{i}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <ThumbsUp className="mr-1 h-3 w-3" />
                            <span>{Math.floor(Math.random() * 1000) + 100}</span>
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="common" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Common memes would be displayed here */}
                  <p className="col-span-full text-center text-muted-foreground">
                    Select a different tab to see more memes
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="rare" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Rare memes would be displayed here */}
                  <p className="col-span-full text-center text-muted-foreground">
                    Select a different tab to see more memes
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="epic" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Epic memes would be displayed here */}
                  <p className="col-span-full text-center text-muted-foreground">
                    Select a different tab to see more memes
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="legendary" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Legendary memes would be displayed here */}
                  <p className="col-span-full text-center text-muted-foreground">
                    Select a different tab to see more memes
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
