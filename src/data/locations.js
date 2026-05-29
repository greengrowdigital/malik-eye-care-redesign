export const locations = [
  {
    slug: 'manhattan',
    name: { en: 'Manhattan', es: 'Manhattan' },
    neighborhood: { en: 'Inwood / Washington Heights', es: 'Inwood / Washington Heights' },
    address: '188 Dyckman Street, New York, NY 10040',
    phone: '(646) 762-2020',
    phoneDigits: '6467622020',
    hours: {
      en: ['Mon–Thu · 9:00 AM — 6:00 PM', 'Fri · 9:00 AM — 4:00 PM', 'Sat · By appointment', 'Sun · Closed'],
      es: ['Lun–Jue · 9:00 — 18:00', 'Vie · 9:00 — 16:00', 'Sáb · Con cita', 'Dom · Cerrado'],
    },
    services: [
      { en: 'Comprehensive eye exams', es: 'Exámenes completos' },
      { en: 'Cataract & LASIK consults', es: 'Consulta cataratas y LASIK' },
      { en: 'Glaucoma management', es: 'Manejo de glaucoma' },
      { en: 'Optical shop', es: 'Óptica' },
    ],
    mapQuery: '188+Dyckman+Street,+New+York,+NY+10040',
    coords: { lat: 40.864, lng: -73.927 },
  },
  {
    slug: 'jackson-heights',
    name: { en: 'Jackson Heights', es: 'Jackson Heights' },
    neighborhood: { en: 'Queens', es: 'Queens' },
    address: '90-16 Elmhurst Ave, Jackson Heights, NY 11372',
    phone: '(718) 651-2200',
    phoneDigits: '7186512200',
    hours: {
      en: ['Mon–Thu · 9:00 AM — 6:00 PM', 'Fri · 9:00 AM — 4:00 PM', 'Sat · By appointment', 'Sun · Closed'],
      es: ['Lun–Jue · 9:00 — 18:00', 'Vie · 9:00 — 16:00', 'Sáb · Con cita', 'Dom · Cerrado'],
    },
    services: [
      { en: 'Comprehensive eye exams', es: 'Exámenes completos' },
      { en: 'Pediatric optometry', es: 'Optometría pediátrica' },
      { en: 'Diabetic eye care', es: 'Cuidado ocular diabético' },
      { en: 'Bilingual staff (EN/ES)', es: 'Personal bilingüe (EN/ES)' },
    ],
    mapQuery: '90-16+Elmhurst+Ave,+Jackson+Heights,+NY+11372',
    coords: { lat: 40.748, lng: -73.876 },
  },
  {
    slug: 'hollis',
    name: { en: 'Hollis', es: 'Hollis' },
    neighborhood: { en: 'Queens', es: 'Queens' },
    address: '205-04 Hillside Ave, Hollis, NY 11423',
    phone: '(718) 464-2020',
    phoneDigits: '7184642020',
    hours: {
      en: ['Mon–Thu · 9:00 AM — 6:00 PM', 'Fri · 9:00 AM — 4:00 PM', 'Sat · By appointment', 'Sun · Closed'],
      es: ['Lun–Jue · 9:00 — 18:00', 'Vie · 9:00 — 16:00', 'Sáb · Con cita', 'Dom · Cerrado'],
    },
    services: [
      { en: 'Comprehensive eye exams', es: 'Exámenes completos' },
      { en: 'Glaucoma screenings', es: 'Detección de glaucoma' },
      { en: 'Surgical co-management', es: 'Co-manejo quirúrgico' },
      { en: 'Optical fittings', es: 'Adaptación de lentes' },
    ],
    mapQuery: '205-04+Hillside+Ave,+Hollis,+NY+11423',
    coords: { lat: 40.715, lng: -73.749 },
  },
  {
    slug: 'forest-hills',
    name: { en: 'Forest Hills', es: 'Forest Hills' },
    neighborhood: { en: 'Queens', es: 'Queens' },
    address: '96-20 Metropolitan Ave, Forest Hills, NY 11375',
    phone: '(718) 793-2020',
    phoneDigits: '7187932020',
    hours: {
      en: ['Mon–Thu · 9:00 AM — 6:00 PM', 'Fri · 9:00 AM — 4:00 PM', 'Sat · By appointment', 'Sun · Closed'],
      es: ['Lun–Jue · 9:00 — 18:00', 'Vie · 9:00 — 16:00', 'Sáb · Con cita', 'Dom · Cerrado'],
    },
    services: [
      { en: 'Comprehensive eye exams', es: 'Exámenes completos' },
      { en: 'Cataract consults', es: 'Consulta cataratas' },
      { en: 'Dry eye treatment', es: 'Tratamiento ojo seco' },
      { en: 'Optical shop', es: 'Óptica' },
    ],
    mapQuery: '96-20+Metropolitan+Ave,+Forest+Hills,+NY+11375',
    coords: { lat: 40.713, lng: -73.864 },
  },
  {
    slug: 'hicksville',
    name: { en: 'Hicksville', es: 'Hicksville' },
    neighborhood: { en: 'Long Island · Woodbury Optical Studio', es: 'Long Island · Woodbury Optical Studio' },
    address: '185 Woodbury Rd, Hicksville, NY 11801',
    phone: '(516) 681-3937',
    phoneDigits: '5166813937',
    hours: {
      en: ['Mon–Thu · 10:00 AM — 6:00 PM', 'Fri · 10:00 AM — 4:00 PM', 'Sat · By appointment', 'Sun · Closed'],
      es: ['Lun–Jue · 10:00 — 18:00', 'Vie · 10:00 — 16:00', 'Sáb · Con cita', 'Dom · Cerrado'],
    },
    services: [
      { en: 'Designer eyewear', es: 'Lentes de diseñador' },
      { en: 'Contact lens fittings', es: 'Adaptación de lentes de contacto' },
      { en: 'Annual eye exams', es: 'Exámenes anuales' },
      { en: 'Premium optical', es: 'Óptica premium' },
    ],
    mapQuery: '185+Woodbury+Rd,+Hicksville,+NY+11801',
    coords: { lat: 40.794, lng: -73.515 },
  },
];

export function findLocation(slug) {
  return locations.find((l) => l.slug === slug) ?? null;
}
