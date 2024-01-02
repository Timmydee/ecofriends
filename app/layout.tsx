import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'
import GoogleAnalytics from '@/component/GoogleAnalytics'
import Footer from '@/component/Footer'

const header = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoFriends',
  description: 'Sustainable Living',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={header.className}>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
      <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
