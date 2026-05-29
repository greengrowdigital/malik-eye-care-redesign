import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import { posts } from '../../data/posts.js';
import PageHero from '../../components/PageHero.jsx';
import CTABand from '../../components/CTABand.jsx';

export default function BlogIndex() {
  const { lang } = useI18n();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="— Journal"
        title={lang === 'en'
          ? ['Vision care,', <span key="s" className="italic text-[var(--color-gold-deep)]">plainly written.</span>]
          : ['Cuidado visual,', <span key="s" className="italic text-[var(--color-gold-deep)]">en lenguaje claro.</span>]
        }
        lede={lang === 'en'
          ? 'Notes from our doctors, written for patients — not journals.'
          : 'Notas de nuestros doctores, escritas para pacientes — no para revistas científicas.'
        }
      />

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-20"
          >
            <Link to={`/blog/${featured.slug}`} className="lg:col-span-7 group block">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                <img src={featured.cover} alt="" loading="lazy" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              </div>
            </Link>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <span className="tape mb-6 self-start">Featured</span>
              <Link to={`/blog/${featured.slug}`} className="group">
                <div className="stencil text-[var(--color-muted)] mb-3">{featured.date} · {featured.category}</div>
                <h2 className="font-display text-3xl lg:text-5xl leading-tight mb-5 group-hover:text-[var(--color-gold-deep)] transition-colors">
                  {tField(featured.title, lang)}
                </h2>
                <p className="text-base text-[var(--color-ink-soft)] leading-relaxed mb-5">{tField(featured.excerpt, lang)}</p>
                <div className="stencil text-[var(--color-gold-deep)] group-hover:translate-x-1 transition-transform">
                  {lang === 'en' ? 'Read article' : 'Leer artículo'} →
                </div>
              </Link>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {rest.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
              >
                <Link to={`/blog/${p.slug}`} className="card-tilt group block bg-[var(--color-paper)] border border-[var(--color-line)] rounded-2xl overflow-hidden h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  </div>
                  <div className="p-6">
                    <div className="stencil text-[var(--color-muted)] mb-3">{p.date} · {p.category}</div>
                    <h3 className="font-display text-2xl leading-tight mb-3">{tField(p.title, lang)}</h3>
                    <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{tField(p.excerpt, lang)}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? 'Have a topic you\'d like covered?' : '¿Hay un tema que te interesaría leer?'}
        ctaLabel={lang === 'en' ? 'Tell us' : 'Cuéntanos'}
        ctaTo="/contact"
        variant="gold"
      />
    </>
  );
}
