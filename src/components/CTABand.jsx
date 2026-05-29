import { Link } from 'react-router-dom';
import { Reveal } from './Reveal.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function CTABand({ title, body, ctaLabel, ctaTo, variant = 'gold' }) {
  const { t } = useI18n();
  const palettes = {
    gold: 'bg-[var(--color-gold)] text-[var(--color-ink)]',
    ink: 'bg-[var(--color-ink-deep)] text-[var(--color-bone)] grain',
    bone: 'bg-[var(--color-bone-soft)] text-[var(--color-ink)]',
  };
  return (
    <section className={`relative overflow-hidden ${palettes[variant]}`}>
      {variant === 'ink' && <div className="iris-glow absolute inset-0 pointer-events-none" aria-hidden />}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="h-section">{title}</h2>
            </Reveal>
            {body && (
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed opacity-90">{body}</p>
              </Reveal>
            )}
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Reveal delay={0.15}>
              <Link
                to={ctaTo}
                className={`group inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm tracking-wide font-medium border ${
                  variant === 'gold'
                    ? 'bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)] hover:bg-transparent hover:text-[var(--color-ink)]'
                    : variant === 'ink'
                      ? 'bg-[var(--color-gold)] text-[var(--color-ink)] border-[var(--color-gold)] hover:bg-transparent hover:text-[var(--color-gold)]'
                      : 'bg-[var(--color-ink)] text-[var(--color-bone)] border-[var(--color-ink)] hover:bg-transparent hover:text-[var(--color-ink)]'
                } transition-colors`}
              >
                {ctaLabel ?? t('common.bookConsult')}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
