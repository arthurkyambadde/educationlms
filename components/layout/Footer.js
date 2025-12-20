import Link from 'next/link'
import { STRINGS } from '@/constants/strings'
import { ROUTES } from '@/constants/routes'
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#125D63] text-gray-100 mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#FFB606] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-heading font-bold text-white">
                {STRINGS.NAV.LOGO}
              </span>
            </div>
            <p className="text-gray-200 mb-4 max-w-md">
              {STRINGS.FOOTER.TAGLINE}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#103e43] flex items-center justify-center hover:bg-[#FFB606] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#103e43] flex items-center justify-center hover:bg-[#FFB606] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#103e43] flex items-center justify-center hover:bg-[#FFB606] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#FFB606] transition-colors flex items-center">
                  <span className="mr-2">›</span> {STRINGS.FOOTER.ABOUT}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFB606] transition-colors flex items-center">
                  <span className="mr-2">›</span> {STRINGS.FOOTER.CAREERS}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFB606] transition-colors flex items-center">
                  <span className="mr-2">›</span> {STRINGS.FOOTER.BLOG}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFB606] transition-colors flex items-center">
                  <span className="mr-2">›</span> {STRINGS.FOOTER.CONTACT}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#FFB606] transition-colors flex items-center">
                  <span className="mr-2">›</span> {STRINGS.FOOTER.HELP}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFB606] transition-colors flex items-center">
                  <span className="mr-2">›</span> {STRINGS.FOOTER.TERMS}
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FFB606] transition-colors flex items-center">
                  <span className="mr-2">›</span> {STRINGS.FOOTER.PRIVACY}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1f6a75] mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {currentYear} {STRINGS.NAV.LOGO}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
