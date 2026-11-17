import { Check } from 'lucide-react'
import { WHY_US } from '../data/site'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">The Difference</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Why Choose Planet<span className="text-gold">View</span>.
          </h2>
          <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Buying land or building in Port Harcourt is a big decision. Here is why clients
            keep choosing us — and referring their family.
          </p>
        </div>

        <div className="grid content-center gap-6 md:gap-7">
          {WHY_US.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/40">
                <Check size={15} strokeWidth={3} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
