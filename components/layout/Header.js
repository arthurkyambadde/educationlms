'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import SignInModal from '@/components/auth/SignInModal'
import { STRINGS } from '@/constants/strings'
import { ROUTES } from '@/constants/routes'
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi'
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa6'

export default function Header() {
  const { user, logout } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Eduka Theme */}
      <div className="bg-[#125D63] text-white py-2 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><FaPhone className="w-3 h-3" /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-2"><FaEnvelope className="w-3 h-3" /> support@eduka.com</span>
          </div>
          <div className="flex space-x-4">
            <span>Follow Us</span>
            <div className="flex space-x-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB606] transition-colors" aria-label="Facebook">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB606] transition-colors" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB606] transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={ROUTES.HOME} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#FFB606] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-heading font-bold text-[#222222]">
                Eduka
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href={ROUTES.HOME}
                className="text-[#222222] hover:text-[#FFB606] font-medium transition-colors"
              >
                {STRINGS.NAV.HOME}
              </Link>
              <Link
                href={ROUTES.COURSES}
                className="text-[#222222] hover:text-[#FFB606] font-medium transition-colors"
              >
                {STRINGS.NAV.COURSES}
              </Link>
              <Link
                href={ROUTES.DASHBOARD}
                className="text-[#222222] hover:text-[#FFB606] font-medium transition-colors"
              >
                {STRINGS.NAV.DASHBOARD}
              </Link>
            </div>

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-2 focus:outline-none"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#125D63] flex items-center justify-center text-white font-semibold border-2 border-[#FFB606]">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <HiChevronDown className="w-4 h-4 text-gray-600" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 animate-fade-in border border-gray-100">
                      <Link
                        href={ROUTES.PROFILE}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#F9F9F9] hover:text-[#FFB606] transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        {STRINGS.NAV.PROFILE}
                      </Link>
                      <Link
                        href={ROUTES.DASHBOARD}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#F9F9F9] hover:text-[#FFB606] transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        {STRINGS.NAV.DASHBOARD}
                      </Link>
                      <hr className="my-2" />
                      <button
                        onClick={() => {
                          logout()
                          setUserMenuOpen(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-[#F9F9F9] transition-colors"
                      >
                        {STRINGS.NAV.SIGN_OUT}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setSignInModalOpen(true)}
                  className="bg-[#FFB606] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#e0a005] transition-colors shadow-md"
                >
                  {STRINGS.NAV.SIGN_IN}
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6 text-[#222222]" />
              ) : (
                <HiMenu className="w-6 h-6 text-[#222222]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 animate-slide-down border-t border-gray-100">
              <Link
                href={ROUTES.HOME}
                className="block py-3 px-4 text-[#222222] hover:bg-[#F9F9F9] hover:text-[#FFB606] font-medium rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {STRINGS.NAV.HOME}
              </Link>
              <Link
                href={ROUTES.COURSES}
                className="block py-3 px-4 text-[#222222] hover:bg-[#F9F9F9] hover:text-[#FFB606] font-medium rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {STRINGS.NAV.COURSES}
              </Link>
              <Link
                href={ROUTES.DASHBOARD}
                className="block py-3 px-4 text-[#222222] hover:bg-[#F9F9F9] hover:text-[#FFB606] font-medium rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {STRINGS.NAV.DASHBOARD}
              </Link>
              {user && (
                <>
                  <Link
                    href={ROUTES.PROFILE}
                    className="block py-3 px-4 text-[#222222] hover:bg-[#F9F9F9] hover:text-[#FFB606] font-medium rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {STRINGS.NAV.PROFILE}
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setMobileMenuOpen(false)
                    }}
                    className="block w-full text-left py-3 px-4 text-red-600 font-medium hover:bg-[#F9F9F9] rounded-lg"
                  >
                    {STRINGS.NAV.SIGN_OUT}
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Sign In Modal */}
      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />
    </header>
  )
}
