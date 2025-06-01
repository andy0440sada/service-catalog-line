"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Search,
  Filter,
  Download,
  Upload,
  Users,
  Smartphone,
  MessageSquare,
  Bot,
  LinkIcon,
} from "lucide-react"

export function DemoSection() {
  const [activeTab, setActiveTab] = useState("miniapp")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)
  const [progress, setProgress] = useState(0)

  // URLハッシュが変更されたときにタブを切り替える
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith("#demo-")) {
        const tabId = hash.replace("#demo-", "")
        setActiveTab(tabId)
        setIsGenerating(true)
        setIsGenerated(false)
        setProgress(0)
      }
    }

    // 初期ロード時とハッシュ変更時に実行
    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  // システム生成のシミュレーション
  useEffect(() => {
    let timer
    if (isGenerating) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setIsGenerating(false)
            setIsGenerated(true)
            return 100
          }
          return prev + 5
        })
      }, 100)
    }

    return () => {
      clearInterval(timer)
    }
  }, [isGenerating])

  const demoTabs = [
    { id: "miniapp", name: "会員証LINEミニアプリ", icon: <Smartphone className="h-4 w-4 mr-1" /> },
    { id: "segment_message", name: "メッセージ配信", icon: <Users className="h-4 w-4 mr-1" /> },
    { id: "segment_menu", name: "リッチメニュー切り替え", icon: <Users className="h-4 w-4 mr-1" /> },
    { id: "communication_crm", name: "CRM連携1to1チャット", icon: <MessageSquare className="h-4 w-4 mr-1" /> },
    { id: "communication_bot", name: "チャットボット", icon: <Bot className="h-4 w-4 mr-1" /> },
    { id: "saas_bot", name: "ボット振り分け", icon: <LinkIcon className="h-4 w-4 mr-1" /> },
  ]

  return (
    <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">システムデモ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-green-600">テンプレート</span>から
              <br />
              自動生成されるシステム
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              テンプレートを選択すると、AIが最適なシステムを自動生成します。以下は生成されるシステムのデモです。
            </p>
          </div>
        </div>

        {isGenerating && (
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="border-2 border-green-100">
              <CardHeader>
                <CardTitle className="text-center">システムを自動生成中...</CardTitle>
                <CardDescription className="text-center">
                  AIが選択されたテンプレートに最適なシステムを構築しています
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
            </Card>
          </div>
        )}

        {!isGenerating && (
          <div className="mt-12">
            <Tabs defaultValue="miniapp" value={activeTab} className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="flex flex-wrap">
                  {demoTabs.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id} id={`demo-${tab.id}`} className="flex items-center">
                      {tab.icon}
                      {tab.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* 会員証LINEミニアプリデモ */}
              <TabsContent value="miniapp" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <div className="border rounded-lg overflow-hidden bg-white">
                      <div className="bg-gray-100 px-4 py-2 border-b flex justify-between items-center">
                        <h3 className="font-medium">会員証LINEミニアプリ</h3>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="h-8">
                            <Download className="h-4 w-4 mr-1" />
                            エクスポート
                          </Button>
                          <Button size="sm" className="h-8 bg-green-600 hover:bg-green-700">
                            <Upload className="h-4 w-4 mr-1" />
                            設定
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex gap-4 mb-4">
                          <div className="flex-1">
                            <div className="relative">
                              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                              <input
                                type="text"
                                placeholder="会員名・会員番号で検索"
                                className="w-full pl-8 pr-4 py-2 border rounded-md text-sm"
                              />
                            </div>
                          </div>
                          <div className="w-40">
                            <select className="w-full px-4 py-2 border rounded-md text-sm">
                              <option>全会員</option>
                              <option>新規会員</option>
                              <option>リピーター</option>
                              <option>VIP会員</option>
                            </select>
                          </div>
                          <Button variant="outline" size="sm" className="h-9">
                            <Filter className="h-4 w-4 mr-1" />
                            絞り込み
                          </Button>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  会員番号
                                </th>
                                <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  会員名
                                </th>
                                <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  登録日
                                </th>
                                <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  ポイント
                                </th>
                                <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  会員ランク
                                </th>
                                <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  最終来店日
                                </th>
                                <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  操作
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="px-4 py-2 border text-sm">M001</td>
                                <td className="px-4 py-2 border text-sm">山田 太郎</td>
                                <td className="px-4 py-2 border text-sm">2024/03/15</td>
                                <td className="px-4 py-2 border text-sm text-center">2,450</td>
                                <td className="px-4 py-2 border text-sm text-center">
                                  <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-100">ゴールド</Badge>
                                </td>
                                <td className="px-4 py-2 border text-sm text-center">2024/05/20</td>
                                <td className="px-4 py-2 border text-sm text-center">
                                  <Button variant="outline" size="sm">
                                    詳細
                                  </Button>
                                </td>
                              </tr>
                              {/* 他の会員データ */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>会員証プレビュー</CardTitle>
                        <CardDescription>LINEミニアプリ表示</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="relative mx-auto w-48 h-96 border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl">
                          <div className="absolute top-0 w-24 h-6 bg-gray-800 rounded-b-xl left-1/2 transform -translate-x-1/2"></div>
                          <div className="h-full bg-green-50 p-2">
                            <div className="bg-white h-full rounded-xl p-2 flex flex-col">
                              <div className="bg-green-600 text-white text-center py-2 rounded-t-lg text-sm font-medium">
                                会員証
                              </div>
                              <div className="p-2 text-xs">
                                <div className="font-medium">山田 太郎 様</div>
                                <div className="text-gray-500">会員番号：M001</div>
                              </div>
                              <div className="flex-1 overflow-hidden flex flex-col items-center justify-center p-4">
                                <div className="w-32 h-32 bg-gray-100 flex items-center justify-center mb-4">
                                  <div className="text-xs text-gray-400">QRコード</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-sm font-bold">ゴールド会員</div>
                                  <div className="text-xs text-gray-500">有効期限：2025/03/31</div>
                                </div>
                              </div>
                              <div className="mt-2 bg-gray-100 rounded-lg p-2">
                                <div className="text-xs font-medium mb-1">ポイント残高</div>
                                <div className="text-lg font-bold text-green-600">2,450 pt</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* 他のタブコンテンツも同様に実装 */}
              <TabsContent value="segment_message" className="mt-6">
                <div className="text-center p-8 bg-white rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">メッセージ配信デモ</h3>
                  <p className="text-gray-500 mb-4">
                    ユーザーセグメントごとのメッセージ配信機能のデモ画面です。実際のシステムでは、ユーザー属性や行動履歴に基づいたセグメント配信が可能です。
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="segment_menu" className="mt-6">
                <div className="text-center p-8 bg-white rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">リッチメニュー切り替えデモ</h3>
                  <p className="text-gray-500 mb-4">
                    ユーザー属性に応じたリッチメニューの自動切り替え機能のデモ画面です。実際のシステムでは、ユーザーごとに最適なメニューを表示できます。
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="communication_crm" className="mt-6">
                <div className="text-center p-8 bg-white rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">CRM連携1to1チャットデモ</h3>
                  <p className="text-gray-500 mb-4">
                    既存CRMと連携した顧客情報の一元管理と対応履歴の記録機能のデモ画面です。実際のシステムでは、顧客情報を参照しながらチャット対応が可能です。
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="communication_bot" className="mt-6">
                <div className="text-center p-8 bg-white rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">チャットボットデモ</h3>
                  <p className="text-gray-500 mb-4">
                    よくある質問への自動応答と有人対応へのスムーズな引き継ぎ機能のデモ画面です。実際のシステムでは、AIを活用した高度な自動応答が可能です。
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="saas_bot" className="mt-6">
                <div className="text-center p-8 bg-white rounded-lg border">
                  <h3 className="text-xl font-bold mb-4">ボット振り分けデモ</h3>
                  <p className="text-gray-500 mb-4">
                    複数のボットを同時に使用でき、段階的な切り替えが可能な機能のデモ画面です。実際のシステムでは、既存SaaSとの連携設定も可能です。
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {isGenerated && (
          <div className="mt-8 text-center">
            <Card className="max-w-md mx-auto border-2 border-green-100">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">システム生成完了！</h3>
                <p className="text-gray-500 mb-4">
                  選択されたテンプレートに最適なシステムが生成されました。
                  <br />
                  以下のQRコードをスマートフォンで読み取り、実際のLINEミニアプリをご確認ください。
                </p>
                <div className="mx-auto w-40 h-40 bg-white p-2 border rounded-md shadow-md mb-4">
                  <div className="w-full h-full relative">
                    <img
                      src={
                        activeTab === "miniapp"
                          ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zqepYHsGA9KB3E1GuartfeNLUGU5Bs.png"
                          : "/placeholder.svg?height=140&width=140&text=QRコード"
                      }
                      alt="LINEミニアプリQRコード"
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4 w-full">※ スマートフォンのLINEアプリで読み取ってください</p>
                <Button className="bg-green-600 hover:bg-green-700">
                  システムを利用開始する
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
