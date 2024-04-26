"use client"

import { useEffect, useState } from "react"
import { IBM_Plex_Mono, JetBrains_Mono, Silkscreen } from "next/font/google"
import Inter from "$/fonts/Inter"
import T26 from "$/fonts/t26"

const silk = Silkscreen({
  subsets: ["latin"],
  display: "block",
  weight: "400",
  variable: "--lona-font-silk",
})

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "block",
  weight: "400",
  variable: "--lona-font-jet",
})

const IBM = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "block",
  weight: "400",
  variable: "--lona-font-ibm-plex",
})

export default function Fonts({ children }: { children: React.ReactNode }) {
  const [stylesheetCreated, setStylesheetCreated] = useState(false)

  useEffect(() => {
    if ("adoptedStyleSheets" in document) {
      const sheet = new CSSStyleSheet()
      sheet.replaceSync(`
        :root { 
            --lona-font-inter: ${Inter.style.fontFamily}; 
            --lona-font-silk: ${silk.style.fontFamily};
            --lona-font-jet: ${jetBrains.style.fontFamily};
            --lona-font-t26: ${T26.style.fontFamily};
            --lona-font-ibm: ${IBM.style.fontFamily};
        }`)
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
      setStylesheetCreated(true)
    }
  }, [])

  if (!stylesheetCreated) {
    return null
  }

  return children
}
