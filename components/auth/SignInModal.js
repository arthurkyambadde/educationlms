'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { STRINGS } from '@/constants/strings'
import { HiX } from 'react-icons/hi'

export default function SignInModal({ isOpen, onClose }) {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const validateForm = () => {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = STRINGS.AUTH.EMAIL_REQUIRED
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = STRINGS.AUTH.INVALID_EMAIL
    }

    if (!password.trim()) {
      newErrors.password = STRINGS.AUTH.PASSWORD_REQUIRED
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    // Simulate API delay
    setTimeout(async () => {
      await login(email, password)
      setLoading(false)
      onClose()
      // Reset form
      setEmail('')
      setPassword('')
      setErrors({})
    }, 800)
  }

  const handleClose = () => {
    if (loading) return
    setEmail('')
    setPassword('')
    setErrors({})
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={loading}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          aria-label="Close"
        >
          <HiX className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              {STRINGS.AUTH.SIGN_IN_TITLE}
            </h2>
            <p className="text-gray-600">
              {STRINGS.AUTH.SIGN_IN_SUBTITLE}
            </p>
          </div>

          {/* Demo Note */}
          <div className="mb-6 p-4 bg-accent-50 border border-accent-200 rounded-lg">
            <p className="text-sm text-accent-800 text-center">
              💡 {STRINGS.AUTH.DEMO_NOTE}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {STRINGS.AUTH.EMAIL_LABEL}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) {
                    setErrors({ ...errors, email: '' })
                  }
                }}
                placeholder={STRINGS.AUTH.EMAIL_PLACEHOLDER}
                disabled={loading}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {STRINGS.AUTH.PASSWORD_LABEL}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (errors.password) {
                    setErrors({ ...errors, password: '' })
                  }
                }}
                placeholder={STRINGS.AUTH.PASSWORD_PLACEHOLDER}
                disabled={loading}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300'
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? STRINGS.AUTH.SIGNING_IN : STRINGS.AUTH.SIGN_IN_BUTTON}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
