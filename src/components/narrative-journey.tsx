import { getChaptersByAct } from "@/data/narrative-chapters"
import { TrackSampleCard } from "@/components/track-sample-card"

export const NarrativeJourney = () => {
  const act1 = getChaptersByAct(1)
  const act2 = getChaptersByAct(2)
  const act3 = getChaptersByAct(3)

  return (
    <div className="relative w-full">
      {/* 1부 — 부재의 기록: 어둡고 파편화 */}
      <section
        className="relative overflow-hidden border-t border-[#1a2228] bg-[#030508] px-5 py-20 md:px-10"
        aria-labelledby="narrative-act-1"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "140px 140px",
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -left-1/4 top-1/4 h-[50%] w-1/2 rounded-full bg-[#0a1520]/40 blur-[100px]" aria-hidden />
        <div className="pointer-events-none absolute -right-1/4 bottom-0 h-[40%] w-1/2 rounded-full bg-[#050a10]/60 blur-[80px]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#4a5a68]">
            1부
          </p>
          <h2
            id="narrative-act-1"
            className="mb-4 font-serif text-2xl font-semibold text-[#c8d4e0] md:text-3xl"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            부재의 기록
          </h2>
          <p className="mb-12 max-w-xl font-sans text-sm text-[#6a7a88]">
            관심 · 사랑 · 트라우마 — 끊기고 엇갈린 기억의 조각들.
          </p>

          <blockquote
            className="mb-14 max-w-3xl border-l-4 border-[#3a4555] py-2 pl-6 font-serif text-[clamp(1.25rem,3.5vw,1.85rem)] font-medium italic leading-snug text-[#9eb0c0] md:pl-8"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            나는 나를 연기했다
          </blockquote>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-5">
            {act1.map((ch, i) => (
              <div
                key={ch.id}
                className={`md:col-span-4 ${
                  i === 0 ? "md:translate-x-0 md:rotate-[-0.5deg]" : ""
                } ${i === 1 ? "md:col-start-5 md:translate-y-6 md:rotate-[0.8deg]" : ""} ${
                  i === 2 ? "md:col-span-5 md:col-start-4 md:translate-y-3 md:rotate-[-0.3deg]" : ""
                }`}
              >
                <TrackSampleCard chapter={ch} variant="fragment" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2부 — 직면과 회복: 빛이 들어옴 */}
      <section
        className="relative overflow-hidden border-t border-[#2a3848]/80 bg-gradient-to-b from-[#080c12] via-[#101820] to-[#182230] px-5 py-20 md:px-10"
        aria-labelledby="narrative-act-2"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,160,210,0.15)_0%,transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-[rgba(200,220,255,0.08)] to-transparent"
          aria-hidden
        />
        <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-[#a8c4e8]/10 blur-[60px]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#7a8ca0]">
            2부
          </p>
          <h2
            id="narrative-act-2"
            className="mb-4 font-serif text-2xl font-semibold text-[#dce8f2] md:text-3xl"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            직면과 회복
          </h2>
          <p className="mb-12 max-w-xl font-sans text-sm text-[#8a9cac]">
            직면 · 회복 — 어둠 위로 얇게 깔리는 빛을 따라.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {act2.map((ch) => (
              <TrackSampleCard key={ch.id} chapter={ch} variant="light" />
            ))}
          </div>
        </div>
      </section>

      {/* 3부 — 집으로: 따뜻한 마무리 */}
      <section
        className="relative overflow-hidden border-t border-[#3a3530]/60 bg-gradient-to-b from-[#14100c] via-[#181410] to-[#120e0c] px-5 py-20 md:px-10"
        aria-labelledby="narrative-act-3"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_100%,rgba(180,140,100,0.12)_0%,transparent_50%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[min(100vw,900px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(220,180,130,0.06)_0%,transparent_70%)]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#8a7868]">
            3부
          </p>
          <h2
            id="narrative-act-3"
            className="mb-4 font-serif text-2xl font-semibold text-[#e8dcc8] md:text-3xl"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            집으로
          </h2>
          <p className="mb-10 max-w-xl font-sans text-sm text-[#9a8878]">
            집 · 한탄 — 돌아와 다시 세운 안쪽의 온기.
          </p>

          <blockquote
            className="mb-14 max-w-3xl rounded-xl border border-[#4a4035]/60 bg-[#1a1510]/50 px-6 py-6 font-serif text-[clamp(1.15rem,3vw,1.65rem)] font-medium leading-relaxed text-[#e0d0b8] md:px-10 md:py-8"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            내가 다시 세운 내면의 집
          </blockquote>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {act3.map((ch) => (
              <TrackSampleCard key={ch.id} chapter={ch} variant="warm" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
