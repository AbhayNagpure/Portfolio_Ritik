import { motion } from 'framer-motion'

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const CONTACT_IMAGE = "/assets/contact-profile.jpg"

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated form submission
    alert('Thank you for your inquiry! Ritik will get back to you shortly.')
  }

  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-transparent scroll-mt-0 border-t border-white/5"
      style={{ padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 6vw, 6rem)' }}
    >
      <div className="relative mx-auto max-w-[1440px] w-full px-6 md:px-12">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '50px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="font-['Inter'] text-xs font-medium uppercase tracking-[0.32em] text-[#D4AF37] mb-4"
          >
            &mdash; Let&apos;s Connect &mdash;
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-semibold text-white md:text-3xl tracking-wide max-w-xl leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Create Something <span className="text-[#D4AF37] italic">Extraordinary</span>
          </motion.h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Visual Profile & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full">
            {/* The Cinematic Poster */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full overflow-hidden rounded-3xl border border-white/5 aspect-[16/9] bg-white/5 shadow-2xl"
            >
              <img
                src={CONTACT_IMAGE}
                alt="Ritik editing wedding film"
                className="h-full w-full object-cover opacity-80 transition-all duration-500 hover:scale-103 hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Collaborative Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left"
            >
              <h3 className="font-['Inter'] text-base md:text-lg font-medium text-white mb-1.5">
                Now Booking for 2026 / 2027
              </h3>
              <p className="font-['Inter'] text-white/50 text-[11px] md:text-xs font-light leading-relaxed">
                Whether you need professional color grading, seamless narrative video editing, or a full wedding film transformation, let&apos;s build a visual style that matches your exact creative standards.
              </p>
            </motion.div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
              {/* Phone */}
              <motion.a
                href="tel:+918817195771"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.06]"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-105">
                  <PhoneIcon />
                </div>
                <div className="text-left overflow-hidden">
                  <h4 className="font-['Inter'] text-[8px] font-light text-white/40 truncate uppercase tracking-wider">Phone</h4>
                  <p className="font-['Inter'] text-[#D4AF37] text-[10px] font-medium tracking-wide truncate">+91 8817195771</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/cutcrafter__?igsh=YmE2ZWhkM20zemJ2"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.06]"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-105">
                  <InstagramIcon />
                </div>
                <div className="text-left overflow-hidden">
                  <h4 className="font-['Inter'] text-[8px] font-light text-white/40 truncate uppercase tracking-wider">Instagram</h4>
                  <p className="font-['Inter'] text-[#D4AF37] text-[10px] font-medium tracking-wide truncate">@cutcrafter__</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:rhphotography676@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group flex items-center gap-2.5 p-2.5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.06]"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-300 group-hover:scale-105">
                  <MailIcon />
                </div>
                <div className="text-left overflow-hidden">
                  <h4 className="font-['Inter'] text-[8px] font-light text-white/40 truncate uppercase tracking-wider">Email</h4>
                  <p className="font-['Inter'] text-[#D4AF37] text-[10px] font-medium tracking-tight truncate">rhphotography676@gmail.com</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Direct Collaboration Inquiry Form */}
          <div className="lg:col-span-7 w-full bg-white/[0.02] border border-white/5 rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="font-['Inter'] text-lg md:text-xl font-semibold text-white mb-2">
                Start a Collaboration
              </h3>
              <p className="font-['Inter'] text-white/40 text-xs font-light">
                Fill in the details below and I will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className=" flex flex-col gap-10 w-full text-left " style={{ marginTop: '2.2rem' }}>
              <div className="flex flex-col gap-10">
                {/* Name */}
                <div className="flex flex-col w-[100%]">
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-transparent border-0 border-b border-white/15 px-0 py-6 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col ">
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-0 border-b border-white/15 px-0 py-30 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col ">
                <textarea
                  required

                  placeholder="Tell me about your vision, timeline, and what you're looking for..."
                  className="w-full bg-transparent border-0 border-b border-white/15 px-0 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full mt-2 bg-[#D4AF37] hover:bg-[#c29f2e] text-[#0a0a0a] font-['Inter'] text-1xl font-semibold tracking-wider uppercase py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-[#D4AF37]/10"
              >
                Send Message
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
