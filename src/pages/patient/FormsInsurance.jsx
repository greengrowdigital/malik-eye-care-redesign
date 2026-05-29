import { motion } from 'framer-motion';
import PageHero from '../../components/PageHero.jsx';
import { Reveal } from '../../components/Reveal.jsx';
import CTABand from '../../components/CTABand.jsx';
import { useI18n } from '../../i18n/I18nContext.jsx';

const insurances = [
  'Aetna', 'Affinity', 'AmeriGroup', 'BlueCross BlueShield', 'Cigna', 'Davis Vision',
  'EmblemHealth', 'EyeMed', 'Fidelis Care', 'Healthfirst', 'Medicare', 'MetroPlus',
  'Oxford', 'Spectera', 'UnitedHealthcare', 'VSP', 'WellCare', '1199 SEIU',
];

const forms = [
  {
    title: { en: 'New patient intake', es: 'Registro de paciente nuevo' },
    desc: { en: 'Complete before your first visit to speed check-in.', es: 'Completa antes de tu primera visita para agilizar el registro.' },
    file: '/forms/new-patient.pdf',
  },
  {
    title: { en: 'HIPAA privacy authorization', es: 'Autorización HIPAA' },
    desc: { en: 'Authorize who we can share your records with.', es: 'Autoriza con quién compartimos tus registros.' },
    file: '/forms/hipaa.pdf',
  },
  {
    title: { en: 'Medical history form', es: 'Historia médica' },
    desc: { en: 'Detailed medical history for surgical consults.', es: 'Historia médica detallada para consultas quirúrgicas.' },
    file: '/forms/medical-history.pdf',
  },
];

export default function FormsInsurance() {
  const { lang } = useI18n();
  return (
    <>
      <PageHero
        eyebrow="— Patients · Forms"
        title={lang === 'en' ? 'Forms & insurance' : 'Formularios y seguro'}
        lede={lang === 'en'
          ? 'Download patient intake forms in advance, and review the insurance plans we accept.'
          : 'Descarga los formularios por adelantado y revisa los seguros que aceptamos.'
        }
      />

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="stencil text-[var(--color-gold-deep)] mb-3">— {lang === 'en' ? 'Downloadable forms' : 'Formularios descargables'}</div>
              <h2 className="h-section mb-8">{lang === 'en' ? 'Save 10 minutes at check-in.' : 'Ahorra 10 minutos al registrarte.'}</h2>
            </Reveal>
            <div className="space-y-3">
              {forms.map((f, i) => (
                <motion.a
                  key={i}
                  href={f.file}
                  onClick={(e) => { e.preventDefault(); alert(lang === 'en' ? 'Mock PDF — would download here.' : 'PDF mock — se descargaría aquí.'); }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="flex justify-between items-start gap-4 p-5 bg-[var(--color-paper)] border border-[var(--color-line)] rounded-xl hover:border-[var(--color-gold)] transition-colors group"
                >
                  <div>
                    <div className="font-display text-xl">{lang === 'en' ? f.title.en : f.title.es}</div>
                    <div className="text-sm text-[var(--color-muted)] mt-1">{lang === 'en' ? f.desc.en : f.desc.es}</div>
                  </div>
                  <div className="stencil text-[var(--color-gold-deep)] shrink-0 mt-1.5 group-hover:translate-x-1 transition-transform">PDF ↓</div>
                </motion.a>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="bg-[var(--color-ink-deep)] text-[var(--color-bone)] rounded-2xl p-7 grain relative overflow-hidden">
                <div className="iris-glow absolute inset-0" aria-hidden />
                <div className="relative z-10">
                  <div className="stencil text-[var(--color-gold)] mb-4">— {lang === 'en' ? 'Accepted insurance' : 'Seguros aceptados'}</div>
                  <p className="text-sm text-[var(--color-bone)]/70 mb-6 leading-relaxed">
                    {lang === 'en'
                      ? 'We accept most major medical and vision insurance plans. Please verify coverage with your carrier before your visit.'
                      : 'Aceptamos la mayoría de seguros médicos y de visión. Verifica tu cobertura con tu aseguradora antes de la visita.'
                    }
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {insurances.map((p) => (
                      <span key={p} className="text-xs px-3 py-1.5 border border-[var(--color-bone)]/20 rounded-full text-[var(--color-bone)]/85">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? 'Insurance questions?' : '¿Dudas con tu seguro?'}
        ctaLabel={lang === 'en' ? 'Contact us' : 'Contáctanos'}
        ctaTo="/contact"
        variant="gold"
      />
    </>
  );
}
