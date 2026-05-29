import { motion } from 'framer-motion';
import { MaskReveal } from './Reveal.jsx';

export default function PageHero({ eyebrow, title, lede, align = 'left', dark = false }) {
  return (
    <section
      className={`relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-28 overflow-hidden ${
        dark ? 'bg-[var(--color-ink-deep)] text-[var(--color-bone)] grain' : 'bg-[var(--color-bone)] text-[var(--color-ink)]'
      }`}
    >
      {dark && <div className="iris-glow absolute inset-0 pointer-events-none" aria-hidden />}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`stencil mb-5 ${dark ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold-deep)]'}`}
            >
              {eyebrow}
            </motion.div>
          )}
          <h1 className="h-display">
            {Array.isArray(title)
              ? title.map((line, i) => (
                  <MaskReveal key={i} delay={0.08 + i * 0.1}>
                    {line}
                  </MaskReveal>
                ))
              : <MaskReveal>{title}</MaskReveal>}
          </h1>
          {lede && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className={`mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed ${dark ? 'text-[var(--color-bone)]/70' : 'text-[var(--color-ink-soft)]'}`}
            >
              {lede}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
