import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useI18n, tField } from '../i18n/I18nContext.jsx';
import PageHero from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { locations } from '../data/locations.js';
import { services } from '../data/services.js';
import { doctors } from '../data/doctors.js';

export default function RequestAppointment() {
  const { t, lang } = useI18n();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    location: '', service: '', doctor: '',
    date: '', time: 'morning', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  function next() { if (step < 3) setStep(step + 1); }
  function back() { if (step > 1) setStep(step - 1); }
  function reset() { setSubmitted(false); setStep(1); setForm({ name: '', email: '', phone: '', location: '', service: '', doctor: '', date: '', time: 'morning', message: '' }); }

  function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <>
      <PageHero
        eyebrow="— Booking"
        title={lang === 'en'
          ? ['Request', 'your visit.', <span key="s1" className="italic text-[var(--color-gold-deep)]">Three calm</span>, 'steps.']
          : ['Solicita', 'tu visita.', <span key="s1" className="italic text-[var(--color-gold-deep)]">Tres pasos</span>, 'tranquilos.']
        }
        lede={lang === 'en'
          ? 'Tell us who, where, and when. A care coordinator confirms within one business day.'
          : 'Cuéntanos quién, dónde y cuándo. Un coordinador confirma en un día hábil.'
        }
      />

      <section className="bg-[var(--color-paper)] pb-24 pt-4">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {!submitted && (
            <div className="bg-[var(--color-paper)] border border-[var(--color-line)] rounded-3xl p-6 sm:p-10 shadow-[0_30px_80px_-40px_rgba(11,29,51,0.25)]">
              <Reveal>
                <div className="flex justify-between items-center mb-6">
                  <div className="stencil text-[var(--color-muted)]">{lang === 'en' ? 'Step' : 'Paso'} {step} / 3</div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`h-1 w-10 rounded-full transition-colors ${
                          s <= step ? 'bg-[var(--color-gold)]' : 'bg-[var(--color-line)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>

              <form onSubmit={onSubmit}>
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h2 className="font-display text-3xl mb-6">{lang === 'en' ? 'Who are we seeing?' : '¿A quién atendemos?'}</h2>
                      <div className="space-y-4">
                        <Field label={t('forms.name')} required>
                          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
                        </Field>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field label={t('forms.email')} required>
                            <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} />
                          </Field>
                          <Field label={t('forms.phone')} required>
                            <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                          </Field>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h2 className="font-display text-3xl mb-6">{lang === 'en' ? 'Where and what for?' : '¿Dónde y para qué?'}</h2>
                      <div className="space-y-4">
                        <Field label={t('forms.preferred')} required>
                          <select required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputCls}>
                            <option value="">{lang === 'en' ? 'Pick a location' : 'Elige una ubicación'}</option>
                            {locations.map((l) => (
                              <option key={l.slug} value={l.slug}>{tField(l.name, lang)}</option>
                            ))}
                          </select>
                        </Field>
                        <Field label={t('forms.service')} required>
                          <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputCls}>
                            <option value="">{lang === 'en' ? 'Pick a service' : 'Elige un servicio'}</option>
                            <option value="annual-exam">{lang === 'en' ? 'Annual eye exam' : 'Examen anual'}</option>
                            {services.map((s) => (
                              <option key={s.slug} value={s.slug}>{tField(s.title, lang)}</option>
                            ))}
                          </select>
                        </Field>
                        <Field label={lang === 'en' ? 'Preferred doctor (optional)' : 'Doctor preferido (opcional)'}>
                          <select value={form.doctor} onChange={(e) => setForm({ ...form, doctor: e.target.value })} className={inputCls}>
                            <option value="">{lang === 'en' ? 'No preference' : 'Sin preferencia'}</option>
                            {doctors.map((d) => (
                              <option key={d.slug} value={d.slug}>{d.name}</option>
                            ))}
                          </select>
                        </Field>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h2 className="font-display text-3xl mb-6">{lang === 'en' ? 'When works for you?' : '¿Cuándo te queda?'}</h2>
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field label={t('forms.date')} required>
                            <input type="date" required min={today} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputCls} />
                          </Field>
                          <Field label={t('forms.time')} required>
                            <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputCls}>
                              <option value="morning">{lang === 'en' ? 'Morning (9 AM – 12 PM)' : 'Mañana (9 AM – 12 PM)'}</option>
                              <option value="afternoon">{lang === 'en' ? 'Afternoon (12 PM – 4 PM)' : 'Tarde (12 PM – 4 PM)'}</option>
                              <option value="evening">{lang === 'en' ? 'Evening (4 PM – 6 PM)' : 'Tarde-noche (4 PM – 6 PM)'}</option>
                            </select>
                          </Field>
                        </div>
                        <Field label={t('forms.message')}>
                          <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls + ' resize-none'} placeholder={lang === 'en' ? 'Anything else we should know?' : '¿Algo más que debamos saber?'} />
                        </Field>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 flex justify-between gap-3 pt-6 border-t border-[var(--color-line)]">
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 1}
                    className="px-5 py-3 border border-[var(--color-ink)] rounded-full text-sm hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ← {t('common.back')}
                  </button>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={
                        (step === 1 && (!form.name || !form.email || !form.phone)) ||
                        (step === 2 && (!form.location || !form.service))
                      }
                      className="px-7 py-3 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full text-sm hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {lang === 'en' ? 'Next' : 'Siguiente'} →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={sending || !form.date}
                      className="px-7 py-3 bg-[var(--color-gold)] text-[var(--color-ink)] rounded-full text-sm font-medium hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] transition-colors disabled:opacity-60"
                    >
                      {sending ? t('forms.sending') : t('forms.submit')} →
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--color-ink-deep)] text-[var(--color-bone)] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden grain"
            >
              <div className="iris-glow absolute inset-0" aria-hidden />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-[var(--color-ink)] text-3xl font-display"
                >
                  ✓
                </motion.div>
                <div className="stencil text-[var(--color-gold)] mb-4">{lang === 'en' ? 'Request received' : 'Solicitud recibida'}</div>
                <h2 className="h-section text-[var(--color-bone)] mb-4">{lang === 'en' ? 'See you soon.' : 'Nos vemos pronto.'}</h2>
                <p className="text-[var(--color-bone)]/75 mb-8 max-w-xl mx-auto leading-relaxed">
                  {lang === 'en'
                    ? `Thank you, ${form.name.split(' ')[0]}. A care coordinator will reach out within one business day to confirm your appointment.`
                    : `Gracias, ${form.name.split(' ')[0]}. Un coordinador te contactará en un día hábil para confirmar tu cita.`}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Link to="/" className="px-6 py-3 bg-[var(--color-gold)] text-[var(--color-ink)] rounded-full text-sm hover:bg-[var(--color-bone)] transition-colors">
                    {lang === 'en' ? 'Back home' : 'Volver al inicio'}
                  </Link>
                  <button type="button" onClick={reset} className="px-6 py-3 border border-[var(--color-bone)]/30 text-[var(--color-bone)] rounded-full text-sm hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)] transition-colors">
                    {lang === 'en' ? 'Submit another' : 'Enviar otra'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

const inputCls = 'w-full bg-[var(--color-paper)] border border-[var(--color-line)] rounded-xl px-4 py-3 text-sm focus:border-[var(--color-gold)]';

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
