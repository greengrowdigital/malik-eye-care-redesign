import { motion } from 'framer-motion';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import { testimonials } from '../../data/testimonials.js';
import PageHero from '../../components/PageHero.jsx';
import CTABand from '../../components/CTABand.jsx';

const extra = [
  {
    quote: {
      en: 'Genuinely no rush. The Hollis team gave me an hour I needed and explained the OCT scan on the screen with me.',
      es: 'Sin prisa, en serio. El equipo de Hollis me dio la hora que necesitaba y me explicó el OCT en la pantalla conmigo.',
    },
    author: 'Marisol P.',
    role: { en: 'Glaucoma Monitoring · Hollis', es: 'Monitoreo de Glaucoma · Hollis' },
  },
  {
    quote: {
      en: 'My mother does not speak English. Dr. Paniccia\'s Spanish made the appointment feel like home. They earned a lifelong family.',
      es: 'Mi mamá no habla inglés. El español de la Dra. Paniccia hizo que la cita se sintiera como casa. Se ganaron a una familia para siempre.',
    },
    author: 'Carlos D.',
    role: { en: 'Family Optometry · Jackson Heights', es: 'Optometría Familiar · Jackson Heights' },
  },
  {
    quote: {
      en: 'I bought designer frames in Hicksville and the optician suggested ones that actually fit my face. First time anyone has done that.',
      es: 'Compré monturas de diseñador en Hicksville y la óptica me sugirió unas que de verdad encajaban con mi cara. Primera vez que alguien lo hace.',
    },
    author: 'Tom W.',
    role: { en: 'Optical · Hicksville', es: 'Óptica · Hicksville' },
  },
  {
    quote: {
      en: 'Dr. Genson explained my diabetic retinopathy in a way I could understand. I take my A1c more seriously now.',
      es: 'El Dr. Genson me explicó mi retinopatía diabética de forma entendible. Ahora me tomo más en serio mi A1c.',
    },
    author: 'Patricia L.',
    role: { en: 'Retina · Manhattan', es: 'Retina · Manhattan' },
  },
];

const all = [...testimonials, ...extra];

export default function Testimonials() {
  const { lang } = useI18n();
  return (
    <>
      <PageHero
        eyebrow="— Testimonials"
        title={lang === 'en'
          ? ['In', 'our patients\'', <span key="s1" className="italic text-[var(--color-gold-deep)]">own</span>, 'words.']
          : ['En', 'las palabras', <span key="s1" className="italic text-[var(--color-gold-deep)]">propias de</span>, 'nuestros pacientes.']
        }
        lede={lang === 'en'
          ? 'Selected reviews from across our five locations.'
          : 'Reseñas seleccionadas a través de nuestras cinco ubicaciones.'
        }
      />

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {all.map((q, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
                className="bg-[var(--color-paper)] border border-[var(--color-line)] rounded-2xl p-7 lg:p-8 flex flex-col gap-5"
              >
                <div className="font-display text-6xl text-[var(--color-gold)] leading-none">"</div>
                <blockquote className="font-display text-xl lg:text-2xl leading-snug">
                  {tField(q.quote, lang)}
                </blockquote>
                <figcaption className="mt-auto pt-5 border-t border-[var(--color-line)] flex justify-between items-center">
                  <div>
                    <div className="font-medium">{q.author}</div>
                    <div className="stencil text-[var(--color-muted)] mt-1">{tField(q.role, lang)}</div>
                  </div>
                  <div className="text-[var(--color-gold)] tracking-widest text-sm">★★★★★</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? 'Become the next story.' : 'Sé la próxima historia.'}
        ctaLabel={lang === 'en' ? 'Request an appointment' : 'Solicitar cita'}
        ctaTo="/request-appointment"
        variant="gold"
      />
    </>
  );
}
