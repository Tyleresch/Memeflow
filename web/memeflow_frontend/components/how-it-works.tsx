"use client";

import { Upload, Zap, Trophy, DollarSign, Repeat2 } from "lucide-react";

export function HowItWorks() {
  /* ------------------------------------------------------------------ */
  const card: React.CSSProperties = {
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

  const iconWrap: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "var(--primary) / 12%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--primary)",
  };

  const h3: React.CSSProperties = { fontSize: "1.125rem", fontWeight: 600, color: "var(--foreground)" };
  const p: React.CSSProperties = {
    maxWidth: 680,
    textAlign: "center",
    color: "var(--muted-foreground)",
    lineHeight: 1.6,
  };

  /* ------------------------------------------------------------------ */
  const steps = [
    {
      icon: <Upload size={20} />,
      title: "Upload & Mint",
      text: "Drop in your image, optionally pair it with an AI‑generated caption, and mint multiple editions on Solana.",
    },
    {
      icon: <Zap size={20} />,
      title: "Enter the Flow",
      text: "Your meme joins the Flow where the community votes to rank its humor and cultural relevance.",
    },
    {
      icon: <Trophy size={20} />,
      title: "Climb the Ranks",
      text: "High‑ranked memes unlock rarer editions—Rare, Epic, Legendary, and one‑of‑one Apex variants.",
    },
    {
      icon: <DollarSign size={20} />,
      title: "Earn Royalties",
      text: "Each time an edition resells, the original creator automatically receives royalties—no extra steps needed.",
    },
    {
      icon: <Repeat2 size={20} />,
      title: "Remix & Evolve",
      text: "Anyone can remix a meme template; credits and royalties flow back to the original creator chain.",
    },
  ];

  /* ------------------------------------------------------------------ */
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
          How&nbsp;MemeFlow&nbsp;Works
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
          From upload to legendary status—and royalties every time it trades—here’s the life cycle of a meme in the Flow.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {steps.map(({ icon, title, text }) => (
            <div key={title} style={card}>
              <span style={iconWrap}>{icon}</span>
              <h3 style={h3}>{title}</h3>
              <p style={p}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
