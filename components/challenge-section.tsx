"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ChallengeSection() {
  const [activeTab, setActiveTab] = useState("inventory")

  const categories = [
    { id: "inventory", name: "在庫管理" },
    { id: "order", name: "受発注管理" },
    { id: "product", name: "商品管理" },
    { id: "customer", name: "顧客管理" },
    { id: "accounting", name: "経理・会計" },
  ]

  const challenges = {
    inventory: [
      {
        id: "inventory_multiple",
        title: "複数倉庫の在庫状況把握に時間がかかる",
        description: "複数倉庫の在庫を一元管理。入出庫処理、在庫移動、棚卸作業をデジタル化",
        problems: [
          "複数倉庫の在庫状況を把握するのに時間がかかる",
          "棚卸作業に多くの工数がかかっている",
          "在庫の過不足が頻繁に発生している",
        ],
        solution: "倉庫在庫テンプレートで自動構築",
        features: ["倉庫別在庫リアルタイム表示", "バーコードスキャンによる棚卸", "在庫アラート自動通知"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "inventory_stocktaking",
        title: "拠点ごとに棚卸方法が異なり統一管理できていない",
        description: "複数拠点の棚卸作業を効率化。スマホアプリ連携で現場作業を大幅に簡素化",
        problems: [
          "拠点ごとに棚卸方法が異なり統一管理できていない",
          "棚卸結果の集計・反映に時間がかかる",
          "実地棚卸と帳簿の差異が大きい",
        ],
        solution: "多拠点棚卸テンプレートで自動構築",
        features: ["スマホアプリ連携棚卸機能", "差異自動検出・レポート", "履歴管理と監査証跡"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "inventory_lot",
        title: "ロット単位の在庫管理ができていない",
        description: "製造ロット・賞味期限管理に対応。トレーサビリティ確保と先入先出管理を実現",
        problems: [
          "ロット単位の在庫管理ができていない",
          "賞味期限切れ商品が発生している",
          "製品回収時のトレーサビリティ確保が難しい",
        ],
        solution: "ロット管理テンプレートで自動構築",
        features: ["ロット・期限別在庫管理", "先入先出ピッキング指示", "ロットトレース機能"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    order: [
      {
        id: "order_status",
        title: "受注状況の把握に時間がかかる",
        description: "受注から出荷までの業務を一元管理。ステータス管理と売上レポートを自動化",
        problems: ["受注状況の把握に時間がかかる", "出荷漏れや二重出荷が発生している", "売上集計に手間がかかっている"],
        solution: "受注管理テンプレートで自動構築",
        features: ["受注ステータス管理", "出荷指示・実績管理", "売上自動集計レポート"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "order_purchase",
        title: "発注のタイミングを逃して欠品が発生する",
        description: "発注業務を効率化。発注点管理と納期管理で欠品リスクを低減",
        problems: ["発注のタイミングを逃して欠品が発生する", "発注状況の管理が煩雑", "納期遅延の把握が遅れる"],
        solution: "発注管理テンプレートで自動構築",
        features: ["発注点自動管理", "発注ステータス管理", "納期遅延アラート"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "order_ec",
        title: "ECサイトからの受注データ取込に手間がかかる",
        description: "ECサイトからの受注を自動取込。在庫連携と出荷指示を効率化",
        problems: [
          "ECサイトからの受注データ取込に手間がかかる",
          "在庫反映が遅れて欠品表示ができていない",
          "出荷作業が追いつかない",
        ],
        solution: "EC受注連携テンプレートで自動構築",
        features: ["EC受注自動取込", "在庫リアルタイム連携", "出荷指示一括生成"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    product: [
      {
        id: "product_info",
        title: "商品情報が散在していて最新情報がわからない",
        description: "商品情報を一元管理。画像・仕様書・価格情報を統合的に管理",
        problems: [
          "商品情報が散在していて最新情報がわからない",
          "価格改定作業に時間がかかる",
          "商品画像や仕様書の管理が煩雑",
        ],
        solution: "商品マスタテンプレートで自動構築",
        features: ["商品情報一元管理", "価格履歴管理", "画像・ファイル管理"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "product_ec",
        title: "複数ECサイトの商品情報更新が大変",
        description: "ECサイト向け商品情報を一括管理。複数サイトへの一括更新を実現",
        problems: [
          "複数ECサイトの商品情報更新が大変",
          "サイトごとに異なる商品情報形式への対応が煩雑",
          "商品情報の不整合が発生している",
        ],
        solution: "EC商品連携テンプレートで自動構築",
        features: ["複数EC一括更新", "サイト別表示設定", "商品情報変換機能"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    customer: [
      {
        id: "customer_info",
        title: "顧客情報が部門ごとに分散している",
        description: "顧客情報を一元管理。問い合わせ履歴や購買履歴を統合",
        problems: [
          "顧客情報が部門ごとに分散している",
          "問い合わせ対応の履歴が共有できていない",
          "顧客ごとの購買傾向が把握できていない",
        ],
        solution: "顧客管理テンプレートで自動構築",
        features: ["顧客情報統合管理", "対応履歴記録・共有", "購買分析レポート"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "customer_sales",
        title: "営業活動の進捗状況が見えない",
        description: "営業活動を可視化。案件管理と予実管理で営業効率を向上",
        problems: ["営業活動の進捗状況が見えない", "案件の成約確度が把握できていない", "売上予測が立てられない"],
        solution: "営業活動管理テンプレートで自動構築",
        features: ["案件ステータス管理", "成約確度予測", "売上予測レポート"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
    accounting: [
      {
        id: "accounting_expense",
        title: "経費精算に紙やExcelを使用しており非効率",
        description: "経費精算業務を効率化。申請・承認・支払までをデジタル化",
        problems: [
          "経費精算に紙やExcelを使用しており非効率",
          "承認プロセスに時間がかかる",
          "経費の集計・分析ができていない",
        ],
        solution: "経費精算テンプレートで自動構築",
        features: ["経費申請ワークフロー", "承認プロセス自動化", "経費分析レポート"],
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "accounting_invoice",
        title: "請求書発行作業に時間がかかる",
        description: "請求書発行・管理を効率化。入金管理と督促業務を自動化",
        problems: ["請求書発行作業に時間がかかる", "入金状況の確認が煩雑", "督促業務が属人化している"],
        solution: "請求書管理テンプレートで自動構築",
        features: ["請求書自動生成", "入金ステータス管理", "督促メール自動送信"],
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <section id="challenges" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">業務課題</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              あなたの<span className="text-blue-600">業務課題</span>を選ぶだけで
              <br />
              最適なシステムを自動構築
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              解決したい業務課題を選択するだけで、AIが最適なシステムを自動構築します
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="inventory" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`px-4 py-2 ${activeTab === category.id ? "bg-blue-100 text-blue-700" : ""}`}
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(challenges).map(([category, categoryItems]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryItems.map((item, index) => (
                    <Card key={index} className="border-2 border-gray-100 hover:border-blue-100 transition-all">
                      <div className="relative h-40">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                        <CardDescription className="text-gray-500 mt-2">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                            関連する課題
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc">
                            {item.problems.map((problem, i) => (
                              <li key={i}>{problem}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                            解決策
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">{item.solution}</p>
                          <ul className="text-sm text-gray-600 space-y-1 pl-6 list-disc">
                            {item.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                          <Link href={`/demo/${item.id}`}>
                            この課題で相談する
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700 font-medium">上記以外の業務課題も解決可能。お気軽にご相談ください</p>
          </div>
        </div>
      </div>
    </section>
  )
}
