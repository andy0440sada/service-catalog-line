"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Search,
  Filter,
  Download,
  Upload,
  Package,
  Calendar,
  AlertTriangle,
  FileText,
  Home,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function DemoPage() {
  const params = useParams()
  const router = useRouter()
  const demoId = params.id as string

  const [isGenerating, setIsGenerating] = useState(true)
  const [isGenerated, setIsGenerated] = useState(false)
  const [progress, setProgress] = useState(0)

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
    { id: "inventory_multiple", name: "複数倉庫の在庫管理" },
    { id: "inventory_stocktaking", name: "多拠点棚卸管理" },
    { id: "order_status", name: "受注管理" },
    { id: "order_ec", name: "EC受注連携" },
    { id: "customer_info", name: "顧客管理" },
  ]

  // 有効なデモIDかチェック
  const isValidDemoId = demoTabs.some((tab) => tab.id === demoId)

  if (!isValidDemoId) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>無効なデモID</CardTitle>
              <CardDescription>指定されたデモIDは存在しません</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  トップページに戻る
                </Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">システムデモ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <span className="text-blue-600">業務課題</span>から
                  <br />
                  自動生成されるシステム
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  業務課題を選択すると、AIが最適なシステムを自動生成します。以下は生成されるシステムのデモです。
                </p>
              </div>
            </div>

            {isGenerating && (
              <div className="mt-12 max-w-3xl mx-auto">
                <Card className="border-2 border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-center">システムを自動生成中...</CardTitle>
                    <CardDescription className="text-center">
                      AIが選択された業務課題に最適なシステムを構築しています
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-blue-600 h-4 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className={`h-5 w-5 ${progress >= 20 ? "text-blue-600" : "text-gray-300"}`} />
                        <div>
                          <p className="text-sm font-medium">要件分析</p>
                          <p className="text-xs text-gray-500">業務課題から必要機能を特定</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className={`h-5 w-5 ${progress >= 40 ? "text-blue-600" : "text-gray-300"}`} />
                        <div>
                          <p className="text-sm font-medium">データモデル生成</p>
                          <p className="text-xs text-gray-500">最適なデータ構造を設計</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className={`h-5 w-5 ${progress >= 60 ? "text-blue-600" : "text-gray-300"}`} />
                        <div>
                          <p className="text-sm font-medium">バックエンド構築</p>
                          <p className="text-xs text-gray-500">API・ビジネスロジックを生成</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className={`h-5 w-5 ${progress >= 80 ? "text-blue-600" : "text-gray-300"}`} />
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
                <div className="mb-6 flex justify-between items-center">
                  <Button variant="outline" asChild>
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      業務課題一覧に戻る
                    </Link>
                  </Button>
                  {isGenerated && (
                    <Button className="bg-green-600 hover:bg-green-700">
                      システムを利用開始する
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>

                <Tabs defaultValue={demoId} className="w-full">
                  <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                    <TabsList>
                      {demoTabs.map((tab) => (
                        <TabsTrigger key={tab.id} value={tab.id} onClick={() => router.push(`/demo/${tab.id}`)}>
                          {tab.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>

                  {/* 複数倉庫の在庫管理デモ */}
                  <TabsContent value="inventory_multiple" className="mt-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <div className="border rounded-lg overflow-hidden bg-white">
                          <div className="bg-gray-100 px-4 py-2 border-b flex justify-between items-center">
                            <h3 className="font-medium">倉庫別在庫一覧</h3>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="h-8">
                                <Download className="h-4 w-4 mr-1" />
                                エクスポート
                              </Button>
                              <Button size="sm" className="h-8 bg-blue-600 hover:bg-blue-700">
                                <Upload className="h-4 w-4 mr-1" />
                                入出庫登録
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
                                    placeholder="商品名・コードで検索"
                                    className="w-full pl-8 pr-4 py-2 border rounded-md text-sm"
                                  />
                                </div>
                              </div>
                              <div className="w-40">
                                <select className="w-full px-4 py-2 border rounded-md text-sm">
                                  <option>全倉庫</option>
                                  <option>東京倉庫</option>
                                  <option>大阪倉庫</option>
                                  <option>福岡倉庫</option>
                                </select>
                              </div>
                              <div className="w-40">
                                <select className="w-full px-4 py-2 border rounded-md text-sm">
                                  <option>全カテゴリ</option>
                                  <option>電子機器</option>
                                  <option>家具</option>
                                  <option>文具</option>
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
                                      商品コード
                                    </th>
                                    <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      商品名
                                    </th>
                                    <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      カテゴリ
                                    </th>
                                    <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      東京倉庫
                                    </th>
                                    <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      大阪倉庫
                                    </th>
                                    <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      福岡倉庫
                                    </th>
                                    <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      合計在庫
                                    </th>
                                    <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      ステータス
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">P001</td>
                                    <td className="px-4 py-2 border text-sm">ノートパソコン 15インチ</td>
                                    <td className="px-4 py-2 border text-sm">電子機器</td>
                                    <td className="px-4 py-2 border text-sm text-center">15</td>
                                    <td className="px-4 py-2 border text-sm text-center">8</td>
                                    <td className="px-4 py-2 border text-sm text-center">5</td>
                                    <td className="px-4 py-2 border text-sm text-center font-medium">28</td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">適正</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">P002</td>
                                    <td className="px-4 py-2 border text-sm">ワイヤレスマウス</td>
                                    <td className="px-4 py-2 border text-sm">電子機器</td>
                                    <td className="px-4 py-2 border text-sm text-center">24</td>
                                    <td className="px-4 py-2 border text-sm text-center">12</td>
                                    <td className="px-4 py-2 border text-sm text-center">8</td>
                                    <td className="px-4 py-2 border text-sm text-center font-medium">44</td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">適正</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">P003</td>
                                    <td className="px-4 py-2 border text-sm">モニター 24インチ</td>
                                    <td className="px-4 py-2 border text-sm">電子機器</td>
                                    <td className="px-4 py-2 border text-sm text-center">3</td>
                                    <td className="px-4 py-2 border text-sm text-center">1</td>
                                    <td className="px-4 py-2 border text-sm text-center">0</td>
                                    <td className="px-4 py-2 border text-sm text-center font-medium">4</td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">要発注</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">P004</td>
                                    <td className="px-4 py-2 border text-sm">オフィスチェア</td>
                                    <td className="px-4 py-2 border text-sm">家具</td>
                                    <td className="px-4 py-2 border text-sm text-center">7</td>
                                    <td className="px-4 py-2 border text-sm text-center">5</td>
                                    <td className="px-4 py-2 border text-sm text-center">3</td>
                                    <td className="px-4 py-2 border text-sm text-center font-medium">15</td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">注意</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">P005</td>
                                    <td className="px-4 py-2 border text-sm">デスクライト</td>
                                    <td className="px-4 py-2 border text-sm">家具</td>
                                    <td className="px-4 py-2 border text-sm text-center">18</td>
                                    <td className="px-4 py-2 border text-sm text-center">10</td>
                                    <td className="px-4 py-2 border text-sm text-center">6</td>
                                    <td className="px-4 py-2 border text-sm text-center font-medium">34</td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">適正</Badge>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                              <div className="text-sm text-gray-500">全45件中 1-5件を表示</div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" disabled>
                                  前へ
                                </Button>
                                <Button variant="outline" size="sm">
                                  次へ
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Card className="h-full">
                          <CardHeader>
                            <CardTitle>在庫サマリー</CardTitle>
                            <CardDescription>全倉庫の在庫状況</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div>
                              <h4 className="text-sm font-medium mb-2">カテゴリ別在庫数</h4>
                              <div className="space-y-2">
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>電子機器</span>
                                    <span>76件</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>家具</span>
                                    <span>49件</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                                  </div>
                                </div>
                                <div>
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>文具</span>
                                    <span>42件</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2">倉庫別在庫状況</h4>
                              <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded p-3 text-center">
                                  <div className="text-2xl font-bold text-blue-600">125</div>
                                  <div className="text-xs text-gray-500">東京倉庫</div>
                                </div>
                                <div className="border rounded p-3 text-center">
                                  <div className="text-2xl font-bold text-blue-600">87</div>
                                  <div className="text-xs text-gray-500">大阪倉庫</div>
                                </div>
                                <div className="border rounded p-3 text-center">
                                  <div className="text-2xl font-bold text-blue-600">55</div>
                                  <div className="text-xs text-gray-500">福岡倉庫</div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium mb-2">在庫アラート</h4>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 bg-red-50 rounded border border-red-100">
                                  <AlertTriangle className="h-4 w-4 text-red-500" />
                                  <div className="text-sm">要発注商品: 5件</div>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded border border-yellow-100">
                                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                  <div className="text-sm">在庫注意商品: 8件</div>
                                </div>
                              </div>
                            </div>

                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                              在庫レポート作成
                              <FileText className="ml-2 h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 多拠点棚卸管理デモ */}
                  <TabsContent value="inventory_stocktaking" className="mt-6">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <div className="border rounded-lg overflow-hidden bg-white">
                          <div className="bg-gray-100 px-4 py-2 border-b flex justify-between items-center">
                            <h3 className="font-medium">棚卸計画一覧</h3>
                            <div className="flex gap-2">
                              <Button size="sm" className="h-8 bg-blue-600 hover:bg-blue-700">
                                <Calendar className="h-4 w-4 mr-1" />
                                新規棚卸計画
                              </Button>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr className="bg-gray-50">
                                    <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      計画ID
                                    </th>
                                    <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      棚卸名
                                    </th>
                                    <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      対象倉庫
                                    </th>
                                    <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      開始日
                                    </th>
                                    <th className="px-4 py-2 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      終了日
                                    </th>
                                    <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      進捗
                                    </th>
                                    <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      ステータス
                                    </th>
                                    <th className="px-4 py-2 border text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      操作
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">ST001</td>
                                    <td className="px-4 py-2 border text-sm">2023年度第4四半期棚卸</td>
                                    <td className="px-4 py-2 border text-sm">全倉庫</td>
                                    <td className="px-4 py-2 border text-sm">2023/12/25</td>
                                    <td className="px-4 py-2 border text-sm">2023/12/31</td>
                                    <td className="px-4 py-2 border text-sm">
                                      <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                                      </div>
                                      <div className="text-xs text-center mt-1">100%</div>
                                    </td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">完了</Badge>
                                    </td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Button variant="outline" size="sm">
                                        詳細
                                      </Button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">ST002</td>
                                    <td className="px-4 py-2 border text-sm">2024年度第1四半期棚卸</td>
                                    <td className="px-4 py-2 border text-sm">東京倉庫</td>
                                    <td className="px-4 py-2 border text-sm">2024/03/25</td>
                                    <td className="px-4 py-2 border text-sm">2024/03/31</td>
                                    <td className="px-4 py-2 border text-sm">
                                      <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                                      </div>
                                      <div className="text-xs text-center mt-1">75%</div>
                                    </td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                        進行中
                                      </Badge>
                                    </td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Button variant="outline" size="sm">
                                        詳細
                                      </Button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">ST003</td>
                                    <td className="px-4 py-2 border text-sm">2024年度第1四半期棚卸</td>
                                    <td className="px-4 py-2 border text-sm">大阪倉庫</td>
                                    <td className="px-4 py-2 border text-sm">2024/03/25</td>
                                    <td className="px-4 py-2 border text-sm">2024/03/31</td>
                                    <td className="px-4 py-2 border text-sm">
                                      <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                                      </div>
                                      <div className="text-xs text-center mt-1">40%</div>
                                    </td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                        進行中
                                      </Badge>
                                    </td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Button variant="outline" size="sm">
                                        詳細
                                      </Button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 border text-sm">ST004</td>
                                    <td className="px-4 py-2 border text-sm">2024年度第1四半期棚卸</td>
                                    <td className="px-4 py-2 border text-sm">福岡倉庫</td>
                                    <td className="px-4 py-2 border text-sm">2024/03/25</td>
                                    <td className="px-4 py-2 border text-sm">2024/03/31</td>
                                    <td className="px-4 py-2 border text-sm">
                                      <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "0%" }}></div>
                                      </div>
                                      <div className="text-xs text-center mt-1">0%</div>
                                    </td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">未開始</Badge>
                                    </td>
                                    <td className="px-4 py-2 border text-sm text-center">
                                      <Button variant="outline" size="sm">
                                        詳細
                                      </Button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Card className="h-full">
                          <CardHeader>
                            <CardTitle>棚卸アプリ</CardTitle>
                            <CardDescription>スマホアプリで簡単棚卸</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="relative mx-auto w-48 h-96 border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl">
                              <div className="absolute top-0 w-24 h-6 bg-gray-800 rounded-b-xl left-1/2 transform -translate-x-1/2"></div>
                              <div className="h-full bg-blue-50 p-2">
                                <div className="bg-white h-full rounded-xl p-2 flex flex-col">
                                  <div className="bg-blue-600 text-white text-center py-2 rounded-t-lg text-sm font-medium">
                                    棚卸アプリ
                                  </div>
                                  <div className="p-2 text-xs">
                                    <div className="font-medium">東京倉庫 棚卸中</div>
                                    <div className="text-gray-500">2024/03/28 10:25</div>
                                  </div>
                                  <div className="flex-1 overflow-hidden">
                                    <div className="border rounded p-1 mb-2 bg-gray-50">
                                      <div className="text-xs font-medium">商品スキャン</div>
                                      <div className="border-dashed border-2 border-gray-300 rounded h-20 flex items-center justify-center mt-1">
                                        <div className="text-xs text-gray-400 text-center">
                                          バーコードをスキャン
                                          <br />
                                          または商品IDを入力
                                        </div>
                                      </div>
                                    </div>
                                    <div className="border rounded p-1 mb-2">
                                      <div className="text-xs font-medium">最近スキャンした商品</div>
                                      <div className="mt-1 space-y-1">
                                        <div className="text-xs p-1 bg-blue-50 rounded flex justify-between">
                                          <span>P001: ノートPC</span>
                                          <span className="font-medium">15個</span>
                                        </div>
                                        <div className="text-xs p-1 bg-blue-50 rounded flex justify-between">
                                          <span>P002: マウス</span>
                                          <span className="font-medium">24個</span>
                                        </div>
                                        <div className="text-xs p-1 bg-blue-50 rounded flex justify-between">
                                          <span>P004: チェア</span>
                                          <span className="font-medium">7個</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-2">
                                    <button className="w-full bg-blue-600 text-white rounded-lg py-1 text-xs">
                                      棚卸データを送信
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="text-center">
                              <Button variant="outline" size="sm" className="mt-4">
                                アプリをダウンロード
                                <Download className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  {/* 他のタブコンテンツも同様に実装 */}
                  {/* 受注管理デモ */}
                  <TabsContent value="order_status" className="mt-6">
                    {/* 受注管理デモの内容 */}
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="md:col-span-2">
                        <div className="border rounded-lg overflow-hidden bg-white">
                          <div className="bg-gray-100 px-4 py-2 border-b flex justify-between items-center">
                            <h3 className="font-medium">受注一覧</h3>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="h-8">
                                <Download className="h-4 w-4 mr-1" />
                                エクスポート
                              </Button>
                              <Button size="sm" className="h-8 bg-blue-600 hover:bg-blue-700">
                                <Package className="h-4 w-4 mr-1" />
                                新規受注
                              </Button>
                            </div>
                          </div>
                          {/* 受注管理の内容 */}
                          {/* テーブルなど */}
                        </div>
                      </div>
                      <div>
                        <Card className="h-full">
                          <CardHeader>
                            <CardTitle>受注サマリー</CardTitle>
                            <CardDescription>今月の受注状況</CardDescription>
                          </CardHeader>
                          <CardContent>{/* サマリー内容 */}</CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>

                  {/* EC受注連携デモ */}
                  <TabsContent value="order_ec" className="mt-6">
                    {/* EC受注連携デモの内容 */}
                  </TabsContent>

                  {/* 顧客管理デモ */}
                  <TabsContent value="customer_info" className="mt-6">
                    {/* 顧客管理デモの内容 */}
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
                      選択された業務課題に最適なシステムが生成されました。 以下のデモ画面をご確認ください。
                    </p>
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
      </main>
      <Footer />
    </div>
  )
}
