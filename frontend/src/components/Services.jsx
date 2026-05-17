import { useRef, useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const servicesData = [
  {
    num: 'I',
    title: 'Cinematic Wedding Film',
    description: 'Your love story told through breathtaking cinema',
    highlights: ['Emotional storytelling', 'Slow-motion sequences', 'Seamless transitions'],
    youtubeId: 'kBLA8qoySxw',
  },
  {
    num: 'II',
    title: 'Pre-Wedding Highlight',
    description: 'Chemistry and emotion before the big day',
    highlights: ['Creative color grading', 'Music syncing', 'Stylish transitions'],
    youtubeId: 'tOzeT1M-UTU',
  },
  {
    num: 'III',
    title: 'Same-Day Edit (SDE)',
    description: 'Delivered in hours. Screened at your reception',
    highlights: ['Delivered same day', 'Music syncing', 'Reception ready'],
    youtubeId: 'KVaz52AA3T0',
  },
  {
    num: 'IV',
    title: 'Wedding Teaser / Trailer',
    description: 'Dramatic. Impactful. Unforgettable',
    highlights: ['Fast-paced edits', 'Dramatic music', '1-2 minutes'],
    youtubeId: '-0DRCtDstTk',
  },
  {
    num: 'V',
    title: 'Instagram & Reels Edit',
    description: 'Cinematic cuts built for social media',
    highlights: ['Platform optimized', 'Trendy music syncing', 'Creative overlays'],
    youtubeId: 'xEUhY6e0slo',
  },
  {
    num: 'VI',
    title: 'Full Wedding Documentary',
    description: 'Every moment. Every emotion. Your full story',
    highlights: ['Multi-camera edit', 'Full day coverage', 'Documentary style'],
    youtubeId: 'PoQqR07nhyI',
  },
]

function ServiceCard({ item, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(prev => !prev)}
      className="group relative flex h-[460px] w-[85vw] flex-shrink-0 flex-col items-center justify-between overflow-hidden rounded-3xl border border-white/5 bg-[#111111] pt-12 px-10 pb-16 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] md:w-[35vw] lg:w-[22vw] cursor-pointer"
    >
      {/* Background YouTube Video on Hover */}
      {item.youtubeId && isHovered && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-[#0a0a0af0] group-hover:bg-[#0a0a0a88] transition-colors duration-500 z-10" />
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.youtubeId}&playsinline=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60 object-cover scale-[1.1]"
            style={{ border: 'none' }}
            allow="autoplay; encrypted-media"
            title={item.title}
          />
        </div>
      )}

      {/* Background Thumbnail when not playing */}
      {item.youtubeId && !isHovered && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-[#111111]/85 transition-colors duration-500 z-10" />
          <img
            src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      {/* Decorative Golden Corner lines/glow elements on hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-1" />

      {/* Top Content Block */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h3
          className="text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#D4AF37]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {item.title}
        </h3>
        <p
          className="max-w-[90%] text-[1rem] font-light leading-relaxed text-white/70"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.description}
        </p>

        {/* Highlights List */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {item.highlights.map((highlight, hIndex) => (
            <div key={hIndex} className="flex items-center gap-2">
              <span className="text-[#D4AF37] text-[0.8rem]">→</span>
              <span
                className="text-[0.9rem] font-light text-white/80"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Play Action Indicator Hint */}
      <div className="relative z-10 w-full flex items-center justify-center gap-3 transition-all duration-300 mb-10" style={{ marginBottom: '1rem' }}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0a0a0a] transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
          {isHovered ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="1.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          )}
        </span>
        <span className="font-['Inter'] text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] group-hover:text-white transition-colors duration-300">
          {isHovered ? 'Playing Preview' : 'Tap to see video'}
        </span>
      </div>
    </motion.div>
  )
}

function Services() {
  const carouselRef = useRef(null)
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 })
  const controls = useAnimation()
  const [xPos, setXPos] = useState(0)

  const slide = (direction) => {
    if (!carouselRef.current) return
    const cardWidth = window.innerWidth >= 1024 ? window.innerWidth * 0.22 + 32 : window.innerWidth * 0.85 + 32
    let newX = direction === 'left' ? xPos + cardWidth : xPos - cardWidth

    if (newX > 0) newX = 0
    if (newX < dragConstraints.left) newX = dragConstraints.left

    setXPos(newX)
    controls.start({ x: newX, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
  }

  useEffect(() => {
    // Calculate the left constraint based on the inner and outer width
    const updateConstraints = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth
        const clientWidth = carouselRef.current.clientWidth
        const maxScroll = clientWidth - scrollWidth
        setDragConstraints({ right: 0, left: maxScroll })
        return maxScroll
      }
      return 0
    }

    const maxScroll = updateConstraints()

    // Initialize position to show middle cards on first load
    if (carouselRef.current) {
      const cardWidth = window.innerWidth >= 1024 ? window.innerWidth * 0.22 + 32 : window.innerWidth * 0.85 + 32
      const initialX = Math.max(maxScroll, -cardWidth * 1) // shift by 1 card to show middle 4
      setXPos(initialX)
      controls.set({ x: initialX })
    }

    // Recalculate on resize
    const handleResize = () => updateConstraints()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [controls])

  return (
    <section id="services" className="flex min-h-screen w-full flex-col justify-center bg-[#0a0a0a] py-[6rem] overflow-hidden scroll-mt-16" >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col text-center" style={{ marginBottom: '8rem' }}>

        {/* Header Section */}
        <div className="flex flex-col items-center" style={{ marginBottom: '2rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#D4AF37]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            — What We Offer —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-center text-5xl font-bold text-white md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </motion.h2>
        </div>

        {/* Carousel Section with Blur Overlays */}
        <div
          className="relative w-full cursor-grab active:cursor-grabbing"
          ref={carouselRef}
        >


          <motion.div
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.05}
            animate={controls}
            onDragEnd={(e, info) => {
              const currentX = info.offset.x + xPos
              let newX = currentX
              if (newX > 0) newX = 0
              if (newX < dragConstraints.left) newX = dragConstraints.left
              setXPos(newX)
            }}
            className="flex w-max gap-8 pl-[4%] pr-[10%] pb-12"
          >
            {servicesData.map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows Bottom Center */}
        <div className="flex justify-center gap-6" style={{ marginTop: '1rem' }}>
          <button
            onClick={() => slide('left')}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
            aria-label="Previous service"
          >
            ←
          </button>
          <button
            onClick={() => slide('right')}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
            aria-label="Next service"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
