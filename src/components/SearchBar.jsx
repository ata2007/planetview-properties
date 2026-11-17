import { Search } from 'lucide-react'

const LOCATIONS = ['New GRA', 'Eliozu', 'Rumuola', 'Eneka', 'Woji']
const TYPES = ['Land', 'House', 'Duplex', 'Apartment']
const BUDGETS = [
  'Any budget',
  'Under ₦10,000,000',
  '₦10,000,000 – ₦30,000,000',
  '₦30,000,000 – ₦60,000,000',
  'Above ₦60,000,000',
]

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-navy/50">
        {label}
      </span>
      {children}
    </label>
  )
}

const selectClass =
  'w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-navy transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

export default function SearchBar() {
  return (
    <section aria-label="Property search" className="relative z-20 mx-auto -mt-16 w-full max-w-5xl px-4 sm:px-6">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-navy/10 ring-1 ring-slate-100 sm:grid-cols-2 sm:p-5 lg:grid-cols-4"
      >
        <Field label="Location">
          <select className={selectClass} defaultValue="New GRA" aria-label="Location">
            {LOCATIONS.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </Field>
        <Field label="Property Type">
          <select className={selectClass} defaultValue="House" aria-label="Property type">
            {TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget">
          <select className={selectClass} defaultValue="Any budget" aria-label="Budget">
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
        <div className="flex items-end">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-gold hover:text-navy focus:outline-none focus:ring-2 focus:ring-gold/40"
          >
            <Search size={17} strokeWidth={2.5} />
            Search
          </button>
        </div>
      </form>
    </section>
  )
}
