import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const projectsData = [
  {
    id: 'kBLA8qoySxw',
    title: 'Cinematic Wedding Film',
    category: 'Wedding',
  },
  {
    id: 'tOzeT1M-UTU',
    title: 'Pre-Wedding Highlight',
    category: 'Highlight',
  },
  {
    id: 'KVaz52AA3T0',
    title: 'Same-Day Edit (SDE)',
    category: 'SDE',
  },
  {
    id: '-0DRCtDstTk',
    title: 'Wedding Teaser / Trailer',
    category: 'Teaser',
  },
  {
    id: 'xEUhY6e0slo',
    title: 'Instagram & Reels Edit',
    category: 'Reels',
  },
  {
    id: 'PoQqR07nhyI',
    title: 'Full Wedding Documentary',
    category: 'Documentary',
  },
]

function Projects() {
  const [playingVideoId, setPlayingVideoId] = useState(null)

  return (
    <section id="projects" className="relative flex min-h-screen w-full flex-col items-center justify-center bg-transparent py-16 md:py-24 scroll-mt-0 border-t border-white/5">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 md:px-12 gap-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#D4AF37]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            — Featured Works —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Recent Projects
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => {
            const isPlaying = playingVideoId === project.id;
            
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => { if (!isPlaying) setPlayingVideoId(project.id) }}
              className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl bg-[#111] border border-white/5"
            >
              {!isPlaying ? (
                <>
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/10 z-10" />
                  
                  <img
                    src={`https://img.youtube.com/vi/${project.id}/maxresdefault.jpg`}
                    onError={(e) => { e.target.src = `https://img.youtube.com/vi/${project.id}/hqdefault.jpg` }}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/90 text-black opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 shadow-lg shadow-[#D4AF37]/20">
                      <Play fill="currentColor" size={24} className="ml-1" />
                    </div>
                  </div>

                  {/* Lifted Text Container */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 pb-8 pt-20 z-20 translate-y-2 transition-transform duration-300 group-hover:translate-y-0 pointer-events-none">
                    <span className="text-[#D4AF37] text-[10px] font-['Inter'] uppercase tracking-[0.2em] mb-2 block font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-semibold leading-tight font-['Playfair_Display']">
                      {project.title}
                    </h3>
                  </div>
                </>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${project.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0 z-30"
                />
              )}
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default Projects
