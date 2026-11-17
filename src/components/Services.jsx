import { Building2, HardHat, Home, PencilRuler } from 'lucide-react'
import { SERVICES } from '../data/site'

const ICONS = { Building2, PencilRuler, HardHat, Home }

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Our Services</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
          What We Do.
        </h2>
        <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />
        <p className="mt-4 text-slate-600">
          One team for the whole journey — from finding the right land to handing over the keys.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.icon]
          return (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:ring-2 hover:ring-gold/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-md shadow-gold/30">
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
