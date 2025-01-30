"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const BranchPath = ({ d, delay, width = 2 }: { d: string; delay: number; width?: number }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start({
        pathLength: 1,
        transition: { duration: 2, delay },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.path
      ref={ref}
      d={d}
      stroke="url(#goldGradient)"
      strokeWidth={width}
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={controls}
    />
  )
}

export default function EleganceShowcase() {
  return (
    <section className="bg-[#1a1a1a] py-24 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-white mb-12">Timeless Elegance</h2>
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-16">
          Our brand is rooted in tradition, yet always reaching for new heights of innovation and style. Each piece
          tells a story of craftsmanship passed down through generations.
        </p>
      </div>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="50%" stopColor="#c6a55c" />
            <stop offset="100%" stopColor="#ffdb58" />
          </linearGradient>
        </defs>

        {/* Tree trunk - now using multiple lines */}
        <BranchPath d="M480,1000 C480,900 490,800 500,700" delay={0} width={3} />
        <BranchPath d="M520,1000 C520,900 510,800 500,700" delay={0.1} width={3} />
        <BranchPath d="M490,700 C490,600 495,500 500,400" delay={0.2} width={2.5} />
        <BranchPath d="M510,700 C510,600 505,500 500,400" delay={0.3} width={2.5} />

        {/* Main branches */}
        <BranchPath d="M500,400 C450,350 400,320 350,300" delay={0.4} width={2} />
        <BranchPath d="M500,400 C550,350 600,320 650,300" delay={0.4} width={2} />

        {/* Secondary branches - Left side */}
        <BranchPath d="M350,300 C320,280 290,260 260,250" delay={0.6} width={1.5} />
        <BranchPath d="M350,300 C380,280 410,260 440,250" delay={0.6} width={1.5} />

        {/* Secondary branches - Right side */}
        <BranchPath d="M650,300 C680,280 710,260 740,250" delay={0.6} width={1.5} />
        <BranchPath d="M650,300 C620,280 590,260 560,250" delay={0.6} width={1.5} />

        {/* Tertiary branches - Far left */}
        <BranchPath d="M260,250 C240,230 220,210 200,200" delay={0.8} width={1} />
        <BranchPath d="M260,250 C280,230 300,210 320,200" delay={0.8} width={1} />

        {/* Tertiary branches - Inner left */}
        <BranchPath d="M440,250 C420,230 400,210 380,200" delay={0.8} width={1} />
        <BranchPath d="M440,250 C460,230 480,210 500,200" delay={0.8} width={1} />

        {/* Tertiary branches - Inner right */}
        <BranchPath d="M560,250 C540,230 520,210 500,200" delay={0.8} width={1} />
        <BranchPath d="M560,250 C580,230 600,210 620,200" delay={0.8} width={1} />

        {/* Tertiary branches - Far right */}
        <BranchPath d="M740,250 C720,230 700,210 680,200" delay={0.8} width={1} />
        <BranchPath d="M740,250 C760,230 780,210 800,200" delay={0.8} width={1} />

        {/* Final small branches */}
        {[200, 320, 380, 500, 620, 680, 800].map((x, i) => (
          <g key={i}>
            <BranchPath d={`M${x},200 C${x - 10},180 ${x - 20},160 ${x - 30},150`} delay={1} width={0.75} />
            <BranchPath d={`M${x},200 C${x + 10},180 ${x + 20},160 ${x + 30},150`} delay={1} width={0.75} />
          </g>
        ))}

        {/* Roots */}
        <BranchPath d="M480,1000 C450,1020 420,1040 390,1060" delay={1.2} width={1.5} />
        <BranchPath d="M520,1000 C550,1020 580,1040 610,1060" delay={1.2} width={1.5} />
        <BranchPath d="M390,1060 C360,1080 330,1100 300,1120" delay={1.4} width={1} />
        <BranchPath d="M610,1060 C640,1080 670,1100 700,1120" delay={1.4} width={1} />
      </svg>

      <div className="relative z-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Tradition", "Innovation", "Excellence"].map((value, index) => (
            <motion.div
              key={value}
              className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-serif text-white mb-2">{value}</h3>
              <p className="text-gray-300">
                {index === 0 && "Rooted in time-honored techniques"}
                {index === 1 && "Pushing boundaries in design"}
                {index === 2 && "Uncompromising quality in every piece"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

