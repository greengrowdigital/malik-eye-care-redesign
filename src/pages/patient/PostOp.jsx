import ArticlePage from '../services/ArticlePage.jsx';

export default function PostOp() {
  return (
    <ArticlePage
      eyebrow="— Patients · Post-op"
      titleEn="Post-op forms & instructions"
      titleEs="Formularios e instrucciones post-operatorios"
      ledeEn="Calm, written guidance for the days and weeks after surgery."
      ledeEs="Guía escrita y tranquila para los días y semanas después de la cirugía."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/malik.jpg"
      backTo="/patient-resources"
      backLabelEn="Back to patient resources"
      backLabelEs="Volver a recursos"
      sections={[
        {
          title: { en: 'Cataract post-op', es: 'Post-operatorio de cataratas' },
          body: {
            en: 'Day 1: Use prescribed drops on schedule. Avoid rubbing the eye. Sleep with the protective shield. Day 2–7: Continue drops; light activity is fine. Avoid swimming and heavy lifting. Week 2+: Most patients resume full activity. Final follow-up is at week 4.',
            es: 'Día 1: Usa las gotas prescritas en horario. Evita frotarte el ojo. Duerme con el protector. Días 2–7: Continúa las gotas; actividad ligera permitida. Evita nadar y cargar peso. Semana 2+: La mayoría retoma actividad completa. Control final en la semana 4.',
          },
        },
        {
          title: { en: 'LASIK post-op', es: 'Post-operatorio LASIK' },
          body: {
            en: 'Day 1–3: Wear the protective shields while sleeping. Use lubricating drops every hour while awake. Day 4–7: Vision continues to clear. Avoid swimming, hot tubs and contact sports. Week 2+: Full activity is usually safe. We see you again at month 1, 3 and 6.',
            es: 'Días 1–3: Usa los protectores al dormir. Aplica gotas lubricantes cada hora durante el día. Días 4–7: La visión continúa aclarándose. Evita nadar, jacuzzis y deportes de contacto. Semana 2+: La actividad completa suele ser segura. Te vemos al mes 1, 3 y 6.',
          },
        },
        {
          title: { en: 'When to call us', es: 'Cuándo llamarnos' },
          body: {
            en: 'Call your surgeon\'s office immediately if you experience sudden severe pain, sudden vision loss, persistent redness or discharge, or if the protective shield is dislodged. After hours, our on-call surgeon is reachable through the office voicemail.',
            es: 'Llama de inmediato a la oficina de tu cirujano si experimentas dolor severo súbito, pérdida visual súbita, enrojecimiento o secreción persistente, o si el protector se desplaza. Fuera de horario, contactamos al cirujano de guardia a través del buzón de la oficina.',
          },
        },
      ]}
    />
  );
}
