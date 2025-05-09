"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Upload, Sparkles, ArrowRight } from "lucide-react"

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
    rarity: "Legendary",
  }
}

export default function RemixPage({ params }: { params: { id: string } }) {
  const originalMeme = getMemeData(params.id)
  const [caption, setCaption] = useState("")
  const [remixTitle, setRemixTitle] = useState(`Remix of: ${originalMeme.title}`)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleGenerateAICaption = () => {
    // In a real app, this would call an AI service
    setCaption("When you finally fix that one bug but create three more in the process 😅")
  }

  const handleRemix = () => {
    // In a real app, this would submit the remix to your backend
    alert("Remix created successfully!")
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
        {/* Back Button */}
        <Link
          href={`/meme/${params.id}`}
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
          <span>Back to Original Meme</span>
        </Link>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "var(--foreground)",
            }}
          >
            Remix This Meme
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted-foreground)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Add your own twist to this meme by changing the caption or image. Credit will automatically be given to the
            original creator.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            "@media (min-width: 1024px)": {
              gridTemplateColumns: "1fr 1fr",
            },
          }}
        >
          {/* Original Meme */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--foreground)",
              }}
            >
              Original Meme
            </h2>

            <div
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                backgroundColor: "var(--card)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    height: "2.5rem",
                    width: "2.5rem",
                    borderRadius: "9999px",
                    backgroundColor: "var(--primary)",
                    opacity: 0.1,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={originalMeme.creator.avatar || "/placeholder.svg"}
                    alt={originalMeme.creator.name}
                    width={40}
                    height={40}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <Link
                    href={`/profile/${originalMeme.creator.username}`}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                      textDecoration: "none",
                    }}
                  >
                    @{originalMeme.creator.username}
                  </Link>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>Original Creator</p>
                </div>
              </div>

              <div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    backgroundColor: "var(--muted)",
                  }}
                >
                  <Image
                    src={originalMeme.image || "/placeholder.svg"}
                    alt={originalMeme.title}
                    width={600}
                    height={400}
                    style={{ objectFit: "contain", width: "100%" }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      marginBottom: "0.75rem",
                      color: "var(--foreground)",
                    }}
                  >
                    {originalMeme.title}
                  </h3>
                  <p style={{ color: "var(--muted-foreground)" }}>{originalMeme.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remix Form */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--foreground)",
              }}
            >
              Your Remix
            </h2>

            <div
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "1rem",
                padding: "1.5rem",
              }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    color: "var(--foreground)",
                  }}
                >
                  Remix Title
                </label>
                <input
                  type="text"
                  value={remixTitle}
                  onChange={(e) => setRemixTitle(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                    fontSize: "1rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    color: "var(--foreground)",
                  }}
                >
                  New Caption
                </label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter your new caption..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                    fontSize: "1rem",
                    minHeight: "100px",
                    resize: "vertical",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "var(--muted)",
                    cursor: "pointer",
                    marginTop: "0.75rem",
                  }}
                  onClick={handleGenerateAICaption}
                >
                  <Sparkles size={20} style={{ color: "var(--primary)" }} />
                  <div>
                    <p
                      style={{
                        fontWeight: 500,
                        color: "var(--foreground)",
                      }}
                    >
                      Generate AI Caption
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Let AI suggest a funny caption based on the original meme
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    color: "var(--foreground)",
                  }}
                >
                  Upload New Image (Optional)
                </label>

                <div
                  style={{
                    border: "2px dashed var(--border)",
                    borderRadius: "0.5rem",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    backgroundColor: "var(--background)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      backgroundColor: "var(--primary)",
                      opacity: 0.1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Upload size={24} style={{ color: "var(--primary)" }} />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: 500, color: "var(--foreground)", marginBottom: "0.25rem" }}>
                      Drag and drop an image
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                      or click to browse (PNG, JPG, GIF up to 5MB)
                    </p>
                  </div>
                  <Button
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.375rem",
                      border: "none",
                    }}
                  >
                    Choose File
                  </Button>
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    color: "var(--foreground)",
                  }}
                >
                  Preview
                </label>

                <div
                  style={{
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    backgroundColor: "var(--muted)",
                    aspectRatio: "16/9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {uploadedImage ? (
                    <Image
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Preview"
                      width={600}
                      height={400}
                      style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
                    />
                  ) : (
                    <div style={{ textAlign: "center", padding: "2rem" }}>
                      <p>Your remix preview will appear here</p>
                      <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Using original image with new caption</p>
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={handleRemix}
                style={{
                  width: "100%",
                  backgroundColor: "var(--primary)",
                  color: "white",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                Create Remix <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
