import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gloss & Glam - Premium Teen Beauty Store',
  description: 'Your one-stop shop for trendy lip glosses and beauty products designed for teen beauty enthusiasts',
  keywords: 'lip gloss, teen beauty, makeup, cosmetics, gloss, glam, beauty products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-background antialiased">
        <Navbar />
        <main className="flex-grow container-custom py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 