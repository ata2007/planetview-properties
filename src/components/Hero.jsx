import { MessageCircle, Star } from 'lucide-react'
import { COMPANY } from '../data/site'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
        alt="Modern home listed by PlanetView Properties in Port Harcourt"
        className="absolute inset-0 h-full w-full object-cover"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-28 pt-20 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur">
          <Star size={15} className="fill-gold text-gold" />
          {COMPANY.rating}★ Google Rating · {COMPANY.reviewCount} Reviews
        </div>

        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Find Your Next Property in{' '}
          <span className="text-gold">Port Harcourt.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Lands, homes, and construction — trusted by {COMPANY.reviewCount}+ happy
          clients with a {COMPANY.rating}★ rating.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#properties"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-lg shadow-gold/20 transition hover:bg-gold-soft"
          >
            Browse Properties
          </a>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-navy"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
