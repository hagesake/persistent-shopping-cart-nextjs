import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar/Navbar'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShoppingCart Demo',
  description:
    'This is a demo to showcase a shopping cart with persistent data to brwoser tab refreshing'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} container mx-auto min-h-screen bg-slate-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
