import { PhilosophyTagline } from "@/components/philosophy-tagline"

export const MoonlightTitle = () => {
  return (
    <div className="flex w-full max-w-[min(96vw,56rem)] flex-col items-center gap-5 md:gap-6">
      <div className="relative inline-block">
        <span
          className="pointer-events-none absolute inset-0 -z-10 select-none text-[clamp(3rem,9vw,6.3rem)] font-normal tracking-[0.08em] text-[#b8cce8]/28 blur-[14px] motion-safe:animate-moon-glow"
          style={{ fontFamily: "var(--font-script), cursive" }}
          aria-hidden
        >
          Blue note
        </span>

        <h1
          className="flex flex-wrap items-baseline justify-center gap-x-[0.2em] text-[clamp(3rem,9vw,6.3rem)] font-normal tracking-[0.08em]"
          style={{ fontFamily: "var(--font-script), cursive" }}
          lang="en"
          aria-label="Blue note"
        >
          <span className="moonlight-yunseul">Blue</span>
          <span className="moonlight-yunseul moonlight-yunseul-delay">note</span>
        </h1>
      </div>

      <PhilosophyTagline />
    </div>
  )
}
