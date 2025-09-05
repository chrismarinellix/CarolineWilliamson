import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caroline Williamson - Executive Technology Leader',
  description: 'Executive Technology Leader with 20+ years of success developing and executing technology strategies, implementing digital transformation initiatives, and driving operations to optimise business outcomes.',
  keywords: 'Technology Executive, Digital Transformation, Technology Strategy, AI Strategy, Enterprise Architecture',
  authors: [{ name: 'Caroline Williamson' }],
  openGraph: {
    title: 'Caroline Williamson - Executive Technology Leader',
    description: 'Executive Technology Leader with 20+ years of experience in digital transformation and technology strategy.',
    type: 'profile',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}