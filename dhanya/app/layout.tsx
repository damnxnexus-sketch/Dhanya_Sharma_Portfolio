import { Noto_Serif, Inter } from 'next/font/google'

const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-noto-serif' })
const inter = Inter({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-inter' })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}