import { useState } from 'react'
import { Clock, MapPin, Phone, Send } from 'lucide-react'
import { COMPANY } from '../data/site'

const inputClass =
  'w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-navy transition placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
            Get In Touch.
          </h2>
          <span className="mt-4 block h-1 w-16 rounded-full bg-gold" />
          <p className="mt-5 max-w-md leading-relaxed text-slate-600">
            Call, WhatsApp, or visit our office — we usually respond within minutes during
            working hours.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                href={COMPANY.phoneTel}
                className="flex items-center gap-3 font-semibold text-navy transition hover:text-gold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Phone size={17} />
                </span>
                {COMPANY.phoneDisplay} (Call / WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                <MapPin size={17} />
              </span>
              {COMPANY.address}
            </li>
            <li className="flex items-center gap-3 text-slate-600">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Clock size={17} />
              </span>
              Mon – Sat, 8:00am – 6:00pm
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <iframe
              title="PlanetView Properties office location — 64A Tombia Extension, New GRA, Port Harcourt"
              src="https://www.google.com/maps?q=64A%20Tombia%20Extension%2C%20New%20GRA%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria&z=15&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md shadow-navy/5 ring-1 ring-slate-100 sm:p-8">
          <h3 className="font-display text-xl font-bold text-navy">Send Us a Message</h3>
          <p className="mt-1 text-sm text-slate-500">
            Tell us what you’re looking for — a plot, a home, or a build.
          </p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy/50">
                Name
              </label>
              <input id="name" name="name" type="text" required placeholder="Your full name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy/50">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" required placeholder="e.g. 0902 630 0009" className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy/50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="I’m looking for a 3-bedroom duplex in New GRA…"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              <Send size={16} />
              Send Message
            </button>
            {sent && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 ring-1 ring-green-200">
                Demo only — this form doesn’t send.{' '}
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                  WhatsApp us instead →
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
