'use client'

import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { STRINGS } from '@/constants/strings'
import { ROUTES } from '@/constants/routes'
import { FaSun, FaMoon } from 'react-icons/fa6'

export default function ProfilePage() {
  const { user, loading: authLoading, updateProfile, updatePreferences } = useAuth()
  const { getLearningStats, loading: progressLoading } = useProgress()
  const router = useRouter()
  
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  })
  const [preferences, setPreferences] = useState({
    emailNotifications: user?.preferences?.emailNotifications ?? true,
    theme: user?.preferences?.theme || 'light',
  })

  const stats = getLearningStats()

  const handleSaveProfile = () => {
    updateProfile(formData)
    setIsEditing(false)
  }

  const handleSavePreferences = () => {
    updatePreferences(preferences)
  }

  if (authLoading || progressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">{STRINGS.LOADING.PLEASE_WAIT}</p>
        </div>
      </div>
    )
  }

  if (!user) {
    router.push(ROUTES.HOME)
    return null
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 py-8">
        <div className="container-custom max-w-4xl">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
              {STRINGS.PROFILE.TITLE}
            </h1>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Profile Card */}
          <div className="card p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center text-white text-2xl font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* User Info */}
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-900">
                    {user.name}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Member since {new Date(user.joinedDate).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {/* Edit Button */}
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-outline btn-sm"
                >
                  {STRINGS.PROFILE.EDIT_PROFILE}
                </button>
              )}
            </div>

            {/* Edit Form */}
            {isEditing && (
              <div className="border-t pt-6">
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSaveProfile}
                    className="btn btn-primary"
                  >
                    {STRINGS.COMMON.SAVE}
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false)
                      setFormData({ name: user.name, email: user.email })
                    }}
                    className="btn btn-outline"
                  >
                    {STRINGS.COMMON.CANCEL}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Learning Statistics */}
          <div className="card p-8 mb-6">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
              {STRINGS.PROFILE.LEARNING_STATS}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  {stats.totalEnrolled}
                </div>
                <div className="text-sm text-gray-600">Enrolled Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {stats.totalLessonsCompleted}
                </div>
                <div className="text-sm text-gray-600">Lessons Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {stats.totalQuizzesTaken}
                </div>
                <div className="text-sm text-gray-600">Quizzes Taken</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  {stats.quizzesPassed}
                </div>
                <div className="text-sm text-gray-600">Quizzes Passed</div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="card p-8">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
              {STRINGS.PROFILE.PREFERENCES}
            </h3>

            <div className="space-y-4">
              {/* Email Notifications */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Email Notifications</div>
                  <div className="text-sm text-gray-600">
                    Receive updates about your courses and progress
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.emailNotifications}
                    onChange={(e) => {
                      const newPrefs = { ...preferences, emailNotifications: e.target.checked }
                      setPreferences(newPrefs)
                      updatePreferences(newPrefs)
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>

              {/* Theme Preference */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900 mb-3">Theme Preference</div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const newPrefs = { ...preferences, theme: 'light' }
                      setPreferences(newPrefs)
                      updatePreferences(newPrefs)
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                      preferences.theme === 'light'
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2"><FaSun /> Light</span>
                  </button>
                  <button
                    onClick={() => {
                      const newPrefs = { ...preferences, theme: 'dark' }
                      setPreferences(newPrefs)
                      updatePreferences(newPrefs)
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                      preferences.theme === 'dark'
                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2"><FaMoon /> Dark</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Note: Dark theme is coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
