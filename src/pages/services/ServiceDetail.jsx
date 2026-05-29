import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { findService } from '../../data/services.js';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import PageHero from '../../components/PageHero.jsx';
import { Reveal } from '../../components/Reveal.jsx';
import LocationsBand from '../../components/LocationsBand.jsx';
import CTABand from '../../components/CTABand.jsx';

const childLabels = {
  'cataracts.selfTest': { en: 'Cataract Self-Test', es: 'Test de Cataratas' },
  'cataracts.options': { en: 'Surgery Options', es: 'Opciones de Cirugía' },
  'cataracts.iol': { en: 'Premium IOL Lenses', es: 'Lentes IOL Premium' },
  'lasik.selfTest': { en: 'LASIK Self-Test', es: 'Test de LASIK' },
  'lasik.prk': { en: 'PRK', es: 'PRK' },
  'glaucoma.what': { en: 'What is Glaucoma', es: 'Qué es el Glaucoma' },
  'glaucoma.treatment': { en: 'Treatment Options', es: 'Opciones de Tratamiento' },
  'optical.exams': { en: 'Annual Eye Exams', es: 'Exámenes Anuales' },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t, lang } = useI18n();
  const service = findService(slug);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <PageHero
        eyebrow={`— ${tField({ en: 'Service', es: 'Servicio' }, lang)}`}
        title={tField(service.title, lang)}
        lede={tField(service.tagline, lang)}
      />

      <section className="bg-[var(--color-paper)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg sm:text-xl leading-relaxed text-[var(--color-ink)] font-display">
                {tField(service.summary, lang)}
              </p>
            </Reveal>

            <ul className="mt-10 space-y-3">
              {tField(service.bullets, lang).map((b, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <li className="flex items-start gap-4 py-3 border-b border-[var(--color-line)]">
                    <span className="stencil text-[var(--color-gold-deep)] pt-1">0{i + 1}</span>
                    <span className="text-base text-[var(--color-ink-soft)] leading-relaxed">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            {service.children?.length > 0 && (
              <div className="mt-12 p-6 rounded-2xl bg-[var(--color-bone-soft)]">
                <div className="stencil text-[var(--color-gold-deep)] mb-4">— {tField({ en: 'Dig deeper', es: 'Profundiza' }, lang)}</div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.children.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/services/${service.slug}/${c.slug}`}
                      className="group flex items-center justify-between gap-2 px-4 py-3 bg-[var(--color-paper)] rounded-xl border border-[var(--color-line)] hover:border-[var(--color-gold)] transition-colors"
                    >
                      <span className="text-sm font-medium">{tField(childLabels[c.titleKey], lang)}</span>
                      <span className="text-[var(--color-gold-deep)] transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="sticky top-32 space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={service.image} alt="" loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-deep)]/70 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-[var(--color-bone)]">
                    <div className="stencil mb-2 opacity-80">Procedure detail</div>
                    <div className="font-display text-2xl">{tField(service.title, lang)}</div>
                  </div>
                </div>
                {service.secondaryImage && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img src={service.secondaryImage} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {service.sections?.length > 0 && (
        <section className="bg-[var(--color-bone)] py-20 lg:py-28">
          <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <div className="stencil text-[var(--color-gold-deep)] mb-4">— {tField({ en: 'How it works', es: 'Cómo funciona' }, lang)}</div>
              <h2 className="h-section mb-12">{tField({ en: 'The procedure, step by step.', es: 'El procedimiento, paso a paso.' }, lang)}</h2>
            </Reveal>
            <div className="space-y-12">
              {service.sections.map((sec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="grid md:grid-cols-12 gap-6 pb-12 border-b border-[var(--color-line)]"
                >
                  <div className="md:col-span-2">
                    <div className="font-mono text-3xl text-[var(--color-gold-deep)]">0{i + 1}</div>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-display text-2xl md:text-3xl mb-3">{tField(sec.title, lang)}</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)] max-w-2xl">
                      {tField(sec.body, lang)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title={tField({
          en: `Ready to talk about ${tField(service.title, lang)}?`,
          es: `¿Listo para hablar de ${tField(service.title, lang)}?`,
        }, lang)}
        body={tField({
          en: 'Pick a convenient location and we\'ll find a time that works.',
          es: 'Elige una ubicación cercana y encontramos un horario.',
        }, lang)}
        ctaLabel={t('common.bookConsult')}
        ctaTo="/request-appointment"
        variant="gold"
      />

      <LocationsBand />
    </>
  );
}
