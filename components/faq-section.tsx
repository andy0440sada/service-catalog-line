"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">よくある質問</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ご不明点にお答えします</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              導入を検討される際によくいただく質問をまとめました
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4">
                導入にはどれくらいの期間がかかりますか？
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-gray-500">
                最短2週間からご利用いただけます。簡易的なPoC（実証実験）であれば、お申し込みから1週間程度でスタート可能です。本格導入の場合は、要件の複雑さによって異なりますが、通常2〜4週間程度です。段階的な導入も可能ですので、まずは小さく始めることをおすすめしています。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4">
                既存のLINE公式アカウントと連携できますか？
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-gray-500">
                はい、可能です。既存のLINE公式アカウントにGrowthPack for
                LINEの機能を追加する形で導入できます。友だち数やこれまでの配信履歴などの資産はそのまま活かせますのでご安心ください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4">
                自社の既存システムと連携できますか？
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-gray-500">
                はい、対応可能です。REST
                API、データベース直接接続、ファイル連携など、様々な方式での連携に対応しています。既存システムを活かしながら、LINE連携機能だけを追加することも可能です。詳細は個別にご相談ください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4">
                導入後のサポート体制はどうなっていますか？
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-gray-500">
                専任のカスタマーサクセスチームが、導入から運用まで一貫してサポートします。技術的な質問対応はもちろん、LINE活用のアドバイスや定期的な活用状況のレビューも実施しています。サポート窓口は平日9:00〜18:00で対応しており、緊急時には時間外対応も可能です。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4">費用はどのくらいかかりますか？</AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-gray-500">
                初期費用と月額費用の組み合わせとなります。初期費用は導入する機能や要件の複雑さによって異なりますが、ハーフスクラッチ開発のため、フルスクラッチ開発と比較して大幅にコストを抑えることが可能です。詳細な料金プランについては、お問い合わせいただくか、資料をダウンロードしてご確認ください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-medium py-4">セキュリティ面は安全ですか？</AccordionTrigger>
              <AccordionContent className="pb-4 pt-1 text-gray-500">
                セキュリティには万全を期しています。LINEのセキュリティガイドラインに準拠した開発を行い、お客様の情報は適切に保護されます。また、データの暗号化やアクセス制御など、多層的なセキュリティ対策を実施しています。詳細なセキュリティ対策については、個別にご説明させていただきます。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
