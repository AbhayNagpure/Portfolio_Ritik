import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const servicesData = [
  {
    num: 'I',
    title: 'Cinematic Wed. Highlight',
    description: 'Your love story told through breathtaking cinema',
    highlights: ['Emotional storytelling', 'Slow-motion sequences', 'Seamless transitions'],
    youtubeId: 'kBLA8qoySxw',
  },
  {
    num: 'II',
    title: 'Pre-Wedding Highlight',
    description: 'Chemistry and emotion before the big day',
    highlights: ['Creative color grading', 'Music syncing', 'Stylish transitions'],
    youtubeId: 'PoQqR07nhyI',
  },
  {
    num: 'III',
    title: 'Same-Day Edit (SDE)',
    description: 'Delivered in hours. Screened at your reception',
    highlights: ['Delivered same day', 'Music syncing', 'Reception ready'],
    youtubeId: 'tOzeT1M-UTU',
  },
  {
    num: 'IV',
    title: 'Wedding Teaser / Trailer',
    description: 'Dramatic. Impactful. Unforgettable',
    highlights: ['Fast-paced edits', 'Dramatic music', '1-2 minutes'],
    youtubeId: 'xEUhY6e0slo',
  },
  {
    num: 'V',
    title: 'Instagram & Reels Edit',
    description: 'Cinematic cuts built for social media',
    highlights: ['Platform optimized', 'Trendy music syncing', 'Creative overlays'],
    youtubeId: 'Ki0WydmLR0s',
  },
  {
    num: 'VI',
    title: 'Full Wedding Documentary',
    description: 'Every moment. Every emotion. Your full story',
    highlights: ['Multi-camera edit', 'Full day coverage', 'Documentary style'],
    youtubeId: 'KVaz52AA3T0',
  },
]

