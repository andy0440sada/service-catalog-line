import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth" // Ensure AuthProvider is imported

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GrowthPack for LINE - LINEを活用した顧客体験の最適化",
  description: "会員証LINEミニアプリで顧客接点を強化。紙のクーポンやDMに頼らない、効率的なマーケティングを実現します。",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          {" "}
          {/* AuthProvider should wrap ThemeProvider and children */}
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={true}>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
