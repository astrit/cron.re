import React, { Suspense } from "react"
import type { Metadata } from "next"
import Favicon from "@/fav/fav"
import Footer from "@/footer/footer"
import Header from "@/header/header"
import Preloader from "@/preloader/preloader"
import { Analytics } from "@vercel/analytics/react"
import Article from "&/article/article"
import Main from "&/main/main"
import Fonts from "$/fonts/fonts"
import { Provider } from "$/provider/provider"

import "#/global/global.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://cron.re"),
  title: {
    default: "cron",
    template: "%s · cron",
  },
  description: "",
  openGraph: {
    title: "cron",
    description: "",
    url: "https://cron.re",
    siteName: "cron",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `https://cron.re/og?title=cron`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <Suspense fallback={<Preloader />}> */}
        <Provider
          attribute="theme"
          defaultTheme="dark"
          enableColorScheme={false}
          enableSystem={true}
        >
          <Favicon />
          <Fonts>
            <Main>
              <Header />
              <Article>{children}</Article>
              <Footer />
            </Main>
          </Fonts>
        </Provider>
        {/* </Suspense> */}
        <Analytics />
      </body>
    </html>
  )
}
