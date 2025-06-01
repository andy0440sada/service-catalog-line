import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Cpu, CheckCircle } from "lucide-react"

export function ImplementationSection() {
  return (
    <section id="implementation" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              導入プロセス
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-emerald-600">最短2週間</span>で業務改善を実現
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              複雑なシステム導入は不要。チャットで要望を伝えるだけで、AIが最適なシステムを自動構築します
            </p>
          </div>
        </div>

        <div className="mt-16 relative">
          {/* 接続線 */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gray-200 hidden md:block"></div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold">チャットで要望を伝える</h3>
              <p className="text-gray-500">「月次の在庫レポートを自動化したい」など、自然言語で要望を伝えるだけ</p>
              <div className="w-full max-w-[300px] h-[180px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <MessageSquare className="h-8 w-8 text-emerald-600" />
                    <div className="bg-gray-100 rounded-lg p-2 text-sm text-left">
                      在庫管理システムを作りたいです。月次レポートも自動生成できるようにしたいです。
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Cpu className="h-8 w-8 text-purple-600" />
                    <div className="bg-purple-50 rounded-lg p-2 text-sm text-left">
                      在庫管理システムの構築を承りました。月次レポート自動生成機能も含めます。詳細をお聞かせください...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold">AIが提案・構築</h3>
              <p className="text-gray-500">
                AIが最適なシステム設計を提案し、承認後に自動構築。カスタマイズも柔軟に対応
              </p>
              <div className="w-full max-w-[300px] h-[180px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=180&width=300"
                  width={300}
                  height={180}
                  alt="AIによるシステム設計図"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-sm">
                  <p className="font-medium">AIが自動設計したシステム構成図</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold">すぐに利用開始</h3>
              <p className="text-gray-500">最短2週間で本番環境を構築。専門知識不要で誰でも簡単に操作可能</p>
              <div className="w-full max-w-[300px] h-[180px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/placeholder.svg?height=180&width=300"
                  width={300}
                  height={180}
                  alt="完成したシステム画面"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-sm">
                  <p className="font-medium">すぐに使える直感的なインターフェース</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Card className="border-2 border-emerald-100">
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">初期費用0円プラン</h3>
                  <p className="text-gray-500 text-sm">
                    初期構築費用0円のサブスクリプションプランをご用意。すぐに始められます
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">専任サポート体制</h3>
                  <p className="text-gray-500 text-sm">導入から運用まで、専任のサポートチームが伴走します</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">柔軟なカスタマイズ</h3>
                  <p className="text-gray-500 text-sm">
                    業務の変化に合わせて、いつでも簡単にシステムをカスタマイズできます
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
