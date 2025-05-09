import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { SolanaProviders } from '@/app/providers'; // <— wallet‑adapter wrapper

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MemeFlow | Rank & Remix NFTs on Solana',
  description:
    "Transform the internet's funniest images into on‑chain collectibles. Mint, rank, and remix memes in the Flow.",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          fontFamily: inter.style.fontFamily,
          margin: 0,
          padding: 0,
        }}
      >
        {/* Wallet + Connection providers */}
        <SolanaProviders>
          {/* Theme / dark‑mode provider */}
          <ThemeProvider defaultTheme="light">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Header />
              <main style={{ flex: 1 }}>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </SolanaProviders>
      </body>
    </html>
  );
}
