import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              Growth<span className="text-green-600">Pack</span>
            </h3>
            <p className="text-sm text-gray-500">
              LINEを活用した顧客体験の最適化。会員証LINEミニアプリで顧客接点を強化し、効率的なマーケティングを実現します。
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">機能</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  会員証LINEミニアプリ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  ボット振り分け
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  LINE連携配信
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  リッチメニュー
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  チャットボット
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">会社情報</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">お問い合わせ</h3>
            <ul className="space-y-2 text-sm">
              <li>〒100-0001 東京都千代田区1-1-1</li>
              <li>TEL: 03-1234-5678</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GrowthPack. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
