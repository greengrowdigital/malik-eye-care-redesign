import ArticlePage from '../services/ArticlePage.jsx';

export default function Financing() {
  return (
    <ArticlePage
      eyebrow="— Patients · Financing"
      titleEn="Patient financing · CareCredit"
      titleEs="Financiamiento · CareCredit"
      ledeEn="Vision care, on terms that work for your budget."
      ledeEs="Cuidado visual, en términos que se ajustan a tu presupuesto."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/cataract-symptom.jpg"
      backTo="/patient-resources"
      backLabelEn="Back to patient resources"
      backLabelEs="Volver a recursos"
      sections={[
        {
          title: { en: 'CareCredit, accepted here', es: 'CareCredit, aceptado aquí' },
          body: {
            en: 'Malik Eye Care is pleased to accept CareCredit — a healthcare credit card with flexible monthly payments and special financing on qualifying purchases of $200 or more.',
            es: 'Malik Eye Care acepta CareCredit — una tarjeta de crédito de salud con pagos mensuales flexibles y financiamiento especial en compras calificadas de $200 o más.',
          },
        },
        {
          title: { en: 'What CareCredit covers', es: 'Qué cubre CareCredit' },
          body: {
            en: 'LASIK and laser vision correction. Cataract surgery and premium IOL upgrades. Glasses, designer frames and contact lenses. Routine and specialty exams not covered by insurance.',
            es: 'LASIK y corrección visual con láser. Cirugía de cataratas y upgrades a LIO premium. Anteojos, monturas de diseñador y lentes de contacto. Exámenes de rutina y especiales no cubiertos por seguro.',
          },
        },
        {
          title: { en: 'How to apply', es: 'Cómo solicitar' },
          body: {
            en: 'Apply online in minutes at carecredit.com or ask our front desk for assistance. A care coordinator will walk through your treatment plan and the financing terms that fit it.',
            es: 'Solicita en minutos en carecredit.com o pide asistencia en recepción. Un coordinador te explicará tu plan de tratamiento y los términos de financiamiento que mejor se ajustan.',
          },
        },
      ]}
    />
  );
}
