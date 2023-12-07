import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import '../public/css/style.css'
import '../public/css/boxicons.min.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Resonate',
  description: 'a dead simple programming model for modern applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-dark-gray-900">{children}</body>
    </html>
  )
}
