"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { mockAuth, mockCurrentUser, type MockUser } from '@/lib/mock-data'

interface AuthContextType {
  user: MockUser | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function MockProviders({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize with demo user for mock deployment
    const demoUser = mockAuth.getCurrentUser()
    if (demoUser) {
      setUser(demoUser)
    }
    setLoading(false)
  }, [])

  const signOut = async () => {
    await mockAuth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
