"use client"

import { useEffect, useState } from "react"
// import { useAuth } from "@/lib/auth" // useAuth のインポートを削除
import { getConstructedApps, clearConstructedApps } from "@/lib/constructed-apps"
import type { ConstructedApp } from "@/types/app"
import { AppCard } from "@/components/app-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle, RefreshCw } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"

const PRODUCTION_QR_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zqepYHsGA9KB3E1GuartfeNLUGU5Bs.png"

// 仮のユーザー情報と認証状態
const MOCK_USER_ID = "mock-user-id-for-dashboard"
const MOCK_IS_AUTHENTICATED = true // ダッシュボード表示のためにtrueに設定

export default function DashboardPage() {
  // const { user, isAuthenticated, loading: authLoading } = useAuth() // useAuth の使用を削除
  const [apps, setApps] = useState<ConstructedApp[]>([])
  const [isLoading, setIsLoading] = useState(true) // 認証ローディングは不要になったため、通常のローディングのみ
  const [isQrModalOpen, setIsQrModalOpen] = useState(false)
  const [selectedAppForQr, setSelectedAppForQr] = useState<ConstructedApp | null>(null)

  const fetchApps = () => {
    if (MOCK_IS_AUTHENTICATED) {
      // 仮の認証状態を使用
      const userApps = getConstructedApps(MOCK_USER_ID) // 仮のユーザーIDを使用
      setApps(userApps.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
    } else {
      setApps([])
    }
    setIsLoading(false)
  }

  useEffect(() => {
    // authLoading のチェックを削除
    fetchApps()
  }, []) // 依存配列から user, isAuthenticated, authLoading を削除

  const handleDeleteApp = (appId: string) => {
    // user のチェックを削除し、仮のユーザーIDを使用
    const currentApps = getConstructedApps(MOCK_USER_ID)
    const updatedApps = currentApps.filter((app) => app.id !== appId)
    localStorage.setItem(`constructed_apps_${MOCK_USER_ID}`, JSON.stringify(updatedApps))
    setApps(updatedApps.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
  }

  const handleShowQrCode = (app: ConstructedApp) => {
    setSelectedAppForQr(app)
    setIsQrModalOpen(true)
  }

  const handleClearAllApps = () => {
    // user のチェックを削除し、仮のユーザーIDを使用
    clearConstructedApps(MOCK_USER_ID)
    fetchApps()
  }

  if (isLoading) {
    // authLoading のチェックを削除
    return (
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <p className="text-lg text-gray-600">ダッシュボードを読み込み中...</p>
      </div>
    )
  }

  if (!MOCK_IS_AUTHENTICATED) {
    // 仮の認証状態を使用
    return (
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">アクセスできません</h1>
        <p className="text-lg text-gray-600 mb-8">ダッシュボードを表示するにはログインが必要です。</p>
        <Button asChild>
          <Link href="/login?redirect=/dashboard">ログインページへ</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold tracking-tight">構築済みアプリ一覧</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={fetchApps}>
              <RefreshCw className="mr-2 h-4 w-4" />
              更新
            </Button>
            <Button asChild>
              <Link href="/#templates">
                <PlusCircle className="mr-2 h-4 w-4" />
                新しいアプリを構築
              </Link>
            </Button>
          </div>
        </div>

        {apps.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">まだアプリがありません</h3>
            <p className="mt-1 text-sm text-gray-500">最初のアプリを構築してみましょう。</p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/#templates">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  テンプレートから構築
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {apps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onDelete={handleDeleteApp}
                onShowQr={app.templateId === "miniapp" ? handleShowQrCode : undefined}
              />
            ))}
          </div>
        )}
        {process.env.NODE_ENV === "development" && apps.length > 0 && (
          <div className="mt-8 text-center">
            <Button variant="ghost" size="sm" onClick={handleClearAllApps} className="text-red-500 hover:text-red-700">
              (開発用) 全てのアプリをクリア
            </Button>
          </div>
        )}
      </div>

      {selectedAppForQr && (
        <Dialog open={isQrModalOpen} onOpenChange={setIsQrModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>QRコード: {selectedAppForQr.displayName}</DialogTitle>
              <DialogDescription>
                以下のQRコードをLINEアプリで読み取ってミニアプリを起動してください。
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center items-center p-4">
              <img
                src={PRODUCTION_QR_URL || "/placeholder.svg"}
                alt={`${selectedAppForQr.displayName} QRコード`}
                className="w-64 h-64 border rounded-md"
              />
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  閉じる
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
