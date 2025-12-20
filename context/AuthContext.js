'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { CONFIG } from '@/constants/config'

const AuthContext = createContext(null)

// Simulated user data
const DEMO_USER = {
  id: 'demo-user',
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatar: '/avatars/default-avatar.jpg',
  joinedDate: '2024-01-15',
  preferences: {
    emailNotifications: true,
    theme: 'light',
  },
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load user on mount (simulated authentication)
  useEffect(() => {
    const loadUser = () => {
      // In a real app, this would check for auth token and fetch user data
      const storedUser = localStorage.getItem(CONFIG.STORAGE_KEYS.USER)
      
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (error) {
          console.error('Error loading user:', error)
          setUser(null)
        }
      } else {
        // Don't auto-login - user must explicitly sign in
        setUser(null)
      }
      
      setLoading(false)
    }

    loadUser()
  }, [])

  // Simulated login
  const login = (email, password) => {
    // In a real app, this would make an API call
    // Derive name from email (e.g., john.doe@example.com -> John Doe)
    const emailUsername = email.split('@')[0]
    const nameParts = emailUsername.split(/[._-]/).map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    )
    const derivedName = nameParts.join(' ')
    
    const user = {
      id: `user-${Date.now()}`,
      name: derivedName,
      email: email,
      avatar: '/avatars/default-avatar.jpg',
      joinedDate: new Date().toISOString().split('T')[0],
      preferences: {
        emailNotifications: true,
        theme: 'light',
      },
    }
    
    setUser(user)
    localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(user))
    return Promise.resolve(user)
  }

  // Simulated logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER)
    // In a real app, would also clear auth tokens
  }

  // Update user profile
  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(updatedUser))
  }

  // Update preferences
  const updatePreferences = (preferences) => {
    const updatedUser = {
      ...user,
      preferences: { ...user.preferences, ...preferences },
    }
    setUser(updatedUser)
    localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(updatedUser))
  }

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    updateProfile,
    updatePreferences,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
