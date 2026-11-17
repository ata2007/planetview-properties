import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/site'

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-gold text-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Testimonials</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
          What Our Clients Say.
        </h2>
        <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-md shadow-navy/5 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Stars />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-sm font-bold text-navy">{t.name}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
                {t.area} ·
                <span className="inline-flex items-center gap-1 font-semibold text-slate-500">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                    <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
                    <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
                  </svg>
                  Google Review
                </span>
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
