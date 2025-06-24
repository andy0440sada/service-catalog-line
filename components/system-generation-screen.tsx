"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, LogIn, AlertTriangle } from "lucide-react"
import Link from "next/link"
// import { useAuth } from "@/lib/auth" // useAuth のインポートを削除
import { ProfileModal } from "@/components/profile-modal"
import { addConstructedApp, getConstructedApps } from "@/lib/constructed-apps"

interface SystemGenerationScreenProps {
  templateId: string
  isGuest?: boolean
}

// UserProfileの簡易的な型をここで定義
interface UserProfile {
  uid: string
  email?: string | null
  name?: string | null
  jobTitle?: string | null
  industry?: string | null
}

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  requiredFields?: {
    name?: boolean
    jobTitle?: boolean
    industry?: boolean
    email?: boolean
    password?: boolean
  }
  isInitialRegistration?: boolean
}

// 仮のユーザー情報と認証状態
const MOCK_USER_SGS: UserProfile | null = {
  // SGS: SystemGenerationScreen
  uid: "mock-user-sgs-123",
  email: "sgs_user@example.com",
  name: "SGSユーザー",
  jobTitle: "SGS役職",
  industry: "SGS業種",
}
const MOCK_IS_AUTHENTICATED_SGS = true // システム生成画面の動作確認のためtrueに設定
const MOCK_AUTH_LOADING_SGS = false

