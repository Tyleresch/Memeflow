"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Share2, MessageCircle, Bookmark, Shuffle, ArrowLeft, Award, TrendingUp, Copy, ExternalLink } from 'lucide-react'

// Mock data for a single meme
const getMemeData = (id: string) => {
  return {
    id,
    title: "When the code finally works after 100 attempts",
    description: "That feeling when your code compiles without errors on the first try.",
    creator: {
      name: "Meme Lord",
      username: "meme_lord",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    image: "/placeholder.svg?height=720&width=1280",
    likes: 1243,
    dislikes: 24,
    comments: 89,
    rarity: "Legendary",
    createdAt: "2 days ago",
    mintAddress: "8xzt...3kWF",
    collection: "Coding Memes",
    tags: ["coding", "programming", "debugging", "hackathon"],
    rankProgress: 78, // percentage to next rank
  }
}

// Mock comments data
const getCommentsData = () => {
  return [
    {
      id: "1",
      user: {
        name: "Jane Doe",
        username: "jane_doe",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content: "This is exactly how I felt during the hackathon last weekend! 😂",
      likes: 42,
      createdAt: "1 day ago",
    },
    {
      id: "2",
      user: {
        name: "John Smith",
        username: "jsmith",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content: "The accuracy is painful. Especially when it's a simple typo that took hours to find.",
      likes: 28,
      createdAt: "1 day ago",
    },
    {
      id: "3",
      user: {
        name: "Dev Ninja",
        username: "dev_ninja",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      content: "I'm in this picture and I don't like it 🤣",
      likes: 15,
      createdAt: "12 hours ago",
    },
  ]
}

// Mock related memes
const getRelatedMemes = () => {
  return [
    {
      id: "2",
      title: "CSS Positioning Be Like",
      image: "/placeholder.svg?height=300&width=300&text=CSS Meme",
      creator: "css_wizard",
      likes: 856,
      rarity: "Epic",
    },
    {
      id: "3",
      title: "JavaScript Promises Explained",
      image: "/placeholder.svg?height=300&width=300&text=JS Meme",
      creator: "js_guru",
      likes: 723,
      rarity: "Rare",
    },
    {
      id: "4",
      title: "When the bug disappears after adding console.log",
      image: "/placeholder.svg?height=300&width=300&text=Debug Meme",
      creator: "debug_master",
      likes: 912,
      rarity: "Epic",
    },
  ]
}

export default function MemePage({ params }: { params: { id: string } }) {
  const meme = getMemeData(params.id)
  const comments = getCommentsData()
  const relatedMemes = getRelatedMemes()

  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [showComments, setShowComments] = useState(true)

  const handleLike = () => {
    if (disliked) setDisliked(false)
    setLiked(!liked)
  }

  const handleDislike = () => {
    if (liked) setLiked(false)
    setDisliked(!disliked)
  }

  const handleSave = () => {
    setSaved(!saved)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the comment to your backend
    alert(`Comment submitted: ${commentText}`)
    setCommentText("")
  }

  const getRarityColor = (rarity: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      Legendary: { bg: "#fef3c7", text: "#92400e" },
      Epic: { bg: "#dbeafe", text: "#1e40af" },
      Rare: { bg: "#dcfce7", text: "#166534" },
      Common: { bg: "#f3f4f6", text: "#374151" },
    }

    return colors[rarity] || colors["Common"]
  }

  const rarityColor = getRarityColor(meme.rarity)

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
        {/* Back Button */}
        <Link
          href="/explore"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
            color: "var(--muted-foreground)",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Explore</span>
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            "@media (min-width: 1024px)": {
              gridTemplateColumns: "2fr 1fr",
            },
          }}
        >
          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* Meme Card */}
            <div
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                backgroundColor: "var(--card)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Creator Info */}
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      height: "2.5rem",
                      width: "2.5rem",
                      borderRadius: "9999px",
                      backgroundColor: "var(--primary)",
                      opacity: 0.1,
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={meme.creator.avatar || "/placeholder.svg"}
                      alt={meme.creator.name}
                      width={40}
                      height={40}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <Link
                      href={`/profile/${meme.creator.username}`}
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--foreground)",
                        textDecoration: "none",
                      }}
                    >
                      @{meme.creator.username}
                    </Link>
                    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                      Created {meme.createdAt}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    backgroundColor: rarityColor.bg,
                    color: rarityColor.text,
                    borderRadius: "9999px",
                    padding: "0.375rem 0.75rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    alignItems: "center",
                    gap: "0.375rem",
                  }}
                >
                  <Award size={16} />
                  {meme.rarity}
                </div>
              </div>

              {/* Meme Image */}
              <div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    backgroundColor: "var(--muted)",
                  }}
                >
                  <Image
                    src={meme.image || "/placeholder.svg"}
                    alt={meme.title}
                    width={1280}
                    height={720}
                    style={{ objectFit: "contain", width: "100%", maxHeight: "70vh" }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h1
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: "bold",
                      marginBottom: "0.75rem",
                      color: "var(--foreground)",
                    }}
                  >
                    {meme.title}
                  </h1>
                  <p style={{ color: "var(--muted-foreground)", fontSize: "1.1rem", marginBottom: "1rem" }}>
                    {meme.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                    {meme.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/explore?tag=${tag}`}
                        style={{
                          backgroundColor: "var(--muted)",
                          color: "var(--muted-foreground)",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          textDecoration: "none",
                        }}
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  borderTop: "1px solid var(--border)",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Button
                    onClick={handleLike}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 0.75rem",
                      backgroundColor: liked ? "var(--primary)" : "transparent",
                      color: liked ? "white" : "var(--foreground)",
                      border: liked ? "none" : "1px solid var(--border)",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <ThumbsUp style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>{liked ? meme.likes + 1 : meme.likes}</span>
                  </Button>
                  <Button
                    onClick={handleDislike}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 0.75rem",
                      backgroundColor: disliked ? "var(--destructive)" : "transparent",
                      color: disliked ? "white" : "var(--foreground)",
                      border: disliked ? "none" : "1px solid var(--border)",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <ThumbsDown style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>{disliked ? meme.dislikes + 1 : meme.dislikes}</span>
                  </Button>
                  <Button
                    onClick={() => setShowComments(!showComments)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 0.75rem",
                      backgroundColor: "transparent",
                      color: "var(--foreground)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <MessageCircle style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>{meme.comments}</span>
                  </Button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Button
                    onClick={handleSave}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 0.75rem",
                      backgroundColor: saved ? "var(--primary)" : "transparent",
                      color: saved ? "white" : "var(--foreground)",
                      border: saved ? "none" : "1px solid var(--border)",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <Bookmark style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>{saved ? "Saved" : "Save"}</span>
                  </Button>
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 0.75rem",
                      backgroundColor: "transparent",
                      color: "var(--foreground)",
                      border: "1px solid var(--border)",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <Share2 style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>Share</span>
                  </Button>
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 0.75rem",
                      backgroundColor: "var(--primary)",
                      color: "white",
                      border: "none",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <Shuffle style={{ width: "1.25rem", height: "1.25rem" }} />
                    <span>Remix</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Rank Progress */}
            <div
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <TrendingUp size={20} style={{ color: "var(--primary)" }} />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "var(--foreground)" }}>
                    Rank Progress
                  </h3>
                </div>
                <div
                  style={{
                    backgroundColor: rarityColor.bg,
                    color: rarityColor.text,
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  {meme.rarity}
                </div>
              </div>

              <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem" }}>
                This meme is {meme.rankProgress}% of the way to the next rank. Keep voting to help it climb!
              </p>

              {/* Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: "0.75rem",
                  backgroundColor: "var(--muted)",
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${meme.rankProgress}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, var(--primary) 0%, #3b82f6 100%)",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)",
                }}
              >
                <span>Current: {meme.rarity}</span>
                <span>Next: Apex</span>
              </div>
            </div>

            {/* Comments Section */}
            {showComments && (
              <div
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                    color: "var(--foreground)",
                  }}
                >
                  Comments ({comments.length})
                </h3>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} style={{ marginBottom: "2rem" }}>
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        opacity: 0.1,
                      }}
                    />
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Add a comment..."
                      style={{
                        flex: 1,
                        padding: "0.75rem",
                        borderRadius: "0.5rem",
                        border: "1px solid var(--border)",
                        backgroundColor: "var(--background)",
                        color: "var(--foreground)",
                        resize: "vertical",
                        minHeight: "5rem",
                      }}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      type="submit"
                      disabled={!commentText.trim()}
                      style={{
                        backgroundColor: commentText.trim() ? "var(--primary)" : "var(--muted)",
                        color: commentText.trim() ? "white" : "var(--muted-foreground)",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        border: "none",
                        cursor: commentText.trim() ? "pointer" : "not-allowed",
                      }}
                    >
                      Post Comment
                    </Button>
                  </div>
                </form>

                {/* Comments List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {comments.map((comment) => (
                    <div key={comment.id} style={{ display: "flex", gap: "1rem" }}>
                      <div
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          borderRadius: "50%",
                          overflow: "hidden",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={comment.user.avatar || "/placeholder.svg"}
                          alt={comment.user.name}
                          width={40}
                          height={40}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                          <Link
                            href={`/profile/${comment.user.username}`}
                            style={{
                              fontWeight: 600,
                              color: "var(--foreground)",
                              textDecoration: "none",
                            }}
                          >
                            @{comment.user.username}
                          </Link>
                          <span style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                            {comment.createdAt}
                          </span>
                        </div>
                        <p style={{ color: "var(--foreground)", marginBottom: "0.5rem" }}>{comment.content}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <button
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.25rem",
                              backgroundColor: "transparent",
                              border: "none",
                              color: "var(--muted-foreground)",
                              fontSize: "0.875rem",
                              cursor: "pointer",
                            }}
                          >
                            <ThumbsUp size={14} />
                            <span>{comment.likes}</span>
                          </button>
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              color: "var(--muted-foreground)",
                              fontSize: "0.875rem",
                              cursor: "pointer",
                            }}
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {/* NFT Details */}
            <div
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "var(--foreground)",
                }}
              >
                NFT Details
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>
                    Mint Address
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "var(--muted)",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "var(--foreground)" }}>{meme.mintAddress}</span>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "var(--primary)",
                        cursor: "pointer",
                      }}
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>
                    Collection
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "var(--muted)",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "var(--foreground)" }}>{meme.collection}</span>
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>
                    Created
                  </p>
                  <div
                    style={{
                      backgroundColor: "var(--muted)",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "0.375rem",
                    }}
                  >
                    <span style={{ fontSize: "0.875rem", color: "var(--foreground)" }}>{meme.createdAt}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem" }}>
                <Button
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.75rem",
                    backgroundColor: "var(--primary)",
                    color: "white",
                    border: "none",
                    borderRadius: "0.375rem",
                  }}
                >
                  Buy NFT
                </Button>
                <Button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.75rem",
                    backgroundColor: "transparent",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.375rem",
                  }}
                >
                  <ExternalLink size={18} />
                </Button>
              </div>
            </div>

            {/* Creator Info */}
            <div
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "var(--foreground)",
                }}
              >
                Creator
              </h3>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "var(--primary)",
                    opacity: 0.1,
                  }}
                >
                  <Image
                    src={meme.creator.avatar || "/placeholder.svg"}
                    alt={meme.creator.name}
                    width={56}
                    height={56}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h4 style={{ fontWeight: "bold", color: "var(--foreground)", marginBottom: "0.25rem" }}>
                    {meme.creator.name}
                  </h4>
                  <Link
                    href={`/profile/${meme.creator.username}`}
                    style={{
                      color: "var(--muted-foreground)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                    }}
                  >
                    @{meme.creator.username}
                  </Link>
                </div>
              </div>

              <Button
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "transparent",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                }}
              >
                View Profile
              </Button>
            </div>

            {/* Related Memes */}
            <div
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  color: "var(--foreground)",
                }}
              >
                Related Memes
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {relatedMemes.map((relatedMeme) => (
                  <Link
                    key={relatedMeme.id}
                    href={`/meme/${relatedMeme.id}`}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      textDecoration: "none",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      transition: "background-color 0.2s",
                      ":hover": {
                        backgroundColor: "var(--muted)",
                      },
                    }}
                  >
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "0.375rem",
                        overflow: "hidden",
                        backgroundColor: "var(--muted)",
                      }}
                    >
                      <Image
                        src={relatedMeme.image || "/placeholder.svg"}
                        alt={relatedMeme.title}
                        width={64}
                        height={64}
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "var(--foreground)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {relatedMeme.title}
                      </h4>
                      <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "0.25rem" }}>
                        @{relatedMeme.creator}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontSize: "0.75rem",
                            color: "var(--muted-foreground)",
                          }}
                        >
                          <ThumbsUp size={12} />
                          <span>{relatedMeme.likes}</span>
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: getRarityColor(relatedMeme.rarity).text,
                            backgroundColor: getRarityColor(relatedMeme.rarity).bg,
                            padding: "0.125rem 0.375rem",
                            borderRadius: "9999px",
                          }}
                        >
                          {relatedMeme.rarity}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Button
                style={{
                  width: "100%",
                  marginTop: "1.5rem",
                  padding: "0.75rem",
                  backgroundColor: "transparent",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.375rem",
                }}
              >
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
