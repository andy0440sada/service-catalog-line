"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Growth<span className="text-green-600">Pack</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            機能
          </Link>
          <Link href="#case-studies" className="text-sm font-medium hover:underline underline-offset-4">
            導入事例
          </Link>
          <Link href="#flow" className="text-sm font-medium hover:underline underline-offset-4">
            導入の流れ
          </Link>
          <Link href="#comparison" className="text-sm font-medium hover:underline underline-offset-4">
            他ツールとの違い
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
            よくある質問
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="#features">機能一覧</Link>
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
            <Link href="#contact">お問い合わせ</Link>
          </Button>
        </div>
        <button
          className="flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">メニューを開く</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 pb-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              機能
            </Link>
            <Link
              href="#case-studies"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              導入事例
            </Link>
            <Link
              href="#flow"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              導入の流れ
            </Link>
            <Link
              href="#comparison"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              他ツールとの違い
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              よくある質問
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" size="sm" asChild onClick={() => setIsMenuOpen(false)}>
                <Link href="#features">機能一覧</Link>
              </Button>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="#contact">お問い合わせ</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
