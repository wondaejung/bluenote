import type { Metadata } from "next"
import { Great_Vibes, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google"
import "./globals.css"

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
})

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Bluenote",
  description: "결핍은 부정이 아니라, 우리가 인간으로 남기 위한 증거이다",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSans.variable} ${notoSerif.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050a12] text-[#e8eef5]">{children}</body>
    </html>
  )
}
