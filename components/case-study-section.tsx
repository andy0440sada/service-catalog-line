import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight, Clock, TrendingUp, DollarSign } from "lucide-react"

export function CaseStudySection() {
  return (
    <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">導入事例</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-blue-600">業務課題解決</span>の<br />
              成功事例
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              業務課題を選択し、短期間で業務改善を実現した事例をご紹介します
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden border-2 border-gray-100 hover:border-blue-100 transition-all">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" fill alt="製造業の導入事例" className="object-cover" />
              <div className="absolute top-0 left-0 m-3 bg-white/90 px-2 py-1 rounded text-sm font-medium">製造業</div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">A社：在庫管理の課題を解決</h3>
              </div>
              <p className="text-gray-500 mb-4">
                複数倉庫の在庫状況把握に時間がかかるという課題を選択し、AIが自動構築したシステムで解決
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">導入期間</p>
                    <p className="font-bold">2週間</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">棚卸工数</p>
                    <p className="font-bold">30%削減</p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                「テンプレートを選ぶだけで、すぐに使えるシステムが完成。在庫の可視化により欠品も大幅に減少しました」
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="#contact">
                  <FileText className="mr-2 h-4 w-4" />
                  詳細資料ダウンロード
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-2 border-gray-100 hover:border-blue-100 transition-all">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" fill alt="小売業の導入事例" className="object-cover" />
              <div className="absolute top-0 left-0 m-3 bg-white/90 px-2 py-1 rounded text-sm font-medium">小売業</div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">B社：受注管理の課題を解決</h3>
              </div>
              <p className="text-gray-500 mb-4">
                ECサイトからの受注データ取込に手間がかかるという課題を選択し、AIが自動構築したシステムで解決
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">導入期間</p>
                    <p className="font-bold">3週間</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">業務時間</p>
                    <p className="font-bold">50%削減</p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                「ECサイトとの連携も簡単に実現。受注データの手動取込作業がなくなり、出荷ミスも大幅に減少しました」
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="#contact">
                  <FileText className="mr-2 h-4 w-4" />
                  詳細資料ダウンロード
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-2 border-gray-100 hover:border-blue-100 transition-all">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" fill alt="物流業の導入事例" className="object-cover" />
              <div className="absolute top-0 left-0 m-3 bg-white/90 px-2 py-1 rounded text-sm font-medium">物流業</div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">C社：倉庫管理の課題を解決</h3>
              </div>
              <p className="text-gray-500 mb-4">
                複数拠点の倉庫管理効率化という課題を選択し、AIが自動構築したシステムで解決
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">導入期間</p>
                    <p className="font-bold">4週間</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">ピッキング効率</p>
                    <p className="font-bold">40%向上</p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                「テンプレートを活用したことで、短期間で高機能な倉庫管理システムを導入できました。ピッキング効率が大幅に向上し、出荷ミスも減少しています」
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="#contact">
                  <FileText className="mr-2 h-4 w-4" />
                  詳細資料ダウンロード
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">
              すべての事例を見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
