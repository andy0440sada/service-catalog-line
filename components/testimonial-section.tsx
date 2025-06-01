import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              お客様の声
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">お客様からの評価</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              私たちのサービスを利用したお客様からの声をご紹介します。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="顧客1"
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">田中 太郎</h3>
                  <p className="text-sm text-muted-foreground">株式会社ABC 代表取締役</p>
                </div>
              </div>
              <p className="mt-4">
                「このサービスを導入してから、業務効率が大幅に向上しました。使いやすさと機能性のバランスが素晴らしいです。」
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="顧客2"
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">佐藤 花子</h3>
                  <p className="text-sm text-muted-foreground">DEF株式会社 マーケティング部長</p>
                </div>
              </div>
              <p className="mt-4">
                「データ分析機能が非常に優れており、マーケティング戦略の立案に大いに役立っています。サポートも迅速で丁寧です。」
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="顧客3"
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-bold">鈴木 一郎</h3>
                  <p className="text-sm text-muted-foreground">GHI合同会社 IT部門責任者</p>
                </div>
              </div>
              <p className="mt-4">
                「セキュリティ面での安心感が違います。重要なデータを扱う上で、信頼できるパートナーとして選んで良かったです。」
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
