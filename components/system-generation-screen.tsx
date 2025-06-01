"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

interface SystemGenerationScreenProps {
  templateId: string
}

export function SystemGenerationScreen({ templateId }: SystemGenerationScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isGenerating, setIsGenerating] = useState(true)
  const [isGenerated, setIsGenerated] = useState(false)

  // テンプレートの名前を取得
  const getTemplateName = (id: string) => {
    switch (id) {
      // メインテンプレート
      case "miniapp":
        return "会員証LINEミニアプリ"

      // ユーザーセグメントごとの出しわけ
      case "segment_message":
        return "メッセージ配信"
      case "segment_menu":
        return "リッチメニュー切り替え"

      // 1to1コミュニケーション
      case "communication_crm":
        return "CRM連携1to1チャット"
      case "communication_bot":
        return "チャットボット"

      // SaaSと同居させたい
      case "saas_bot":
        return "ボット振り分け"

      default:
        return "LINE活用テンプレート"
    }
  }

  // テンプレートのカテゴリを取得
  const getTemplateCategory = (id: string) => {
    if (id === "miniapp") {
      return null // 単独テンプレート
    } else if (id.startsWith("segment_")) {
      return "ユーザーセグメントごとの出しわけ"
    } else if (id.startsWith("communication_")) {
      return "1to1コミュニケーション"
    } else if (id.startsWith("saas_")) {
      return "SaaSと同居させたい"
    }
    return null
  }

  // システム生成のシミュレーション
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isGenerating) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setIsGenerating(false)
            setIsGenerated(true)
            return 100
          }
          return prev + 2
        })
      }, 100)
    }

    return () => {
      clearInterval(timer)
    }
  }, [isGenerating])

  const templateName = getTemplateName(templateId)
  const categoryName = getTemplateCategory(templateId)
  const displayName = categoryName ? `${categoryName} - ${templateName}` : templateName

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
              システム自動生成
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-green-600">{displayName}</span>を
              <br />
              自動構築しています
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              AIが選択されたテンプレートに最適なシステムを構築しています
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="border-2 border-green-100">
            <CardHeader>
              <CardTitle className="text-center">
                {isGenerated ? "システム生成完了！" : "システムを自動生成中..."}
              </CardTitle>
              <CardDescription className="text-center">
                {isGenerated
                  ? "選択されたテンプレートに最適なシステムが生成されました"
                  : "AIが選択されたテンプレートに最適なシステムを構築しています"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isGenerating && (
                <>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-green-600 h-4 rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className={`h-5 w-5 ${progress >= 20 ? "text-green-600" : "text-gray-300"}`} />
                      <div>
                        <p className="text-sm font-medium">要件分析</p>
                        <p className="text-xs text-gray-500">テンプレートから必要機能を特定</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className={`h-5 w-5 ${progress >= 40 ? "text-green-600" : "text-gray-300"}`} />
                      <div>
                        <p className="text-sm font-medium">データモデル生成</p>
                        <p className="text-xs text-gray-500">最適なデータ構造を設計</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className={`h-5 w-5 ${progress >= 60 ? "text-green-600" : "text-gray-300"}`} />
                      <div>
                        <p className="text-sm font-medium">バックエンド構築</p>
                        <p className="text-xs text-gray-500">API・ビジネスロジックを生成</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className={`h-5 w-5 ${progress >= 80 ? "text-green-600" : "text-gray-300"}`} />
                      <div>
                        <p className="text-sm font-medium">UI生成</p>
                        <p className="text-xs text-gray-500">使いやすいインターフェースを構築</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {isGenerated && (
                <div className="text-center space-y-6">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">おめでとうございます！</h3>
                    <p className="text-gray-500">
                      {displayName}のシステムが正常に生成されました。
                      <br />
                      以下のQRコードをスマートフォンで読み取り、実際のLINEミニアプリをご確認ください。
                    </p>
                  </div>
                  <div className="mx-auto w-48 h-48 bg-white p-2 border rounded-md shadow-md">
                    <div className="w-full h-full relative">
                      <img
                        src={
                          templateId === "miniapp"
                            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zqepYHsGA9KB3E1GuartfeNLUGU5Bs.png"
                            : "/placeholder.svg?height=160&width=160&text=QRコード"
                        }
                        alt="LINEミニアプリQRコード"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 w-full">※ スマートフォンのLINEアプリで読み取ってください</p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button className="bg-green-600 hover:bg-green-700">
                      システムを確認する
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/templates">テンプレート選択に戻る</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
