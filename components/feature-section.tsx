import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">特徴</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">私たちのサービスの特徴</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ビジネスの成長と効率化をサポートする多彩な機能を提供しています。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
            alt="特徴イメージ"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">簡単操作</h3>
                  <p className="text-muted-foreground">直感的なインターフェースで、誰でも簡単に使いこなせます。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">高度な分析</h3>
                  <p className="text-muted-foreground">詳細なデータ分析で、ビジネスの意思決定をサポートします。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">セキュリティ</h3>
                  <p className="text-muted-foreground">最高レベルのセキュリティで、データを安全に保護します。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
            alt="特徴イメージ2"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">24時間サポート</h3>
                  <p className="text-muted-foreground">いつでもどこでも、専門スタッフがサポートします。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">カスタマイズ</h3>
                  <p className="text-muted-foreground">ビジネスのニーズに合わせて、柔軟にカスタマイズできます。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">スケーラビリティ</h3>
                  <p className="text-muted-foreground">ビジネスの成長に合わせて、簡単にスケールアップできます。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
