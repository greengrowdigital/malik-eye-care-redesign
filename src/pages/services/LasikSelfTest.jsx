import { SelfTest } from './CataractSelfTest.jsx';

const questions = {
  en: [
    'Are you between 18 and 60 years old?',
    'Has your glasses prescription been stable for at least 12 months?',
    'Are you free of severe dry eye or significant corneal disease?',
    'Are you tired of relying on glasses or contact lenses?',
    'Is your overall eye health good (no glaucoma, cataract, infection)?',
    'Are you NOT currently pregnant or breastfeeding?',
    'Do you have realistic expectations about LASIK results?',
    'Are you willing to follow post-op care instructions?',
  ],
  es: [
    '¿Tienes entre 18 y 60 años?',
    '¿Tu receta de anteojos ha sido estable por al menos 12 meses?',
    '¿Estás libre de ojo seco severo o enfermedad corneal significativa?',
    '¿Estás cansado de depender de anteojos o lentes de contacto?',
    '¿Tu salud ocular general es buena (sin glaucoma, catarata, infección)?',
    '¿NO estás embarazada ni amamantando?',
    '¿Tienes expectativas realistas sobre los resultados del LASIK?',
    '¿Estás dispuesto a seguir las indicaciones post-operatorias?',
  ],
};

export default function LasikSelfTest() {
  return (
    <SelfTest
      titleEn="LASIK Self-Test"
      titleEs="Test de LASIK"
      bodyEn="Eight questions to gauge candidacy. Final candidacy requires an in-person evaluation."
      bodyEs="Ocho preguntas para evaluar candidatura. La candidatura final requiere evaluación presencial."
      questions={questions}
      backTo="/services/lasik"
    />
  );
}
