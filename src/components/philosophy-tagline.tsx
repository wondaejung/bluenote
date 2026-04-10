import Link from "next/link"
import { getPhilosophyHref, isExternalHref } from "@/config/philosophy-href"

const taglineText =
  "결핍은 부정이 아니라, 우리가 인간으로 남기 위한 증거이다"

const linkClassName =
  "block w-max min-w-0 cursor-pointer whitespace-nowrap rounded-sm px-3 py-2 text-center font-sans text-[clamp(0.62rem,1.85vw,1.05rem)] font-normal leading-snug tracking-[-0.02em] text-[#b0c4d8] transition-colors hover:text-[#e8f0f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6a8ab0]"

export const PhilosophyTagline = () => {
  const href = getPhilosophyHref()
  const external = isExternalHref(href)

  const inner = external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
      aria-label={`${taglineText} — Bluenote Creative 참조 (새 탭)`}
    >
      {taglineText}
    </a>
  ) : (
    <Link
      href={href}
      className={linkClassName}
      aria-label={`${taglineText} — Bluenote Creative 참조 페이지로 이동`}
    >
      {taglineText}
    </Link>
  )

  return (
    <div className="flex w-full max-w-[min(100vw,52rem)] justify-center overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {inner}
    </div>
  )
}
