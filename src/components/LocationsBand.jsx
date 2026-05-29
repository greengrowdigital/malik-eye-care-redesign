import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../i18n/I18nContext.jsx';
import { locations } from '../data/locations.js';
import { Reveal } from './Reveal.jsx';

export default function LocationsBand() {
  const { t, lang } = useI18n();
  return (
    <section className="relative bg-[var(--color-bone)] py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="stencil text-[var(--color-gold-deep)] mb-4">— {t('sections.locations')}</div>
              <h2 className="h-section max-w-2xl">{t('home.locationsTitle')}</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)] max-w-md">
                {t('home.locationsLede')}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <Link
                to={`/locations/${loc.slug}`}
                className="card-tilt block bg-[var(--color-paper)] border border-[var(--color-line)]/60 rounded-2xl p-6 h-full group"
              >
                <div className="stencil text-[var(--color-muted)]">0{i + 1}</div>
                <h3 className="font-display text-2xl mt-3 mb-1">{tField(loc.name, lang)}</h3>
                <div className="text-xs text-[var(--color-muted)] mb-4">{tField(loc.neighborhood, lang)}</div>
                <div className="text-sm text-[var(--color-ink-soft)] leading-relaxed mb-4">
                  {loc.address}
                </div>
                <a
                  href={`tel:${loc.phoneDigits}`}
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-sm text-[var(--color-ink)] hover:text-[var(--color-gold-deep)] transition-colors block"
                >
                  {loc.phone}
                </a>
                <div className="mt-6 stencil text-[var(--color-gold-deep)] group-hover:translate-x-1 transition-transform">
                  {t('common.directions')} →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
