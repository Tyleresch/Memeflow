import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="/memeflow.png" alt="MemeFlow Logo" width={32} height={32} className="rounded-md" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ on Solana. © 2024 MemeFlow.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://discord.com" target="_blank" rel="noreferrer">
            <Discord className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Discord</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
