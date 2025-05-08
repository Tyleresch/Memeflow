import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Settings, Copy, ExternalLink, Grid, List } from "lucide-react"

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Meme Lord",
    username: "meme_lord",
    avatar: "/placeholder.svg?height=100&width=100",
    address: "8xzt...3kWF",
    followers: 245,
    following: 112,
    bio: "Creating the dankest memes on Solana. Legendary meme collector and creator.",
    joined: "May 2023",
  }

  // Mock meme data
  const memes = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `My Awesome Meme ${i + 1}`,
    likes: Math.floor(Math.random() * 1000) + 100,
    rarity: i % 4 === 0 ? "Legendary" : i % 3 === 0 ? "Epic" : i % 2 === 0 ? "Rare" : "Common",
  }))

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
        {/* Profile Header */}
        <div
          style={{
            backgroundColor: "var(--card)",
            borderRadius: "1rem",
            overflow: "hidden",
            marginBottom: "2rem",
            border: "1px solid var(--border)",
          }}
        >
          {/* Cover Image */}
          <div
            style={{
              height: "200px",
              backgroundColor: "var(--primary)",
              opacity: 0.8,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-50px",
                left: "2rem",
                borderRadius: "50%",
                border: "4px solid var(--card)",
                overflow: "hidden",
                width: "100px",
                height: "100px",
                backgroundColor: "var(--card)",
              }}
            >
              <Image
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                width={100}
                height={100}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
              }}
            >
              <Button
                style={{
                  backgroundColor: "var(--card)",
                  color: "var(--foreground)",
                  border: "none",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Settings size={18} />
              </Button>
            </div>
          </div>

          {/* Profile Info */}
          <div
            style={{
              padding: "3rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  {user.name}
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "0.25rem",
                  }}
                >
                  <p style={{ color: "var(--muted-foreground)" }}>@{user.username}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "var(--muted)",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                      gap: "0.25rem",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {user.address}
                    </span>
                    <Copy size={12} style={{ color: "var(--muted-foreground)" }} />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "0.5rem",
                    fontWeight: 500,
                  }}
                >
                  Follow
                </Button>
                <Button
                  style={{
                    backgroundColor: "var(--card)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <ExternalLink size={16} />
                  Share
                </Button>
              </div>
            </div>

            <p
              style={{
                color: "var(--foreground)",
                maxWidth: "800px",
              }}
            >
              {user.bio}
            </p>

            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "0.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  {user.followers}
                </span>
                <span
                  style={{
                    color: "var(--muted-foreground)",
                    marginLeft: "0.25rem",
                  }}
                >
                  Followers
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  {user.following}
                </span>
                <span
                  style={{
                    color: "var(--muted-foreground)",
                    marginLeft: "0.25rem",
                  }}
                >
                  Following
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "var(--muted-foreground)",
                  }}
                >
                  Joined {user.joined}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid var(--border)",
              gap: "2rem",
            }}
          >
            <button
              style={{
                padding: "1rem 0.5rem",
                fontWeight: 600,
                color: "var(--primary)",
                borderBottom: "2px solid var(--primary)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Created
            </button>
            <button
              style={{
                padding: "1rem 0.5rem",
                fontWeight: 500,
                color: "var(--muted-foreground)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Collected
            </button>
            <button
              style={{
                padding: "1rem 0.5rem",
                fontWeight: 500,
                color: "var(--muted-foreground)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Liked
            </button>
          </div>

          {/* View Toggle */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--foreground)",
              }}
            >
              Created Memes
            </h2>

            <div
              style={{
                display: "flex",
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              <button
                style={{
                  padding: "0.5rem",
                  backgroundColor: "var(--primary)",
                  color: "white",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Grid size={18} />
              </button>
              <button
                style={{
                  padding: "0.5rem",
                  backgroundColor: "transparent",
                  color: "var(--muted-foreground)",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <List size={18} />
              </button>
            </div>
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
                <div
                  className="card-hover"
                  style={{
                    borderRadius: "1rem",
                    overflow: "hidden",
                    backgroundColor: "var(--card)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    border: "1px solid var(--border)",
                  }}
                >
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
