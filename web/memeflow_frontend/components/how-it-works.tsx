"use client";

import { Upload, Zap, Trophy, Repeat2 } from "lucide-react";

export function HowItWorks() {
  /* shared palette pulled from your CSS variables */
  const cardStyle: React.CSSProperties = {
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "1rem",
    padding: "2rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    maxWidth: 920,
    margin: "0 auto",
  };

  const iconWrapper: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "var(--primary) / 10%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--primary)",
  };

  const title: React.CSSProperties = {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "var(--foreground)",
  };

  const copy: React.CSSProperties = {
    maxWidth: 680,
    textAlign: "center",
    color: "var(--muted-foreground)",
    lineHeight: 1.6,
  };

  const steps = [
    {
      icon: <Upload size={20} />,
      title: "Upload & Mint",
      text: "Upload your meme image or create one with AI assistance. Instantly mint it as an NFT on Solana.",
    },
    {
      icon: <Zap size={20} />,
      title: "Enter the Flow",
      text: "Your meme joins the Flow where the community votes to determine its rank and popularity.",
    },
    {
      icon: <Trophy size={20} />,
      title: "Climb the Ranks",
      text: "As your meme gains votes, it climbs from Common to Rare, Epic, and Legendary status with special editions.",
    },
    {
      icon: <Repeat2 size={20} />,
      title: "Remix & Evolve",
      text: "Remix popular memes to create new NFTs while automatically crediting the original creators.",
    },
  ];

  return (
    <section style={{ width: "100%", padding: "4rem 0", background: "var(--muted)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "0.75rem",
            color: "var(--foreground)",
          }}
        >
          How MemeFlow Works
        </h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 3rem",
            color: "var(--muted-foreground)",
            fontSize: "1.1rem",
          }}
        >
          From upload to legendary status, here’s how your memes move through the platform.
        </p>

        {/* STEP CARDS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {steps.map(({ icon, title: stepTitle, text }) => (
            <div key={stepTitle} style={cardStyle}>
              <span style={iconWrapper}>{icon}</span>
              <h3 style={title}>{stepTitle}</h3>
              <p style={copy}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
