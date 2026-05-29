import ArticlePage from './ArticlePage.jsx';

export default function GlaucomaTreatment() {
  return (
    <ArticlePage
      eyebrow="— Glaucoma · Treatment"
      titleEn="Glaucoma treatment options"
      titleEs="Opciones de tratamiento de glaucoma"
      ledeEn="A staged ladder: drops, laser, MIGS, filtration. The right rung depends on you."
      ledeEs="Una escalera por etapas: gotas, láser, MIGS, filtración. El escalón correcto depende de ti."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/glaucoma-chart.jpg"
      backTo="/services/glaucoma"
      backLabelEn="Back to glaucoma"
      backLabelEs="Volver a glaucoma"
      sections={[
        {
          title: { en: 'Eye drops', es: 'Gotas oftálmicas' },
          body: {
            en: 'Prostaglandin analogs, beta-blockers, alpha agonists and carbonic anhydrase inhibitors lower intraocular pressure. Often the first line — and very effective when used consistently.',
            es: 'Análogos de prostaglandinas, betabloqueadores, agonistas alfa e inhibidores de anhidrasa carbónica bajan la presión intraocular. Suele ser la primera línea — muy efectiva con uso consistente.',
          },
        },
        {
          title: { en: 'Laser trabeculoplasty (SLT)', es: 'Trabeculoplastia láser (SLT)' },
          body: {
            en: 'Selective Laser Trabeculoplasty uses a low-energy laser to improve fluid outflow through the eye\'s natural drainage system. An in-office procedure, repeatable, and increasingly used as first-line therapy.',
            es: 'La Trabeculoplastia Láser Selectiva usa un láser de baja energía para mejorar el drenaje natural del ojo. Procedimiento en consultorio, repetible y cada vez más usado como terapia de primera línea.',
          },
        },
        {
          title: { en: 'MIGS — minimally invasive glaucoma surgery', es: 'MIGS — cirugía mínimamente invasiva' },
          body: {
            en: 'Tiny devices inserted at the time of cataract surgery (or as standalone procedures) help fluid drain more naturally. Lower risk profile than traditional filtering surgery, often suitable for mild-to-moderate glaucoma.',
            es: 'Dispositivos diminutos colocados durante la cirugía de cataratas (o solos) ayudan al drenaje natural. Perfil de riesgo menor que la cirugía filtrante tradicional, frecuentemente apropiado para glaucoma leve-moderado.',
          },
        },
        {
          title: { en: 'Trabeculectomy & tube shunts', es: 'Trabeculectomía y válvulas' },
          body: {
            en: 'For advanced or refractory glaucoma. Creates a new drainage pathway. More involved than MIGS but very effective in protecting remaining vision.',
            es: 'Para glaucoma avanzado o refractario. Crea una nueva vía de drenaje. Más invasiva que MIGS pero muy efectiva para proteger la visión restante.',
          },
        },
      ]}
    />
  );
}
