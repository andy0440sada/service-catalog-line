"use client"

import type { User } from "firebase/auth" // Assuming Firebase Auth, adjust if different
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Define a more specific user profile type
export interface UserProfile extends User {
  name?: string | null
  jobTitle?: string | null
  industry?: string | null
  // Add other custom fields if necessary
}

interface AuthContextType {
  user: UserProfile | null
  isAuthenticated: boolean
  loading: boolean
  updateUserProfileState: (updates: Partial<UserProfile>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const mockUser: UserProfile = {
      uid: "mock-user-123",
      email: "test@example.com",
      emailVerified: true,
      displayName: "Test User",
      isAnonymous: false,
      metadata: {},
      providerData: [],
      providerId: "mock",
      refreshToken: "",
      tenantId: null,
      delete: async () => {},
      getIdToken: async () => "",
      getIdTokenResult: async () => ({}) as any,
      reload: async () => {},
      toJSON: () => ({}) as any,
    }
    const timer = setTimeout(() => {
      setUser(mockUser)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const updateUserProfileState = (updates: Partial<UserProfile>) => {
    setUser((prevUser) => {
      if (prevUser) {
        const updatedUser = { ...prevUser, ...updates }
        return updatedUser
      }
      return null
    })
  }

  const contextValue = {
    user,
    isAuthenticated: !!user && !loading,
    loading,
    updateUserProfileState,
  }

  // Ensure this return statement is formatted with parentheses and newlines
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
