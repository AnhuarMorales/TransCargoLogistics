import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow({ 
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-barlow'
});

const barlowCondensed = Barlow_Condensed({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow-condensed'
});

export const metadata: Metadata = {
  title: 'Trans-Cargo Logistics',
  description: 'Plataforma B2B que conecta empresas con transportistas verificados en Mexico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans antialiased bg-dark text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
