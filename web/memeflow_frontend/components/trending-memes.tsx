// app/components/trending-memes.tsx
import Image from "next/image";
import Link from "next/link";
import { ThumbsUp } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function TrendingMemes() {
  // pull top 6 most recent memes
  const memes = await prisma.meme.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
    include: { creator: true },
  });

  const badgeStyle = (type: string): React.CSSProperties => {
    const colors: Record<string, { bg: string; text: string }> = {
      Legendary: { bg: "#fef3c7", text: "#92400e" },
      Epic:      { bg: "#dbeafe", text: "#1e40af" },
      Rare:      { bg: "#dcfce7", text: "#166534" },
      Common:    { bg: "#f3f4f6", text: "#374151" },
    };
    const style = colors[type] || colors.Common;
    return {
      position:       "absolute",
      top:            "0.5rem",
      right:          "0.5rem",
      padding:        "0.25rem 0.5rem",
      borderRadius:   "9999px",
      fontSize:       "0.75rem",
      fontWeight:     500,
      backgroundColor: style.bg,
      color:          style.text,
    };
  };

  return (
    <section style={{ width: "100%", padding: "3rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: 1.2 }}>
            Trending in the Flow
          </h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "#666", fontSize: "1.1rem" }}>
            Check out the latest uploads.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            // adapt with a CSS-in-JS solution or media queries
          }}
        >
          {memes.map((meme) => (
            <Link href={`/meme/${meme.id}`} key={meme.id} style={{ textDecoration: "none" }}>
              <div
                style={{
                  borderRadius:    "0.5rem",
                  overflow:        "hidden",
                  backgroundColor: "white",
                  boxShadow:       "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
                  transition:      "transform 0.2s, box-shadow 0.2s",
                  cursor:          "pointer",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "1/1", width: "100%", overflow: "hidden" }}>
                  <Image
                    src={meme.imageUrl}
                    alt={meme.title}
                    width={300}
                    height={300}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                  <div style={badgeStyle(meme.rarity)}>{meme.rarity}</div>
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3
                    style={{
                      fontWeight:      500,
                      fontSize:        "1rem",
                      color:           "#333",
                      overflow:        "hidden",
                      textOverflow:    "ellipsis",
                      whiteSpace:      "nowrap",
                    }}
                  >
                    {meme.title}
                  </h3>
                  <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                    @{meme.creator.wallet.slice(0, 6)}…{meme.creator.wallet.slice(-4)}
                  </p>
                </div>
                <div style={{ padding: "0 1rem 1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", fontSize: "0.75rem", color: "#6b7280" }}>
                    <ThumbsUp style={{ marginRight: "0.25rem", width: "0.75rem", height: "0.75rem" }} />
                    <span>{meme.rankScore}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
