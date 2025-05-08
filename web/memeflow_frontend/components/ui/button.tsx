import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const getButtonStyles = (variant: ButtonProps["variant"] = "default", size: ButtonProps["size"] = "default") => {
  // Base styles
  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "all 0.2s",
    cursor: "pointer",
  }

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    default: { height: "2.5rem", padding: "0 1rem" },
    sm: { height: "2.25rem", padding: "0 0.75rem" },
    lg: { height: "2.75rem", padding: "0 2rem" },
    icon: { height: "2.5rem", width: "2.5rem", padding: 0 },
  }

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: "#7c3aed",
      color: "white",
      border: "none",
    },
    destructive: {
      backgroundColor: "#ef4444",
      color: "white",
      border: "none",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#333",
      border: "1px solid #d1d5db",
    },
    secondary: {
      backgroundColor: "#f3f4f6",
      color: "#333",
      border: "none",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#333",
      border: "none",
    },
    link: {
      backgroundColor: "transparent",
      color: "#7c3aed",
      border: "none",
      textDecoration: "underline",
      height: "auto",
      padding: 0,
    },
  }

  return {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  }
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, style, ...props }, ref) => {
    const buttonStyles = getButtonStyles(variant, size)

    if (asChild) {
      // When asChild is true, we clone the first child and pass our props to it
      const child = React.Children.only(props.children) as React.ReactElement
      return React.cloneElement(child, {
        ...props,
        style: { ...buttonStyles, ...style },
        ref,
      })
    }

    return <button ref={ref} style={{ ...buttonStyles, ...style }} {...props} />
  },
)

Button.displayName = "Button"
