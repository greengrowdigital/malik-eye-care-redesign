import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { findPost, posts } from '../../data/posts.js';
import { useI18n, tField } from '../../i18n/I18nContext.jsx';
import { Reveal } from '../../components/Reveal.jsx';
import CTABand from '../../components/CTABand.jsx';

function renderInline(s) {
  const parts = s.split(/\*\*(.+?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-[var(--color-ink)]">{p}</strong> : <span key={i}>{p}</span>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const post = findPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const more = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-12 bg-[var(--color-bone)]">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <Link to="/blog" className="stencil text-[var(--color-muted)] link-underline">
              ← {lang === 'en' ? 'Back to journal' : 'Volver al diario'}
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="stencil text-[var(--color-gold-deep)] mt-8 mb-4">{post.date} · {post.category}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display">{tField(post.title, lang)}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-lg sm:text-xl text-[var(--color-ink-soft)] max-w-2xl leading-relaxed">{tField(post.excerpt, lang)}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-paper)] py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-12">
              <img src={post.cover} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <article className="prose-custom space-y-6">
            {tField(post.body, lang).map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="text-lg leading-relaxed text-[var(--color-ink-soft)]"
              >
                {renderInline(para)}
              </motion.p>
            ))}
          </article>
        </div>
      </section>

      <section className="bg-[var(--color-bone)] py-16">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="stencil text-[var(--color-gold-deep)] mb-6">— {lang === 'en' ? 'Keep reading' : 'Sigue leyendo'}</div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {more.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="card-tilt group block bg-[var(--color-paper)] border border-[var(--color-line)] rounded-2xl overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="font-display text-xl mb-2">{tField(p.title, lang)}</div>
                  <div className="stencil text-[var(--color-muted)]">{p.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={lang === 'en' ? 'Questions about something you read?' : '¿Dudas sobre algo que leíste?'}
        ctaLabel={lang === 'en' ? 'Ask a doctor' : 'Consulta a un doctor'}
        ctaTo="/contact"
        variant="gold"
      />
    </>
  );
}
