"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut } from "lucide-react"
import { LoginDialog } from "@/components/auth/login-dialog"
import { RegisterDialog } from "@/components/auth/register-dialog"
import { useAuth } from "@/lib/auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut, loading } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

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
          {loading ? (
            <div className="w-20 h-8 bg-gray-200 animate-pulse rounded" />
          ) : user ? (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">ダッシュボード</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    ログアウト
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <LoginDialog>
                <Button variant="outline" size="sm">
                  ログイン
                </Button>
              </LoginDialog>
              <RegisterDialog>
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  新規登録
                </Button>
              </RegisterDialog>
            </>
          )}
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
              {loading ? (
                <div className="w-full h-8 bg-gray-200 animate-pulse rounded" />
              ) : user ? (
                <>
                  <Button variant="outline" size="sm" asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/dashboard">ダッシュボード</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleSignOut()
                    }}
                  >
                    ログアウト
                  </Button>
                </>
              ) : (
                <>
                  <LoginDialog>
                    <Button variant="outline" size="sm" onClick={() => setIsMenuOpen(false)}>
                      ログイン
                    </Button>
                  </LoginDialog>
                  <RegisterDialog>
                    <Button 
                      size="sm" 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      新規登録
                    </Button>
                  </RegisterDialog>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
