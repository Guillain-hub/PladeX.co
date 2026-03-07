import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import PageTransitions from '@/components/page-transitions'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'PladeX - Building Digital Foundations',
  description: 'Professional digital solutions including websites, mobile apps, and organizational systems.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/logo_no_white.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo_no_white.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo_no_white.png', sizes: '64x64', type: 'image/png' },
      { url: '/logo_no_white.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/logo_no_white.png',
    apple: '/logo_no_white.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body style={{ backgroundColor: '#020617', color: '#cbd5e1' }} className={`font-sans antialiased overflow-x-hidden`}> 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PageTransitions>
            {children}
          </PageTransitions>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
