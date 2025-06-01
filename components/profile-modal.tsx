"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ProfileForm } from "./profile-form"

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  requiredFields?: {
    name?: boolean
    jobTitle?: boolean
    industry?: boolean
    email?: boolean
    password?: boolean // Added password
  }
  isInitialRegistration?: boolean
}

export function ProfileModal({
  isOpen,
  onClose,
  onSuccess,
  requiredFields,
  isInitialRegistration = false,
}: ProfileModalProps) {
  if (!isOpen) {
    return null
  }

  const handleSuccess = () => {
    if (onSuccess) {
      onSuccess()
    }
    onClose() // Close modal on success
  }

  const title = isInitialRegistration ? "新規会員登録" : "会員情報編集"
  const description = isInitialRegistration
    ? "サービスのご利用開始にあたり、以下の情報をご登録ください。"
    : "本番環境の利用には、以下の追加情報が必要です。ご入力をお願いいたします。"

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
            <span className="text-red-500 block text-xs mt-1">* は必須項目です</span>
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ProfileForm
            onSuccess={handleSuccess}
            requiredFields={requiredFields}
            isInitialRegistration={isInitialRegistration}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
