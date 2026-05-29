import ArticlePage from './ArticlePage.jsx';

export default function GlaucomaWhatIs() {
  return (
    <ArticlePage
      eyebrow="— Glaucoma · Overview"
      titleEn="What is glaucoma?"
      titleEs="¿Qué es el glaucoma?"
      ledeEn="The silent thief of sight — and why every routine exam matters."
      ledeEs="El ladrón silencioso de la vista — y por qué cada examen de rutina importa."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/glaucoma-chart.jpg"
      backTo="/services/glaucoma"
      backLabelEn="Back to glaucoma"
      backLabelEs="Volver a glaucoma"
      sections={[
        {
          title: { en: 'The mechanism', es: 'El mecanismo' },
          body: {
            en: 'Glaucoma is often characterized by a buildup of pressure within the eye that can cause a decreased ability to see or total loss of vision. The dangerous pressure does not always cause signs or symptoms and can progress without notice until the optic nerve is damaged, often irreparably.',
            es: 'El glaucoma se caracteriza por una acumulación de presión intraocular que puede reducir la visión o causar pérdida total. La presión peligrosa no siempre da signos o síntomas y puede progresar sin notarse hasta que el nervio óptico se daña, frecuentemente de forma irreparable.',
          },
        },
        {
          title: { en: 'Symptoms when they appear', es: 'Síntomas cuando aparecen' },
          body: {
            en: 'Symptoms can include blurred vision, halos around lights, intense eye pain, nausea, and — eventually — total blindness. Most patients have no symptoms in early stages, which is why routine eye exams with tonometry are essential.',
            es: 'Los síntomas pueden incluir visión borrosa, halos alrededor de luces, dolor ocular intenso, náuseas y — eventualmente — ceguera total. La mayoría de pacientes no tiene síntomas tempranos, por eso son esenciales los exámenes con tonometría.',
          },
        },
        {
          title: { en: 'Why it matters', es: 'Por qué importa' },
          body: {
            en: 'Glaucoma affects millions and is the second leading cause of blindness in the United States. With early detection, the disease is highly manageable through drops, laser therapy or surgery. Without detection, vision loss is permanent.',
            es: 'El glaucoma afecta a millones y es la segunda causa principal de ceguera en EE.UU. Con detección temprana, la enfermedad es altamente manejable con gotas, terapia láser o cirugía. Sin detección, la pérdida visual es permanente.',
          },
        },
      ]}
    />
  );
}
