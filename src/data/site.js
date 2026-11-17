export const COMPANY = {
  name: 'PlanetView',
  phoneDisplay: '0902 630 0009',
  phoneTel: 'tel:+2349026300009',
  whatsapp: 'https://wa.me/2349026300009',
  whatsappMsg: (text) =>
    `https://wa.me/2349026300009?text=${encodeURIComponent(text)}`,
  address: '64A Tombia Extension, New GRA, Port Harcourt 500272',
  rating: '4.6',
  reviewCount: 14,
  years: '5+',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const PROPERTIES = [
  {
    id: 1,
    title: '4-Bedroom Duplex',
    price: '₦45,000,000',
    location: 'New GRA, Port Harcourt',
    beds: 4,
    baths: 5,
    size: '450 sqm',
    tag: 'Featured',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: '3-Bedroom Bungalow',
    price: '₦28,500,000',
    location: 'Eliozu, Port Harcourt',
    beds: 3,
    baths: 3,
    size: '320 sqm',
    tag: 'New Listing',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Prime Land Plot',
    price: '₦18,000,000',
    location: 'Rumuola, Port Harcourt',
    beds: null,
    baths: null,
    size: '600 sqm',
    tag: 'Verified Title',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
  },
]

export const SERVICES = [
  {
    icon: 'Building2',
    title: 'Project Management',
    description:
      'We oversee your project from kickoff to handover — on time and on budget.',
  },
  {
    icon: 'PencilRuler',
    title: 'Architectural Design',
    description:
      'Practical, beautiful designs tailored to how Port Harcourt families live.',
  },
  {
    icon: 'HardHat',
    title: 'Building & Construction',
    description:
      'Quality construction by vetted builders, supervised at every stage.',
  },
  {
    icon: 'Home',
    title: 'Lands & Houses for Sale',
    description:
      'Verified lands and homes across Port Harcourt’s best locations.',
  },
]

export const WHY_US = [
  {
    title: 'Verified Land Titles',
    description: 'Every plot is checked at the land registry before we list it.',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees. The price we quote is the price you pay.',
  },
  {
    title: 'End-to-End Service',
    description: 'From land purchase to design, construction, and handover.',
  },
  {
    title: 'Local Port Harcourt Expertise',
    description:
      'We know New GRA, Eliozu, Rumuola, Eneka, and Woji street by street.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'I bought my plot in Eneka through PlanetView and the title documents were verified before I paid a kobo. Smoothest land purchase I’ve had in PH.',
    name: 'Chinedu O.',
    area: 'Eneka',
  },
  {
    quote:
      'They managed the construction of my duplex in New GRA from foundation to finishing. Every stage was supervised and the final work was excellent.',
    name: 'Mrs. Ada E.',
    area: 'New GRA',
  },
  {
    quote:
      'Honest pricing, quick responses on WhatsApp, and they genuinely know the Port Harcourt market. I recommend them to everyone I know.',
    name: 'Samuel B.',
    area: 'Rumuola',
  },
]
