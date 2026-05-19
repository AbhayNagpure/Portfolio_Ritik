import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1]

/* ── Counter hook — counts from 0 to target ──────────────────── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) {
      setCount(0)
      return
    }
    if (typeof target !== 'number') { setCount(target); return }
    let startTime = null
    let raf
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])
  return count
}

/* ── Stat card ────────────────────────────────────────────────── */
function StatCard({ value, suffix = '', label, started }) {
  const isNumber = typeof value === 'number'
  const count = useCounter(isNumber ? value : 0, 1800, started)

  return (
    <div className="flex flex-col items-center gap-1 sm:items-start">
      <span
        className="text-3xl text-[#D4AF37] sm:text-4xl"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {isNumber ? count : value}
        {suffix}
      </span>
      <span className="font-['Inter'] text-[0.7rem] font-light uppercase tracking-[0.18em] text-white/60">
        {label}
      </span>
    </div>
  )
}

/* ── About section ────────────────────────────────────────────── */
function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent"
      style={{ padding: 'clamp(3rem, 8vw, 8rem) clamp(1rem, 6vw, 6rem)' }}
    >
      {/* ── Subtle radial gold glow — top left ─────────────── */}
      <div
        className="pointer-events-none absolute top-0 left-0"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── Two-column grid ────────────────────────────────── */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row lg:justify-between lg:items-center gap-12 lg:gap-20 xl:gap-32">

        {/* ─── Left column (50%) ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.9, ease: easeOut }}
          className="flex flex-col gap-10 lg:w-[45%] xl:w-[45%]"
        >
          {/* Gold label */}
          <p className="font-['Inter'] text-xs font-medium uppercase tracking-[0.42em] text-[#D4AF37]">
            &mdash; About Us &mdash;
          </p>

          {/* Heading */}
          <h2
            className="text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Crafting Stories
            <br />
            Frame by Frame
          </h2>

          {/* Stat counters */}
          <div className="flex gap-8 sm:gap-12">
            <StatCard value={100} suffix="+" label="Weddings Edited" started={isInView} />
            <StatCard value={5} suffix="+" label="Years Experience" started={isInView} />
            <StatCard value="∞" label="Stories Told" started={isInView} />
          </div>
        </motion.div>


        {/* ─── Right column (50%) ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
          className="flex flex-col items-start text-left gap-8 lg:w-[50%] xl:w-[50%]"
        >
          {/* Profile Header (Circular Image beside Name & Title) */}
          <div className="flex items-center gap-6">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-[#D4AF37]/20 blur-sm"></div>
              <img
                src="/assets/ritik.jpg"
                alt="Ritik Bakte"
                className="relative h-24 w-24 rounded-full border-2 border-[#D4AF37] object-cover object-center shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              />
            </div>
            <div className="text-left">
              {/* Founder name */}
              <h3
                className="text-3xl italic text-[#D4AF37] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ritik Bakte
              </h3>
              {/* Title */}
              <p className="font-['Inter'] text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                Founder, Crafter Production
              </p>
            </div>
          </div>

          {/* Bio paragraphs */}
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="font-['Inter'] text-base font-light leading-[1.85] text-white/75">
              I&apos;m Ritik Bakte, the founder of Crafter Production. We are a wedding video editing
              agency focused on creating beautiful, high-quality cinematic wedding films. My team
              and I work hard to make sure every project we deliver is absolutely perfect.
            </p>
            <p className="font-['Inter'] text-base font-light leading-[1.85] text-white/75">
              We take raw wedding footage and turn it into smooth, emotional stories. By blending the
              right music, correct timing, and natural color grading, we bring back all the authentic
              feelings of your special day.
            </p>
            <p className="font-['Inter'] text-base font-light leading-[1.85] text-white/75">
              We do not just cut and join video clips. We create cinematic experiences that you can
              look back on and enjoy for years to come. We treat every single frame with care so your
              memories stay fresh forever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
