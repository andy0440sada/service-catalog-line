import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award } from "lucide-react"

export function TrustSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">信頼性</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-emerald-600">安心</span>の技術基盤と<span className="text-emerald-600">充実</span>
              のサポート体制
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              エンタープライズグレードのセキュリティと専門チームによる手厚いサポートをご提供します
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="border-2 border-gray-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">エンタープライズセキュリティ</h3>
              <p className="text-gray-500">
                AWSのセキュアな環境で運用。SOC2、ISO27001準拠のセキュリティ体制を確立しています。データは国内DCで安全に管理します。
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">専任サポートチーム</h3>
              <p className="text-gray-500">
                導入から運用まで、専任のカスタマーサクセスチームが伴走。技術的な質問から業務改善のアドバイスまで、ワンストップでサポートします。
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">実績ある技術力</h3>
              <p className="text-gray-500">
                AWSジャパン認定パートナー。国内100社以上の導入実績があり、様々な業界の業務システム構築経験を活かしたソリューションを提供します。
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h3 className="text-2xl font-bold">パートナー企業</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="/placeholder.svg?height=60&width=120"
                width={120}
                height={60}
                alt="AWSジャパン"
                className="object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="/placeholder.svg?height=60&width=120"
                width={120}
                height={60}
                alt="Microsoft"
                className="object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="/placeholder.svg?height=60&width=120"
                width={120}
                height={60}
                alt="Google Cloud"
                className="object-contain"
              />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image
                src="/placeholder.svg?height=60&width=120"
                width={120}
                height={60}
                alt="Salesforce"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
