import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Search, FileCode, Database, Server, CheckSquare } from "lucide-react"

export function ProcessSection() {
  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">自動構築プロセス</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-blue-600">5ステップ</span>で<br />
              システム構築が完了
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              テンプレートを選んで情報を入力するだけ。AIがAWSリソースを自動構成し、最短2週間で本番稼働できます
            </p>
          </div>
        </div>

        <div className="mt-16 relative">
          {/* 接続線 */}
          

          <div className="grid gap-12 md:grid-cols-5">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold">業務課題を選択</h3>
              <p className="text-gray-500">在庫管理や受発注など、解決したい業務課題を選択</p>
              <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="absolute inset-0 bg-white p-4 flex flex-col items-center justify-center">
                  <Search className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-700">業務課題を選択</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold">テンプレート提案</h3>
              <p className="text-gray-500">AIが最適なテンプレートを提案。機能や画面を確認</p>
              <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="absolute inset-0 bg-white p-4 flex flex-col items-center justify-center">
                  <FileCode className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-700">テンプレート選択</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold">情報入力</h3>
              <p className="text-gray-500">倉庫数や商品数など、必要な情報を簡単に入力</p>
              <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="absolute inset-0 bg-white p-4 flex flex-col items-center justify-center">
                  <Database className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-700">情報入力</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold">AIが自動構築</h3>
              <p className="text-gray-500">AIがAWSリソースを自動構成。データベース���API、UIを生成</p>
              <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="absolute inset-0 bg-white p-4 flex flex-col items-center justify-center">
                  <Server className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-700">システム自動構築</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold">
                  5
                </div>
              </div>
              <h3 className="text-xl font-bold">システム完成</h3>
              <p className="text-gray-500">最短2週間で本番環境が完成。すぐに業務で活用可能</p>
              <div className="w-full max-w-[200px] h-[120px] relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="absolute inset-0 bg-white p-4 flex flex-col items-center justify-center">
                  <CheckSquare className="h-8 w-8 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-700">システム完成</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Card className="border-2 border-blue-100">
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">コーディング不要</h3>
                  <p className="text-gray-500 text-sm">
                    テンプレートを選ぶだけ。プログラミングスキルは一切必要ありません
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">短期導入</h3>
                  <p className="text-gray-500 text-sm">最短2週間で本番環境が完成。すぐに業務改善効果を実感</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">柔軟なカスタマイズ</h3>
                  <p className="text-gray-500 text-sm">
                    テンプレートをベースに、自社の業務に合わせたカスタマイズも可能
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
