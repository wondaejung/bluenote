import Image from "next/image"
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
            <Image
              src="/night-ocean-hero.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_56%]"
              quality={92}
            />
          </div>
        </div>
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

      <div
        className={`${styles.waveGlint} absolute inset-x-0 bottom-0 h-[58%]`}
      />
      <div className={`${styles.shimmerOverlay} absolute inset-0 opacity-[0.2]`} />
    </div>
  )
}
