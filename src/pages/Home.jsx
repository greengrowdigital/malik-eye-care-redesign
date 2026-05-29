import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useI18n, tField } from '../i18n/I18nContext.jsx';
import { Reveal, MaskReveal } from '../components/Reveal.jsx';
import { services } from '../data/services.js';
import { testimonials } from '../data/testimonials.js';
import LocationsBand from '../components/LocationsBand.jsx';
import CTABand from '../components/CTABand.jsx';

export default function Home() {
  const { t, lang } = useI18n();
  return (
    <>
      <Hero />
      <Marquee />
      <Pillars />
      <FeaturedDoctor />
      <TestimonialsBand />
      <SelfTestCTAs />
      <LocationsBand />
      <CTABand
        title={lang === 'en' ? 'Ready when you are.' : '¿Listo cuando lo estés?'}
        body={
          lang === 'en'
            ? 'Five offices, online booking, bilingual front desk. Pick the office closest to you.'
            : 'Cinco consultorios, agenda en línea, recepción bilingüe. Elige el más cercano.'
        }
        ctaLabel={t('nav.request')}
        ctaTo="/request-appointment"
        variant="gold"
      />
    </>
  );
}

function Hero() {
  const { t } = useI18n();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] bg-[var(--color-ink-deep)] text-[var(--color-bone)] overflow-hidden grain pt-[68px] sm:pt-[76px]"
    >
      <motion.div style={{ y }} className="absolute inset-0 iris-glow" aria-hidden />
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 min-h-[calc(100svh-76px)] flex flex-col justify-between pt-10 pb-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex justify-between items-start gap-6 flex-wrap"
        >
          <div className="stencil text-[var(--color-gold)] max-w-md">
            {t('home.eyebrow')}
          </div>
          <div className="stencil text-[var(--color-bone)]/50 text-right">
            <div>40°51′N · 73°55′W</div>
            <div className="mt-1">5 OFFICES · NEW YORK</div>
          </div>
        </motion.div>

        <div className="my-10">
          <h1 className="h-display text-[var(--color-bone)]">
            <MaskReveal delay={1.7}>{t('home.title1')}</MaskReveal>
            <MaskReveal delay={1.85}>
              <span className="italic font-display text-[var(--color-gold)]">
                {t('home.title2')}
              </span>
            </MaskReveal>
            <MaskReveal delay={2.0}>{t('home.title3')}</MaskReveal>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.4 }}
          className="grid lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--color-bone)]/80 max-w-2xl">
              {t('home.lede')}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              to="/request-appointment"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] rounded-full text-sm tracking-wide font-medium hover:bg-[var(--color-bone)] transition-colors"
            >
              {t('home.ctaPrimary')}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/doctors"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-[var(--color-bone)]/30 text-[var(--color-bone)] rounded-full text-sm tracking-wide hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)] transition-colors"
            >
              {t('home.ctaSecondary')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mt-10 flex items-center gap-4 text-[var(--color-bone)]/50"
        >
          <div className="h-px w-12 bg-[var(--color-bone)]/30" />
          <div className="stencil">Scroll to explore</div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-px w-12 bg-[var(--color-bone)]/30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [
    'Castle Connolly Top Doctor 2011–2025',
    'Newsday Top Doctors LI 2018',
    'Board-Certified · AAO Fellows',
    '20+ years of cataract surgery',
    'Five NYC offices',
  ];
  return (
    <div className="bg-[var(--color-ink-deep)] text-[var(--color-bone)] overflow-hidden border-y border-[var(--color-bone)]/8 py-4">
      <div className="marquee-track flex gap-16 whitespace-nowrap stencil text-[var(--color-gold)]">
        {Array.from({ length: 3 }).map((_, k) => (
          <div key={k} className="flex gap-16 shrink-0">
            {items.map((i) => (
              <span key={i}>· {i}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Pillars() {
  const { t, lang } = useI18n();
  return (
    <section className="bg-[var(--color-bone)] py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="stencil text-[var(--color-gold-deep)] mb-4">— {t('sections.services')}</div>
              <h2 className="h-section">{t('home.pillarsTitle')}</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex lg:items-end">
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-soft)]">
                {t('home.pillarsLede')}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="card-tilt block relative overflow-hidden rounded-2xl bg-[var(--color-paper)] border border-[var(--color-line)]/50 h-full"
              >
                <div className="aspect-[5/4] relative overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper)]/95 to-transparent" />
                  <div className="absolute top-4 left-4 stencil text-[var(--color-ink)]">
                    0{i + 1} / {String(services.length).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="font-display text-2xl lg:text-3xl mb-3 leading-tight">
                    {tField(s.title, lang)}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mb-5">
                    {tField(s.tagline, lang)}
                  </p>
                  <div className="stencil text-[var(--color-gold-deep)] flex items-center gap-2">
                    {t('common.learnMore')} →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedDoctor() {
  const { t, lang } = useI18n();
  return (
    <section className="relative bg-[var(--color-ink-deep)] text-[var(--color-bone)] py-20 lg:py-32 overflow-hidden grain">
      <div className="iris-glow absolute inset-0 pointer-events-none" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="relative">
                <span className="tape">Featured · 2011–2025</span>
                <div className="mt-6 aspect-[4/5] relative overflow-hidden rounded-2xl bg-[var(--color-ink-soft)]">
                  <img
                    src="https://www.malikeyecare.com/wp-content/uploads/2019/04/MALIK_home.jpg"
                    alt="Dr. Sajid Malik, M.D."
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[var(--color-gold)] text-[var(--color-ink)] px-4 py-3 rounded-lg shadow-2xl">
                  <div className="stencil">Castle Connolly</div>
                  <div className="font-display text-xl leading-tight">Top Doctor</div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="stencil text-[var(--color-gold)] mb-4">{t('home.featuredTitle')}</div>
              <h2 className="h-section text-[var(--color-bone)] mb-6">
                {lang === 'en' ? (
                  <>Dr. Sajid Malik, M.D.<br />
                  <span className="italic text-[var(--color-gold)]">two decades of cataract surgery.</span></>
                ) : (
                  <>Dr. Sajid Malik, M.D.<br />
                  <span className="italic text-[var(--color-gold)]">dos décadas de cirugía de cataratas.</span></>
                )}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-bone)]/75 max-w-2xl mb-8">
                {t('home.featuredBody')}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <Link
                to="/doctors/sajid-malik"
                className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--color-gold)] text-[var(--color-gold)] rounded-full text-sm tracking-wide hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors"
              >
                {t('home.featuredCta')} →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsBand() {
  const { t, lang } = useI18n();
  return (
    <section className="bg-[var(--color-bone-soft)] py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="stencil text-[var(--color-gold-deep)] mb-4 text-center">— testimonials</div>
          <h2 className="h-section text-center max-w-3xl mx-auto mb-16">{t('home.testimonialsTitle')}</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {testimonials.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="bg-[var(--color-paper)] p-6 lg:p-7 rounded-2xl border border-[var(--color-line)]/50 flex flex-col gap-5"
            >
              <div className="font-display text-5xl text-[var(--color-gold)] leading-none">"</div>
              <blockquote className="font-display text-lg leading-snug text-[var(--color-ink)]">
                {tField(q.quote, lang)}
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-[var(--color-line)]">
                <div className="font-medium text-sm">{q.author}</div>
                <div className="stencil text-[var(--color-muted)] mt-1">{tField(q.role, lang)}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelfTestCTAs() {
  const { t } = useI18n();
  return (
    <section className="bg-[var(--color-bone)] py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-5 lg:gap-8">
        <Reveal>
          <div className="relative bg-[var(--color-ink-deep)] text-[var(--color-bone)] rounded-3xl p-8 lg:p-12 overflow-hidden grain h-full">
            <div className="iris-glow absolute inset-0" aria-hidden />
            <div className="relative z-10">
              <div className="stencil text-[var(--color-gold)] mb-4">Self-test · 60 seconds</div>
              <h3 className="h-section text-[var(--color-bone)] mb-5">{t('home.visionOver50')}</h3>
              <p className="text-[var(--color-bone)]/75 max-w-md mb-8 leading-relaxed">
                {t('home.visionOver50Body')}
              </p>
              <Link
                to="/services/cataracts/self-test"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-gold)] text-[var(--color-ink)] rounded-full text-sm tracking-wide hover:bg-[var(--color-bone)] transition-colors"
              >
                {t('home.visionOver50Cta')} →
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-[var(--color-gold)] text-[var(--color-ink)] rounded-3xl p-8 lg:p-12 h-full relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-2 border-[var(--color-ink)]/10" aria-hidden />
            <div className="absolute -bottom-32 -left-12 w-96 h-96 rounded-full border-2 border-[var(--color-ink)]/5" aria-hidden />
            <div className="relative">
              <div className="stencil text-[var(--color-ink)]/70 mb-4">Patient financing</div>
              <h3 className="h-section mb-5">{t('home.pricelessTitle')}</h3>
              <p className="text-[var(--color-ink)]/80 max-w-md mb-8 leading-relaxed">
                {t('home.pricelessBody')}
              </p>
              <Link
                to="/patient-resources/financing"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full text-sm tracking-wide hover:bg-[var(--color-ink-deep)] transition-colors"
              >
                {t('home.pricelessCta')} →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
