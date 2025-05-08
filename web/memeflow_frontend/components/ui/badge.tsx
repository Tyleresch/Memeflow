// components/ui/badge.tsx
import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function Badge({ children, className = "", ...props }: BadgeProps) {
  return (
    <span
      className={
        "inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-800 " +
        className
      }
      {...props}
    >
      {children}
    </span>
  )
}
