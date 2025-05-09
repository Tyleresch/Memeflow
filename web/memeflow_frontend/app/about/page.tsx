"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, Zap, Trophy, Shuffle, DollarSign, ChevronRight, Star, Award, TrendingUp, Users, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("what-is-memeflow")

  // Animation for elements as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  // Scroll to section when clicking on nav
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main
      style={{
        display: "flex",
        minHeight: "calc(100vh - 4rem)",
        flexDirection: "column",
        backgroundColor: "var(--background)",
      }}
    >
      {/* Hero Section */}
      <section
        className="hackathon-gradient"
        style={{
          position: "relative",
          width: "100%",
          padding: "6rem 0",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Background elements */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="animate-fadeIn"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1.5rem",
            }}
          >
            <div style={{ marginBottom: "1rem" }}>
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "bold",
                  lineHeight: "1.1",
                  marginBottom: "1.5rem",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                About MemeFlow
              </h1>
              <p
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  fontSize: "1.25rem",
                  opacity: 0.9,
                }}
              >
                From upload to legendary status—and royalties every time it trades—here's the life cycle of a meme in the
                Flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation + Content */}
      <div
        style={{
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 1rem",
          gap: "2rem",
          width: "100%",
        }}
      >
        {/* Side Navigation */}
        <div
          style={{
            width: "250px",
            position: "sticky",
            top: "6rem",
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1rem",
            backgroundColor: "var(--card)",
            borderRadius: "1rem",
            border: "1px solid var(--border)",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "var(--foreground)",
            }}
          >
            Quick Navigation
          </h3>
          <NavItem
            id="what-is-memeflow"
            label="What is MemeFlow"
            icon={<Star size={16} />}
            active={activeSection === "what-is-memeflow"}
            onClick={() => scrollToSection("what-is-memeflow")}
          />
          <NavItem
            id="how-it-works"
            label="How It Works"
            icon={<Zap size={16} />}
            active={activeSection === "how-it-works"}
            onClick={() => scrollToSection("how-it-works")}
          />
          <NavItem
            id="rarity-system"
            label="Rarity System"
            icon={<Award size={16} />}
            active={activeSection === "rarity-system"}
            onClick={() => scrollToSection("rarity-system")}
          />
          <NavItem
            id="remix-feature"
            label="Remix Feature"
            icon={<Shuffle size={16} />}
            active={activeSection === "remix-feature"}
            onClick={() => scrollToSection("remix-feature")}
          />
          <NavItem
            id="royalties"
            label="Royalties"
            icon={<DollarSign size={16} />}
            active={activeSection === "royalties"}
            onClick={() => scrollToSection("royalties")}
          />
          <NavItem
            id="community"
            label="Community"
            icon={<Users size={16} />}
            active={activeSection === "community"}
            onClick={() => scrollToSection("community")}
          />
          <NavItem
            id="get-started"
            label="Get Started"
            icon={<ChevronRight size={16} />}
            active={activeSection === "get-started"}
            onClick={() => scrollToSection("get-started")}
          />
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
          {/* What is MemeFlow */}
          <section id="what-is-memeflow" className="animate-on-scroll">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
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
                  <Star size={24} style={{ color: "var(--primary)" }} />
                </div>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  What is MemeFlow?
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "var(--foreground)",
                    marginBottom: "1.5rem",
                  }}
                >
                  MemeFlow is a vibrant Solana-based dApp where the internet's most shareable content comes to life as
                  dynamic NFTs. It's a platform that transforms ordinary memes into valuable digital assets that can
                  evolve over time based on community engagement.
                </p>

                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "var(--foreground)",
                    marginBottom: "1.5rem",
                  }}
                >
                  What makes MemeFlow unique is its community-driven evolution: each minted meme enters the "Flow," where
                  users vote to rank its humor and cultural relevance. As memes gain popularity, they climb through
                  rarity tiers, potentially becoming scarce collectibles.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginTop: "2rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "var(--foreground)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Key Features
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    <FeatureCard
                      icon={<Upload size={24} style={{ color: "var(--primary)" }} />}
                      title="Easy Minting"
                      description="Upload images and mint them as NFTs with just a few clicks"
                    />
                    <FeatureCard
                      icon={<TrendingUp size={24} style={{ color: "var(--primary)" }} />}
                      title="Community Ranking"
                      description="Memes are ranked by community votes, determining their rarity"
                    />
                    <FeatureCard
                      icon={<Shuffle size={24} style={{ color: "var(--primary)" }} />}
                      title="Remix Capability"
                      description="Create new memes based on existing templates with proper attribution"
                    />
                    <FeatureCard
                      icon={<DollarSign size={24} style={{ color: "var(--primary)" }} />}
                      title="Creator Royalties"
                      description="Earn royalties every time your meme is traded or remixed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="animate-on-scroll">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
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
                  <Zap size={24} style={{ color: "var(--primary)" }} />
                </div>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  How It Works
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <ProcessStep
                    number="01"
                    title="Upload & Mint"
                    description="Drop in your image, optionally pair it with an AI-generated caption, and mint multiple editions on Solana. Each meme starts as a Common NFT with multiple editions available."
                    icon={<Upload size={32} style={{ color: "var(--primary)" }} />}
                  />

                  <ProcessStep
                    number="02"
                    title="Enter the Flow"
                    description="Your meme joins the Flow where the community votes to rank its humor and cultural relevance. Every upvote increases your meme's rank score, while downvotes decrease it."
                    icon={<Zap size={32} style={{ color: "var(--primary)" }} />}
                  />

                  <ProcessStep
                    number="03"
                    title="Climb the Ranks"
                    description="High-ranked memes unlock rarer editions—Rare, Epic, Legendary, and one-of-one Apex variants. As your meme gains popularity, new editions with increased scarcity become available."
                    icon={<Trophy size={32} style={{ color: "var(--primary)" }} />}
                  />

                  <ProcessStep
                    number="04"
                    title="Earn Royalties"
                    description="Each time an edition resells, the original creator automatically receives royalties—no extra steps needed. The higher the rarity, the more valuable your meme becomes."
                    icon={<DollarSign size={32} style={{ color: "var(--primary)" }} />}
                  />

                  <ProcessStep
                    number="05"
                    title="Remix & Evolve"
                    description="Anyone can remix a meme template; credits and royalties flow back to the original creator chain. This creates a collaborative ecosystem where great ideas evolve and creators are rewarded."
                    icon={<Shuffle size={32} style={{ color: "var(--primary)" }} />}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Rarity System */}
          <section id="rarity-system" className="animate-on-scroll">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
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
                  <Award size={24} style={{ color: "var(--primary)" }} />
                </div>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  Rarity System
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "var(--foreground)",
                    marginBottom: "2rem",
                  }}
                >
                  MemeFlow's rarity system is what makes it truly unique. As your meme gains popularity through
                  community votes, it progresses through different rarity tiers, each offering more exclusive editions
                  and greater value.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  <RarityCard
                    title="Common"
                    color="#f3f4f6"
                    textColor="#374151"
                    editions="100 editions"
                    votes="0-999 votes"
                    description="The starting tier for all memes. Common memes are widely available but still unique as NFTs."
                  />

                  <RarityCard
                    title="Rare"
                    color="#dcfce7"
                    textColor="#166534"
                    editions="50 editions"
                    votes="1,000-4,999 votes"
                    description="Memes that have proven their appeal. Rare editions have more limited availability."
                  />

                  <RarityCard
                    title="Epic"
                    color="#dbeafe"
                    textColor="#1e40af"
                    editions="25 editions"
                    votes="5,000-19,999 votes"
                    description="Highly popular memes that have resonated with the community. Epic editions are scarce."
                  />

                  <RarityCard
                    title="Legendary"
                    color="#fef3c7"
                    textColor="#92400e"
                    editions="10 editions"
                    votes="20,000-99,999 votes"
                    description="The cream of the crop. Legendary memes are among the most valued in the ecosystem."
                  />

                  <RarityCard
                    title="Apex"
                    color="#fee2e2"
                    textColor="#b91c1c"
                    editions="1 edition"
                    votes="100,000+ votes"
                    description="The pinnacle of meme culture. Only one Apex edition exists for each qualifying meme."
                  />
                </div>

                <div
                  style={{
                    backgroundColor: "var(--muted)",
                    borderRadius: "0.75rem",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "var(--foreground)",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Sparkles size={20} style={{ color: "var(--primary)" }} />
                    How to Climb the Ranks
                  </h3>

                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    <li style={{ color: "var(--foreground)" }}>
                      <span style={{ fontWeight: 500 }}>Create quality content</span> - The better your meme, the more
                      likely it is to receive upvotes
                    </li>
                    <li style={{ color: "var(--foreground)" }}>
                      <span style={{ fontWeight: 500 }}>Share your memes</span> - Promote your memes on social media to
                      drive more traffic and votes
                    </li>
                    <li style={{ color: "var(--foreground)" }}>
                      <span style={{ fontWeight: 500 }}>Engage with the community</span> - Active members tend to receive
                      more attention and votes
                    </li>
                    <li style={{ color: "var(--foreground)" }}>
                      <span style={{ fontWeight: 500 }}>Create timely content</span> - Memes related to current events
                      often gain traction quickly
                    </li>
                    <li style={{ color: "var(--foreground)" }}>
                      <span style={{ fontWeight: 500 }}>Remix popular templates</span> - Adding your unique twist to
                      trending templates can help your meme gain visibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Remix Feature */}
          <section id="remix-feature" className="animate-on-scroll">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
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
                  <Shuffle size={24} style={{ color: "var(--primary)" }} />
                </div>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  Remix Feature
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "var(--foreground)",
                    marginBottom: "2rem",
                  }}
                >
                  MemeFlow's remix feature encourages creativity while ensuring original creators are properly credited
                  and rewarded. It's a win-win system that fosters a collaborative and constantly evolving meme
                  landscape.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "2rem",
                    "@media (min-width: 768px)": {
                      gridTemplateColumns: "1fr 1fr",
                    },
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "var(--foreground)",
                        marginBottom: "1rem",
                      }}
                    >
                      How Remixing Works
                    </h3>

                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <li
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          1
                        </div>
                        <div>
                          <p style={{ color: "var(--foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            Find a meme you want to remix
                          </p>
                          <p style={{ color: "var(--muted-foreground)" }}>
                            Browse the platform for memes that inspire you or have remix potential
                          </p>
                        </div>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          2
                        </div>
                        <div>
                          <p style={{ color: "var(--foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            Click the "Remix" button
                          </p>
                          <p style={{ color: "var(--muted-foreground)" }}>
                            This opens the remix interface where you can modify the meme
                          </p>
                        </div>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          3
                        </div>
                        <div>
                          <p style={{ color: "var(--foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            Add your creative twist
                          </p>
                          <p style={{ color: "var(--muted-foreground)" }}>
                            Change the caption, modify the image, or use AI to generate new content
                          </p>
                        </div>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          4
                        </div>
                        <div>
                          <p style={{ color: "var(--foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            Mint your remix
                          </p>
                          <p style={{ color: "var(--muted-foreground)" }}>
                            The original creator is automatically credited and receives a portion of royalties
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "var(--foreground)",
                        marginBottom: "1rem",
                      }}
                    >
                      Benefits of Remixing
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "var(--muted)",
                          borderRadius: "0.75rem",
                          padding: "1.25rem",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: "bold",
                            color: "var(--foreground)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          For Creators
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          <li style={{ color: "var(--foreground)" }}>
                            Earn royalties when others remix your memes
                          </li>
                          <li style={{ color: "var(--foreground)" }}>
                            Gain recognition as your meme template spreads
                          </li>
                          <li style={{ color: "var(--foreground)" }}>
                            Build a reputation as a meme originator
                          </li>
                        </ul>
                      </div>

                      <div
                        style={{
                          backgroundColor: "var(--muted)",
                          borderRadius: "0.75rem",
                          padding: "1.25rem",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: "bold",
                            color: "var(--foreground)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          For Remixers
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          <li style={{ color: "var(--foreground)" }}>
                            Build on established meme templates that already resonate
                          </li>
                          <li style={{ color: "var(--foreground)" }}>
                            Focus on creative additions rather than starting from scratch
                          </li>
                          <li style={{ color: "var(--foreground)" }}>
                            Gain visibility by connecting to popular original memes
                          </li>
                        </ul>
                      </div>

                      <div
                        style={{
                          backgroundColor: "var(--muted)",
                          borderRadius: "0.75rem",
                          padding: "1.25rem",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: "bold",
                            color: "var(--foreground)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          For the Ecosystem
                        </h4>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          <li style={{ color: "var(--foreground)" }}>
                            Creates a collaborative environment where memes evolve
                          </li>
                          <li style={{ color: "var(--foreground)" }}>
                            Ensures proper attribution throughout the creative chain
                          </li>
                          <li style={{ color: "var(--foreground)" }}>
                            Builds a rich network of interconnected meme content
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Royalties */}
          <section id="royalties" className="animate-on-scroll">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
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
                  <DollarSign size={24} style={{ color: "var(--primary)" }} />
                </div>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  Royalties
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "var(--foreground)",
                    marginBottom: "2rem",
                  }}
                >
                  MemeFlow ensures creators are fairly compensated through an automatic royalty system. Every time your
                  meme is traded or remixed, you receive a percentage of the transaction value.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "2rem",
                    "@media (min-width: 768px)": {
                      gridTemplateColumns: "1fr 1fr",
                    },
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--muted)",
                      borderRadius: "1rem",
                      padding: "1.5rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "6rem",
                        height: "6rem",
                        background: "linear-gradient(135deg, var(--primary) 0%, transparent 70%)",
                        opacity: 0.1,
                        borderRadius: "0 0 0 100%",
                      }}
                    />

                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "var(--foreground)",
                        marginBottom: "1rem",
                      }}
                    >
                      How Royalties Work
                    </h3>

                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <li
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "0.75rem",
                            flexShrink: 0,
                          }}
                        >
                          1
                        </div>
                        <p style={{ color: "var(--foreground)" }}>
                          When you mint a meme, you set a royalty percentage (typically 5-10%)
                        </p>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "0.75rem",
                            flexShrink: 0,
                          }}
                        >
                          2
                        </div>
                        <p style={{ color: "var(--foreground)" }}>
                          Every time your meme is sold on a secondary market, you automatically receive that percentage
                        </p>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "0.75rem",
                            flexShrink: 0,
                          }}
                        >
                          3
                        </div>
                        <p style={{ color: "var(--foreground)" }}>
                          For remixes, the original creator receives a portion of the remix royalties
                        </p>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "0.75rem",
                            flexShrink: 0,
                          }}
                        >
                          4
                        </div>
                        <p style={{ color: "var(--foreground)" }}>
                          Royalties are paid in SOL and automatically deposited to your connected wallet
                        </p>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            fontSize: "0.75rem",
                            flexShrink: 0,
                          }}
                        >
                          5
                        </div>
                        <p style={{ color: "var(--foreground)" }}>
                          Higher rarity memes typically command higher prices, resulting in larger royalty payments
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div
                    style={{
                      backgroundColor: "var(--card)",
                      borderRadius: "1rem",
                      border: "1px solid var(--border)",
                      padding: "1.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "var(--foreground)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      Royalty Rates by Rarity
                    </h3>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.75rem 1rem",
                          backgroundColor: "#f3f4f6",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <span style={{ fontWeight: 500, color: "#374151" }}>Common</span>
                        <span style={{ fontWeight: 600, color: "#374151" }}>5%</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.75rem 1rem",
                          backgroundColor: "#dcfce7",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <span style={{ fontWeight: 500, color: "#166534" }}>Rare</span>
                        <span style={{ fontWeight: 600, color: "#166534" }}>7.5%</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.75rem 1rem",
                          backgroundColor: "#dbeafe",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <span style={{ fontWeight: 500, color: "#1e40af" }}>Epic</span>
                        <span style={{ fontWeight: 600, color: "#1e40af" }}>10%</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.75rem 1rem",
                          backgroundColor: "#fef3c7",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <span style={{ fontWeight: 500, color: "#92400e" }}>Legendary</span>
                        <span style={{ fontWeight: 600, color: "#92400e" }}>12.5%</span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.75rem 1rem",
                          backgroundColor: "#fee2e2",
                          borderRadius: "0.5rem",
                        }}
                      >
                        <span style={{ fontWeight: 500, color: "#b91c1c" }}>Apex</span>
                        <span style={{ fontWeight: 600, color: "#b91c1c" }}>15%</span>
                      </div>
                    </div>

                    <div
                      style={{
                        marginTop: "1.5rem",
                        padding: "1rem",
                        backgroundColor: "var(--muted)",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>
                        Note: Remix royalties are split with 60% going to the remixer and 40% to the original creator.
                        This ensures both parties are fairly compensated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community */}
          <section id="community" className="animate-on-scroll">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
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
                  <Users size={24} style={{ color: "var(--primary)" }} />
                </div>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  Community
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.7,
                    color: "var(--foreground)",
                    marginBottom: "2rem",
                  }}
                >
                  MemeFlow is more than just a platform—it's a vibrant community of creators, collectors, and meme
                  enthusiasts. Together, we're building the future of meme culture on the blockchain.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--muted)",
                      borderRadius: "1rem",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "var(--foreground)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Users size={20} style={{ color: "var(--primary)" }} />
                      Community Events
                    </h3>
                    <p style={{ color: "var(--foreground)" }}>
                      Join our weekly meme contests, creator showcases, and community calls. Winners receive special
                      rewards and featured placement.
                    </p>
                    <Button
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        border: "none",
                        marginTop: "0.5rem",
                      }}
                    >
                      View Events Calendar
                    </Button>
                  </div>

                  <div
                    style={{
                      backgroundColor: "var(--muted)",
                      borderRadius: "1rem",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "var(--foreground)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <TrendingUp size={20} style={{ color: "var(--primary)" }} />
                      Leaderboards
                    </h3>
                    <p style={{ color: "var(--foreground)" }}>
                      Check out our leaderboards to see the top creators, collectors, and memes. Climb the ranks and gain
                      recognition in the community.
                    </p>
                    <Button
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        border: "none",
                        marginTop: "0.5rem",
                      }}
                    >
                      View Leaderboards
                    </Button>
                  </div>

                  <div
                    style={{
                      backgroundColor: "var(--muted)",
                      borderRadius: "1rem",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "var(--foreground)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Sparkles size={20} style={{ color: "var(--primary)" }} />
                      Creator Program
                    </h3>
                    <p style={{ color: "var(--foreground)" }}>
                      Our Creator Program offers additional benefits to active contributors, including early access to
                      new features and higher visibility.
                    </p>
                    <Button
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        border: "none",
                        marginTop: "0.5rem",
                      }}
                    >
                      Apply to Creator Program
                    </Button>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    padding: "1.5rem",
                    backgroundColor: "var(--primary)",
                    borderRadius: "1rem",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Join Our Community</h3>
                  <p style={{ maxWidth: "600px" }}>
                    Connect with fellow meme creators and collectors on our social channels. Share ideas, get feedback,
                    and stay updated on the latest MemeFlow news.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "0.5rem",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "var(--primary)",
                        padding: "0.5rem 1.5rem",
                        borderRadius: "0.375rem",
                        border: "none",
                        fontWeight: 500,
                      }}
                    >
                      Discord
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "var(--primary)",
                        padding: "0.5rem 1.5rem",
                        borderRadius: "0.375rem",
                        border: "none",
                        fontWeight: 500,
                      }}
                    >
                      Twitter
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "var(--primary)",
                        padding: "0.5rem 1.5rem",
                        borderRadius: "0.375rem",
                        border: "none",
                        fontWeight: 500,
                      }}
                    >
                      Telegram
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section id="get-started" className="animate-on-scroll">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
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
                  <ChevronRight size={24} style={{ color: "var(--primary)" }} />
                </div>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "var(--foreground)",
                  }}
                >
                  Get Started
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: "var(--card)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "2rem",
                    "@media (min-width: 768px)": {
                      gridTemplateColumns: "1fr 1fr",
                    },
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "var(--foreground)",
                        marginBottom: "1rem",
                      }}
                    >
                      Ready to Join MemeFlow?
                    </h3>
                    <p
                      style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.7,
                        color: "var(--foreground)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      Getting started with MemeFlow is easy. Just follow these simple steps to begin your journey into
                      the world of on-chain memes.
                    </p>

                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <li
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          1
                        </div>
                        <div>
                          <p style={{ color: "var(--foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            Set up a Solana wallet
                          </p>
                          <p style={{ color: "var(--muted-foreground)" }}>
                            We recommend Phantom or Solflare for the best experience
                          </p>
                        </div>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          2
                        </div>
                        <div>
                          <p style={{ color: "var(--foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            Connect your wallet to MemeFlow
                          </p>
                          <p style={{ color: "var(--muted-foreground)" }}>
                            Click the "Connect Wallet" button in the top right corner
                          </p>
                        </div>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          3
                        </div>
                        <div>
                          <p style={{ color: "var(--foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            Create your profile
                          </p>
                          <p style={{ color: "var(--muted-foreground)" }}>
                            Set up your username, profile picture, and bio
                          </p>
                        </div>
                      </li>

                      <li
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          4
                        </div>
                        <div>
                          <p style={{ color: "var(--foreground)", fontWeight: 500, marginBottom: "0.25rem" }}>
                            Start creating or collecting
                          </p>
                          <p style={{ color: "var(--muted-foreground)" }}>
                            Upload your first meme or browse the marketplace to start your collection
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "1.5rem",
                    }}
                  >
                    <div
                      className="hackathon-gradient"
                      style={{
                        borderRadius: "1rem",
                        padding: "2rem",
                        color: "white",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1.5rem",
                      }}
                    >
                      <h3 style={{ fontSize: "1.75rem", fontWeight: "bold" }}>Join the Flow Today</h3>
                      <p style={{ fontSize: "1.125rem", opacity: 0.9 }}>
                        Start your journey into the world of on-chain memes and become part of the MemeFlow community.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          flexWrap: "wrap",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          asChild
                          style={{
                            backgroundColor: "white",
                            color: "var(--primary)",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "0.5rem",
                            border: "none",
                            fontWeight: "bold",
                            fontSize: "1rem",
                          }}
                        >
                          <Link href="/create">Start Creating</Link>
                        </Button>
                        <Button
                          asChild
                          style={{
                            backgroundColor: "transparent",
                            color: "white",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "0.5rem",
                            border: "2px solid white",
                            fontWeight: "bold",
                            fontSize: "1rem",
                          }}
                        >
                          <Link href="/explore">Explore Memes</Link>
                        </Button>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: "var(--muted)",
                        borderRadius: "1rem",
                        padding: "1.5rem",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          color: "var(--foreground)",
                          marginBottom: "1rem",
                        }}
                      >
                        Need Help?
                      </h3>
                      <p style={{ color: "var(--foreground)", marginBottom: "1.5rem" }}>
                        Check out our comprehensive resources to learn more about MemeFlow and how to make the most of
                        the platform.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        <Link
                          href="/faq"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "var(--foreground)",
                            textDecoration: "none",
                            padding: "0.75rem",
                            borderRadius: "0.5rem",
                            backgroundColor: "var(--card)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <ChevronRight size={16} style={{ color: "var(--primary)" }} />
                          <span>Frequently Asked Questions</span>
                        </Link>

                        <Link
                          href="/tutorials"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "var(--foreground)",
                            textDecoration: "none",
                            padding: "0.75rem",
                            borderRadius: "0.5rem",
                            backgroundColor: "var(--card)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <ChevronRight size={16} style={{ color: "var(--primary)" }} />
                          <span>Video Tutorials</span>
                        </Link>

                        <Link
                          href="/discord"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "var(--foreground)",
                            textDecoration: "none",
                            padding: "0.75rem",
                            borderRadius: "0.5rem",
                            backgroundColor: "var(--card)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <ChevronRight size={16} style={{ color: "var(--primary)" }} />
                          <span>Join Our Discord Community</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

// Navigation Item Component
function NavItem({ id, label, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 1rem",
        borderRadius: "0.5rem",
        backgroundColor: active ? "var(--primary)" : "transparent",
        color: active ? "white" : "var(--foreground)",
        border: "none",
        cursor: "pointer",
        width: "100%",
        textAlign: "left",
        transition: "all 0.2s",
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div
      style={{
        backgroundColor: "var(--muted)",
        borderRadius: "0.75rem",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {icon}
        <h4
          style={{
            fontSize: "1.125rem",
            fontWeight: "bold",
            color: "var(--foreground)",
          }}
        >
          {title}
        </h4>
      </div>
      <p style={{ color: "var(--muted-foreground)" }}>{description}</p>
    </div>
  )
}

// Process Step Component
function ProcessStep({ number, title, description, icon }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "flex-start",
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
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: "bold",
              color: "var(--primary)",
            }}
          >
            {number}
          </span>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "var(--foreground)",
            }}
          >
            {title}
          </h3>
        </div>
        <p style={{ color: "var(--muted-foreground)" }}>{description}</p>
      </div>
    </div>
  )
}

// Rarity Card Component
function RarityCard({ title, color, textColor, editions, votes, description }) {
  return (
    <div
      style={{
        backgroundColor: "var(--card)",
        borderRadius: "0.75rem",
        overflow: "hidden",
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          backgroundColor: color,
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: textColor,
          }}
        >
          {title}
        </h3>
      </div>
      <div style={{ padding: "1.25rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--muted)",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--foreground)",
            }}
          >
            {editions}
          </div>
          <div
            style={{
              backgroundColor: "var(--muted)",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--foreground)",
            }}
          >
            {votes}
          </div>
        </div>
        <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem" }}>{description}</p>
      </div>
    </div>
  )
}

