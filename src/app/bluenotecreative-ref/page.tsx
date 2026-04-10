import { CreativeHero } from "@/components/creative-hero"
import { NarrativeJourney } from "@/components/narrative-journey"
import { TeamSection } from "@/components/team-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "결핍, 그리고 집으로 돌아가는 길 — Bluenote",
  description:
    "결핍은 부정이 아니라, 우리가 인간으로 남기 위한 증거이다. Bluenote 예술 팀의 방향과 메시지입니다.",
}

export default function BluenoteCreativeRefPage() {
  return (
    <div className="relative w-full bg-[#050a12] text-[#e8eef5]">
      <CreativeHero />
      <NarrativeJourney />
      <TeamSection />
    </div>
  )
}
