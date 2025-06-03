import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange={true} // 以前の省略形 disableTransitionOnChange と同義
    >
      {children}
    </ThemeProvider>
  )
}
