import AuthProvider from '@/context/AuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gittemmer',
  description: 'THE website for storing code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </AuthProvider>
  )
}
