import { MoonlightTitle } from "@/components/moonlight-title"
import { NightSeaBackground } from "@/components/night-sea-background"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <NightSeaBackground />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <MoonlightTitle />
      </main>
    </div>
  )
}
