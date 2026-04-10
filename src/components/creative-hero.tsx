"use client"

import {
  HERO_AMBIENT_AUDIO_SRC,
  HERO_AMBIENT_VIDEO_SRC,
} from "@/config/creative-hero-media"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import type { KeyboardEvent } from "react"
import styles from "./creative-hero.module.css"

const HERO_TITLE_TEXT = "결핍, 그리고 집으로 돌아가는 길"
const titleChars = [...HERO_TITLE_TEXT]

const resetCharTransforms = (chars: (HTMLSpanElement | null)[]) => {
  chars.forEach((el) => {
    if (!el) return
    el.style.transform = ""
  })
}

export const CreativeHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const charRefs = useRef<(HTMLSpanElement | null)[]>([])
  const audioCtxRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceConnectedRef = useRef(false)
  const rafRef = useRef(0)

  const [videoOk, setVideoOk] = useState(true)
  const [audioPlaying, setAudioPlaying] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const handleMq = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", handleMq)
    return () => mq.removeEventListener("change", handleMq)
  }, [])

  useEffect(() => {
    if (!reduceMotion) return
    const a = audioRef.current
    if (!a) return
    a.pause()
    setAudioPlaying(false)
  }, [reduceMotion])

  useEffect(() => {
    return () => {
      audioRef.current?.pause()
      cancelAnimationFrame(rafRef.current)
      void audioCtxRef.current?.close()
    }
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (reduceMotion) {
      v.pause()
      return
    }
    v.playbackRate = 0.42
    void v.play().catch(() => setVideoOk(false))
  }, [reduceMotion, videoOk])

  const connectAudioGraph = useCallback(() => {
    if (sourceConnectedRef.current) return
    const audio = audioRef.current
    if (!audio) return
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    const ctx = new Ctx()
    const source = ctx.createMediaElementSource(audio)
    const analyser = ctx.createAnalyser()
    analyser.fftSize = 1024
    analyser.smoothingTimeConstant = 0.55
    source.connect(analyser)
    analyser.connect(ctx.destination)
    audioCtxRef.current = ctx
    analyserRef.current = analyser
    sourceConnectedRef.current = true
  }, [])

  useEffect(() => {
    if (!audioPlaying || reduceMotion) {
      cancelAnimationFrame(rafRef.current)
      resetCharTransforms(charRefs.current)
      return
    }

    const analyser = analyserRef.current
    if (!analyser) {
      return
    }

    const tick = () => {
      const a = audioRef.current
      const an = analyserRef.current
      if (!a || !an || a.paused) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      const freq = new Uint8Array(an.frequencyBinCount)
      const time = new Uint8Array(an.fftSize)
      an.getByteFrequencyData(freq)
      an.getByteTimeDomainData(time)
      const chars = charRefs.current
      const n = chars.length
      const fLen = freq.length
      const tLen = time.length

      for (let i = 0; i < n; i++) {
        const el = chars[i]
        if (!el) continue
        const t = n <= 1 ? 0 : i / (n - 1)

        const fc = Math.floor(t * (fLen - 1))
        let freqSum = 0
        const fw = 2
        for (let w = -fw; w <= fw; w++) {
          freqSum += freq[Math.max(0, Math.min(fLen - 1, fc + w))]
        }
        const vFreq = freqSum / (fw * 2 + 1) / 255

        const tc = Math.floor(t * (tLen - 1))
        const raw = (time[tc] - 128) / 128
        const vTime = Math.min(1, Math.abs(raw))

        const v = Math.min(1, 0.42 * vFreq + 0.58 * vTime)
        const y = -13 * v
        const sy = 1 + 0.52 * v
        el.style.transform = `translateY(${y}px) scaleY(${sy})`
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafRef.current)
      resetCharTransforms(charRefs.current)
    }
  }, [audioPlaying, reduceMotion])

  const handleAudioToggle = useCallback(async () => {
    const a = audioRef.current
    if (!a) return
    if (audioPlaying) {
      a.pause()
      setAudioPlaying(false)
      resetCharTransforms(charRefs.current)
      return
    }
    try {
      connectAudioGraph()
      const ctx = audioCtxRef.current
      if (ctx?.state === "suspended") {
        await ctx.resume()
      }
      a.volume = 0.42
      await a.play()
      setAudioPlaying(true)
    } catch {
      setAudioPlaying(false)
    }
  }, [audioPlaying, connectAudioGraph])

  const handleAudioKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        void handleAudioToggle()
      }
    },
    [handleAudioToggle]
  )

  const handleVideoError = useCallback(() => {
    setVideoOk(false)
  }, [])

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#03060c]"
      aria-labelledby="creative-hero-title"
    >
      <div className="absolute inset-0 bg-[#050a12]" />

      {videoOk ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-[0.38]"
          src={HERO_AMBIENT_VIDEO_SRC}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          onError={handleVideoError}
          aria-hidden
        />
      ) : null}

      <div
        className={`${styles.ambientBlobA} pointer-events-none absolute -left-[20%] top-[10%] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle,rgba(60,90,140,0.35)_0%,transparent_68%)] blur-3xl`}
        aria-hidden
      />
      <div
        className={`${styles.ambientBlobB} pointer-events-none absolute -right-[15%] bottom-[5%] h-[65vh] w-[65vw] rounded-full bg-[radial-gradient(circle,rgba(40,55,85,0.4)_0%,transparent_65%)] blur-[56px]`}
        aria-hidden
      />
      <div
        className={`${styles.ambientMesh} pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(20,35,55,0.5)_0%,transparent_40%,rgba(15,25,45,0.45)_100%)]`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#03060c]/85 via-[#050a14]/55 to-[#020308]/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_35%,rgba(30,50,80,0.25)_0%,transparent_55%)]" />

      <Link
        href="/"
        className="fixed left-5 top-5 z-[60] rounded-md px-3 py-2 font-sans text-sm text-[#9eb4c8] transition-colors hover:text-[#e8f0f8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a8ab0] md:left-8 md:top-8"
      >
        ← 메인
      </Link>

      <audio
        ref={audioRef}
        src={HERO_AMBIENT_AUDIO_SRC}
        loop
        preload="metadata"
        className="hidden"
      />

      <button
        type="button"
        onClick={() => void handleAudioToggle()}
        onKeyDown={handleAudioKeyDown}
        aria-label={audioPlaying ? "배경음 끄기" : "배경음 켜기"}
        aria-pressed={audioPlaying}
        className="fixed right-5 top-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-[#3a5068]/80 bg-[#0a121c]/75 text-[#dce8f0] shadow-lg backdrop-blur-sm transition-colors hover:border-[#5a7090] hover:bg-[#121c2a]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8ab0d0] md:right-8 md:top-8"
      >
        {audioPlaying ? (
          <span className="flex h-4 w-4 items-center justify-center gap-0.5" aria-hidden>
            <span className="h-3.5 w-1 rounded-sm bg-current" />
            <span className="h-3.5 w-1 rounded-sm bg-current" />
          </span>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pb-24 pt-20 text-center md:px-8">
        <h1
          id="creative-hero-title"
          className="flex max-w-[min(100%,52rem)] flex-wrap justify-center gap-y-1 font-serif text-[clamp(1.5rem,5vw,2.75rem)] font-semibold leading-snug tracking-tight text-[#e8f0fa] md:flex-nowrap md:justify-center md:gap-y-0 md:leading-tight"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          {titleChars.map((ch, i) => (
            <span
              key={`t-${i}`}
              ref={(el) => {
                charRefs.current[i] = el
              }}
              className="inline-block origin-[50%_100%] will-change-transform"
            >
              {ch}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-[min(100%,36rem)] font-sans text-[clamp(0.9rem,2.4vw,1.15rem)] font-normal leading-relaxed text-[#a8b8c8]">
          결핍은 부정이 아니라, 우리가 인간으로 남기 위한 증거이다
        </p>
        <p className="mt-10 font-sans text-xs text-[#6a7a8a]">
          배경음은 우측 상단 버튼으로 재생할 수 있습니다
        </p>
      </div>
    </section>
  )
}
