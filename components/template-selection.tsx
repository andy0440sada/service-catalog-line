"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Smartphone, Users, MessageSquare, Bot, Zap, Menu, Database, Link } from "lucide-react"
import { SystemGenerationScreen } from "./system-generation-screen"

export function TemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId)
    setIsGenerating(true)
  }

  if (isGenerating && selectedTemplate) {
    return <SystemGenerationScreen templateId={selectedTemplate} />
  }

  return (
    <section id="templates" className="w-full py-6 md:py-12 lg:py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
              テンプレート選択
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-green-600">LINE活用</span>テンプレート
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              目的に合わせたテンプレートを選択するだけで、最適なLINEシステムを自動構築します
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* 会員証LINEミニアプリ */}
          <Card className="border-2 border-gray-100 hover:border-green-100 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">会員証LINEミニアプリ</h3>
                <p className="text-gray-500">
                  5秒で使える会員証で半年で新規会員数を4倍に！店舗でのQRコード読み込みから会員化までの時間がたったの5秒に短縮されます。
                </p>
                <div className="w-full max-w-[300px] h-[150px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_grddb1grddb1grdd-H6LlrZxOSYjhCqfyVCTtA23ZpN94Cq.jpeg"
                    alt="LINEミニアプリ会員カードのデモ画面"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="text-sm text-left w-full space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>公式アカウントからの新商品情報やクーポンの配信で開封率アップ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>公式アカウントでの1to1コミュニケーションで接客頻度アップ</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 mt-4"
                  onClick={() => handleTemplateSelect("miniapp")}
                >
                  このテンプレートで構築する
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* ユーザーセグメントごとの出しわけ */}
          <Card className="border-2 border-gray-100 hover:border-green-100 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">ユーザーセグメントごとの出しわけ</h3>
                <p className="text-gray-500">
                  ユーザー属性や行動履歴に基づいて、最適なコンテンツやメニューを表示。パーソナライズされた体験を提供します。
                </p>
                <div className="w-full max-w-[300px] h-[150px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center text-gray-400">
                    ユーザーセグメント出しわけイメージ
                  </div>
                </div>

                <div className="w-full border-t pt-4">
                  <h4 className="font-bold text-left mb-2">サブテンプレート：</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border rounded-lg p-3 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="h-4 w-4 text-green-600" />
                        <span className="font-medium">メッセージ配信</span>
                      </div>
                      <ul className="text-sm space-y-1 pl-6 list-disc mb-3">
                        <li>簡易CMS機能でメッセージ作成・管理</li>
                        <li>LINE公式アカウントマネージャーとの連携</li>
                        <li>ユーザーセグメントごとの配信設定</li>
                      </ul>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => handleTemplateSelect("segment_message")}
                      >
                        このテンプレートで構築する
                      </Button>
                    </div>
                    <div className="border rounded-lg p-3 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <Menu className="h-4 w-4 text-green-600" />
                        <span className="font-medium">リッチメニュー切り替え</span>
                      </div>
                      <ul className="text-sm space-y-1 pl-6 list-disc mb-3">
                        <li>ユーザー属性に応じたリッチメニューの自動切り替え</li>
                        <li>複数のリッチメニューテンプレート管理</li>
                        <li>切り替え条件の柔軟な設定</li>
                      </ul>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => handleTemplateSelect("segment_menu")}
                      >
                        このテンプレートで構築する
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 1to1コミュニケーション */}
          <Card className="border-2 border-gray-100 hover:border-green-100 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">1to1コミュニケーション</h3>
                <p className="text-gray-500">
                  顧客一人ひとりとのパーソナルなコミュニケーションを実現。チャットボットと有人対応を組み合わせた効率的な顧客対応が可能です。
                </p>
                <div className="w-full max-w-[300px] h-[150px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center text-gray-400">
                    1to1コミュニケーションイメージ
                  </div>
                </div>

                <div className="w-full border-t pt-4">
                  <h4 className="font-bold text-left mb-2">サブテンプレート：</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border rounded-lg p-3 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <Database className="h-4 w-4 text-green-600" />
                        <span className="font-medium">CRM連携1to1チャット</span>
                      </div>
                      <ul className="text-sm space-y-1 pl-6 list-disc mb-3">
                        <li>既存CRMと連携した顧客情報の一元管理</li>
                        <li>対応履歴の自動記録と共有</li>
                        <li>顧客属性に基づいた対応の最適化</li>
                      </ul>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => handleTemplateSelect("communication_crm")}
                      >
                        このテンプレートで構築する
                      </Button>
                    </div>
                    <div className="border rounded-lg p-3 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <Bot className="h-4 w-4 text-green-600" />
                        <span className="font-medium">チャットボット</span>
                      </div>
                      <ul className="text-sm space-y-1 pl-6 list-disc mb-3">
                        <li>よくある質問への自動応答機能</li>
                        <li>有人対応へのスムーズな引き継ぎ</li>
                        <li>会話ログ分析と改善提案</li>
                      </ul>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => handleTemplateSelect("communication_bot")}
                      >
                        このテンプレートで構築する
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SaaSと同居させたい */}
          <Card className="border-2 border-gray-100 hover:border-green-100 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Link className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">SaaSと同居させたい</h3>
                <p className="text-gray-500">
                  既存のSaaSツールと共存できる柔軟な連携機能。段階的な導入や複数ツールの併用が可能になります。
                </p>
                <div className="w-full max-w-[300px] h-[150px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <div className="absolute inset-0 bg-gray-50 flex items-center justify-center text-gray-400">
                    SaaS連携イメージ
                  </div>
                </div>

                <div className="w-full border-t pt-4">
                  <h4 className="font-bold text-left mb-2">サブテンプレート：</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border rounded-lg p-3 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <Bot className="h-4 w-4 text-green-600" />
                        <span className="font-medium">ボット振り分け</span>
                      </div>
                      <ul className="text-sm space-y-1 pl-6 list-disc mb-3">
                        <li>複数のボットを同時に使用可能</li>
                        <li>段階的な切り替えをサポート</li>
                        <li>既存SaaSとの連携設定</li>
                      </ul>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => handleTemplateSelect("saas_bot")}
                      >
                        このテンプレートで構築する
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
