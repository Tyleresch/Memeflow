// components/ui/button.tsx
import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={
        "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  )
}
