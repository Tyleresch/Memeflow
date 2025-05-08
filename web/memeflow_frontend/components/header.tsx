import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Upload, Search, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/explore" className="text-lg font-medium transition-colors hover:text-primary">
                  Explore
                </Link>
                <Link href="/create" className="text-lg font-medium transition-colors hover:text-primary">
                  Create
                </Link>
                <Link href="/profile" className="text-lg font-medium transition-colors hover:text-primary">
                  Profile
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/memeflow.png" alt="MemeFlow Logo" width={40} height={40} className="rounded-md" />
            <span className="hidden font-bold sm:inline-block">MemeFlow</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/explore" className="text-sm font-medium transition-colors hover:text-primary">
            Explore
          </Link>
          <Link href="/create" className="text-sm font-medium transition-colors hover:text-primary">
            Create
          </Link>
          <Link href="/profile" className="text-sm font-medium transition-colors hover:text-primary">
            Profile
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="outline" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button asChild>
            <Link href="/create">
              <Upload className="mr-2 h-4 w-4" /> Create
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
