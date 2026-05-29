import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import { findLocation, locations } from '../../data/locations.js';
import { doctors } from '../../data/doctors.js';
import { Reveal } from '../../components/Reveal.jsx';
import CTABand from '../../components/CTABand.jsx';

export default function LocationDetail() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const loc = findLocation(slug);

  if (!loc) return <Navigate to="/locations" replace />;

  const docsHere = doctors.filter((d) => d.locations.includes(slug));
  const others = locations.filter((l) => l.slug !== slug);

  return (
    <>
      <section className="relative bg-[var(--color-ink-deep)] text-[var(--color-bone)] pt-32 sm:pt-40 lg:pt-48 pb-20 lg:pb-28 overflow-hidden grain">
        <div className="iris-glow absolute inset-0" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Link to="/locations" className="stencil text-[var(--color-bone)]/60 link-underline">
              ← {lang === 'en' ? 'All locations' : 'Todas las ubicaciones'}
            </Link>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-10 mt-8 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="stencil text-[var(--color-gold)] mb-4">— {tField(loc.neighborhood, lang)}</div>
                <h1 className="h-display">{tField(loc.name, lang)}</h1>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <a
                  href={`tel:${loc.phoneDigits}`}
                  className="block font-display text-4xl text-[var(--color-gold)] hover:text-[var(--color-bone)] transition-colors mb-2"
                >
                  {loc.phone}
                </a>
                <div className="text-[var(--color-bone)]/70 text-sm">{loc.address}</div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <iframe
                  title={`Map of ${tField(loc.name, lang)}`}
                  src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                  className="w-full h-full grayscale-[30%]"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps?q=${loc.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors"
                >
                  {lang === 'en' ? 'Open in Google Maps' : 'Abrir en Google Maps'} →
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${loc.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 border border-[var(--color-ink)] rounded-full text-sm hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] transition-colors"
                >
                  {lang === 'en' ? 'Directions' : 'Indicaciones'}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 space-y-8">
            <Reveal delay={0.1}>
              <div>
                <div className="stencil text-[var(--color-gold-deep)] mb-3">— {lang === 'en' ? 'Hours' : 'Horario'}</div>
                <ul className="space-y-1.5 text-sm font-mono text-[var(--color-ink-soft)]">
                  {tField(loc.hours, lang).map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <div className="stencil text-[var(--color-gold-deep)] mb-3">— {lang === 'en' ? 'What we do here' : 'Qué hacemos aquí'}</div>
                <ul className="space-y-1.5 text-sm text-[var(--color-ink-soft)]">
                  {tField(loc.services, lang).map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-gold-deep)] mt-1">·</span><span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {docsHere.length > 0 && (
        <section className="bg-[var(--color-bone)] py-16 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="stencil text-[var(--color-gold-deep)] mb-3">— {lang === 'en' ? 'Doctors at this office' : 'Doctores en este consultorio'}</div>
              <h2 className="h-section mb-10">{lang === 'en' ? 'Who you\'ll see.' : 'Quiénes te atienden.'}</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {docsHere.map((d, i) => (
                <motion.div
                  key={d.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                >
                  <Link to={`/doctors/${d.slug}`} className="card-tilt group block bg-[var(--color-paper)] border border-[var(--color-line)] rounded-2xl overflow-hidden h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={d.photo} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <div className="font-display text-lg">{d.name}</div>
                      <div className="stencil text-[var(--color-muted)] mt-1">{tField(d.role, lang)}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[var(--color-paper)] py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="stencil text-[var(--color-gold-deep)] mb-4">— {lang === 'en' ? 'Other locations' : 'Otras ubicaciones'}</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {others.map((l) => (
              <Link
                key={l.slug}
                to={`/locations/${l.slug}`}
                className="px-4 py-3 bg-[var(--color-bone-soft)] rounded-xl text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors flex justify-between"
              >
                <span>{tField(l.name, lang)}</span>
                <span className="text-[var(--color-gold-deep)]" aria-hidden>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? `Visit our ${tField(loc.name, lang)} office.` : `Visita nuestro consultorio de ${tField(loc.name, lang)}.`}
        ctaLabel={lang === 'en' ? 'Request an appointment' : 'Solicitar cita'}
        ctaTo="/request-appointment"
        variant="gold"
      />
    </>
  );
}
