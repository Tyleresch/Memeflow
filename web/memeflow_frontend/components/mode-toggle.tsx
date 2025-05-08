"use client"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light")
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")

    // Apply theme to document
    if (theme === "light") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  if (!mounted) return null

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      style={{
        position: "relative",
        width: "2.5rem",
        height: "2.5rem",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Sun
        style={{
          width: "1.2rem",
          height: "1.2rem",
          transition: "all 0.2s",
          opacity: theme === "dark" ? 0 : 1,
          transform: theme === "dark" ? "rotate(-90deg) scale(0)" : "rotate(0) scale(1)",
          position: theme === "dark" ? "absolute" : "static",
        }}
      />
      <Moon
        style={{
          width: "1.2rem",
          height: "1.2rem",
          transition: "all 0.2s",
          opacity: theme === "dark" ? 1 : 0,
          transform: theme === "dark" ? "rotate(0) scale(1)" : "rotate(90deg) scale(0)",
          position: theme === "light" ? "absolute" : "static",
        }}
      />
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
        Toggle theme
      </span>
    </Button>
  )
}
