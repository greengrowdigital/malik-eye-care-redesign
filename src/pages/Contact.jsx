import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n, tField } from '../i18n/I18nContext.jsx';
import PageHero from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { locations } from '../data/locations.js';

export default function Contact() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', location: '' });
  const [state, setState] = useState('idle');

  function onSubmit(e) {
    e.preventDefault();
    setState('sending');
    setTimeout(() => {
      setState('sent');
      setForm({ name: '', email: '', phone: '', message: '', location: '' });
    }, 1200);
  }

  return (
    <>
      <PageHero
        eyebrow="— Contact"
        title={lang === 'en'
          ? ['Talk', 'to us.', <span key="s1" className="italic text-[var(--color-gold-deep)]">Five offices,</span>, 'one front desk.']
          : ['Habla', 'con nosotros.', <span key="s1" className="italic text-[var(--color-gold-deep)]">Cinco oficinas,</span>, 'una recepción.']
        }
        lede={lang === 'en' ? 'For appointment requests, insurance verification, or general questions. We answer within one business day.' : 'Para solicitudes de cita, verificación de seguro o preguntas generales. Respondemos en un día hábil.'}
      />

      <section className="bg-[var(--color-paper)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t('forms.name')} required>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] rounded-xl px-4 py-3 text-sm" />
                  </Field>
                  <Field label={t('forms.email')} required>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] rounded-xl px-4 py-3 text-sm" />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t('forms.phone')}>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] rounded-xl px-4 py-3 text-sm" />
                  </Field>
                  <Field label={t('forms.preferred')}>
                    <select value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] rounded-xl px-4 py-3 text-sm">
                      <option value="">{lang === 'en' ? 'Any location' : 'Cualquier ubicación'}</option>
                      {locations.map((l) => (
                        <option key={l.slug} value={l.slug}>{tField(l.name, lang)}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label={t('forms.message')} required>
                  <textarea rows={6} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-line)] rounded-xl px-4 py-3 text-sm resize-none" />
                </Field>

                <button
                  type="submit"
                  disabled={state === 'sending'}
                  className="w-full sm:w-auto px-8 py-4 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full text-sm tracking-wide hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors disabled:opacity-60"
                >
                  {state === 'sending' ? t('forms.sending') : t('forms.submit')} →
                </button>

                <AnimatePresence>
                  {state === 'sent' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 p-4 bg-[var(--color-bone-soft)] border border-[var(--color-gold)] rounded-xl text-sm"
                    >
                      ✓ {t('forms.sent')}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="bg-[var(--color-ink-deep)] text-[var(--color-bone)] rounded-2xl p-7 relative overflow-hidden grain">
                <div className="iris-glow absolute inset-0" aria-hidden />
                <div className="relative z-10">
                  <div className="stencil text-[var(--color-gold)] mb-4">— {lang === 'en' ? 'Call us directly' : 'Llámanos directo'}</div>
                  <ul className="space-y-3">
                    {locations.map((loc) => (
                      <li key={loc.slug} className="flex justify-between items-baseline border-b border-[var(--color-bone)]/10 pb-2">
                        <span className="text-sm">{tField(loc.name, lang)}</span>
                        <a href={`tel:${loc.phoneDigits}`} className="font-mono text-sm text-[var(--color-gold)] hover:text-[var(--color-bone)] transition-colors">
                          {loc.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="bg-[var(--color-bone-soft)] rounded-2xl p-6">
                <div className="stencil text-[var(--color-gold-deep)] mb-3">— {lang === 'en' ? 'Quick actions' : 'Acciones rápidas'}</div>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://malikeyecareny.securepayments.cardpointe.com/pay" target="_blank" rel="noreferrer noopener" className="link-underline">Pay my bill →</a></li>
                  <li><a href="https://secure.yourlens.com/DID49044/" target="_blank" rel="noreferrer noopener" className="link-underline">Order contact lenses →</a></li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="stencil text-[var(--color-muted)] block mb-2">
        {label}{required && <span className="text-[var(--color-gold-deep)]"> *</span>}
      </span>
      {children}
    </label>
  );
}
