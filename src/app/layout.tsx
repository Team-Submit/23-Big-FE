import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '대마켓',
  description: '어서오세요! 대마켓에!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
