import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-navy text-white transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-navy-deep/50' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between pl-4 pr-20 sm:pl-6 sm:pr-20">
        <a href="#home" className="leading-none">
          <span className="font-display text-2xl font-bold tracking-tight">
            Planet<span className="text-gold">View</span>
          </span>
          <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.35em] text-white/50">
            Properties
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={COMPANY.phoneTel}
            className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy transition hover:bg-gold-soft sm:inline-flex"
          >
            <Phone size={16} strokeWidth={2.5} />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={COMPANY.phoneTel}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-bold text-navy"
            >
              <Phone size={16} strokeWidth={2.5} />
              Call Now — {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
