import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MemeFlow | Rank & Remix NFTs on Solana",
  description:
    "Transform the internet's funniest images into on-chain collectibles. Mint, rank, and remix memes in the Flow.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          fontFamily: inter.style.fontFamily,
          margin: 0,
          padding: 0,
        }}
      >
        <ThemeProvider defaultTheme="light">
          <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
            <Header />
            <div style={{ flex: 1 }}>{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
