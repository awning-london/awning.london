import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - awn.london',
    default: 'Awning - Based in London',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <GoogleAnalytics gaId="G-QKPY5TEZCX" />
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