function ServiceCard({ item, index, isPlaying, onTogglePlay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      onTap={onTogglePlay}
      className={`service-card-item snap-center group relative flex h-[460px] w-[85vw] flex-shrink-0 flex-col items-center justify-between overflow-hidden rounded-3xl border bg-[#111111] pt-12 px-10 pb-16 text-center transition-all duration-300 md:w-[35vw] lg:w-[22vw] cursor-pointer ${isPlaying
        ? 'border-[#D4AF37]/50 shadow-[0_10px_40px_rgba(212,175,55,0.15)]'
        : 'border-white/5'
        }`}
    >
      {/* Background YouTube Video on Tap */}
      {item.youtubeId && isPlaying && (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="absolute inset-0 bg-[#0a0a0a]/20 z-10 pointer-events-none" />
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&mute=${/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 1 : 0}&controls=1&loop=1&playlist=${item.youtubeId}&playsinline=1`}
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 opacity-90 object-cover scale-[1.1]"
            style={{ border: 'none' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={item.title}
          />
        </div>
      )}

      {/* Background Local Video on Tap */}
      {item.localVideo && isPlaying && (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="absolute inset-0 bg-[#0a0a0a]/20 z-10 pointer-events-none" />
          <video
            src={item.localVideo}
            autoPlay
            loop
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 opacity-90 object-cover"
          />
        </div>
      )}

      {/* Background Thumbnail when not playing */}
      {item.youtubeId && !isPlaying && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-[#111111]/85 transition-colors duration-500 z-10" />
          <img
            src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale contrast-125"
          />
        </div>
      )}

      {/* Local Video Thumbnail when not playing */}
      {item.localVideo && !isPlaying && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-[#111111]/85 transition-colors duration-500 z-10" />
          <video
            src={item.localVideo}
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale contrast-125"
          />
        </div>
      )}

      {/* Decorative Golden Corner glow when active */}
      <div className={`absolute -inset-px rounded-3xl bg-gradient-to-tr from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/10 transition-opacity duration-500 pointer-events-none z-1 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />

      {/* Top Content Block */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h3
          className={`text-2xl font-bold leading-tight transition-colors duration-300 ${isPlaying ? 'text-[#D4AF37]' : 'text-white'}`}
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

      {/* Bottom Play Action Indicator */}
      <div className="relative z-10 w-full flex items-center justify-center gap-3 transition-all duration-300" style={{ marginBottom: '1rem' }}>
        <span className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)] ${isPlaying ? 'bg-[#D4AF37] text-[#0a0a0a]' : 'bg-[#D4AF37]/10 text-[#D4AF37]'
          }`}>
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <rect x="4" y="4" width="16" height="16" rx="1.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          )}
        </span>
        <span className={`font-['Inter'] text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${isPlaying ? 'text-white' : 'text-[#D4AF37]'
          }`}>
          {isPlaying ? 'Playing Preview' : 'Tap to play'}
        </span>
      </div>
    </motion.div>
  )
}

function Services() {
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activePlayingIndex, setActivePlayingIndex] = useState(null)
  const [scrollPadding, setScrollPadding] = useState('0px')
  const totalCards = servicesData.length

  // Calculate padding so cards snap to perfect viewport center
  useEffect(() => {
    const updatePadding = () => {
      const vw = window.innerWidth
      let cardWidth = '85vw'
      if (vw >= 1024) cardWidth = '22vw'
      else if (vw >= 768) cardWidth = '35vw'
      setScrollPadding(`calc(50vw - (${cardWidth} / 2))`)
    }
    updatePadding()
    window.addEventListener('resize', updatePadding)
    return () => window.removeEventListener('resize', updatePadding)
  }, [])

  // Detect currently active card in center on scroll
  const handleScroll = () => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const card = container.querySelector('.service-card-item')
    if (!card) return

    const cardWidth = card.clientWidth
    const gap = 32 // gap-8 = 2rem = 32px
    const step = cardWidth + gap

    // Calculate index based on scroll position
    const index = Math.round(container.scrollLeft / step)
    const clamped = Math.max(0, Math.min(index, totalCards - 1))
    if (clamped !== currentIndex) {
      setCurrentIndex(clamped)
    }
  }

  // Smoothly center a card
  const goToIndex = (index, keepActive = false) => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const card = container.querySelector('.service-card-item')
    if (!card) return

    const cardWidth = card.clientWidth
    const gap = 32
    const step = cardWidth + gap

    container.scrollTo({
      left: index * step,
      behavior: 'smooth'
    })

    setCurrentIndex(index)
    if (!keepActive) {
      setActivePlayingIndex(null)
    }
  }

  const slide = (direction) => {
    goToIndex(direction === 'left' ? currentIndex - 1 : currentIndex + 1)
  }

  return (
    <section id="services" className="flex min-h-screen w-full flex-col justify-center bg-transparent py-[6rem] overflow-hidden scroll-mt-16" >
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

        {/* Carousel Section */}
        <div className="relative w-full">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex w-full gap-8 overflow-x-auto scroll-smooth pt-4 pb-12 snap-x snap-mandatory"
            style={{
              paddingLeft: scrollPadding,
              paddingRight: scrollPadding,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {servicesData.map((item, index) => (
              <ServiceCard
                key={index}
                item={item}
                index={index}
                isPlaying={activePlayingIndex === index}
                onTogglePlay={() => {
                  const nextIndex = activePlayingIndex === index ? null : index
                  setActivePlayingIndex(nextIndex)
                  if (nextIndex !== null) {
                    goToIndex(index, true)
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows + Dot Indicators */}
        <div className="flex flex-col items-center gap-4" style={{ marginTop: '1rem' }}>
          <div className="flex items-center gap-6">
            <button
              onClick={() => slide('left')}
              disabled={currentIndex === 0}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous service"
            >
              ←
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {servicesData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex
                    ? 'w-6 bg-[#D4AF37]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => slide('right')}
              disabled={currentIndex === totalCards - 1}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-2xl text-white transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next service"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

