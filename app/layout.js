import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ProgressProvider } from '@/context/ProgressContext'
import { AuthProvider } from '@/context/AuthContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'EduLearn - Master New Skills Online',
  description: 'A comprehensive learning management system offering courses in technology, business, design, and personal development. Start your learning journey today.',
  keywords: 'online learning, courses, education, LMS, e-learning, skills development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <ProgressProvider>
            {children}
          </ProgressProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
