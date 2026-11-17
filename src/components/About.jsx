import { Star } from 'lucide-react'
import { COMPANY } from '../data/site'

const STATS = [
  { value: `${COMPANY.reviewCount}+`, label: 'Reviews' },
  { value: `${COMPANY.rating}★`, label: 'Rating' },
  { value: '100%', label: 'Verified Titles' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
            alt="Interior of a home delivered by PlanetView Properties"
            loading="lazy"
            className="h-80 w-full rounded-2xl object-cover shadow-xl shadow-navy/10 sm:h-96"
          />
          <div className="absolute -bottom-6 left-6 rounded-xl bg-navy px-5 py-4 text-white shadow-lg">
            <p className="font-display text-2xl font-bold text-gold">{COMPANY.years}</p>
            <p className="text-xs font-medium uppercase tracking-wider text-white/70">
              Years in Port Harcourt
            </p>
          </div>
        </div>

        <div className="pt-6 lg:pt-0">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">About Us</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
            Port Harcourt’s Trusted Property Partner.
          </h2>
          <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />

          <p className="mt-5 leading-relaxed text-slate-600">
            For over {COMPANY.years} years, PlanetView Properties has helped families and
            investors buy, sell, and build across Port Harcourt — from the New GRA to
            Eliozu, Rumuola, Eneka, and Woji.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Every land we list comes with verified titles, and every project we take on is
            managed end to end — from purchase and architectural design to construction and
            handover. No surprises, just honest work.
          </p>

          <a
            href="#services"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-bold text-navy shadow-lg shadow-gold/20 transition hover:bg-gold-soft"
          >
            Learn More
          </a>

          <div className="mt-9 flex divide-x divide-slate-200 border-t border-slate-200 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="pr-6 first:pl-0 sm:pr-10">
                <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {stat.label === 'Rating' && <Star size={12} className="fill-gold text-gold" />}
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
