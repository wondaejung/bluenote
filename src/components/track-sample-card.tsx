"use client"

import { useCallback, useRef, useState } from "react"
import type { NarrativeChapter } from "@/data/narrative-chapters"

type TrackSampleCardProps = {
  chapter: NarrativeChapter
  variant: "fragment" | "light" | "warm"
}

export const TrackSampleCard = ({ chapter, variant }: TrackSampleCardProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  const handleToggle = useCallback(async () => {
    const a = audioRef.current
    if (!a) return
    if (playing) {
      a.pause()
      setPlaying(false)
      return
    }
    try {
      await a.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [playing])

  const handleEnded = useCallback(() => {
    setPlaying(false)
  }, [])

  const baseCard =
    variant === "fragment"
      ? "border border-[#2a3540]/90 bg-[#050a10]/70 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
      : variant === "light"
        ? "border border-[#3a4a5c]/70 bg-[#0c141e]/70 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(200,220,255,0.06)]"
        : "border border-[#4a4030]/80 bg-[#16120e]/85 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,230,200,0.08)]"

  const titleStyle =
    variant === "warm"
      ? "text-[#e8dcc8]"
      : variant === "light"
        ? "text-[#d0dce8]"
        : "text-[#b8c8d8]"

  const lyricStyle =
    variant === "warm"
      ? "text-[#b8a898]"
      : variant === "light"
        ? "text-[#a0b0c0]"
        : "text-[#8a9cac]"

  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl p-5 md:p-6 ${baseCard}`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`font-serif text-lg font-semibold tracking-tight md:text-xl ${titleStyle}`}
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          {chapter.themeKo}
        </h3>
        <button
          type="button"
          onClick={() => void handleToggle()}
          aria-label={playing ? `${chapter.themeKo} 샘플 정지` : `${chapter.themeKo} 샘플 재생`}
          aria-pressed={playing}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            variant === "warm"
              ? "border-[#6a5a48] bg-[#201a14] text-[#e8dcc8] hover:bg-[#2a2218] focus-visible:outline-[#a89078]"
              : variant === "light"
                ? "border-[#4a5c70] bg-[#121c28] text-[#dce8f0] hover:bg-[#1a2838] focus-visible:outline-[#7a9fc0]"
                : "border-[#3a4550] bg-[#0a1018] text-[#c8d8e8] hover:bg-[#121c28] focus-visible:outline-[#5a7090]"
          }`}
        >
          {playing ? (
            <span className="flex h-4 w-4 items-center justify-center gap-0.5" aria-hidden>
              <span className="h-3.5 w-1 rounded-sm bg-current" />
              <span className="h-3.5 w-1 rounded-sm bg-current" />
            </span>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={chapter.sampleSrc}
        preload="metadata"
        onEnded={handleEnded}
        className="hidden"
      />

      <blockquote
        className={`space-y-2 border-l-2 border-[#4a5a68]/50 pl-4 font-sans text-sm leading-relaxed md:text-[0.95rem] ${lyricStyle}`}
      >
        {chapter.lyrics.map((line, idx) => (
          <p key={`${chapter.id}-lyric-${idx}`}>{line}</p>
        ))}
      </blockquote>
    </article>
  )
}
