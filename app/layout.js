import './globals.css'
import { Source_Sans_3 } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

// Fix Font Awesome for use with Next.js (need to manually import FA's CSS)
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'


const source_sans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})


export const metadata = {
  title: 'Justin St-Amant - Developer',
  description: 'Developer portfolio of Justin St-Amant',
  generator: 'Next.js',
  icons: {
    icon: 'favicon.ico',
    shortcut: 'favicon.ico',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${source_sans.variable} scroll-smooth`}>
      <body className="text-center text-xl text-neutral-700">{children}</body>
      <GoogleAnalytics gaId="G-8RBZ9QXX9H" />
    </html>
  )
}

