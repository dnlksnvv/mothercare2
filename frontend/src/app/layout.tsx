import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DoulaDoo - Mom & Baby Care Agency',
  description: 'Professional doula services for birth, postpartum, and beyond. Certified doulas providing compassionate support for your family journey.',
  icons: {
    icon: '/Favicon.ico',
    shortcut: '/Favicon.ico',
    apple: '/Favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 original-theme">
        {children}
      </body>
    </html>
  )
}
