import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Smartphone, Bot, MessageSquare, Menu, Zap } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">機能紹介</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-green-600">GrowthPack for LINE</span>で
              <br />
              顧客体験を向上
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              LINEを活用した顧客体験向上で、会員獲得・顧客接点強化・マーケティング効率化を実現します
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE%E7%B7%8F%E5%90%88%E6%94%AF%E6%8F%B4%E3%82%B5%E3%83%BC%E3%83%92%E3%82%99%E3%82%B9DL%E8%B3%87%E6%96%99%20%281%29.jpg-3Wf0YRlBXlThClEqZVJM0rgio490Y0.jpeg"
                    alt="会員証LINEミニアプリ"
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
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-green-100 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Bot className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">ボット振り分け</h3>
                <p className="text-gray-500">
                  SaaSのボット機能と共存できないというお悩みを解決。複数のボットを同時に使用することができ、段階的な切り替えが可能です。
                </p>
                <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE%E7%B7%8F%E5%90%88%E6%94%AF%E6%8F%84%E3%82%B5%E3%83%BC%E3%83%92%E3%82%99%E3%82%B9DL%E8%B3%87%E6%96%99%20%286%29.jpg-NN3rFEnJEYlkJSNHQGTbnYIfDxK1Q0.jpeg"
                    alt="ボット振り分け"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="text-sm text-left w-full space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>複数のボットを同時に使用することができます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>段階的な切り替えが可能です</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-green-100 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">LINE連携配信</h3>
                <p className="text-gray-500">
                  既存システムからLINE関連の配信を行いたいがノウハウが無いという課題を解決。APIを通じてすぐにLINE配信を実現できます。
                </p>
                <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE%E7%B7%8F%E5%90%88%E6%94%AF%E6%8F%84%E3%82%B5%E3%83%BC%E3%83%92%E3%82%99%E3%82%B9DL%E8%B3%87%E6%96%99%20%287%29.jpg-o5fCwJcvZ5vSfcABYLj6dYjSz34yPw.jpeg"
                    alt="LINE連携配信"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="text-sm text-left w-full space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>お客様がご利用の既存システムをそのまま残した形でAPIを通してすぐにLINE配信を実現できます</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>オーディエンスやメッセージの配信ができます</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-green-100 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Menu className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">リッチメニュー</h3>
                <p className="text-gray-500">
                  リッチメニューの出し分けやタブ設定などを行いたいという課題を解決。自由なレイアウトで作成でき、ユーザーの状態に応じた出し分けが可能です。
                </p>
                <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE%E7%B7%8F%E5%90%88%E6%94%AF%E6%8F%84%E3%82%B5%E3%83%BC%E3%83%92%E3%82%99%E3%82%B9DL%E8%B3%87%E6%96%99%20%288%29.jpg-OetyVPdEGt4wYhVNgPDW3KcqOTt3xj.jpeg"
                    alt="リッチメニュー"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="text-sm text-left w-full space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      リッチメニューを自由なレイアウトで作成でき、上部にタブを追加してそれぞれのタブで異なるメニューを切替表示させることもできます
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>ユーザーの状態によってリッチメニューの出し分けを行うこともできます</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-green-100 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">チャットボット</h3>
                <p className="text-gray-500">
                  顧客からの問い合わせが増加しているが、人的リソースが不足している課題を解決。リアルタイムでの即時対応が可能です。
                </p>
                <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE%E7%B7%8F%E5%90%88%E6%94%AF%E6%8F%84%E3%82%B5%E3%83%BC%E3%83%92%E3%82%99%E3%82%B9DL%E8%B3%87%E6%96%99%20%289%29.jpg-D0IhGC9WpnU0L3dy1WTdmBgkYdd150.jpeg"
                    alt="チャットボット"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="text-sm text-left w-full space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>チャットボットはリアルタイムでの即時対応が可能です</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      チャットボットがよくある質問やシンプルな問い合わせに自動で対応することで、スタッフの負荷を大幅に軽減できます
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
