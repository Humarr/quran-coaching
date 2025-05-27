import type { Metadata } from 'next'
import { Inter, Playfair_Display, Poppins, Scheherazade_New } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '700'],
})
const scheherazade = Scheherazade_New({
  subsets: ['arabic'],
  variable: '--font-scheherazade',
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Al-Quran Al-Kareem: Your Journey to Fluent Recitation',
  description: 'Experience the Quran as it was meant to be read - with ease, beauty, and understanding.',
  keywords: ['Quran', 'Tajweed', 'Arabic', 'Islamic Studies', 'Online Learning'],
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#f5f5dc' },
  //   { media: '(prefers-color-scheme: dark)', color: '#000000' },
  // ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={``}>
      <body className={`min-h-screen bg-cream text-gray-900 ${inter.variable} ${playfair.variable} ${poppins.variable} ${scheherazade.variable}`}>
        {children}
      </body>
    </html>
  )
}