import { PhilosophyTagline } from "@/components/philosophy-tagline"

export const MoonlightTitle = () => {
  return (
    <div className="flex w-full max-w-[min(96vw,56rem)] flex-col items-center gap-5 md:gap-6">
      <div className="relative inline-block">
        <span
          className="pointer-events-none absolute inset-0 -z-10 select-none font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-light tracking-[0.35em] text-[#b8cce8]/28 blur-[14px] motion-safe:animate-moon-glow"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
          aria-hidden
        >
          blue note
        </span>

        <h1
          className="flex flex-wrap items-baseline justify-center gap-x-[0.38em] font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-light tracking-[0.35em]"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
          lang="en"
          aria-label="Blue Note"
        >
          <span className="moonlight-yunseul">blue</span>
          <span className="moonlight-yunseul moonlight-yunseul-delay">note</span>
        </h1>
      </div>

      <PhilosophyTagline />
    </div>
  )
}
