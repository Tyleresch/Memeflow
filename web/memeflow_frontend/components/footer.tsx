"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Disc as Discord } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--background)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "2.5rem 1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image src="/memeflow.png" alt="" width={32} height={32} style={{ borderRadius: "0.375rem" }} />
          <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
            Built with ❤️ on Solana. © 2025 MemeFlow.
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <SocialIcon href="https://twitter.com" label="Twitter">
            <Twitter />
          </SocialIcon>
          <SocialIcon href="https://github.com" label="GitHub">
            <Github />
          </SocialIcon>
          <SocialIcon href="https://discord.com" label="Discord">
            <Discord />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}

/* Re‑usable wrapper so all icons inherit the current theme colour */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <span style={srOnly}>{label}</span>
      <span style={{ color: "var(--muted-foreground)", display: "inline-flex" }}>{children}</span>
    </Link>
  );
}

const srOnly: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clipPath: "inset(50%)",
  border: 0,
};
