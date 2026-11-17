import { Facebook, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { COMPANY, NAV_LINKS } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold text-white">
            Planet<span className="text-gold">View</span>
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
            Properties
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Lands, homes, and construction in Port Harcourt — with verified titles and
            transparent pricing.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/planetviewproperties"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://www.facebook.com/planetviewproperties"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy"
            >
              <Facebook size={17} />
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-whatsapp"
            >
              <MessageCircle size={17} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={COMPANY.phoneTel} className="flex items-center gap-2 transition hover:text-gold">
                <Phone size={15} className="text-gold" />
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
              {COMPANY.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/50 sm:px-6">
          © 2026 PlanetView Properties · Demo redesign — pitch mockup, not the live site.
        </p>
      </div>
    </footer>
  )
}
