import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../../i18n/I18nContext.jsx';
import PageHero from '../../components/PageHero.jsx';

const questions = {
  en: [
    'Are colors fading or appearing yellowish?',
    'Do you have difficulty driving at night because of glare from headlights?',
    'Has your vision become cloudy, blurry or filmy?',
    'Are you experiencing increased sensitivity to bright lights?',
    'Do you need brighter light to read?',
    'Has your eyeglass prescription changed frequently?',
    'Do you see double, or "ghost," images in one eye?',
    'Are you over 50?',
  ],
  es: [
    '¿Los colores se ven apagados o amarillentos?',
    '¿Tienes dificultad para conducir de noche por el deslumbramiento?',
    '¿Tu visión se ha vuelto nublada, borrosa o "filmosa"?',
    '¿Tienes mayor sensibilidad a luces brillantes?',
    '¿Necesitas más luz para leer?',
    '¿Tu receta de anteojos ha cambiado con frecuencia?',
    '¿Ves doble o "fantasmas" con un solo ojo?',
    '¿Tienes más de 50 años?',
  ],
};

export default function CataractSelfTest() {
  return (
    <SelfTest
      titleEn="Cataract Self-Test"
      titleEs="Test de Cataratas"
      bodyEn="A 60-second screening. Not a diagnosis — but a thoughtful first step."
      bodyEs="Una evaluación de 60 segundos. No es un diagnóstico — pero sí un primer paso reflexivo."
      questions={questions}
      backTo="/services/cataracts"
    />
  );
}

export function SelfTest({ titleEn, titleEs, bodyEn, bodyEs, questions, backTo }) {
  const { lang } = useI18n();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const qs = questions[lang];
  const total = qs.length;
  const done = step >= total;
  const yesCount = answers.filter(Boolean).length;

  function answer(v) {
    setAnswers((a) => [...a, v]);
    setStep((s) => s + 1);
  }
  function reset() {
    setStep(0);
    setAnswers([]);
  }

  const verdict =
    yesCount >= 4
      ? {
          en: 'Several signs are present. We strongly recommend a consultation with one of our ophthalmologists.',
          es: 'Hay varias señales presentes. Recomendamos una consulta con uno de nuestros oftalmólogos.',
        }
      : yesCount >= 2
      ? {
          en: 'A few signs are present. Schedule an exam — early detection makes treatment simple.',
          es: 'Hay algunas señales presentes. Agenda un examen — la detección temprana simplifica el tratamiento.',
        }
      : {
          en: 'No major flags. Continue with annual eye exams to stay ahead.',
          es: 'Sin señales mayores. Mantén tus exámenes anuales para adelantarte a cualquier cambio.',
        };

  return (
    <>
      <PageHero
        eyebrow="— Self-test"
        title={lang === 'en' ? titleEn : titleEs}
        lede={lang === 'en' ? bodyEn : bodyEs}
      />

      <section className="bg-[var(--color-bone)] pb-24">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <div className="bg-[var(--color-paper)] rounded-3xl border border-[var(--color-line)] p-6 sm:p-10 shadow-[0_30px_80px_-40px_rgba(11,29,51,0.25)]">
            {!done && (
              <>
                <div className="flex justify-between items-center stencil text-[var(--color-muted)] mb-6">
                  <span>{lang === 'en' ? 'Question' : 'Pregunta'} {step + 1} / {total}</span>
                  <span>{Math.round(((step) / total) * 100)}%</span>
                </div>
                <div className="h-1 bg-[var(--color-line)] rounded-full overflow-hidden mb-10">
                  <motion.div
                    className="h-full bg-[var(--color-gold)]"
                    animate={{ width: `${(step / total) * 100}%` }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="font-display text-2xl sm:text-3xl leading-snug mb-8">{qs[step]}</h2>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => answer(true)}
                        className="px-6 py-4 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full text-sm font-medium hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors"
                      >
                        {lang === 'en' ? 'Yes' : 'Sí'}
                      </button>
                      <button
                        type="button"
                        onClick={() => answer(false)}
                        className="px-6 py-4 bg-[var(--color-bone)] border border-[var(--color-ink)] text-[var(--color-ink)] rounded-full text-sm font-medium hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] transition-colors"
                      >
                        {lang === 'en' ? 'No' : 'No'}
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            )}

            {done && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="stencil text-[var(--color-gold-deep)] mb-4">
                  {lang === 'en' ? 'Your result' : 'Tu resultado'}
                </div>
                <div className="font-display text-5xl text-[var(--color-ink)] mb-2">
                  {yesCount}<span className="text-[var(--color-muted)] text-3xl"> / {total}</span>
                </div>
                <p className="text-lg leading-relaxed mb-8">{lang === 'en' ? verdict.en : verdict.es}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/request-appointment"
                    className="px-6 py-3 bg-[var(--color-ink)] text-[var(--color-bone)] rounded-full text-sm tracking-wide hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors text-center"
                  >
                    {lang === 'en' ? 'Request an appointment' : 'Solicitar cita'} →
                  </Link>
                  <button
                    type="button"
                    onClick={reset}
                    className="px-6 py-3 border border-[var(--color-ink)] rounded-full text-sm tracking-wide hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)] transition-colors"
                  >
                    {lang === 'en' ? 'Retake test' : 'Repetir test'}
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link to={backTo} className="stencil text-[var(--color-muted)] link-underline">
              ← {lang === 'en' ? 'Back to overview' : 'Volver al resumen'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
