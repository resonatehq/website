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
      <meta data-rh="true" property="og:image" content="https://www.resonatehq.io/images/echo.png" />
      <meta data-rh="true" name="twitter:image" content="https://docs.resonatehq.io/images/echo.png" />
      <meta data-rh="true" property="og:url" content="https://www.resonatehq.io/" />
      <meta data-rh="true" property="og:title" content="Resonate" />

      <body className="dark:bg-dark-gray-900">{children}</body>
    </html>
  )
}
