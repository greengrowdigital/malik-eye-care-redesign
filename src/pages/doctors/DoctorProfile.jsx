import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import { findDoctor, doctors } from '../../data/doctors.js';
import { locations as allLocations } from '../../data/locations.js';
import { Reveal } from '../../components/Reveal.jsx';
import CTABand from '../../components/CTABand.jsx';

export default function DoctorProfile() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const doc = findDoctor(slug);

  if (!doc) return <Navigate to="/doctors" replace />;

  const docLocations = allLocations.filter((l) => doc.locations.includes(l.slug));
  const otherDocs = doctors.filter((d) => d.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 lg:pb-20 bg-[var(--color-bone)]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Link to="/doctors" className="stencil text-[var(--color-muted)] link-underline">
              ← {lang === 'en' ? 'All doctors' : 'Todos los doctores'}
            </Link>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-10 mt-8 lg:mt-12 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="stencil text-[var(--color-gold-deep)] mb-4">— {tField(doc.role, lang)}</div>
                <h1 className="h-display">{doc.name}</h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-2">
                  {tField(doc.specialties, lang).map((s) => (
                    <span key={s} className="text-xs uppercase tracking-wider px-3 py-1.5 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-bone-soft)]">
                <img src={doc.portrait} alt={doc.name} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-[var(--color-paper)]/95 backdrop-blur px-3 py-2 rounded-lg">
                  <div className="stencil text-[var(--color-gold-deep)]">{doc.name.split(',')[0]}</div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-xl sm:text-2xl leading-snug mb-8">{tField(doc.bio, lang)}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="stencil text-[var(--color-gold-deep)] mb-4">— {lang === 'en' ? 'Credentials' : 'Credenciales'}</div>
              <ul className="space-y-2">
                {doc.credentials.map((c, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-[var(--color-ink-soft)] py-2 border-b border-[var(--color-line)]"
                  >
                    <span className="text-[var(--color-gold-deep)] font-mono text-xs mt-0.5">●</span>
                    <span>{c}</span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="stencil text-[var(--color-gold-deep)] mb-4">— {lang === 'en' ? 'Sees patients at' : 'Atiende en'}</div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {docLocations.map((loc, i) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link
                  to={`/locations/${loc.slug}`}
                  className="block bg-[var(--color-paper)] border border-[var(--color-line)] rounded-2xl p-5 hover:border-[var(--color-gold)] transition-colors"
                >
                  <div className="font-display text-xl mb-1">{tField(loc.name, lang)}</div>
                  <div className="text-xs text-[var(--color-muted)] mb-2">{loc.address}</div>
                  <div className="font-mono text-sm">{loc.phone}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="flex items-baseline justify-between mb-8">
              <h3 className="font-display text-3xl">{lang === 'en' ? 'More doctors' : 'Más doctores'}</h3>
              <Link to="/doctors" className="stencil text-[var(--color-gold-deep)] link-underline">
                {lang === 'en' ? 'View all' : 'Ver todos'} →
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {otherDocs.map((d) => (
              <Link
                key={d.slug}
                to={`/doctors/${d.slug}`}
                className="card-tilt block bg-[var(--color-paper)] border border-[var(--color-line)] rounded-2xl overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.photo} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg">{d.name}</div>
                  <div className="stencil text-[var(--color-muted)] mt-1">{tField(d.role, lang)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? `Book a visit with ${doc.name.split(',')[0]}.` : `Reserva una visita con ${doc.name.split(',')[0]}.`}
        ctaLabel={lang === 'en' ? 'Request an appointment' : 'Solicitar cita'}
        ctaTo="/request-appointment"
        variant="ink"
      />
    </>
  );
}
