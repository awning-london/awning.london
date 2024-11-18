
import { RootLayout } from '@/components/RootLayout'
import { GoogleAnalytics } from '@next/third-parties/google'
import '@/styles/tailwind.css'
import { rootMetadata } from '@/lib/root-metadata';

export const metadata = rootMetadata;

export default function Layout({ children }: { children: React.ReactNode }) {
  const gaId: string = process.env.GOOGLE_SEARCH_CONSOLE || "";
  
  return (
    /* eslint-disable react/no-unknown-property */
    <html prefix="og:http://ogp.me/ns#" dir="ltr" lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <GoogleAnalytics gaId={gaId} />
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
