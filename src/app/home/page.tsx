import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
      <a href="#newsletter">Subscribe Now</a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/skitbit-white.svg" alt="TechInsights logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">techinsights</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">MODERN</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">TECH INSIGHTS</span>
            <span className="block">FOR DEVELOPERS</span>
          </h1>
          <div className="mt-6">{buttonNew}</div>

          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {blogTopicData.map((p, i) => {
              const visibility =
                i <= 1
                  ? "block"
                  : i === 2
                    ? "hidden md:block"
                    : i === 3
                      ? "hidden lg:block"
                      : i === 4
                        ? "hidden xl:block"
                        : "hidden"

              return (
                <div key={i} className={visibility}>
                  <LaptopCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function LaptopCard({
  title = "AI",
  sub = "Latest insights on artificial intelligence",
  tone = "trending",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[20px] glass-border bg-neutral-900 p-3">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black border-2 border-neutral-700">
        {/* Laptop screen bezel */}
        <div className="absolute inset-2 overflow-hidden rounded-lg bg-black">

          {/* Content overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <div className="text-lg font-bold leading-tight text-white/95">{title}</div>
            <p className="text-xs text-white/70 line-clamp-2">{sub}</p>
            <div className="mt-2 inline-flex items-center rounded-full bg-black/60 px-2 py-0.5 text-[9px] uppercase tracking-wider text-lime-300">
              {tone === "trending" ? "tech blog" : tone}
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 left-1/2 h-4 w-[90%] -translate-x-1/2">
          {/* Main laptop base with proper proportions */}
          <div className="h-full w-full rounded-b-xl bg-gradient-to-b from-neutral-600 to-neutral-800 border-x-2 border-b-2 border-neutral-500 shadow-xl">
            {/* Detailed keyboard area */}
            <div className="absolute inset-x-1 top-0.5 bottom-1 bg-neutral-800 rounded-sm overflow-hidden">
              {/* Keyboard rows with realistic key layout */}
              <div className="p-0.5 h-full">
                {/* Function keys row */}
                <div className="grid grid-cols-12 gap-[0.5px] mb-[0.5px] h-[15%]">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-neutral-600 rounded-[0.5px] opacity-60" />
                  ))}
                </div>

                {/* Number row */}
                <div className="grid grid-cols-13 gap-[0.5px] mb-[0.5px] h-[20%]">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <div key={i} className="bg-neutral-600 rounded-[0.5px] opacity-70" />
                  ))}
                </div>

                {/* QWERTY row */}
                <div className="grid grid-cols-12 gap-[0.5px] mb-[0.5px] h-[20%]">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="bg-neutral-600 rounded-[0.5px] opacity-75" />
                  ))}
                </div>

                {/* ASDF row */}
                <div className="grid grid-cols-11 gap-[0.5px] mb-[0.5px] h-[20%]">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="bg-neutral-600 rounded-[0.5px] opacity-75" />
                  ))}
                </div>

                {/* Bottom row with spacebar */}
                <div className="grid grid-cols-8 gap-[0.5px] h-[20%]">
                  <div className="bg-neutral-600 rounded-[0.5px] opacity-75" />
                  <div className="bg-neutral-600 rounded-[0.5px] opacity-75" />
                  <div className="bg-neutral-600 rounded-[0.5px] opacity-75 col-span-4" /> {/* Spacebar */}
                  <div className="bg-neutral-600 rounded-[0.5px] opacity-75" />
                  <div className="bg-neutral-600 rounded-[0.5px] opacity-75" />
                </div>
              </div>
            </div>

            {/* Trackpad with realistic proportions */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-2 bg-neutral-700 rounded-sm border border-neutral-600 shadow-inner" />
          </div>
        </div>
      </div>
    </div>
  )
}

const blogTopicData = [
  {
    title: "AI & Machine Learning",
    sub: "Deep learning, neural networks, and AI breakthroughs transforming industries",
    tone: "trending",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
  },
  {
    title: "Web Development",
    sub: "Modern frameworks, tools, and best practices for building scalable web applications",
    tone: "development",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
  },
  {
    title: "Mobile Development",
    sub: "iOS, Android, React Native, and cross-platform development insights",
    tone: "mobile",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
  },
  {
    title: "Cloud & DevOps",
    sub: "Infrastructure, deployment strategies, and cloud-native development practices",
    tone: "cloud",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
  },
  {
    title: "Cybersecurity",
    sub: "Security best practices, threat analysis, and protecting digital assets",
    tone: "security",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
  },
]
