"use client"

import type { ConstructedApp } from "@/types/app"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Trash2, QrCode } from "lucide-react"
import Link from "next/link"

interface AppCardProps {
  app: ConstructedApp
  onDelete?: (appId: string) => void
  onShowQr?: (app: ConstructedApp) => void // QR表示用のコールバック
}

export function AppCard({ app, onDelete, onShowQr }: AppCardProps) {
  const formattedDate = new Date(app.createdAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{app.displayName}</CardTitle>
        <CardDescription>
          構築日: {formattedDate} <br />
          テンプレートID: {app.templateId}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-sm text-gray-500">
          ステータス: <span className="text-green-600 font-semibold">有効</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {app.templateId === "miniapp" && onShowQr && (
            <Button variant="outline" size="sm" onClick={() => onShowQr(app)}>
              <QrCode className="mr-2 h-4 w-4" />
              QRコード表示
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <Link href={`/apps/${app.id}/manage`}>
              <Settings className="mr-2 h-4 w-4" />
              管理
            </Link>
          </Button>
          {onDelete && (
            <Button variant="destructive" size="sm" onClick={() => onDelete(app.id)}>
              <Trash2 className="mr-2 h-4 w-4" />
              削除
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
