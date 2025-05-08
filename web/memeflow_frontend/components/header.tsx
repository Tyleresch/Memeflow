"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Upload, Search, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          height: "4rem",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Button
            variant="ghost"
            style={{ display: "flex", padding: "0.5rem", marginRight: "0.5rem", display: "none" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu style={{ width: "1.25rem", height: "1.25rem" }} />
            <span
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
              }}
            >
              Toggle menu
            </span>
          </Button>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Image
              src="/memeflow.png"
              alt="MemeFlow Logo"
              width={40}
              height={40}
              style={{ borderRadius: "0.375rem" }}
            />
            <span style={{ fontWeight: "bold", display: "inline-block" }}>MemeFlow</span>
          </Link>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href="/explore"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: "#333", transition: "color 0.2s" }}
          >
            Explore
          </Link>
          <Link
            href="/create"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: "#333", transition: "color 0.2s" }}
          >
            Create
          </Link>
          <Link
            href="/profile"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: "#333", transition: "color 0.2s" }}
          >
            Profile
          </Link>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ModeToggle />
          <Button variant="outline" style={{ display: "flex", padding: "0.5rem" }}>
            <Search style={{ width: "1rem", height: "1rem" }} />
            <span
              style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
              }}
            >
              Search
            </span>
          </Button>
          <Button asChild style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Link href="/create">
              <Upload style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} /> Create
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile menu - simplified version */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "4rem",
            left: 0,
            width: "100%",
            backgroundColor: "white",
            borderBottom: "1px solid #e5e7eb",
            padding: "1rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link href="/" style={{ fontSize: "1rem", fontWeight: 500, color: "#333" }}>
              Home
            </Link>
            <Link href="/explore" style={{ fontSize: "1rem", fontWeight: 500, color: "#333" }}>
              Explore
            </Link>
            <Link href="/create" style={{ fontSize: "1rem", fontWeight: 500, color: "#333" }}>
              Create
            </Link>
            <Link href="/profile" style={{ fontSize: "1rem", fontWeight: 500, color: "#333" }}>
              Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
