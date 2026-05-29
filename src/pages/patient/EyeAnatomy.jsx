import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero.jsx';
import { Reveal } from '../../components/Reveal.jsx';
import CTABand from '../../components/CTABand.jsx';
import { useI18n } from '../../i18n/I18nContext.jsx';

const parts = [
  {
    name: { en: 'Cornea', es: 'Córnea' },
    role: { en: 'Clear front window — refracts incoming light.', es: 'Ventana frontal — refracta la luz entrante.' },
  },
  {
    name: { en: 'Iris & Pupil', es: 'Iris y Pupila' },
    role: { en: 'Adjustable aperture — controls light reaching the retina.', es: 'Apertura ajustable — controla la luz que llega a la retina.' },
  },
  {
    name: { en: 'Lens', es: 'Cristalino' },
    role: { en: 'Adaptive focus — fine-tunes the image. Cataracts cloud this.', es: 'Enfoque adaptativo — ajusta finamente la imagen. Las cataratas lo opacan.' },
  },
  {
    name: { en: 'Retina', es: 'Retina' },
    role: { en: 'Photoreceptor layer — converts light to neural signal.', es: 'Capa fotorreceptora — convierte luz en señal neural.' },
  },
  {
    name: { en: 'Macula', es: 'Mácula' },
    role: { en: 'Central retinal zone — sharp, color-detailed vision.', es: 'Zona retinal central — visión nítida y detallada.' },
  },
  {
    name: { en: 'Optic Nerve', es: 'Nervio Óptico' },
    role: { en: 'Carries the signal to the brain. Damaged in glaucoma.', es: 'Lleva la señal al cerebro. Se daña en el glaucoma.' },
  },
];

export default function EyeAnatomy() {
  const { lang } = useI18n();
  return (
    <>
      <PageHero
        eyebrow="— Education"
        title={lang === 'en' ? 'Eye anatomy' : 'Anatomía del ojo'}
        lede={lang === 'en'
          ? 'A short, plain-language tour of the parts of the eye that matter when we talk about treatment.'
          : 'Un recorrido breve y claro por las partes del ojo que importan cuando hablamos de tratamiento.'
        }
      />

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="aspect-square relative bg-[var(--color-ink-deep)] rounded-3xl overflow-hidden grain">
                <div className="iris-glow absolute inset-0" aria-hidden />
                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#c9a961" strokeWidth="1" opacity="0.4" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#c9a961" strokeWidth="1" opacity="0.3" />
                  <circle cx="200" cy="200" r="80" fill="#1f3450" />
                  <circle cx="200" cy="200" r="80" fill="url(#irisGrad)" />
                  <circle cx="200" cy="200" r="32" fill="#050d1a" />
                  <circle cx="210" cy="188" r="9" fill="#f8f5ee" opacity="0.9" />
                  <defs>
                    <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#4a7c9c" />
                      <stop offset="100%" stopColor="#0b1d33" />
                    </radialGradient>
                  </defs>
                  <line x1="200" y1="40" x2="200" y2="360" stroke="#c9a961" strokeWidth="0.5" opacity="0.3" />
                  <line x1="40" y1="200" x2="360" y2="200" stroke="#c9a961" strokeWidth="0.5" opacity="0.3" />
                </svg>
                <div className="absolute bottom-4 left-4 stencil text-[var(--color-gold)]">Schematic · not to scale</div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <div className="stencil text-[var(--color-gold-deep)] mb-3">— {lang === 'en' ? 'The parts' : 'Las partes'}</div>
              <h2 className="h-section mb-8">{lang === 'en' ? 'Six structures, doing remarkable work.' : 'Seis estructuras haciendo trabajo notable.'}</h2>
            </Reveal>
            <ul className="space-y-1">
              {parts.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="grid grid-cols-12 gap-4 py-5 border-b border-[var(--color-line)]"
                >
                  <div className="col-span-1 stencil text-[var(--color-gold-deep)]">0{i + 1}</div>
                  <div className="col-span-4 font-display text-xl">{lang === 'en' ? p.name.en : p.name.es}</div>
                  <div className="col-span-7 text-sm text-[var(--color-ink-soft)] leading-relaxed">{lang === 'en' ? p.role.en : p.role.es}</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? 'Curious about more?' : '¿Quieres saber más?'}
        ctaLabel={lang === 'en' ? 'Browse our journal' : 'Lee nuestro diario'}
        ctaTo="/blog"
        variant="bone"
      />
    </>
  );
}
