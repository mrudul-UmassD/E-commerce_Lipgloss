import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gloss & Glam - Premium Teen Beauty Store',
  description: 'Shop premium lip glosses designed for teen girls',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          /* AGGRESSIVE OVERRIDES FOR BLUE ICONS */
          svg[fill="blue"],
          svg[stroke="blue"],
          svg[color="blue"],
          svg[width="384"][height="512"],
          svg[height="512"][width="384"],
          svg[width="448"][height="512"],
          svg[height="512"][width="448"],
          svg[width="576"][height="512"],
          svg[height="512"][width="576"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
          
          div:has(> svg[fill="blue"]),
          div:has(> svg[stroke="blue"]),
          div:has(> svg[color="blue"]),
          div:has(> svg[width="384"][height="512"]),
          div:has(> svg[height="512"][width="384"]),
          div.icon-container,
          div.blue-icon-container,
          div.floating-icons,
          div.side-navigation {
            display: none !important;
          }
          
          .mobile-nav-container {
            display: flex !important;
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 9999 !important;
          }
          
          @media (min-width: 768px) {
            .mobile-nav-container {
              display: none !important;
            }
          }
        ` }} />
      </head>
      <body className={inter.className}>
        <div className="container-custom min-h-screen">
          <Navbar />
          <main className="flex-grow pb-24">
            {children}
          </main>
          <Footer />
          <MobileNav />
        </div>
      </body>
    </html>
  )
} 