export function SystemGenerationScreen({ templateId, isGuest = false }: SystemGenerationScreenProps) {
  // const { user, isAuthenticated, loading: authLoading } = useAuth() // useAuth の使用を削除
  const user = isGuest ? null : MOCK_USER_SGS
  const isAuthenticated = isGuest ? false : MOCK_IS_AUTHENTICATED_SGS
  const authLoading = MOCK_AUTH_LOADING_SGS

  const [progress, setProgress] = useState(0)
  const [isGenerating, setIsGenerating] = useState(true)
  const [isGenerated, setIsGenerated] = useState(false)
  const [timeLeft, setTimeLeft] = useState(isGuest ? 30 * 60 : Number.POSITIVE_INFINITY)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [profileModalConfig, setProfileModalConfig] = useState<{
    requiredFields: ProfileModalProps["requiredFields"]
    isInitialRegistration: boolean
  }>({
    requiredFields: { name: true, jobTitle: true, industry: true },
    isInitialRegistration: false,
  })
  const [profileCheckedAndReady, setProfileCheckedAndReady] = useState(false)

  // テンプレートの名前を取得
  const getTemplateName = (id: string) => {
    switch (id) {
      case "miniapp":
        return "会員証LINEミニアプリ"
      case "segment_message":
        return "メッセージ配信"
      case "segment_menu":
        return "リッチメニュー切り替え"
      case "communication_crm":
        return "CRM連携1to1チャット"
      case "communication_bot":
        return "チャットボット"
      case "saas_bot":
        return "ボット振り分け"
      default:
        return "LINE活用テンプレート"
    }
  }
  const getTemplateCategory = (id: string) => {
    if (id === "miniapp") return null
    if (id.startsWith("segment_")) return "ユーザーセグメントごとの出しわけ"
    if (id.startsWith("communication_")) return "1to1コミュニケーション"
    if (id.startsWith("saas_")) return "SaaSと同居させたい"
    return null
  }

  const templateName = getTemplateName(templateId)
  const categoryName = getTemplateCategory(templateId)
  const displayName = categoryName ? `${categoryName} - ${templateName}` : templateName

  // システム生成のシミュレーション
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isGenerating) {
      const intervalTime = 100
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer)
            setIsGenerating(false)
            setIsGenerated(true)
            return 100
          }
          return prev + 1
        })
      }, intervalTime)
    }
    return () => clearInterval(timer)
  }, [isGenerating])

  // サンドボックス用タイマー
  useEffect(() => {
    if (isGuest && isGenerated && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            alert("サンドボックスの利用時間が終了しました。保存・本番導入にはログインが必要です。")
            window.location.href = "/#templates"
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isGuest, isGenerated, timeLeft])

  useEffect(() => {
    if (!authLoading && isGenerated) {
      setProfileCheckedAndReady(true)
      if (isAuthenticated && user && !isGuest) {
        const currentProfileComplete = !!user.name && !!user.jobTitle && !!user.industry
        if (currentProfileComplete) {
          const apps = getConstructedApps(user.uid)
          const appAlreadyExists = apps.some((app) => app.templateId === templateId && app.displayName === displayName)
          if (!appAlreadyExists) {
            addConstructedApp(user.uid, {
              templateId,
              displayName,
            })
          }
        }
      }
    }
  }, [authLoading, isGenerated, user, isAuthenticated, isGuest, templateId, displayName])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const sandboxQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=SandboxEnvironmentFor${templateId}`
  const productionQrUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zqepYHsGA9KB3E1GuartfeNLUGU5Bs.png"

  const isProfileComplete = !!user?.name && !!user?.jobTitle && !!user?.industry

  const handleProfileUpdated = () => {
    setShowProfileModal(false)
    // ここでユーザー情報を再評価するか、状態を更新する必要があるかもしれません。
    // 今回は useAuth がないので、単純にモーダルを閉じるだけにします。
  }

  const openProfileModalForRegistration = () => {
    setProfileModalConfig({
      requiredFields: { name: true, jobTitle: true, industry: true, email: true, password: true },
      isInitialRegistration: true,
    })
    setShowProfileModal(true)
  }

  if (authLoading && !isGuest) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 flex items-center justify-center">
        <p>認証情報を読み込み中...</p>
      </section>
    )
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      {isGuest && isGenerated && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-400 p-3 text-center text-sm font-medium z-50 shadow-md">
          <AlertTriangle className="inline-block h-5 w-5 mr-2" />
          このデモ環境は <span className="font-bold">{formatTime(timeLeft)}</span> 間有効です。保存・本番導入には
          <Button variant="link" className="p-0 h-auto text-sm font-bold underline ml-1" asChild>
            <Link href={`/login?redirect=/demo/${templateId}${isGuest ? "&guest=true" : ""}`}>ログイン/登録</Link>
          </Button>
          が必要です。
        </div>
      )}
      <div className={`container px-4 md:px-6 ${isGuest && isGenerated ? "pt-12" : ""}`}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
              システム準備中
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-green-600">{displayName}</span>を
              <br />
              アプリを準備しています
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              選択されたテンプレートに最適なアプリを準備しています。
              {isGuest && " これは30分間限定のサンドボックス環境です。"}
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="border-2 border-green-100">
            <CardHeader>
              <CardTitle className="text-center">
                {isGenerated ? "アプリ準備完了！" : "アプリを準備中..."}
              </CardTitle>
              <CardDescription className="text-center">
                {isGenerated
                  ? `選択されたテンプレート「${templateName}」の${isGuest ? "サンドボックス環境" : "システム"}が準備できました。`
                  : "最適なシステムを準備しています。完了まで約10秒かかります。"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isGenerating && (
                <>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-green-600 h-4 rounded-full transition-all duration-300 ease-linear"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="text-center text-sm text-gray-500">{progress}% 完了</div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                      { label: "要件分析", progressThreshold: 20, description: "テンプレートから必要機能を特定" },
                      { label: "データモデル生成", progressThreshold: 40, description: "最適なデータ構造を設計" },
                      { label: "バックエンド構築", progressThreshold: 60, description: "API・ビジネスロジックを生成" },
                      { label: "UI生成", progressThreshold: 80, description: "使いやすいインターフェースを構築" },
                    ].map((item) => (
                      <div className="flex items-start gap-2" key={item.label}>
                        <CheckCircle
                          className={`h-5 w-5 ${progress >= item.progressThreshold ? "text-green-600" : "text-gray-300"}`}
                        />
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {isGenerated && profileCheckedAndReady && (
                <div className="text-center space-y-6">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">おめでとうございます！</h3>
                    {isGuest ? (
                      <p className="text-gray-500">
                        {displayName}のサンドボックス環境が正常に生成されました。
                        <br />
                        以下のQRコードをスマートフォンで読み取り、サンドボックス環境をお試しください。
                      </p>
                    ) : isAuthenticated && isProfileComplete ? (
                      <p className="text-gray-500">
                        {displayName}のシステムが正常に生成されました。本番環境の準備ができました。
                        {templateId === "miniapp" && (
                          <>
                            <br />
                            以下のQRコードを読み取ってLINEミニアプリを起動するか、システムダッシュボードへ進んでください。
                          </>
                        )}
                      </p>
                    ) : isAuthenticated && !isProfileComplete ? (
                      <p className="text-gray-500">
                        {displayName}のシステムが正常に生成されました。
                        <br />
                        本番環境を利用するには、会員情報の登録が必要です。
                      </p>
                    ) : (
                      <p className="text-gray-500">
                        システムの準備ができました。ご利用には
                        <Button variant="link" className="p-0 h-auto text-sm font-bold underline ml-1" asChild>
                          <Link href={`/login?redirect=/demo/${templateId}`}>ログイン</Link>
                        </Button>
                        が必要です。
                      </p>
                    )}
                  </div>

                  {(isGuest || (isAuthenticated && isProfileComplete && templateId === "miniapp")) && (
                    <div className="mx-auto w-48 h-48 bg-white p-2 border rounded-md shadow-md">
                      <div className="w-full h-full relative">
                        <img
                          src={isGuest ? sandboxQrUrl : productionQrUrl}
                          alt={`${isGuest ? "サンドボックス" : "本番用"}LINEミニアプリQRコード`}
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                  {(isGuest || (isAuthenticated && isProfileComplete && templateId === "miniapp")) && (
                    <p className="text-xs text-gray-500 mt-2 w-full">
                      ※ スマートフォンのLINEアプリで読み取ってください。
                      {isGuest && "サンドボックス環境は実際のLINEミニアプリとは一部挙動が異なる場合があります。"}
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    {isGuest ? (
                      <Button className="bg-green-600 hover:bg-green-700" asChild>
                        <Link href={`/login?redirect=/demo/${templateId}${isGuest ? "&guest=true" : ""}`}>
                          <LogIn className="mr-2 h-4 w-4" />
                          ログインして本番導入
                        </Link>
                      </Button>
                    ) : isAuthenticated ? (
                      isProfileComplete ? (
                        <Button className="bg-green-600 hover:bg-green-700" asChild>
                          <Link href="/dashboard">
                            システムダッシュボードへ
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button className="bg-green-600 hover:bg-green-700" onClick={openProfileModalForRegistration}>
                          会員情報を登録して本番利用
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )
                    ) : (
                      <Button className="bg-green-600 hover:bg-green-700" asChild>
                        <Link href={`/login?redirect=/demo/${templateId}`}>
                          <LogIn className="mr-2 h-4 w-4" />
                          ログインして保存・本番導入
                        </Link>
                      </Button>
                    )}
                    <Button variant="outline" asChild>
                      <Link href="/#templates">他のテンプレートを見る</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      {showProfileModal &&
        isAuthenticated && ( // isAuthenticated のチェックを追加
          <ProfileModal
            isOpen={showProfileModal}
            onClose={() => setShowProfileModal(false)}
            onSuccess={handleProfileUpdated}
            requiredFields={profileModalConfig.requiredFields}
            isInitialRegistration={profileModalConfig.isInitialRegistration}
          />
        )}
    </section>
  )
}
