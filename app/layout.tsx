import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js Conf',
  description: 'A demo application for Next.js Conference',
  generator: 'Next.js',
  authors: [{ name: 'Heimer', url: 'https://github.com/nguyenthanhan' }],
  keywords: ['Next.js', 'Conference', 'React', 'TypeScript', 'Demo'],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
