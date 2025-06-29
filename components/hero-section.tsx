import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-20 xl:py-32 bg-gradient-to-b from-white to-green-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
              <span className="font-medium">デジタルマーケティング担当者向け</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                LINEを活用した
                <br />
                <span className="text-green-600">顧客体験の最適化</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                会員証LINEミニアプリや1to1コミュニケーションで顧客接点を強化。
                <br />
                紙のクーポンやDMに頼らない、効率的なマーケティングを実現。
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="#features">
                  ソリューションを見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  お問い合わせ
                </Link>
              </Button>
            </div>
            <div className="text-sm text-gray-500">※最短2週間で導入可能</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/images/hero-image.png"
                width={600}
                height={400}
                alt="スマートフォンでデジタル会員証とクーポンを操作する店員と、紙媒体からの移行を示すイメージ"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
