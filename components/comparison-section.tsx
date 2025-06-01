import { CheckCircle, X } from "lucide-react"

export function ComparisonSection() {
  return (
    <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
              他ツールとの違い
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-green-600">GrowthPack for LINE</span>の強み
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              他のLINE関連ツールと比較した際の優位性をご紹介します
            </p>
          </div>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-white border rounded-tl-lg"></th>
                <th className="p-4 text-center bg-gray-100 text-gray-800 border">
                  <div className="text-lg font-bold">SaaSツール</div>
                  <div className="text-xs font-normal">月額課金型</div>
                </th>
                <th className="p-4 text-center bg-green-600 text-white border">
                  <div className="text-lg font-bold">
                    Growth<span className="font-normal">Pack</span>
                  </div>
                  <div className="text-xs font-normal">テンプレート + AI自動構築</div>
                </th>
                <th className="p-4 text-center bg-gray-700 text-white border rounded-tr-lg">
                  <div className="text-lg font-bold">フルスクラッチ開発</div>
                  <div className="text-xs font-normal">完全オーダーメイド</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 bg-gray-50 border font-medium">導入期間</td>
                <td className="p-4 text-center border bg-white">
                  <div className="font-bold">即日〜1週間</div>
                  <div className="text-sm text-gray-500">テンプレート利用</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="font-bold text-green-600">最短2週間</div>
                  <div className="text-sm text-gray-500">開発パッケージ活用</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="font-bold">1〜3ヶ月以上</div>
                  <div className="text-sm text-gray-500">要件定義から開発まで</div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 border font-medium">初期費用</td>
                <td className="p-4 text-center border bg-white">
                  <div className="font-bold">低〜無料</div>
                  <div className="text-sm text-gray-500">月額課金型が多い</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="font-bold text-green-600">0円〜</div>
                  <div className="text-sm text-gray-500">サブスクリプションプラン</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="font-bold">高</div>
                  <div className="text-sm text-gray-500">一からの開発費用</div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 border font-medium">カスタマイズ性</td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="text-sm text-gray-500">テンプレート制約あり</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-500">高い自由度</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-500">完全自由度</div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 border font-medium">複数機能の連携</td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="text-sm text-gray-500">単一機能のみ提供が多い</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-500">ボット振り分けなど独自機能あり</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-500">自由に設計可能</div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 border font-medium">既存システム連携</td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="text-sm text-gray-500">連携オプションが限定的</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-500">APIを通じて柔軟に連携</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-sm text-gray-500">完全自由度</div>
                </td>
              </tr>
              <tr>
                <td className="p-4 bg-gray-50 border font-medium rounded-bl-lg">保守・運用</td>
                <td className="p-4 text-center border bg-white">
                  <div className="font-bold">セルフサービス</div>
                  <div className="text-sm text-gray-500">有料サポートプランあり</div>
                </td>
                <td className="p-4 text-center border bg-white">
                  <div className="font-bold text-green-600">専任サポート</div>
                  <div className="text-sm text-gray-500">継続的なサポート体制</div>
                </td>
                <td className="p-4 text-center border bg-white rounded-br-lg">
                  <div className="font-bold">保守契約必要</div>
                  <div className="text-sm text-gray-500">別途費用発生</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
