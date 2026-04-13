import styles from "./night-sea-background.module.css"

export const NightSeaBackground = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0">
        {/* 바깥: 중심 고정 — transform 충돌 방지 */}
        <div className="absolute left-1/2 top-1/2 h-[118vh] w-[118vw] -translate-x-1/2 -translate-y-1/2">
          {/* 안쪽: 파도 드리프트만 적용 */}
          <div className={`${styles.photoDrift} absolute inset-[-8%] min-h-[116%] min-w-[116%]`}>
            <img
              src="/night-ocean-wave.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
              draggable={false}
              loading="eager"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-[8%] top-[8%] h-[96px] w-[96px] md:h-[120px] md:w-[120px]"
        aria-hidden
      >
        <svg
          viewBox="0 0 128 128"
          className="h-full w-full drop-shadow-[0_0_34px_rgba(208,224,248,0.7)]"
        >
          <defs>
            <radialGradient id="moonGlow" cx="40%" cy="32%" r="70%">
              <stop offset="0%" stopColor="rgba(255,251,239,0.98)" />
              <stop offset="55%" stopColor="rgba(228,236,247,0.9)" />
              <stop offset="100%" stopColor="rgba(156,176,206,0.46)" />
            </radialGradient>
            <radialGradient id="moonTextureA" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="rgba(244,248,255,0.38)" />
              <stop offset="100%" stopColor="rgba(201,214,232,0.08)" />
            </radialGradient>
            <mask id="crescentMask">
              <rect width="128" height="128" fill="black" />
              <circle cx="62" cy="64" r="42" fill="white" />
              <circle cx="84" cy="54" r="40" fill="black" />
            </mask>
          </defs>
          <circle cx="62" cy="64" r="42" fill="url(#moonGlow)" mask="url(#crescentMask)" />
          <ellipse cx="51" cy="72" rx="8" ry="6" fill="url(#moonTextureA)" mask="url(#crescentMask)" />
          <ellipse cx="57" cy="51" rx="6" ry="4.6" fill="rgba(218,229,244,0.32)" mask="url(#crescentMask)" />
          <ellipse cx="47" cy="60" rx="4.5" ry="3.5" fill="rgba(198,214,236,0.22)" mask="url(#crescentMask)" />
        </svg>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-[#03060f]/88 via-[#050a14]/45 to-[#020308]/92]"
        style={{ mixBlendMode: "multiply" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/35 via-transparent to-[#020408]/75" />

      <div className="absolute left-1/2 top-[14%] h-[4px] w-[min(92vw,820px)] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#a8c4e8]/25 to-transparent blur-[3px]" />
      <div className="absolute left-1/2 top-[18%] h-48 w-[min(115vw,1000px)] -translate-x-1/2 bg-[radial-gradient(ellipse_80%_60%_at_center,rgba(180,210,255,0.18)_0%,rgba(60,90,130,0.06)_45%,transparent_72%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#010306] via-[#020408]/90 to-transparent" />

      <div className={`${styles.waveGlint} absolute inset-x-0 bottom-0 h-[58%]`} />
      <div className={`${styles.shimmerOverlay} absolute inset-0 opacity-[0.2]`} />
    </div>
  )
}
