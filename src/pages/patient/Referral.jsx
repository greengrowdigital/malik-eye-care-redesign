import ArticlePage from '../services/ArticlePage.jsx';

export default function Referral() {
  return (
    <ArticlePage
      eyebrow="— For Providers"
      titleEn="Referral forms for PCPs"
      titleEs="Formularios de referencia para PCPs"
      ledeEn="A streamlined path for primary care providers to send a patient our way."
      ledeEs="Un camino simple para que el médico de cabecera refiera un paciente."
      image="https://www.malikeyecare.com/wp-content/uploads/2019/04/MALIK_home.jpg"
      backTo="/patient-resources"
      backLabelEn="Back to patient resources"
      backLabelEs="Volver a recursos"
      sections={[
        {
          title: { en: 'How to refer', es: 'Cómo referir' },
          body: {
            en: 'Email a brief referral note with your patient\'s contact details and primary visual concern to referrals@malikeyecare.com. We respond within one business day with appointment options at the closest of our five locations.',
            es: 'Envía una nota breve con los datos de contacto del paciente y el motivo de consulta a referrals@malikeyecare.com. Respondemos en un día hábil con opciones de cita en la más cercana de nuestras cinco ubicaciones.',
          },
        },
        {
          title: { en: 'Downloadable referral form', es: 'Formulario de referencia descargable' },
          body: {
            en: 'A short PDF with the standard fields (patient demographics, insurance, reason for referral, your contact information). Fax to 718-651-2200 or email as a secure attachment.',
            es: 'Un PDF breve con los campos estándar (datos del paciente, seguro, motivo de referencia, tu contacto). Envíalo por fax al 718-651-2200 o como adjunto seguro por email.',
          },
        },
      ]}
    />
  );
}
