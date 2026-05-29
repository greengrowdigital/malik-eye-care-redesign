import ArticlePage from './ArticlePage.jsx';

export default function CataractSurgeryOptions() {
  return (
    <ArticlePage
      eyebrow="— Cataracts · Options"
      titleEn="Cataract surgery options"
      titleEs="Opciones de cirugía de cataratas"
      ledeEn="Traditional phacoemulsification vs. femtosecond laser-assisted — and how to choose between them."
      ledeEs="Facoemulsificación tradicional vs. asistida con láser femtosegundo — y cómo elegir entre ellas."
      image="https://www.malikeyecare.com/wp-content/uploads/2016/09/malik1.jpg"
      backTo="/services/cataracts"
      backLabelEn="Back to cataracts"
      backLabelEs="Volver a cataratas"
      sections={[
        {
          title: { en: 'Traditional cataract surgery', es: 'Cirugía tradicional de cataratas' },
          body: {
            en: 'One of the most performed surgeries in medicine — and one of the safest. A small corneal incision allows access; an ultrasonic probe (phacoemulsification) breaks up and removes the cataract; a new intraocular lens is implanted. Outcomes are excellent and procedure time is short.',
            es: 'Una de las cirugías más realizadas en medicina — y de las más seguras. Una pequeña incisión corneal permite el acceso; una sonda ultrasónica (facoemulsificación) fragmenta y remueve la catarata; se implanta un nuevo lente intraocular. Los resultados son excelentes y la duración corta.',
          },
        },
        {
          title: { en: 'Laser-assisted cataract surgery', es: 'Cirugía asistida con láser' },
          body: {
            en: 'A femtosecond laser, guided by OCT imaging, performs four key steps with sub-millimeter precision: the corneal incision, the anterior capsulotomy, lens fragmentation, and astigmatism-correcting incisions. The laser softens the cataract, reducing ultrasound energy and protecting the lens capsule.',
            es: 'Un láser femtosegundo guiado por OCT realiza cuatro pasos clave con precisión submilimétrica: la incisión corneal, la capsulotomía anterior, la fragmentación del cristalino y las incisiones de corrección de astigmatismo. El láser ablanda la catarata reduciendo la energía ultrasónica y protegiendo la cápsula.',
          },
        },
        {
          title: { en: 'How to choose', es: 'Cómo elegir' },
          body: {
            en: 'If you have moderate astigmatism, are planning premium IOLs (multifocal or toric), or simply want the most modern technique available, laser-assisted is often preferable. If you have a straightforward case, traditional surgery is just as effective in skilled hands. Either way, your Malik Eye Care surgeon walks through expected outcomes at consultation.',
            es: 'Si tienes astigmatismo moderado, planeas un LIO premium (multifocal o tórico), o simplemente quieres la técnica más moderna, la asistida con láser suele ser preferible. Si tu caso es directo, la tradicional es igual de efectiva en manos hábiles. En cualquier caso, tu cirujano de Malik Eye Care explica los resultados esperados en consulta.',
          },
        },
      ]}
    />
  );
}
