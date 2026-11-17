import { ArrowRight, Bath, Bed, MapPin, Ruler } from 'lucide-react'
import { COMPANY, PROPERTIES } from '../data/site'

function PropertyCard({ property }) {
  return (
    <article className="group relative rounded-2xl bg-white shadow-md shadow-navy/5 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-gold/60">
      <div className="relative h-56">
        <div className="h-full w-full overflow-hidden rounded-t-2xl">
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {property.tag}
        </span>
        <span className="absolute -bottom-4 left-4 z-10 rounded-full bg-gold px-3.5 py-1.5 text-sm font-bold text-navy shadow-md">
          {property.price}
        </span>
      </div>

      <div className="p-5 pt-9">
        <h3 className="font-display text-lg font-semibold text-navy">{property.title}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={15} className="shrink-0 text-gold" />
          {property.location}
        </p>

        <div className="mt-4 flex items-center gap-5 border-t border-slate-100 pt-4 text-sm text-slate-600">
          {property.beds != null && (
            <span className="flex items-center gap-1.5">
              <Bed size={16} className="text-navy/40" />
              {property.beds} Beds
            </span>
          )}
          {property.baths != null && (
            <span className="flex items-center gap-1.5">
              <Bath size={16} className="text-navy/40" />
              {property.baths} Baths
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Ruler size={16} className="text-navy/40" />
            {property.size}
          </span>
        </div>

        <a
          href={COMPANY.whatsappMsg(`Hello PlanetView, I'm interested in the ${property.title} (${property.price}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-navy/20 px-4 py-2 text-sm font-bold text-navy transition hover:border-gold hover:bg-gold"
        >
          View Details
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  )
}

export default function FeaturedProperties() {
  return (
    <section id="properties" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Handpicked for you</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
          Featured{' '}
          <span className="relative inline-block">
            Properties
            <span className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-gold" />
          </span>
        </h2>
        <p className="mt-4 text-slate-600">
          Verified lands and homes across Port Harcourt’s most sought-after locations.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROPERTIES.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
