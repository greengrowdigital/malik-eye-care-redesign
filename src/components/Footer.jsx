import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n, tField } from '../i18n/I18nContext.jsx';
import { locations } from '../data/locations.js';

export default function Footer() {
  const { t, lang } = useI18n();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubscribe(e) {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
    setEmail('');
  }

  return (
    <footer className="relative bg-[var(--color-ink-deep)] text-[var(--color-bone)] mt-24 grain">
      <div className="iris-glow absolute inset-0 pointer-events-none" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 pt-20 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="stencil text-[var(--color-gold)] mb-6">Malik Eye Care · 1988 → Today</div>
            <h2 className="h-section text-[var(--color-bone)] mb-6 max-w-md">
              {t('footer.tagline')}
            </h2>
            <p className="text-sm text-[var(--color-bone)]/70 mb-8 max-w-md leading-relaxed">
              {t('footer.newsletter')}
            </p>
            <form onSubmit={onSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletterPlaceholder')}
                aria-label={t('footer.newsletter')}
                className="flex-1 bg-transparent border border-[var(--color-bone)]/30 px-4 py-3 text-sm rounded-full text-[var(--color-bone)] placeholder:text-[var(--color-bone)]/40 focus:border-[var(--color-gold)] outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[var(--color-gold)] text-[var(--color-ink-deep)] rounded-full text-sm font-medium hover:bg-[var(--color-bone)] transition-colors"
              >
                {t('footer.newsletterCta')}
              </button>
            </form>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-[var(--color-gold)] mt-3"
              >
                ✓ {t('footer.newsletterSuccess')}
              </motion.p>
            )}
          </div>

          <div className="lg:col-span-3">
            <div className="stencil text-[var(--color-bone)]/40 mb-5">{t('sections.locations')}</div>
            <ul className="space-y-3 text-sm">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="link-underline text-[var(--color-bone)]/85 hover:text-[var(--color-gold)]"
                  >
                    {tField(loc.name, lang)} · <span className="font-mono text-xs">{loc.phone}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="stencil text-[var(--color-bone)]/40 mb-5">Practice</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="link-underline text-[var(--color-bone)]/85">{t('nav.services')}</Link></li>
              <li><Link to="/doctors" className="link-underline text-[var(--color-bone)]/85">{t('nav.doctors')}</Link></li>
              <li><Link to="/patient-resources" className="link-underline text-[var(--color-bone)]/85">{t('nav.patient')}</Link></li>
              <li><Link to="/about" className="link-underline text-[var(--color-bone)]/85">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="link-underline text-[var(--color-bone)]/85">{t('nav.contact')}</Link></li>
              <li><Link to="/blog" className="link-underline text-[var(--color-bone)]/85">{t('nav.blog')}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="stencil text-[var(--color-bone)]/40 mb-5">Quick</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/request-appointment" className="link-underline text-[var(--color-bone)]/85">{t('nav.request')}</Link></li>
              <li><Link to="/patient-resources/financing" className="link-underline text-[var(--color-bone)]/85">Financing</Link></li>
              <li><Link to="/patient-resources/forms-insurance" className="link-underline text-[var(--color-bone)]/85">Forms &amp; Insurance</Link></li>
              <li><a href="https://malikeyecareny.securepayments.cardpointe.com/pay" target="_blank" rel="noreferrer noopener" className="link-underline text-[var(--color-bone)]/85">Pay my bill</a></li>
              <li><a href="https://secure.yourlens.com/DID49044/" target="_blank" rel="noreferrer noopener" className="link-underline text-[var(--color-bone)]/85">{t('nav.orderLens')}</a></li>
            </ul>
          </div>
        </div>

        <hr className="chrome-rule my-12 opacity-50" />

        <div className="flex flex-col sm:flex-row justify-between gap-6 text-xs text-[var(--color-bone)]/55">
          <div>© 2016–{new Date().getFullYear()} Malik Eye Care · {t('footer.legal')}</div>
          <div className="flex gap-6">
            <span>{t('footer.designed')}</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-[var(--color-bone)]/8">
        <div className="marquee-track flex gap-12 py-5 whitespace-nowrap text-[var(--color-bone)]/15 font-display text-[clamp(2.5rem,7vw,5rem)]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0">
              <span>Manhattan</span>
              <span>·</span>
              <span>Jackson Heights</span>
              <span>·</span>
              <span>Hollis</span>
              <span>·</span>
              <span>Forest Hills</span>
              <span>·</span>
              <span>Hicksville</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
