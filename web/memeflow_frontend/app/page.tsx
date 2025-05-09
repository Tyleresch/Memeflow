// app/page.tsx
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HowItWorks } from "@/components/how-it-works";
import TrendingMemes from "@/components/trending-memes";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // fetch the most recently created meme
  const featured = await prisma.meme.findFirst({
    orderBy: { createdAt: "desc" },
  });

  // if we only have the placeholder token, fall back to real placeholder.svg
  const rawUrl = featured?.imageUrl;
  const featuredImage =
    rawUrl && rawUrl !== "OFF_CHAIN_PLACEHOLDER"
      ? rawUrl
      : "/placeholder.svg";

  const featuredTitle = featured?.title || "No memes yet";

  /* shared wrapper so every block gets the right background in either theme */
  const section = (bg: string = "var(--background)") =>
    ({
      width: "100%",
      padding: "4rem 0",
      background: bg,
    }) as React.CSSProperties;

  return (
    <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* HERO ============================================================== */}
      <section
        className="hackathon-gradient"
        style={{
          position: "relative",
          width: "100%",
          padding: "6rem 0 8rem",
          color: "var(--primary-foreground)",
        }}
      >
        {/* blurry circles */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
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
            background: "rgba(255,255,255,0.08)",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem" }}>
            Rank & Remix NFTs on Solana
          </h1>

          <p
            style={{
              maxWidth: 700,
              margin: "0 auto 2.5rem",
              fontSize: "1.25rem",
              lineHeight: 1.5,
              opacity: 0.9,
            }}
          >
            Transform the internet&apos;s funniest images into on-chain collectibles. Mint, rank, and remix memes in the
            Flow.
          </p>

          {/* ACTION BUTTONS */}
          <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              asChild
              size="lg"
              style={{ background: "var(--primary-foreground)", color: "var(--primary)", fontWeight: 700 }}
            >
              <Link href="/create">
                Start Creating <ArrowRight style={{ width: 16, height: 16, marginLeft: "0.5rem" }} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              style={{ background: "var(--primary-foreground)", color: "var(--primary)", fontWeight: 700 }}
            >
              <Link href="/explore">Explore Memes</Link>
            </Button>
          </div>

          {/* quick stats */}
          <div
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "4rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { value: "10K+", label: "Memes Minted" },
              { value: "5K+", label: "Active Users" },
              { value: "500+", label: "Legendary Memes" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "2.5rem", fontWeight: 700 }}>{value}</p>
                <p style={{ opacity: 0.9 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MEME ===================================================== */}
      <section style={section()}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Latest Meme</h2>
          <Image
            src={featuredImage}
            alt={featuredTitle}
            width={600}
            height={400}
            style={{ borderRadius: "1rem", objectFit: "cover", width: "100%", height: "auto" }}
          />
          <p style={{ marginTop: "0.5rem", fontWeight: 500 }}>{featuredTitle}</p>
        </div>
      </section>

      {/* HOW IT WORKS ====================================================== */}
      <section style={section("var(--muted)")}>
        <HowItWorks />
      </section>

      {/* TRENDING MEMES ==================================================== */}
      <section style={section()}>
        <TrendingMemes />
      </section>

      {/* CTA =============================================================== */}
      <section style={section("var(--muted)")}>
        {/* faint star icons */}
        <Star
          size={40}
          style={{ position: "absolute", top: "10%", left: "5%", opacity: 0.07, pointerEvents: "none" }}
        />
        <Star
          size={60}
          style={{ position: "absolute", bottom: "15%", right: "10%", opacity: 0.05, pointerEvents: "none" }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div
            style={{
              background: "var(--card)",
              padding: "3rem",
              borderRadius: "1rem",
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                background: "linear-gradient(90deg,#7c3aed 0%,#3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1rem",
              }}
            >
              Ready to join the Flow?
            </h2>
            <p style={{ color: "var(--muted-foreground)", fontSize: "1.1rem", marginBottom: "2rem" }}>
              Connect your wallet and start creating, collecting, and ranking memes on&nbsp;Solana.
            </p>

            <Button
              size="lg"
              style={{
                width: "100%",
                maxWidth: 350,
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontWeight: 700,
              }}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
