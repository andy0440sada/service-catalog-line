import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "業界特化サービスカタログ",
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
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={true}>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
