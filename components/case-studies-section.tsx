import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, Users, ShoppingCart, Clock } from "lucide-react"

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">導入事例</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-green-600">導入後</span>の成果
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              LINEミニアプリ導入によって得られた実際の成果をご紹介します
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="pal" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="pal">PAL CLOSET様</TabsTrigger>
                <TabsTrigger value="goodday">グッデイ様</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="pal" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          width={80}
                          height={80}
                          alt="PAL CLOSET様"
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-xl font-bold">PAL CLOSET様</h3>
                          <p className="text-sm text-gray-500">アパレル業界</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold mb-2">課題・導入背景</h4>
                          <p className="text-gray-600">
                            プロモーション推進部WEB事業推進室 コミュニケーションデザイン室 室長 堀田様
                          </p>
                          <div className="mt-4 space-y-4">
                            <div>
                              <h5 className="font-medium">■ アプリDL</h5>
                              <p className="text-gray-600 text-sm mt-1">
                                「Native
                                appはアプリDLが必要な為、ライトユーザーや操作に不慣れなお客様に導入が遅延する。スタッフ/ユーザー双方に躊躇感があった」
                              </p>
                            </div>
                            <div>
                              <h5 className="font-medium">■ ユーザー層</h5>
                              <p className="text-gray-600 text-sm mt-1">
                                「元々ロイヤルカスタマーはNative app DL率が高く、ご利用頻度も多い。LINE Mini
                                appはライトユーザーへのリーチ＆会員化という棲み分けができた」
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <div className="grid gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <Users className="mr-2 h-5 w-5 text-green-600" />
                          EC会員数
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">2020年3月単月、新規会員数が</span>
                            <span className="text-2xl font-bold text-red-600">前月比200%増加</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">3COINSに限ると、新規会員の</span>
                            <span className="text-2xl font-bold text-red-600">8割</span>
                            <span className="text-gray-600">がLINEミニアプリ経由</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-green-600" />
                          登録時間
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">店舗でのQRコード読み込みから会員化までの時間が</span>
                            <span className="text-2xl font-bold text-red-600">たったの5秒に</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <Users className="mr-2 h-5 w-5 text-green-600" />
                          友だち数
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">PAL CLOSETのLINE公式アカウント友達数が、1ヶ月で</span>
                            <span className="text-2xl font-bold text-red-600">10万人増（3倍）</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">2021年4月時点で</span>
                            <span className="text-2xl font-bold text-red-600">53.6万人</span>
                            <span className="text-gray-600">に増加</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-4 flex items-center">
                          <ShoppingCart className="mr-2 h-5 w-5 text-green-600" />
                          EC売上
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">2020年4-5月は新型コロナの影響で店舗休業</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">2ヶ月間のEC売上は前年同期比で</span>
                            <span className="text-2xl font-bold text-red-600">2倍以上の成長</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">LINEミニアプリ導入後、LINE経由のEC売上が</span>
                            <span className="text-2xl font-bold text-red-600">前年比5倍に成長</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">会員証LINEミニアプリの体験例</h3>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="text-center">
                    <div className="bg-gray-200 rounded-full p-4 inline-flex items-center justify-center mb-2">
                      <span className="font-bold">店舗</span>
                    </div>
                    <p className="text-sm">
                      買い物後レジで
                      <br />
                      QRコードを読み込む
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowUp className="rotate-90 text-gray-400" />
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full p-4 inline-flex items-center justify-center mb-2">
                      <span className="font-bold">LINE</span>
                    </div>
                    <p className="text-sm">認証許可</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowUp className="rotate-90 text-gray-400" />
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full p-4 inline-flex items-center justify-center mb-2">
                      <span className="font-bold">会員証発行</span>
                    </div>
                    <p className="text-sm">仮会員証発行</p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowUp className="rotate-90 text-gray-400" />
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE%E7%B7%8F%E5%90%88%E6%94%AF%E6%8F%B4%E3%82%B5%E3%83%BC%E3%83%92%E3%82%99%E3%82%B9DL%E8%B3%87%E6%96%99%20%282%29.jpg-3bLid6ckj5xVWAoillyXhM3QW56xHE.jpeg"
                    width={800}
                    height={300}
                    alt="PAL CLOSETの会員証LINEミニアプリの体験例"
                    className="rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="goodday" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          width={80}
                          height={80}
                          alt="グッデイ様"
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-xl font-bold">グッデイ様</h3>
                          <p className="text-sm text-gray-500">ホームセンター</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold mb-2">課題・導入背景</h4>
                          <p className="text-gray-600">
                            チャットボットを利用したSaaSサービスを導入していたが、顧客問い合わせやカスタマイズに対し、より柔軟に自由度高く対応するため、フルスクラッチでの開発を検討。
                          </p>
                          <p className="text-gray-600 mt-2">
                            この度の導入で、更なるシステムの安定化を図り問い合わせ数の減少を見込むとともに、新規会員登録における入力情報を一覧で確認できるフォーム形式への切り替えで、登録率アップも期待。
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <div className="grid gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-4">会員証提示率が向上</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">LINEミニアプリ導入前と比較し、キャンペーン実施月は</span>
                            <span className="text-2xl font-bold text-red-600">平均1.9%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">それ以外の月では</span>
                            <span className="text-2xl font-bold text-red-600">平均1%</span>
                            <span className="text-gray-600">提示率が向上</span>
                          </div>
                          <div className="mt-2">
                            <span className="text-gray-600">キャンペーン月だけでなく、</span>
                            <span className="font-bold text-red-600">終了後も継続的に利用</span>
                            <span className="text-gray-600">いただいている。</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-4">客単価・売上アップ</h4>
                        <div className="space-y-2">
                          <div>
                            <p className="text-gray-600">
                              キャンペーン申込条件の購入金額に近いユーザーを選定し、LINE公式アカウントからメッセージ配信することで、
                              <span className="font-bold text-red-600">客単価がアップ</span>。
                            </p>
                          </div>
                          <div className="mt-2">
                            <p className="text-gray-600">
                              会員証提示率に対し
                              <span className="font-bold text-red-600">約2倍近い売上比率</span>
                              を記録する月も。
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-4">LINE公式アカウントの友だち数アップ</h4>
                        <div className="space-y-2">
                          <div>
                            <p className="text-gray-600">
                              LINEミニアプリとして露出が増え、ユーザー動線も増えたことで、ユーザー数が以前に比べて拡大。LINEミニアプリ導入から2024年6月時点で新規友だちは
                              <span className="font-bold text-red-600">約15万人増加</span>。
                            </p>
                          </div>
                          <div className="mt-2">
                            <p className="text-gray-600">
                              会員数は
                              <span className="font-bold text-red-600">約11万人</span>
                              増加。
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">会員証LINEミニアプリの体験例</h3>
                <div className="mt-4 flex justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE%E7%B7%8F%E5%90%88%E6%94%AF%E6%8F%B4%E3%82%B5%E3%83%BC%E3%83%92%E3%82%99%E3%82%B9DL%E8%B3%87%E6%96%99%20%284%29.jpg-JGeTy1Ua2FOd4Chr5aMHwpYljstl8D.jpeg"
                    width={800}
                    height={300}
                    alt="グッデイ様の会員証LINEミニアプリの体験例"
                    className="rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
