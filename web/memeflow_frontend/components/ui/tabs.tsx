// components/ui/tabs.tsx
"use client"

import * as React from "react"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  children: React.ReactNode
}

interface TabsContextType {
  value: string
  setValue: (v: string) => void
}

const TabsContext = React.createContext<TabsContextType>({
  value: "",
  setValue: () => {},
})

export function Tabs({ defaultValue, children, className = "", ...props }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue)
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function TabsList({ children, className = "", ...props }: TabsListProps) {
  return (
    <div className={`flex space-x-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  children: React.ReactNode
}

export function TabsTrigger({ value, children, className = "", ...props }: TabsTriggerProps) {
  const { value: selected, setValue } = React.useContext(TabsContext)
  const isSelected = selected === value

  return (
    <button
      className={`px-3 py-1 rounded-md ${
        isSelected
          ? "bg-primary text-primary-foreground"
          : "bg-transparent text-foreground"
      } ${className}`}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  )
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  children: React.ReactNode
}

export function TabsContent({ value, children, className = "", ...props }: TabsContentProps) {
  const { value: selected } = React.useContext(TabsContext)
  if (selected !== value) return null
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
