"use client"

import type { User } from "firebase/auth" // Assuming Firebase Auth, adjust if different
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Define a more specific user profile type
export interface UserProfile extends User {
  name?: string | null
  jobTitle?: string | null // Changed from role to jobTitle to match system-generation-screen
  industry?: string | null
  // Add other custom fields if necessary
}

interface AuthContextType {
  user: UserProfile | null
  isAuthenticated: boolean
  loading: boolean
  // Add any auth functions like signIn, signOut, updateUserProfile if needed
  updateUserProfileState: (updates: Partial<UserProfile>) => void // Function to update user state locally
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Mock authentication logic - replace with your actual auth provider (Firebase, Supabase, NextAuth, etc.)
  useEffect(() => {
    setLoading(true)
    // Simulate fetching user data
    const mockUser: UserProfile = {
      uid: "mock-user-123",
      email: "test@example.com",
      emailVerified: true,
      displayName: "Test User", // This is often the default name from auth provider
      // name: '山田 太郎', // This would be your custom 'name' field, initially undefined or fetched from DB
      // jobTitle: 'エンジニア',
      // industry: 'IT',
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
    // Simulate a delay for fetching auth state
    const timer = setTimeout(() => {
      // To test profile completion, you can uncomment these lines or set them based on a mock DB
      // setUser({ ...mockUser, name: "山田 太郎", jobTitle: "エンジニア", industry: "IT" }); // Profile complete
      setUser(mockUser) // Profile incomplete initially
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const updateUserProfileState = (updates: Partial<UserProfile>) => {
    setUser((prevUser) => {
      if (prevUser) {
        const updatedUser = { ...prevUser, ...updates }
        // If 'name' is being updated, also update 'displayName' for consistency if desired,
        // or handle 'displayName' separately if it's meant to be distinct.
        // For this example, let's assume 'name' is the primary display name for the profile.
        // if (updates.name) {
        //   updatedUser.displayName = updates.name;
        // }
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

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
