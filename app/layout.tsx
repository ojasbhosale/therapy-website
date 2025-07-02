import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Serena Blake - Clinical Psychologist | Los Angeles, CA',
  description: 'Licensed clinical psychologist in Los Angeles specializing in anxiety, relationships, and trauma recovery. In-person and virtual sessions available.',
  keywords: 'therapist, psychologist, Los Angeles, anxiety, relationships, trauma, therapy, counseling',
  authors: [{ name: 'Dr. Serena Blake' }],
  openGraph: {
    title: 'Dr. Serena Blake - Clinical Psychologist',
    description: 'Licensed clinical psychologist in Los Angeles specializing in anxiety, relationships, and trauma recovery.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}