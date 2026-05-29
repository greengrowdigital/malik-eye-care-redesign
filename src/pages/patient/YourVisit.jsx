import ArticlePage from '../services/ArticlePage.jsx';

export default function YourVisit() {
  return (
    <ArticlePage
      eyebrow="— Patients · Visit"
      titleEn="Your visit"
      titleEs="Tu visita"
      ledeEn="A clear walk-through, so the day feels familiar before you arrive."
      ledeEs="Una guía clara para que el día se sienta familiar antes de llegar."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/malik1.jpg"
      backTo="/patient-resources"
      backLabelEn="Back to patient resources"
      backLabelEs="Volver a recursos"
      sections={[
        {
          title: { en: 'Before you arrive', es: 'Antes de llegar' },
          body: {
            en: 'Bring your insurance card, a list of medications, and any current eyewear (glasses or contact lens prescription). If you wear contact lenses, please leave them out for 3 days before a refraction exam — they reshape the cornea. New patients can save time by downloading and completing intake forms in advance.',
            es: 'Trae tu tarjeta del seguro, lista de medicamentos y tus anteojos o receta actual. Si usas lentes de contacto, déjalos fuera 3 días antes de un examen refractivo — modifican la córnea. Los pacientes nuevos ahorran tiempo descargando y completando los formularios por adelantado.',
          },
        },
        {
          title: { en: 'What to expect during your exam', es: 'Qué esperar durante el examen' },
          body: {
            en: 'A comprehensive exam typically lasts 45–60 minutes. We check visual acuity, refraction, pupil response, eye pressure, and perform a slit-lamp evaluation. Most exams include dilation — plan for blurred near vision and sun sensitivity for several hours afterward.',
            es: 'Un examen completo suele durar 45–60 minutos. Revisamos agudeza visual, refracción, respuesta pupilar, presión ocular y hacemos evaluación con lámpara de hendidura. La mayoría incluye dilatación — planea visión cercana borrosa y sensibilidad al sol por varias horas después.',
          },
        },
        {
          title: { en: 'After the exam', es: 'Después del examen' },
          body: {
            en: 'Your doctor reviews findings and any next steps. If glasses or contact lenses are needed, our optical team is on hand. If a procedure is recommended, a care coordinator schedules your consultation and answers questions about insurance and financing.',
            es: 'Tu doctor revisa los hallazgos y los siguientes pasos. Si necesitas anteojos o lentes de contacto, nuestro equipo óptico te asiste. Si se recomienda un procedimiento, un coordinador agenda tu consulta y responde sobre seguro y financiamiento.',
          },
        },
      ]}
    />
  );
}
