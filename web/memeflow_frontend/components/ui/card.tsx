// components/ui/card.tsx
import * as React from "react"

type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`border rounded-lg p-4 bg-white dark:bg-gray-800 ${className}`}
      {...props}
    />
  )
}

export function CardHeader({ className = "", ...props }: CardProps) {
  return <div className={`mb-2 ${className}`} {...props} />
}

export function CardTitle({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`text-lg font-semibold ${className}`} {...props} />
}

export function CardDescription({ className = "", ...props }: CardProps) {
  return <p className={`text-sm text-gray-600 dark:text-gray-400 ${className}`} {...props} />
}

export function CardContent({ className = "", ...props }: CardProps) {
  return <div className={className} {...props} />
}

export function CardFooter({ className = "", ...props }: CardProps) {
  return <div className={`mt-4 text-right ${className}`} {...props} />
}
