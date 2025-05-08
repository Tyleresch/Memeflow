"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ThumbsUp } from "lucide-react"

export function TrendingMemes() {
  const [activeTab, setActiveTab] = useState("all")

  const tabStyle = (isActive: boolean): React.CSSProperties => ({
    padding: "0.75rem 1rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: isActive ? "white" : "#f3f4f6",
    color: isActive ? "#333" : "#6b7280",
    boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
  })

  const cardStyle: React.CSSProperties = {
    borderRadius: "0.5rem",
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  }

  const badgeStyle = (type: string): React.CSSProperties => {
    const colors: Record<string, { bg: string; text: string }> = {
      Legendary: { bg: "#fef3c7", text: "#92400e" },
      Epic: { bg: "#dbeafe", text: "#1e40af" },
      Rare: { bg: "#dcfce7", text: "#166534" },
      Common: { bg: "#f3f4f6", text: "#374151" },
    }

    const style = colors[type] || colors["Common"]

    return {
      position: "absolute",
      top: "0.5rem",
      right: "0.5rem",
      padding: "0.25rem 0.5rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: 500,
      backgroundColor: style.bg,
      color: style.text,
    }
  }

  return (
    <section style={{ width: "100%", padding: "3rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: "1.2", marginBottom: "1rem" }}>
              Trending in the Flow
            </h2>
            <p style={{ maxWidth: "700px", margin: "0 auto", color: "#666", fontSize: "1.1rem" }}>
              Check out what's hot in the MemeFlow community right now.
            </p>
          </div>
          <div style={{ width: "100%", maxWidth: "1200px" }}>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "0.5rem",
                  backgroundColor: "#f3f4f6",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <button onClick={() => setActiveTab("all")} style={tabStyle(activeTab === "all")}>
                  All
                </button>
                <button onClick={() => setActiveTab("common")} style={tabStyle(activeTab === "common")}>
                  Common
                </button>
                <button onClick={() => setActiveTab("rare")} style={tabStyle(activeTab === "rare")}>
                  Rare
                </button>
                <button onClick={() => setActiveTab("epic")} style={tabStyle(activeTab === "epic")}>
                  Epic
                </button>
                <button onClick={() => setActiveTab("legendary")} style={tabStyle(activeTab === "legendary")}>
                  Legendary
                </button>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                {activeTab === "all" ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "1.5rem",
                      "@media (min-width: 640px)": {
                        gridTemplateColumns: "repeat(2, 1fr)",
                      },
                      "@media (min-width: 1024px)": {
                        gridTemplateColumns: "repeat(3, 1fr)",
                      },
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Link href={`/meme/${i}`} key={i} style={{ textDecoration: "none" }}>
                        <div style={cardStyle}>
                          <div style={{ padding: 0 }}>
                            <div
                              style={{
                                position: "relative",
                                aspectRatio: "1/1",
                                width: "100%",
                                overflow: "hidden",
                                backgroundColor: "#f3f4f6",
                              }}
                            >
                              <Image
                                src={`/placeholder.svg?height=300&width=300&text=Meme ${i}`}
                                alt={`Trending meme ${i}`}
                                width={300}
                                height={300}
                                style={{ objectFit: "cover" }}
                              />
                              <div
                                style={badgeStyle(
                                  i % 4 === 0 ? "Legendary" : i % 3 === 0 ? "Epic" : i % 2 === 0 ? "Rare" : "Common",
                                )}
                              >
                                {i % 4 === 0 ? "Legendary" : i % 3 === 0 ? "Epic" : i % 2 === 0 ? "Rare" : "Common"}
                              </div>
                            </div>
                          </div>
                          <div style={{ padding: "1rem" }}>
                            <h3
                              style={{
                                fontWeight: 500,
                                fontSize: "1rem",
                                color: "#333",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Trending Meme Title {i}
                            </h3>
                            <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>@creator_{i}</p>
                          </div>
                          <div style={{ padding: "0 1rem 1rem 1rem" }}>
                            <div
                              style={{ display: "flex", alignItems: "center", fontSize: "0.75rem", color: "#6b7280" }}
                            >
                              <ThumbsUp style={{ marginRight: "0.25rem", width: "0.75rem", height: "0.75rem" }} />
                              <span>{Math.floor(Math.random() * 1000) + 100}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: "1.5rem",
                      "@media (min-width: 640px)": {
                        gridTemplateColumns: "repeat(2, 1fr)",
                      },
                      "@media (min-width: 1024px)": {
                        gridTemplateColumns: "repeat(3, 1fr)",
                      },
                    }}
                  >
                    <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#6b7280" }}>
                      Select a different tab to see more memes
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
