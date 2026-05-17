import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Services', 'Skills', 'Contact']

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, link) => {
    if (link === 'Home') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        backgroundColor: 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(212, 175, 55, 0.15)'
          : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-10 py-5 md:px-20">

        {/* ── Logo — left, pushed inward ─────────────────────── */}
        <a href="#" className="shrink-0 select-none " style={{ marginLeft: "75px" }}>
          <span
            className="font-['Bebas_Neue'] font-normal tracking-wider text-white"
            style={{ fontSize: '2.3rem' }}
          >
            CRAFTER
          </span>
          <span
            className="font-['Bebas_Neue'] font-normal tracking-wider text-[#D4AF37]"
            style={{ fontSize: '2.3rem' }}
          >
            {' '}PRODUCTION
          </span>
        </a>

        {/* ── Nav links — pushed to right ────────────────────── */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link)}
                className="nav-link relative font-['Inter'] text-xs font-medium uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:text-[#D4AF37]"
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#D4AF37] transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Hamburger — mobile only ────────────────────────── */}
        <button
          type="button"
          className="text-[#D4AF37] md:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
