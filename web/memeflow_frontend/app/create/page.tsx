import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Upload, Sparkles, ArrowRight } from 'lucide-react'

export default function CreatePage() {
  return (
    <main style={{ 
      display: "flex", 
      minHeight: "calc(100vh - 4rem)", 
      flexDirection: "column",
      backgroundColor: "var(--background)",
      padding: "2rem 0"
    }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        padding: "0 1rem", 
        width: "100%" 
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "2rem" 
        }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ 
              fontSize: "3rem", 
              fontWeight: "bold", 
              marginBottom: "1rem",
              color: "var(--foreground)"
            }}>
              Create Your Meme NFT
            </h1>
            <p style={{ 
              fontSize: "1.25rem", 
              color: "var(--muted-foreground)",
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              Upload an image, add a caption, and mint your meme as an NFT on Solana.
            </p>
          </div>

          {/* Create Form */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
            width: "100%"
          }}>
            {/* Upload Section */}
            <div style={{ 
              border: "2px dashed var(--border)",
              borderRadius: "1rem",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              backgroundColor: "var(--card)",
              cursor: "pointer"
            }}>
              <div style={{ 
                width: "5rem", 
                height: "5rem", 
                borderRadius: "50%", 
                backgroundColor: "var(--primary)",
                opacity: 0.1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Upload size={40} style={{ color: "var(--primary)" }} />
              </div>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "bold", 
                  marginBottom: "0.5rem",
                  color: "var(--foreground)"
                }}>
                  Drag and drop your meme
                </h3>
                <p style={{ color: "var(--muted-foreground)" }}>
                  or click to browse your files (PNG, JPG, GIF up to 10MB)
                </p>
              </div>
              <Button style={{ 
                backgroundColor: "var(--primary)",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: 500,
                border: "none"
              }}>
                Choose File
              </Button>
            </div>

            {/* Caption Section */}
            <div style={{ 
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}>
              <div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: "bold", 
                  marginBottom: "0.75rem",
                  color: "var(--foreground)"
                }}>
                  Add a Caption
                </h3>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Make your meme stand out with a catchy caption.
                </p>
              </div>
              
              <textarea 
                placeholder="Enter your caption here..."
                style={{ 
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--background)",
                  color: "var(--foreground)",
                  fontSize: "1rem",
                  minHeight: "100px",
                  resize: "vertical"
                }}
              />
              
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "0.75rem",
                padding: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: "var(--muted)",
                cursor: "pointer"
              }}>
                <Sparkles size={20} style={{ color: "var(--primary)" }} />
                <div>
                  <p style={{ 
                    fontWeight: 500,
                    color: "var(--foreground)"
                  }}>
                    Generate AI Caption
                  </p>
                  <p style={{ 
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)"
                  }}>
                    Let AI suggest a funny caption based on your image
                  </p>
                </div>
              </div>
            </div>

            {/* NFT Settings */}
            <div style={{ 
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}>
              <div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: "bold", 
                  marginBottom: "0.75rem",
                  color: "var(--foreground)"
                }}>
                  NFT Settings
                </h3>
                <p style={{ color: "var(--muted-foreground)" }}>
                  Configure your NFT properties and royalties.
                </p>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    color: "var(--foreground)"
                  }}>
                    NFT Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="My Awesome Meme"
                    style={{ 
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                      fontSize: "1rem"
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ 
                    display: "block", 
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                    color: "var(--foreground)"
                  }}>
                    Royalty Percentage (%)
                  </label>
                  <input 
                    type="number" 
                    placeholder="5"
                    min="0"
                    max="15"
                    style={{ 
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                      fontSize: "1rem"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mint Button */}
            <Button style={{ 
              backgroundColor: "var(--primary)",
              color: "white",
              padding: "1rem",
              borderRadius: "0.5rem",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem"
            }}>
              Mint Your Meme NFT <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
