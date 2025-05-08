"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Filter, ThumbsUp, Clock, TrendingUp } from "lucide-react"

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState("trending")
  const [activeFilter, setActiveFilter] = useState("all")

  const tabStyle = (isActive: boolean) => ({
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: isActive ? "var(--primary)" : "transparent",
    color: isActive ? "white" : "var(--foreground)",
    border: isActive ? "none" : "1px solid var(--border)",
  })

  const filterStyle = (isActive: boolean) => ({
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: 500,
    cursor: "pointer",
    backgroundColor: isActive ? "var(--primary)" : "transparent",
    color: isActive ? "white" : "var(--foreground)",
    border: isActive ? "none" : "1px solid var(--border)",
  })

  const cardStyle = {
    borderRadius: "1rem",
    overflow: "hidden",
    backgroundColor: "var(--card)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    border: "1px solid var(--border)",
  }

  const badgeStyle = (type: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      Legendary: { bg: "#fef3c7", text: "#92400e" },
      Epic: { bg: "#dbeafe", text: "#1e40af" },
      Rare: { bg: "#dcfce7", text: "#166534" },
      Common: { bg: "#f3f4f6", text: "#374151" },
    }

    const style = colors[type] || colors["Common"]

    return {
      position: "absolute",
      top: "0.75rem",
      right: "0.75rem",
      padding: "0.25rem 0.75rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: 600,
      backgroundColor: style.bg,
      color: style.text,
    }
  }

  // Mock data for memes
  const memes = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Meme Title ${i + 1}`,
    creator: `creator_${i + 1}`,
    likes: Math.floor(Math.random() * 1000) + 100,
    rarity: i % 4 === 0 ? "Legendary" : i % 3 === 0 ? "Epic" : i % 2 === 0 ? "Rare" : "Common",
  }))

  return (
    <main
      style={{
        display: "flex",
        minHeight: "calc(100vh - 4rem)",
        flexDirection: "column",
        backgroundColor: "var(--background)",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "var(--foreground)",
              }}
            >
              Explore Memes
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--muted-foreground)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Discover and collect the best memes in the Flow.
            </p>
          </div>

          {/* Search and Filter */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                flex: "1",
                maxWidth: "400px",
              }}
            >
              <Search size={20} style={{ color: "var(--muted-foreground)", marginRight: "0.5rem" }} />
              <input
                type="text"
                placeholder="Search memes..."
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "var(--foreground)",
                  width: "100%",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <Button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "var(--card)",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <Filter size={18} />
                Filters
              </Button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  padding: "0.25rem",
                }}
              >
                <button onClick={() => setActiveTab("trending")} style={tabStyle(activeTab === "trending")}>
                  <TrendingUp size={18} style={{ marginRight: "0.25rem", display: "inline" }} />
                  Trending
                </button>
                <button onClick={() => setActiveTab("newest")} style={tabStyle(activeTab === "newest")}>
                  <Clock size={18} style={{ marginRight: "0.25rem", display: "inline" }} />
                  Newest
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            <button onClick={() => setActiveFilter("all")} style={filterStyle(activeFilter === "all")}>
              All
            </button>
            <button onClick={() => setActiveFilter("common")} style={filterStyle(activeFilter === "common")}>
              Common
            </button>
            <button onClick={() => setActiveFilter("rare")} style={filterStyle(activeFilter === "rare")}>
              Rare
            </button>
            <button onClick={() => setActiveFilter("epic")} style={filterStyle(activeFilter === "epic")}>
              Epic
            </button>
            <button onClick={() => setActiveFilter("legendary")} style={filterStyle(activeFilter === "legendary")}>
              Legendary
            </button>
          </div>

          {/* Meme Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {memes.map((meme) => (
              <Link href={`/meme/${meme.id}`} key={meme.id} style={{ textDecoration: "none" }}>
                <div style={cardStyle} className="card-hover">
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1/1",
                        width: "100%",
                        overflow: "hidden",
                        backgroundColor: "var(--muted)",
                      }}
                    >
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Meme ${meme.id}`}
                        alt={`Meme ${meme.id}`}
                        width={300}
                        height={300}
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                      <div style={badgeStyle(meme.rarity)}>{meme.rarity}</div>
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <h3
                      style={{
                        fontWeight: 600,
                        fontSize: "1.125rem",
                        color: "var(--foreground)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {meme.title}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>@{meme.creator}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        <ThumbsUp size={14} style={{ marginRight: "0.25rem" }} />
                        <span>{meme.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button
              style={{
                backgroundColor: "var(--card)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                padding: "0.75rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 500,
              }}
            >
              Load More
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
