import { MessageCircle } from 'lucide-react'
import { COMPANY } from '../data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-green-900/30 transition hover:scale-105 active:scale-95"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-20" />
      <MessageCircle size={27} className="relative" fill="currentColor" strokeWidth={1.5} />
    </a>
  )
}
