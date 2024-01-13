import './globals.css'
import { Source_Sans_3 } from 'next/font/google'
import Script from 'next/script'

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
    <html lang="en" className={`${source_sans.variable}`}>
      <body className="text-center text-xl text-neutral-700">{children}</body>
      <Script src="https://kit.fontawesome.com/ae8eac997d.js" crossOrigin="anonymous" />
    </html>
  )
}

