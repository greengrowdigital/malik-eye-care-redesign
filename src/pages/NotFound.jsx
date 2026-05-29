import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function NotFound() {
  const { lang } = useI18n();
  return (
    <section className="min-h-[80vh] flex items-center pt-32 bg-[var(--color-bone)]">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
        <div className="font-mono text-7xl text-[var(--color-gold-deep)] mb-6">404</div>
        <h1 className="h-display mb-4">{lang === 'en' ? 'Page not found.' : 'Página no encontrada.'}</h1>
        <p className="text-[var(--color-ink-soft)] text-lg mb-8 leading-relaxed">
          {lang === 'en' ? 'The page you were looking for has moved or never existed.' : 'La página que buscabas se movió o nunca existió.'}
        </p>
        <Link to="/" className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors">
          {lang === 'en' ? 'Back home' : 'Volver al inicio'} →
        </Link>
      </div>
    </section>
  );
}
