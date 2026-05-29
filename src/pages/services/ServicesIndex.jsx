import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import { services } from '../../data/services.js';
import PageHero from '../../components/PageHero.jsx';
import { Reveal } from '../../components/Reveal.jsx';
import CTABand from '../../components/CTABand.jsx';

export default function ServicesIndex() {
  const { t, lang } = useI18n();

  const families = {
    surgical: { en: 'Surgical', es: 'Quirúrgico' },
    medical: { en: 'Medical', es: 'Médico' },
    optical: { en: 'Optical', es: 'Óptica' },
  };

  return (
    <>
      <PageHero
        eyebrow="— Services"
        title={
          lang === 'en'
            ? ['One eye doctor.', <span key="s" className="italic text-[var(--color-gold-deep)]">Every kind of care.</span>]
            : ['Un oftalmólogo.', <span key="s" className="italic text-[var(--color-gold-deep)]">Todo el cuidado.</span>]
        }
        lede={
          lang === 'en'
            ? 'From femtosecond laser surgery to a careful annual exam, Malik Eye Care covers the full arc of vision care.'
            : 'Desde cirugía láser femtosegundo hasta un examen anual cuidadoso, Malik Eye Care cubre el arco completo del cuidado visual.'
        }
      />

      {Object.keys(families).map((family, idx) => {
        const list = services.filter((s) => s.family === family);
        return (
          <section key={family} className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-[var(--color-paper)]' : 'bg-[var(--color-bone)]'}`}>
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
              <Reveal>
                <div className="flex items-baseline gap-6 mb-12">
                  <div className="stencil text-[var(--color-gold-deep)]">— {tField(families[family], lang)}</div>
                  <hr className="flex-1 chrome-rule opacity-60" />
                  <div className="font-mono text-xs text-[var(--color-muted)]">{String(list.length).padStart(2, '0')} services</div>
                </div>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
                {list.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={`/services/${s.slug}`}
                      className="card-tilt block bg-[var(--color-paper)] rounded-2xl overflow-hidden border border-[var(--color-line)]/60 h-full group"
                    >
                      <div className="grid sm:grid-cols-5 gap-0 h-full">
                        <div className="sm:col-span-2 aspect-[4/3] sm:aspect-auto overflow-hidden">
                          <img
                            src={s.image}
                            alt=""
                            loading="lazy"
                            className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                          />
                        </div>
                        <div className="sm:col-span-3 p-6 lg:p-8 flex flex-col">
                          <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-3">{tField(s.title, lang)}</h3>
                          <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mb-5">{tField(s.tagline, lang)}</p>
                          <ul className="text-xs text-[var(--color-muted)] space-y-1 mb-5">
                            {tField(s.bullets, lang).slice(0, 2).map((b, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span className="text-[var(--color-gold-deep)] mt-1">·</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-auto stencil text-[var(--color-gold-deep)] flex items-center gap-2">
                            {t('common.readMore')} <span className="transition-transform group-hover:translate-x-1">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABand
        title={lang === 'en' ? 'Not sure where to start?' : '¿No sabes por dónde empezar?'}
        body={lang === 'en' ? 'Our care coordinators will route you to the right doctor and the right office.' : 'Nuestros coordinadores te dirigen al doctor y consultorio correctos.'}
        ctaLabel={t('nav.request')}
        ctaTo="/request-appointment"
        variant="ink"
      />
    </>
  );
}
