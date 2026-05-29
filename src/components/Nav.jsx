import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext.jsx';

const links = [
  { to: '/services', key: 'nav.services' },
  { to: '/doctors', key: 'nav.doctors' },
  { to: '/locations', key: 'nav.locations' },
  { to: '/patient-resources', key: 'nav.patient' },
  { to: '/about', key: 'nav.about' },
  { to: '/blog', key: 'nav.blog' },
  { to: '/contact', key: 'nav.contact' },
];

export default function Nav() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'bg-[var(--color-bone)]/95 backdrop-blur-md border-b border-[var(--color-line)]/60'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 h-[68px] sm:h-[76px] flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Malik Eye Care home">
            <Logo />
            <div className="leading-none">
              <div className="font-display text-[19px] sm:text-[21px] tracking-tight text-[var(--color-ink)]">
                Malik Eye Care
              </div>
              <div className="stencil text-[var(--color-muted)] mt-1 hidden sm:block">
                Est. 1988 · New York
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[13px] tracking-wide link-underline ${
                    isActive ? 'text-[var(--color-ink)] font-medium' : 'text-[var(--color-ink-soft)]'
                  }`
                }
              >
                {t(l.key)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggle}
              className="stencil flex items-center gap-1.5 px-2.5 py-1.5 border border-[var(--color-ink)]/15 rounded-full hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] transition-colors"
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'font-semibold' : 'opacity-50'}>EN</span>
              <span className="opacity-30">/</span>
              <span className={lang === 'es' ? 'font-semibold' : 'opacity-50'}>ES</span>
            </button>

            <Link
              to="/request-appointment"
              className="hidden sm:inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-bone)] px-4 py-2 rounded-full text-[13px] tracking-wide hover:bg-[var(--color-ink-deep)] transition-colors"
            >
              {t('nav.bookNow')}
              <span aria-hidden>→</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className={`block w-6 h-px bg-[var(--color-ink)] transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block w-6 h-px bg-[var(--color-ink)] transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-[var(--color-ink)] transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--color-bone)] pt-[68px] sm:pt-[76px]"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="px-6 py-8 flex flex-col gap-2"
              aria-label="Mobile primary"
            >
              {links.map((l, i) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `font-display text-3xl py-3 border-b border-[var(--color-line)] ${
                      isActive ? 'text-[var(--color-gold-deep)]' : 'text-[var(--color-ink)]'
                    }`
                  }
                  style={{ transitionDelay: `${i * 0.04}s` }}
                >
                  {t(l.key)}
                </NavLink>
              ))}
              <Link
                to="/request-appointment"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[var(--color-ink)] text-[var(--color-bone)] px-6 py-4 rounded-full text-sm tracking-wide"
              >
                {t('nav.request')}
                <span aria-hidden>→</span>
              </Link>
              <div className="mt-8 stencil text-[var(--color-muted)]">
                Manhattan · Jackson Heights · Hollis · Forest Hills · Hicksville
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" className="shrink-0">
      <ellipse cx="32" cy="32" rx="26" ry="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-ink)]" />
      <circle cx="32" cy="32" r="11" fill="currentColor" className="text-[var(--color-ink)]" />
      <circle cx="32" cy="32" r="4" fill="var(--color-bone)" />
      <path d="M8 32 Q32 14 56 32" fill="none" stroke="var(--color-gold)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
