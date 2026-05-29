import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import { locations } from '../../data/locations.js';
import PageHero from '../../components/PageHero.jsx';
import { Reveal } from '../../components/Reveal.jsx';

export default function LocationsIndex() {
  const { lang } = useI18n();

  return (
    <>
      <PageHero
        eyebrow="— Locations"
        title={lang === 'en'
          ? ['Five offices.', <span key="s" className="italic text-[var(--color-gold-deep)]">Five neighborhoods.</span>]
          : ['Cinco consultorios.', <span key="s" className="italic text-[var(--color-gold-deep)]">Cinco barrios.</span>]
        }
        lede={lang === 'en'
          ? 'Each office is fully staffed for routine exams, surgical consultations and optical fittings. Pick the one closest to you.'
          : 'Cada consultorio está completamente equipado para exámenes de rutina, consultas quirúrgicas y prueba de lentes. Elige el más cercano.'
        }
      />

      <section className="bg-[var(--color-paper)] pb-24 pt-8">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 space-y-16">
          {locations.map((loc, i) => (
            <motion.article
              key={loc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch"
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden rounded-2xl bg-[var(--color-bone-soft)]">
                  <iframe
                    title={`Map of ${tField(loc.name, lang)}`}
                    src={`https://www.google.com/maps?q=${loc.mapQuery}&output=embed`}
                    className="absolute inset-0 w-full h-full grayscale-[40%]"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 stencil bg-[var(--color-paper)]/95 backdrop-blur px-3 py-1.5 rounded">
                    0{i + 1} / 05
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col">
                <div className="stencil text-[var(--color-gold-deep)] mb-3">— {tField(loc.neighborhood, lang)}</div>
                <h2 className="font-display text-4xl lg:text-5xl mb-4 leading-tight">{tField(loc.name, lang)}</h2>
                <div className="text-base leading-relaxed text-[var(--color-ink-soft)] mb-6">{loc.address}</div>
                <a href={`tel:${loc.phoneDigits}`} className="font-mono text-2xl mb-6 text-[var(--color-ink)] hover:text-[var(--color-gold-deep)] transition-colors">
                  {loc.phone}
                </a>
                <ul className="mb-6 space-y-1.5">
                  {tField(loc.services, lang).map((s) => (
                    <li key={s} className="text-sm text-[var(--color-ink-soft)] flex items-start gap-2">
                      <span className="text-[var(--color-gold-deep)] mt-1">·</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="px-5 py-3 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full text-sm tracking-wide hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors"
                  >
                    {lang === 'en' ? 'See details' : 'Ver detalles'} →
                  </Link>
                  <a
                    href={`https://www.google.com/maps?q=${loc.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border border-[var(--color-ink)] rounded-full text-sm tracking-wide hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] transition-colors"
                  >
                    {lang === 'en' ? 'Get directions' : 'Cómo llegar'}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
