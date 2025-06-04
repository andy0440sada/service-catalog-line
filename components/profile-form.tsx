"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { useAuth, type UserProfile } from "@/lib/auth" // useAuth のインポートを削除
import { useState } from "react"

// UserProfileの簡易的な型をここで定義（本来はtypes/app.tsなどに移すのが望ましい）
interface UserProfile {
  uid: string
  email?: string | null
  name?: string | null
  jobTitle?: string | null
  industry?: string | null
}

const profileFormSchemaBase = {
  name: z.string().min(1, { message: "お名前を入力してください。" }),
  jobTitle: z.string().min(1, { message: "役職を入力してください。" }),
  industry: z.string().min(1, { message: "業種を入力してください。" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください。" }),
  password: z.string().min(8, { message: "パスワードは8文字以上で入力してください。" }).optional(),
  confirmPassword: z.string().optional(),
}

const fullRegistrationSchema = z
  .object({
    ...profileFormSchemaBase,
    password: z.string().min(8, { message: "パスワードは8文字以上で入力してください。" }),
    confirmPassword: z.string().min(8, { message: "確認用パスワードを入力してください。" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "パスワードが一致しません。",
    path: ["confirmPassword"],
  })

const profileUpdateSchema = z.object({
  name: profileFormSchemaBase.name.optional(),
  jobTitle: profileFormSchemaBase.jobTitle.optional(),
  industry: profileFormSchemaBase.industry.optional(),
  email: profileFormSchemaBase.email.optional(),
})

type ProfileFormValues = z.infer<typeof fullRegistrationSchema>

interface ProfileFormProps {
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

export function ProfileForm({ onSuccess, requiredFields, isInitialRegistration = false }: ProfileFormProps) {
  // const { user, updateUserProfileState } = useAuth() // useAuth の使用を削除
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // 仮のユーザー情報（useAuthから取得できなくなったため）
  const mockUser: UserProfile | null = isInitialRegistration
    ? null
    : {
        uid: "mock-profile-user",
        email: "mock@example.com",
        name: "モック ユーザー",
        jobTitle: "モック役職",
        industry: "モック業種",
      }

  const activeSchema = isInitialRegistration || requiredFields?.password ? fullRegistrationSchema : profileUpdateSchema

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(activeSchema),
    defaultValues: {
      email: mockUser?.email || "", // 仮のユーザー情報を使用
      name: mockUser?.name || "", // 仮のユーザー情報を使用
      jobTitle: mockUser?.jobTitle || "", // 仮のユーザー情報を使用
      industry: mockUser?.industry || "", // 仮のユーザー情報を使用
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  })

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)
    setError(null)
    console.log("Form submitted with data (auth removed):", data)

    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
    try {
      // updateUserProfileState の呼び出しを削除
      // ここで実際のAPI呼び出しなどを行う（現在は何もしない）
      console.log("Profile data (mock update):", data)

      setIsLoading(false)
      if (onSuccess) {
        onSuccess()
      }
    } catch (err) {
      setIsLoading(false)
      setError("プロフィールの更新/登録に失敗しました。")
      console.error(err)
    }
  }

  const showEmailField = requiredFields?.email || isInitialRegistration
  const showPasswordField = requiredFields?.password || isInitialRegistration
  const showNameField = requiredFields?.name || isInitialRegistration
  const showJobTitleField = requiredFields?.jobTitle || isInitialRegistration
  const showIndustryField = requiredFields?.industry || isInitialRegistration

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {showEmailField && (
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  メールアドレス <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    {...field}
                    readOnly={!!mockUser?.email && !isInitialRegistration} // 仮のユーザー情報を使用
                  />
                </FormControl>
                {isInitialRegistration && <FormDescription>ログインに使用します。</FormDescription>}
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {showPasswordField && (
          <>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    パスワード <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="8文字以上" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    パスワード（確認用） <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="パスワードを再入力" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {showNameField && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  お名前 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="山田 太郎" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {showJobTitleField && (
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  役職 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="例: マーケティング担当" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {showIndustryField && (
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  業種 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="例: 小売業" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {error && <p className="text-sm font-medium text-destructive">{error}</p>}
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "処理中..." : isInitialRegistration || requiredFields?.password ? "登録する" : "更新する"}
        </Button>
      </form>
    </Form>
  )
}
