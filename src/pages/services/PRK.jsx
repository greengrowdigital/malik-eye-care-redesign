import ArticlePage from './ArticlePage.jsx';

export default function PRK() {
  return (
    <ArticlePage
      eyebrow="— LASIK · PRK"
      titleEn="PRK — Photorefractive Keratectomy"
      titleEs="PRK — Queratectomía Fotorrefractiva"
      ledeEn="LASIK without the flap. Excellent for thin corneas, active lifestyles and military / law enforcement candidates."
      ledeEs="LASIK sin flap. Excelente para córneas delgadas, estilos de vida activos y candidatos militares / policiales."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/lasik_new.png"
      backTo="/services/lasik"
      backLabelEn="Back to LASIK"
      backLabelEs="Volver a LASIK"
      sections={[
        {
          title: { en: 'How PRK differs', es: 'En qué difiere PRK' },
          body: {
            en: 'PRK reshapes the cornea using the same Excimer laser as LASIK — but without creating a flap. The outer corneal epithelium is gently removed and regenerates within days. End results are equivalent to LASIK, with a slightly longer initial healing period.',
            es: 'PRK remodela la córnea usando el mismo láser Excimer que LASIK — pero sin crear un flap. Se remueve suavemente el epitelio corneal externo y se regenera en días. Los resultados finales son equivalentes a LASIK, con una recuperación inicial ligeramente más larga.',
          },
        },
        {
          title: { en: 'Who PRK is for', es: 'Para quién es PRK' },
          body: {
            en: 'Patients with thinner corneas, active athletes (contact sports, martial arts), and those in professions where a flap is a risk — police, military, certain industrial roles. Our surgeons walk through candidacy in a one-on-one consultation.',
            es: 'Pacientes con córneas delgadas, atletas activos (deportes de contacto, artes marciales) y profesiones donde un flap es un riesgo — policías, militares, ciertos roles industriales. Nuestros cirujanos evalúan candidatura en consulta uno a uno.',
          },
        },
        {
          title: { en: 'Recovery & results', es: 'Recuperación y resultados' },
          body: {
            en: 'Expect 3–5 days of healing of the surface epithelium, with vision sharpening over 1–3 months. Long-term visual outcomes match LASIK. We provide protective contact lenses, comfort drops and detailed post-op support.',
            es: 'Espera 3–5 días de cicatrización del epitelio superficial, con la visión nitidizándose en 1–3 meses. Los resultados a largo plazo igualan al LASIK. Proveemos lentes de contacto protectores, gotas de confort y soporte post-operatorio detallado.',
          },
        },
      ]}
    />
  );
}
