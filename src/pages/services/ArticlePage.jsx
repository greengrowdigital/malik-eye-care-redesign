import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero.jsx';
import { Reveal } from '../../components/Reveal.jsx';
import CTABand from '../../components/CTABand.jsx';
import { useI18n } from '../../i18n/I18nContext.jsx';

export default function ArticlePage({
  eyebrow,
  titleEn, titleEs,
  ledeEn, ledeEs,
  image,
  sections,
  backTo,
  backLabelEn = 'Back', backLabelEs = 'Volver',
}) {
  const { lang } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={lang === 'en' ? titleEn : titleEs}
        lede={lang === 'en' ? ledeEn : ledeEs}
      />

      <section className="bg-[var(--color-paper)] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12">
          <article className="lg:col-span-7">
            <div className="space-y-10">
              {sections.map((sec, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div>
                    {sec.title && (
                      <h2 className="font-display text-3xl mb-4 leading-tight">
                        {lang === 'en' ? sec.title.en : sec.title.es}
                      </h2>
                    )}
                    <div className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)] space-y-4">
                      {(lang === 'en' ? sec.body.en : sec.body.es).split('\n\n').map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {backTo && (
              <div className="mt-12">
                <Link to={backTo} className="stencil text-[var(--color-muted)] link-underline">
                  ← {lang === 'en' ? backLabelEn : backLabelEs}
                </Link>
              </div>
            )}
          </article>

          {image && (
            <aside className="lg:col-span-5">
              <div className="sticky top-32 aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={image} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </aside>
          )}
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? 'Have questions? We have answers.' : '¿Tienes preguntas? Tenemos respuestas.'}
        ctaLabel={lang === 'en' ? 'Request an appointment' : 'Solicitar cita'}
        ctaTo="/request-appointment"
        variant="gold"
      />
    </>
  );
}
