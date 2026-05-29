import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import { doctors } from '../../data/doctors.js';
import PageHero from '../../components/PageHero.jsx';
import CTABand from '../../components/CTABand.jsx';

export default function DoctorsIndex() {
  const { lang } = useI18n();

  return (
    <>
      <PageHero
        eyebrow="— Doctors"
        title={lang === 'en'
          ? ['Nine doctors.', <span key="s" className="italic text-[var(--color-gold-deep)]">One standard.</span>]
          : ['Nueve doctores.', <span key="s" className="italic text-[var(--color-gold-deep)]">Un solo estándar.</span>]
        }
        lede={lang === 'en'
          ? 'Board-certified ophthalmologists and fellowship-trained optometrists — many recognized among the top in the region.'
          : 'Oftalmólogos certificados y optometristas con fellowship — muchos reconocidos entre los mejores de la región.'
        }
      />

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {doctors.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/doctors/${d.slug}`}
                  className="card-tilt group block bg-[var(--color-paper)] rounded-2xl overflow-hidden border border-[var(--color-line)] h-full"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[var(--color-bone-soft)]">
                    <img
                      src={d.photo}
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                  </div>
                  <div className="p-6">
                    <div className="stencil text-[var(--color-gold-deep)] mb-2">0{i + 1}</div>
                    <h3 className="font-display text-2xl mb-1 leading-tight">{d.name}</h3>
                    <div className="text-xs text-[var(--color-muted)] mb-4">{tField(d.role, lang)}</div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tField(d.specialties, lang).slice(0, 3).map((s) => (
                        <span key={s} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-[var(--color-bone-soft)] rounded-full text-[var(--color-ink-soft)]">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="stencil text-[var(--color-gold-deep)] flex items-center gap-2">
                      {lang === 'en' ? 'Read bio' : 'Leer biografía'} <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? 'Pick a doctor. We\'ll find the time.' : 'Elige un doctor. Encontramos el horario.'}
        ctaLabel={lang === 'en' ? 'Request an appointment' : 'Solicitar cita'}
        ctaTo="/request-appointment"
        variant="gold"
      />
    </>
  );
}
