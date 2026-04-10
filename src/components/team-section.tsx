"use client"

import { teamMembers } from "@/data/team-members"

export const TeamSection = () => {
  return (
    <section
      className="relative border-t border-[#1a2838]/90 bg-[#050a12] px-5 py-20 md:px-10"
      aria-labelledby="team-section-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="team-section-heading"
          className="mb-3 font-serif text-2xl font-semibold tracking-tight text-[#dce8f0] md:text-3xl"
          style={{ fontFamily: "var(--font-noto-serif), serif" }}
        >
          함께하는 사람들
        </h2>
        <p className="mb-14 max-w-xl font-sans text-sm leading-relaxed text-[#7a8c9c]">
          블루노트 프로젝트에 참여하는 멤버입니다. 프로필 사진은{" "}
          <code className="rounded bg-[#121c28] px-1.5 py-0.5 text-[0.8em] text-[#9eb0c0]">
            public/team/
          </code>{" "}
          에 이미지를 두면 표시됩니다.
        </p>

        <ul className="grid list-none grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m) => (
            <li
              key={m.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#1e2d3d] bg-[#080f18]/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0c141e]">
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#152030] to-[#0a1018] text-[#3a4a5c]"
                  aria-hidden
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/team/${m.id}.jpg`}
                  alt=""
                  className="absolute inset-0 z-[1] h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <p
                  className="font-serif text-lg font-semibold text-[#e8f0f8]"
                  style={{ fontFamily: "var(--font-noto-serif), serif" }}
                >
                  {m.name}
                </p>
                <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[#8aa4bc]">
                  {m.roleEn}
                </p>
                <div className="mt-3 min-h-[120px] rounded-lg border border-dashed border-[#2a3a4c]/80 bg-[#060c14]/60 p-4">
                  <p className="font-sans text-sm leading-relaxed text-[#5a6a7c]">
                    자기소개를 입력할 자리입니다.
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
