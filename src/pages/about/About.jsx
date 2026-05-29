import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nContext.jsx';
import PageHero from '../../components/PageHero.jsx';
import { Reveal } from '../../components/Reveal.jsx';
import CTABand from '../../components/CTABand.jsx';
import LocationsBand from '../../components/LocationsBand.jsx';

const stats = [
  { num: '37', label: { en: 'Years of practice', es: 'Años de práctica' } },
  { num: '50K+', label: { en: 'Patients served', es: 'Pacientes atendidos' } },
  { num: '9', label: { en: 'Doctors on staff', es: 'Doctores en plantilla' } },
  { num: '15', label: { en: 'Consecutive Top Doctor years', es: 'Años seguidos como Top Doctor' } },
];

const tech = [
  {
    name: { en: 'Femtosecond Laser', es: 'Láser Femtosegundo' },
    desc: { en: 'OCT-guided precision for cataract and LASIK procedures.', es: 'Precisión guiada por OCT para cataratas y LASIK.' },
  },
  {
    name: { en: 'OCT Imaging', es: 'Imagen OCT' },
    desc: { en: 'High-resolution cross-sectional imaging for surgical planning.', es: 'Imagen transversal de alta resolución para planificación quirúrgica.' },
  },
  {
    name: { en: 'Tonometry', es: 'Tonometría' },
    desc: { en: 'Multiple modalities for accurate intraocular pressure measurement.', es: 'Múltiples modalidades para medir la presión intraocular con precisión.' },
  },
  {
    name: { en: 'Visual Field Testing', es: 'Campos Visuales' },
    desc: { en: 'Humphrey perimetry for glaucoma and neurologic evaluation.', es: 'Perimetría Humphrey para evaluación de glaucoma y neurológica.' },
  },
  {
    name: { en: 'Slit-Lamp Photography', es: 'Fotografía con Lámpara de Hendidura' },
    desc: { en: 'High-magnification documentation of anterior segment findings.', es: 'Documentación de alta magnificación del segmento anterior.' },
  },
  {
    name: { en: 'Corneal Topography', es: 'Topografía Corneal' },
    desc: { en: 'Maps corneal curvature for refractive surgery planning.', es: 'Mapeo de curvatura corneal para planificar cirugía refractiva.' },
  },
];

export default function About() {
  const { lang } = useI18n();
  return (
    <>
      <PageHero
        eyebrow="— About the practice"
        title={lang === 'en'
          ? ['Eye care is', <span key="s" className="italic text-[var(--color-gold-deep)]">personal.</span>]
          : ['El cuidado visual', <span key="s" className="italic text-[var(--color-gold-deep)]">es personal.</span>]
        }
        lede={lang === 'en'
          ? 'We have multiple locations across NY, so you are never far from quality eye care. At Malik Eye Care, no two vision problems are the same — and that is exactly how we treat them.'
          : 'Tenemos múltiples consultorios en NY, así que nunca estás lejos del cuidado de calidad. En Malik Eye Care, ningún problema visual es igual a otro — y exactamente así los tratamos.'
        }
      />

      <section className="bg-[var(--color-paper)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-6 border border-[var(--color-line)] rounded-2xl bg-[var(--color-paper)]"
            >
              <div className="font-display text-5xl lg:text-6xl text-[var(--color-gold-deep)]">{s.num}</div>
              <div className="stencil text-[var(--color-muted)] mt-3">{lang === 'en' ? s.label.en : s.label.es}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src="https://www.malikeyecare.com/wp-content/uploads/2016/09/malik.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="stencil text-[var(--color-gold-deep)] mb-3">— {lang === 'en' ? 'Our philosophy' : 'Nuestra filosofía'}</div>
              <h2 className="h-section mb-6">{lang === 'en' ? 'The unhurried exam.' : 'El examen sin prisa.'}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)] mb-4">
                {lang === 'en'
                  ? 'Whether you are interested in finding glasses or contacts at our Optical Shop, visiting for an annual exam, considering a surgical procedure, or in need of ongoing eye treatment for any ocular disease, you receive individualized care each time you visit our offices.'
                  : 'Sea que busques anteojos o lentes en nuestra óptica, vengas a tu examen anual, consideres un procedimiento quirúrgico o necesites tratamiento continuo, recibes atención individualizada cada visita.'
                }
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)]">
                {lang === 'en'
                  ? 'With services such as Laser Cataract Surgery, LASIK vision correction, glaucoma screenings, and the treatment of a wide range of eye diseases, you find the care you need to see and feel your best.'
                  : 'Con servicios como cirugía láser de cataratas, corrección visual LASIK, detección de glaucoma y el tratamiento de un amplio rango de enfermedades oculares, encuentras el cuidado que necesitas para ver y sentirte mejor.'
                }
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="stencil text-[var(--color-gold-deep)] mb-3">— {lang === 'en' ? 'Technology' : 'Tecnología'}</div>
            <h2 className="h-section max-w-3xl mb-12">{lang === 'en' ? 'The technology behind the care.' : 'La tecnología detrás del cuidado.'}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tech.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className="p-6 bg-[var(--color-paper)] border border-[var(--color-line)] rounded-2xl"
              >
                <div className="stencil text-[var(--color-gold-deep)] mb-3">0{i + 1}</div>
                <h3 className="font-display text-xl mb-2">{lang === 'en' ? t.name.en : t.name.es}</h3>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{lang === 'en' ? t.desc.en : t.desc.es}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink-deep)] text-[var(--color-bone)] py-16 lg:py-20 grain relative">
        <div className="iris-glow absolute inset-0" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12 text-center">
          <Reveal>
            <span className="tape mb-6 inline-block">Recognition · 2011 — 2025</span>
            <h2 className="h-section text-[var(--color-bone)] mt-6 mb-6">
              {lang === 'en' ? 'Castle Connolly Top Doctor for fifteen consecutive years.' : 'Castle Connolly Top Doctor por quince años consecutivos.'}
            </h2>
            <p className="text-[var(--color-bone)]/70 max-w-2xl mx-auto leading-relaxed">
              {lang === 'en'
                ? 'Dr. Sajid Malik has been featured as one of Castle & Connolly\'s Top Ophthalmologists every year from 2011 through 2025, and was honored with the Newsday Top Doctors Long Island Award in 2018.'
                : 'El Dr. Sajid Malik ha sido reconocido como Top Doctor de Castle & Connolly cada año entre 2011 y 2025, y recibió el premio Newsday Top Doctors Long Island en 2018.'
              }
            </p>
            <Link
              to="/doctors/sajid-malik"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] rounded-full text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors"
            >
              {lang === 'en' ? 'Read Dr. Malik\'s bio' : 'Leer biografía del Dr. Malik'} →
            </Link>
          </Reveal>
        </div>
      </section>

      <LocationsBand />

      <CTABand
        title={lang === 'en' ? 'Be seen by people who see you.' : 'Que te atiendan personas que te ven.'}
        ctaLabel={lang === 'en' ? 'Request an appointment' : 'Solicitar cita'}
        ctaTo="/request-appointment"
        variant="gold"
      />
    </>
  );
}
