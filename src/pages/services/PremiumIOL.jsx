import ArticlePage from './ArticlePage.jsx';

export default function PremiumIOL() {
  return (
    <ArticlePage
      eyebrow="— Cataracts · IOL"
      titleEn="Premium intraocular lens implants"
      titleEs="Implantes IOL premium"
      ledeEn="The cataract is the surgery. The lens you choose is the rest of your life."
      ledeEs="La catarata es la cirugía. El lente que eliges es el resto de tu vida."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/cataract-symptom.jpg"
      backTo="/services/cataracts"
      backLabelEn="Back to cataracts"
      backLabelEs="Volver a cataratas"
      sections={[
        {
          title: { en: 'Monofocal IOLs', es: 'LIOs Monofocales' },
          body: {
            en: 'A single focal point — usually set for distance. Excellent clarity at one range. Reading glasses still needed for near work. Covered by most insurance plans.',
            es: 'Un único punto focal — habitualmente puesto para distancia. Claridad excelente a un rango. Aún se necesitan lentes para lectura. Cubiertos por la mayoría de seguros.',
          },
        },
        {
          title: { en: 'Multifocal IOLs', es: 'LIOs Multifocales' },
          body: {
            en: 'Multiple focal points let patients see clearly at distance, intermediate and near — reducing or eliminating dependence on glasses. Dr. Malik\'s special interest is multifocal IOLs for cataract patients who want spectacle independence.',
            es: 'Múltiples puntos focales permiten ver claramente en distancia, intermedio y cerca — reduciendo o eliminando la dependencia de anteojos. El interés especial del Dr. Malik son los LIOs multifocales para pacientes que buscan independencia visual.',
          },
        },
        {
          title: { en: 'Toric IOLs', es: 'LIOs Tóricos' },
          body: {
            en: 'Correct astigmatism at the same time as the cataract. Toric IOLs significantly reduce or eliminate the need for glasses by correcting corneal curvature alongside vision.',
            es: 'Corrigen el astigmatismo al mismo tiempo que la catarata. Los LIOs tóricos reducen significativamente o eliminan la necesidad de anteojos al corregir la curvatura corneal junto con la visión.',
          },
        },
        {
          title: { en: 'Accommodating IOLs', es: 'LIOs Acomodativos' },
          body: {
            en: 'Designed to flex with the eye\'s natural muscles, providing a range of vision similar to a younger natural lens. A premium option for patients who want a more dynamic visual experience.',
            es: 'Diseñados para flexionar con los músculos naturales del ojo, dan un rango visual similar al de un cristalino joven. Opción premium para quienes buscan una experiencia visual más dinámica.',
          },
        },
      ]}
    />
  );
}
