import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import PageHero from '../../components/PageHero.jsx';
import CTABand from '../../components/CTABand.jsx';

const resources = [
  {
    slug: 'your-visit',
    title: { en: 'Your visit', es: 'Tu visita' },
    desc: { en: 'What to expect — from intake to discharge.', es: 'Qué esperar — desde la recepción hasta el alta.' },
  },
  {
    slug: 'financing',
    title: { en: 'Patient financing · CareCredit', es: 'Financiamiento · CareCredit' },
    desc: { en: 'Pay for vision care over time with flexible plans.', es: 'Paga el cuidado visual a plazos con planes flexibles.' },
  },
  {
    slug: 'forms-insurance',
    title: { en: 'Forms & insurance', es: 'Formularios y seguro' },
    desc: { en: 'Download intake forms and review accepted insurance plans.', es: 'Descarga formularios y revisa los seguros aceptados.' },
  },
  {
    slug: 'post-op-forms',
    title: { en: 'Post-op forms', es: 'Formularios post-operatorios' },
    desc: { en: 'Recovery instructions, drop schedules, contact details.', es: 'Instrucciones de recuperación, horarios de gotas, contactos.' },
  },
  {
    slug: 'eye-anatomy',
    title: { en: 'Eye anatomy', es: 'Anatomía del ojo' },
    desc: { en: 'A short guide to how the eye works — and what we treat.', es: 'Breve guía de cómo funciona el ojo — y qué tratamos.' },
  },
  {
    slug: 'referral-pcp',
    title: { en: 'Referral forms for PCPs', es: 'Formularios de referencia para PCPs' },
    desc: { en: 'For primary care providers to refer a patient.', es: 'Para que el médico de cabecera refiera a un paciente.' },
  },
];

export default function PatientIndex() {
  const { t, lang } = useI18n();
  return (
    <>
      <PageHero
        eyebrow="— Patients"
        title={lang === 'en'
          ? ['Patient', <span key="s" className="italic text-[var(--color-gold-deep)]">resources.</span>]
          : ['Recursos para', <span key="s" className="italic text-[var(--color-gold-deep)]">pacientes.</span>]
        }
        lede={lang === 'en'
          ? 'Forms, instructions, financing and education — collected in one calm place.'
          : 'Formularios, instrucciones, financiamiento y educación — en un solo lugar tranquilo.'
        }
      />

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {resources.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
              >
                <Link
                  to={`/patient-resources/${r.slug}`}
                  className="card-tilt block bg-[var(--color-paper)] border border-[var(--color-line)] rounded-2xl p-6 lg:p-8 h-full group"
                >
                  <div className="stencil text-[var(--color-gold-deep)] mb-4">0{i + 1}</div>
                  <h3 className="font-display text-2xl mb-3 leading-tight">{tField(r.title, lang)}</h3>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mb-6">{tField(r.desc, lang)}</p>
                  <div className="stencil text-[var(--color-gold-deep)] flex items-center gap-2">
                    {t('common.readMore')} <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? 'Need something not here?' : '¿Necesitas algo más?'}
        body={lang === 'en' ? 'Our front desk is happy to walk you through anything.' : 'Nuestra recepción te ayuda con lo que necesites.'}
        ctaLabel={lang === 'en' ? 'Contact us' : 'Contáctanos'}
        ctaTo="/contact"
        variant="bone"
      />
    </>
  );
}
