import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">お問い合わせ</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                LINEを活用した
                <br />
                <span className="text-green-600">顧客体験向上</span>を始めましょう
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                最短2週間で導入可能。まずは資料ダウンロードかお問い合わせからお試しください。
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="#contact-form">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#download-form">
                  <FileText className="mr-2 h-4 w-4" />
                  資料ダウンロード
                </Link>
              </Button>
            </div>
            <div className="mt-8" id="download-form">
              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle>資料ダウンロード</CardTitle>
                  <CardDescription>詳細資料をメールでお送りします</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name-download">お名前</label>
                      <Input id="name-download" placeholder="山田 太郎" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email-download">メールアドレス</label>
                      <Input id="email-download" type="email" placeholder="example@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="company-download">会社名</label>
                      <Input id="company-download" placeholder="株式会社〇〇" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700">資料をダウンロード</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div id="contact-form">
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle>お問い合わせ</CardTitle>
                <CardDescription>ご質問・ご相談をお待ちしております</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name">お名前</label>
                    <Input id="name" placeholder="山田 太郎" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email">メールアドレス</label>
                    <Input id="email" type="email" placeholder="example@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="company">会社名</label>
                    <Input id="company" placeholder="株式会社〇〇" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone">電話番号</label>
                    <Input id="phone" type="tel" placeholder="03-1234-5678" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="industry">業種</label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="業種を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">小売業</SelectItem>
                        <SelectItem value="apparel">アパレル</SelectItem>
                        <SelectItem value="food">飲食業</SelectItem>
                        <SelectItem value="service">サービス業</SelectItem>
                        <SelectItem value="manufacturing">製造業</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="interest">興味のある機能</label>
                    <Select>
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="機能を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="miniapp">会員証LINEミニアプリ</SelectItem>
                        <SelectItem value="bot">ボット振り分け</SelectItem>
                        <SelectItem value="integration">LINE連携配信</SelectItem>
                        <SelectItem value="richmenu">リッチメニュー</SelectItem>
                        <SelectItem value="chatbot">チャットボット</SelectItem>
                        <SelectItem value="all">すべての機能</SelectItem>
                        <SelectItem value="other">その他・未定</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message">お問い合わせ内容</label>
                    <textarea
                      id="message"
                      className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="ご質問・ご相談内容をご記入ください"
                    ></textarea>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">お問い合わせを送信</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
