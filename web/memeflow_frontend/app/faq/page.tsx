"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, Mail, Linkedin, Github, Twitter, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
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
          padding: "4rem 0",
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
                Frequently Asked Questions
              </h1>
              <p
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  fontSize: "1.25rem",
                  opacity: 0.9,
                }}
              >
                Everything you need to know about MemeFlow, the Solana-based meme NFT platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "7fr 3fr",
            },
          }}
        >
          {/* Main FAQ Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <FAQSection
              title="About MemeFlow"
              questions={[
                {
                  question: "What is MemeFlow?",
                  answer:
                    "MemeFlow is a vibrant Solana-based dApp where the internet's most shareable content comes to life as dynamic NFTs. Creators upload their images and can instantly pair them with AI-generated captions or let the visuals speak for themselves. What makes MemeFlow unique is its community-driven evolution: each minted meme enters the 'Flow,' where users vote to rank its humor and cultural relevance.",
                },
                {
                  question: "Who created MemeFlow?",
                  answer:
                    "MemeFlow was created by Tyler Esch, a developer passionate about blockchain technology and meme culture. Tyler developed MemeFlow to bridge the gap between internet culture and blockchain technology, creating a platform where meme creators can be properly recognized and rewarded for their contributions.",
                },
                {
                  question: "Why was MemeFlow created?",
                  answer:
                    "MemeFlow was initially created for the Solana Breakout Hackathon powered by Colosseum. The project aims to solve the problem of meme creators not being properly credited or compensated for their work. By bringing memes on-chain as NFTs with a unique ranking system, MemeFlow creates a new ecosystem where creators can earn royalties and gain recognition.",
                },
                {
                  question: "How is MemeFlow different from other NFT platforms?",
                  answer:
                    "MemeFlow stands out with its unique community-driven ranking system that determines rarity. As memes gain popularity through votes, they climb through rarity tiers (Common, Rare, Epic, Legendary, and Apex), potentially becoming scarce collectibles. Additionally, MemeFlow's remix feature allows for collaborative creation while ensuring original creators receive proper attribution and royalties.",
                },
              ]}
            />

            <FAQSection
              title="Using MemeFlow"
              questions={[
                {
                  question: "How do I get started with MemeFlow?",
                  answer:
                    "Getting started is easy! First, set up a Solana wallet (we recommend Phantom or Solflare). Then, connect your wallet to MemeFlow, create your profile, and you're ready to start creating or collecting memes. Check out our detailed guide in the 'Get Started' section of our About page.",
                },
                {
                  question: "How do I create a meme on MemeFlow?",
                  answer:
                    "To create a meme, click the 'Create' button in the navigation bar. You can upload an image, add a caption (or use our AI to generate one), set your royalty percentage, and mint your meme as an NFT. Your meme will start as a Common NFT and can climb the ranks as it gains popularity.",
                },
                {
                  question: "How does the ranking system work?",
                  answer:
                    "Memes are ranked based on community votes. Every upvote increases your meme's rank score, while downvotes decrease it. As your meme gains popularity, it progresses through different rarity tiers: Common (0-999 votes), Rare (1,000-4,999 votes), Epic (5,000-19,999 votes), Legendary (20,000-99,999 votes), and Apex (100,000+ votes). Each tier has a limited number of editions available.",
                },
                {
                  question: "What are the benefits of remixing memes?",
                  answer:
                    "Remixing allows you to build on established meme templates that already resonate with the community. You can focus on creative additions rather than starting from scratch, and gain visibility by connecting to popular original memes. Original creators benefit by earning royalties when others remix their memes and gaining recognition as their template spreads.",
                },
                {
                  question: "How do royalties work?",
                  answer:
                    "When you mint a meme, you set a royalty percentage (typically 5-15% depending on rarity). Every time your meme is sold on a secondary market, you automatically receive that percentage. For remixes, the original creator receives 40% of the remix royalties, while the remixer gets 60%. Royalties are paid in SOL and automatically deposited to your connected wallet.",
                },
              ]}
            />

            <FAQSection
              title="Technical Details"
              questions={[
                {
                  question: "What blockchain does MemeFlow use?",
                  answer:
                    "MemeFlow is built on the Solana blockchain, chosen for its high speed, low transaction costs, and energy efficiency. This allows for a seamless user experience with near-instant transactions and minimal gas fees.",
                },
                {
                  question: "How are the NFTs stored?",
                  answer:
                    "MemeFlow NFTs use Solana's token program and Metaplex standards. The meme images themselves are stored on decentralized storage solutions to ensure permanence and censorship resistance.",
                },
                {
                  question: "Is MemeFlow open source?",
                  answer:
                    "Yes, MemeFlow's core components are open source. You can find our repositories on GitHub. We believe in transparency and community collaboration to build the best possible platform.",
                },
                {
                  question: "What technologies were used to build MemeFlow?",
                  answer:
                    "MemeFlow is built using Next.js 14, TypeScript, and Tailwind CSS for the frontend. The backend integrates with Solana web3.js, Metaplex, and uses Prisma ORM for database management. We also utilize AI services for caption generation and image enhancement.",
                },
              ]}
            />

            <FAQSection
              title="Business Model & Future Plans"
              questions={[
                {
                  question: "How does MemeFlow make money?",
                  answer:
                    "MemeFlow takes a small platform fee (2.5%) on primary sales and secondary market transactions. This sustainable revenue model allows us to maintain and improve the platform while keeping costs low for users.",
                },
                {
                  question: "What are the future plans for MemeFlow?",
                  answer:
                    "We have an exciting roadmap ahead! Future plans include launching a mobile app, implementing a DAO for community governance, expanding AI capabilities for meme creation, introducing themed collections and limited-time events, and establishing partnerships with major meme creators and brands.",
                },
                {
                  question: "Will there be a token?",
                  answer:
                    "We're exploring the possibility of a governance token that would allow community members to participate in platform decisions. However, our primary focus is on building a robust and valuable platform first.",
                },
                {
                  question: "Are you looking for investors or team members?",
                  answer:
                    "We're always open to connecting with passionate individuals who share our vision. If you're interested in investing or joining the team, please reach out through our contact information below.",
                },
              ]}
            />
          </div>

          {/* Sidebar */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Contact Card */}
            <div
              style={{
                backgroundColor: "var(--card)",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid var(--border)",
                position: "sticky",
                top: "6rem",
              }}
            >
              <div
                className="hackathon-gradient"
                style={{
                  padding: "1.5rem",
                  color: "white",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  Contact Us
                </h2>
                <p>Have a question that's not answered here? Reach out directly.</p>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
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
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        opacity: 0.1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={20} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:tyleresch29@gmail.com"
                        style={{
                          color: "var(--foreground)",
                          fontWeight: 500,
                          textDecoration: "none",
                        }}
                      >
                        tyleresch29@gmail.com
                      </a>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        opacity: 0.1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Linkedin size={20} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/tyler-esch"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--foreground)",
                          fontWeight: 500,
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        Tyler Esch
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        opacity: 0.1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Twitter size={20} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Twitter
                      </p>
                      <a
                        href="https://twitter.com/MemeFlowApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--foreground)",
                          fontWeight: 500,
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        @MemeFlowApp
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary)",
                        opacity: 0.1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Github size={20} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        GitHub
                      </p>
                      <a
                        href="https://github.com/tyleresch/memeflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--foreground)",
                          fontWeight: 500,
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        tyleresch/memeflow
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    padding: "1rem",
                    backgroundColor: "var(--muted)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                    We typically respond to inquiries within 24-48 hours. For urgent matters, please reach out via
                    Twitter DM.
                  </p>
                </div>
              </div>
            </div>

            {/* Hackathon Card */}
            <div
              style={{
                backgroundColor: "var(--card)",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <div style={{ padding: "1.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "var(--foreground)",
                  }}
                >
                  Solana Breakout Hackathon
                </h2>

                <div
                  style={{
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    marginBottom: "1rem",
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XaRlx4JleZ7wRFpcY3ZOAFiHnMFg0f.png"
                    alt="Solana Breakout Hackathon"
                    width={400}
                    height={225}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--foreground)",
                    marginBottom: "1rem",
                  }}
                >
                  MemeFlow was created as part of the Solana Breakout Hackathon powered by Colosseum. The project aims
                  to revolutionize how memes are shared, attributed, and monetized on the blockchain.
                </p>

                <Button
                  asChild
                  style={{
                    width: "100%",
                    backgroundColor: "var(--primary)",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <a href="https://arena.colosseum.org/hackathon" target="_blank" rel="noopener noreferrer">
                    Learn About the Hackathon
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div
              style={{
                backgroundColor: "var(--card)",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              <div style={{ padding: "1.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "var(--foreground)",
                  }}
                >
                  Quick Links
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <Link
                    href="/about"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "var(--muted)",
                      color: "var(--foreground)",
                      textDecoration: "none",
                    }}
                  >
                    <ChevronRight size={16} style={{ color: "var(--primary)" }} />
                    About MemeFlow
                  </Link>

                  <Link
                    href="/about#rarity-system"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "var(--muted)",
                      color: "var(--foreground)",
                      textDecoration: "none",
                    }}
                  >
                    <ChevronRight size={16} style={{ color: "var(--primary)" }} />
                    Rarity System
                  </Link>

                  <Link
                    href="/about#royalties"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "var(--muted)",
                      color: "var(--foreground)",
                      textDecoration: "none",
                    }}
                  >
                    <ChevronRight size={16} style={{ color: "var(--primary)" }} />
                    Royalties Explained
                  </Link>

                  <Link
                    href="/about#get-started"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "var(--muted)",
                      color: "var(--foreground)",
                      textDecoration: "none",
                    }}
                  >
                    <ChevronRight size={16} style={{ color: "var(--primary)" }} />
                    Getting Started Guide
                  </Link>

                  <Link
                    href="/explore"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem",
                      borderRadius: "0.375rem",
                      backgroundColor: "var(--muted)",
                      color: "var(--foreground)",
                      textDecoration: "none",
                    }}
                  >
                    <ChevronRight size={16} style={{ color: "var(--primary)" }} />
                    Explore Memes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// FAQ Section Component
function FAQSection({ title, questions }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "bold",
          color: "var(--foreground)",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {questions.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

// FAQ Item Component
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        backgroundColor: "var(--card)",
        borderRadius: "0.75rem",
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.25rem",
          backgroundColor: isOpen ? "var(--primary)" : "var(--card)",
          color: isOpen ? "white" : "var(--foreground)",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div
          style={{
            padding: "1.25rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p style={{ color: "var(--foreground)", lineHeight: 1.7 }}>{answer}</p>
        </div>
      )}
    </div>
  )
}
