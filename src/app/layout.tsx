import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import NavStyles from '@/components/NavStyles'

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={inter.className}>
        <NavStyles />
        
        <div className="container-custom min-h-screen">
          <Navbar />
          <main className="flex-grow pb-24">
            {children}
          </main>
          <Footer />
          <MobileNav />
        </div>
        
        <script dangerouslySetInnerHTML={{ __html: `
          function hideIcons() {
            document.querySelectorAll('svg[width="384"][height="512"], svg[width="448"][height="512"], svg[width="576"][height="512"]')
              .forEach(el => {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
              });
          }
          
          hideIcons();
          
          setInterval(hideIcons, 500);
        `}} />
      </body>
    </html>
  )
} 