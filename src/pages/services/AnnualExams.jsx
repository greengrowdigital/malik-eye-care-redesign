import ArticlePage from './ArticlePage.jsx';

export default function AnnualExams() {
  return (
    <ArticlePage
      eyebrow="— Optical · Exams"
      titleEn="Annual eye exams"
      titleEs="Exámenes oculares anuales"
      ledeEn="An hour every twelve months. Vision-saving — and often disease-detecting."
      ledeEs="Una hora cada doce meses. Salva la visión — y frecuentemente detecta enfermedad."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/macular_degeneration.jpg"
      backTo="/services/optical"
      backLabelEn="Back to optical"
      backLabelEs="Volver a óptica"
      sections={[
        {
          title: { en: 'What we check', es: 'Qué revisamos' },
          body: {
            en: 'Visual acuity, refraction, eye pressure (tonometry), pupillary response, slit-lamp examination of the anterior segment, dilated retinal examination, and — when indicated — OCT imaging and visual field testing.',
            es: 'Agudeza visual, refracción, presión ocular (tonometría), respuesta pupilar, examen con lámpara de hendidura del segmento anterior, examen dilatado de retina y — cuando se indica — imágenes OCT y campos visuales.',
          },
        },
        {
          title: { en: 'Why annually', es: 'Por qué anualmente' },
          body: {
            en: 'Many eye diseases — glaucoma, macular degeneration, diabetic retinopathy — progress silently. An annual exam catches them early, when treatment is most effective. We also use the exam to update prescriptions and ensure your eyewear is performing.',
            es: 'Muchas enfermedades — glaucoma, degeneración macular, retinopatía diabética — progresan en silencio. Un examen anual las detecta temprano, cuando el tratamiento es más efectivo. También aprovechamos para actualizar la receta y asegurar que tus lentes rindan.',
          },
        },
        {
          title: { en: 'Insurance & coverage', es: 'Seguro y cobertura' },
          body: {
            en: 'Most vision insurance plans cover an annual exam. We accept VSP, EyeMed, Davis, Spectera and most major medical insurance plans for medically necessary exams. Bring your insurance card to your visit.',
            es: 'La mayoría de planes de visión cubren un examen anual. Aceptamos VSP, EyeMed, Davis, Spectera y la mayoría de seguros médicos para exámenes médicamente necesarios. Trae tu tarjeta de seguro a la visita.',
          },
        },
      ]}
    />
  );
}
