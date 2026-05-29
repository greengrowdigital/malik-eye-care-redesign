export const services = [
  {
    slug: 'cataracts',
    family: 'surgical',
    title: { en: 'Laser Cataract Surgery', es: 'Cirugía de Cataratas con Láser' },
    tagline: {
      en: 'Femtosecond precision for clearer, glasses-optional vision.',
      es: 'Precisión femtosegundo para una visión más clara, con o sin anteojos.',
    },
    accent: '#c9a961',
    image: 'https://www.malikeyecare.com/wp-content/uploads/2016/09/malik.jpg',
    secondaryImage: 'https://www.malikeyecare.com/wp-content/uploads/2016/09/malik1.jpg',
    summary: {
      en: 'A cataract is a clouding of the eye\'s natural lens. Malik Eye Care offers laser-assisted cataract surgery using OCT-guided femtosecond technology — the same precision that revolutionized LASIK, now applied to the corneal incision, capsulotomy, lens fragmentation and astigmatism correction.',
      es: 'Una catarata es la opacificación del cristalino natural. Malik Eye Care ofrece cirugía de cataratas asistida por láser con tecnología femtosegundo guiada por OCT — la misma precisión que revolucionó el LASIK, ahora aplicada a la incisión corneal, capsulotomía, fragmentación del cristalino y corrección de astigmatismo.',
    },
    bullets: {
      en: [
        'Procedure time: about 20 minutes per eye',
        'Typical results: long-lasting clear vision at all distances with premium IOLs',
        'Recovery time: about a month, most return to normal activity within days',
      ],
      es: [
        'Duración: aproximadamente 20 minutos por ojo',
        'Resultados típicos: visión clara duradera a todas las distancias con LIO premium',
        'Recuperación: alrededor de un mes; la mayoría retoma actividad normal en días',
      ],
    },
    sections: [
      {
        title: { en: 'The corneal incision', es: 'Incisión corneal' },
        body: {
          en: 'In laser cataract surgery, we plan a 3-D OCT image to create an incision with exact location, depth and length — increasing self-sealing and reducing infection risk.',
          es: 'En la cirugía con láser planificamos una imagen OCT 3D para crear una incisión con ubicación, profundidad y longitud exactas — favoreciendo el auto-sellado y reduciendo el riesgo de infección.',
        },
      },
      {
        title: { en: 'The capsulotomy', es: 'Capsulotomía' },
        body: {
          en: 'Femtosecond capsulotomies enable better centering of the intraocular lens. IOL positioning is a significant factor in determining final visual outcomes.',
          es: 'Las capsulotomías con femtosegundo logran un mejor centrado del lente intraocular. La posición del LIO determina en gran medida el resultado visual final.',
        },
      },
      {
        title: { en: 'Lens fragmentation', es: 'Fragmentación del cristalino' },
        body: {
          en: 'The laser softens the cataract as it breaks it up. Less ultrasound energy is needed — reducing the chance of burning the incision and protecting the lens capsule.',
          es: 'El láser ablanda la catarata mientras la fragmenta. Se requiere menos energía ultrasónica — reduciendo la posibilidad de dañar la incisión y protegiendo la cápsula del cristalino.',
        },
      },
      {
        title: { en: 'Astigmatism correction', es: 'Corrección de astigmatismo' },
        body: {
          en: 'During refractive laser-assisted cataract surgery, the OCT image plans laser LRI or AK incisions with precise location, length and depth — improving the probability of good vision without glasses.',
          es: 'Durante la cirugía refractiva con láser, la imagen OCT planifica incisiones LRI o AK con ubicación, longitud y profundidad precisas — mejorando la probabilidad de buena visión sin anteojos.',
        },
      },
    ],
    children: [
      { slug: 'self-test', titleKey: 'cataracts.selfTest' },
      { slug: 'surgery-options', titleKey: 'cataracts.options' },
      { slug: 'premium-iol', titleKey: 'cataracts.iol' },
    ],
  },
  {
    slug: 'lasik',
    family: 'surgical',
    title: { en: 'LASIK & Custom Vision Correction', es: 'LASIK y Corrección Visual Personalizada' },
    tagline: {
      en: 'Wake up and read the clock. Five to fifteen minutes for both eyes.',
      es: 'Despierta y lee el reloj. Cinco a quince minutos para ambos ojos.',
    },
    accent: '#2a5e8c',
    image: 'https://www.malikeyecare.com/wp-content/uploads/2016/09/lasik_new.png',
    summary: {
      en: 'LASIK (Laser-Assisted In-Situ Keratomileusis) gently reshapes the cornea so light focuses precisely on the retina. Both nearsighted and farsighted patients benefit, and Excimer lasers also correct astigmatism. Variations include Epi-LASIK, PRK and custom Wavefront LASIK.',
      es: 'El LASIK (Queratomileusis In-Situ Asistida por Láser) remodela suavemente la córnea para que la luz se enfoque con precisión en la retina. Beneficia tanto a miopes como a hipermétropes, y los láseres Excimer también corrigen astigmatismo. Las variantes incluyen Epi-LASIK, PRK y LASIK Wavefront personalizado.',
    },
    bullets: {
      en: [
        'Outpatient procedure with minimal downtime',
        'Most patients see dramatic improvement immediately',
        '5–15 minutes for both eyes',
      ],
      es: [
        'Procedimiento ambulatorio con mínimo tiempo de recuperación',
        'La mayoría nota mejora drástica de inmediato',
        '5–15 minutos para ambos ojos',
      ],
    },
    sections: [
      {
        title: { en: 'Phase 1 — Corneal flap', es: 'Fase 1 — Flap corneal' },
        body: {
          en: 'A thin flap of corneal tissue is created on the surface of the eye using a femtosecond laser or microkeratome.',
          es: 'Se crea un fino flap de tejido corneal en la superficie del ojo con láser femtosegundo o microqueratomo.',
        },
      },
      {
        title: { en: 'Phase 2 — Excimer reshaping', es: 'Fase 2 — Remodelado Excimer' },
        body: {
          en: 'A cool laser beam gently reshapes the cornea using measurements unique to your eye — corneal thickness, topography, shape and refractive stability.',
          es: 'Un haz láser frío remodela la córnea utilizando mediciones únicas de tu ojo — espesor, topografía, forma y estabilidad refractiva.',
        },
      },
    ],
    children: [
      { slug: 'self-test', titleKey: 'lasik.selfTest' },
      { slug: 'prk', titleKey: 'lasik.prk' },
    ],
  },
  {
    slug: 'glaucoma',
    family: 'medical',
    title: { en: 'Glaucoma Treatment & Management', es: 'Tratamiento y Manejo de Glaucoma' },
    tagline: {
      en: 'The silent thief, monitored quarterly. Caught early, beautifully manageable.',
      es: 'El ladrón silencioso, monitoreado cada trimestre. Detectado a tiempo, manejable.',
    },
    accent: '#4a7c9c',
    image: 'https://www.malikeyecare.com/wp-content/uploads/2016/09/glaucoma-chart.jpg',
    summary: {
      en: 'Glaucoma is characterized by a buildup of pressure within the eye that can damage the optic nerve, often without symptoms until vision is already affected. It is the second leading cause of blindness in the United States. Regular tonometer screenings during eye exams allow early detection — and a host of medications and surgical options to manage it.',
      es: 'El glaucoma se caracteriza por un aumento de presión intraocular que puede dañar el nervio óptico, frecuentemente sin síntomas hasta que la visión se ve afectada. Es la segunda causa principal de ceguera en EE.UU. Las revisiones con tonómetro durante los exámenes permiten detección temprana — y existen múltiples medicamentos y opciones quirúrgicas para manejarlo.',
    },
    bullets: {
      en: [
        'Comprehensive tonometry, optic nerve imaging, visual field testing',
        'Personalized medication regimens & MIGS surgical options',
        'Long-term monitoring at every location',
      ],
      es: [
        'Tonometría completa, imagen de nervio óptico, campos visuales',
        'Regímenes personalizados y opciones quirúrgicas MIGS',
        'Seguimiento a largo plazo en cada consultorio',
      ],
    },
    sections: [
      {
        title: { en: 'What is glaucoma?', es: '¿Qué es el glaucoma?' },
        body: {
          en: 'Pressure builds within the eye and damages the optic nerve. Symptoms can include blurred vision, halos around lights, intense eye pain, nausea and, eventually, blindness. Many cases have no early symptoms — making routine exams essential.',
          es: 'La presión se acumula dentro del ojo y daña el nervio óptico. Los síntomas pueden incluir visión borrosa, halos alrededor de luces, dolor ocular intenso, náuseas y, eventualmente, ceguera. Muchos casos no muestran síntomas tempranos — los exámenes de rutina son esenciales.',
        },
      },
      {
        title: { en: 'How we treat it', es: 'Cómo lo tratamos' },
        body: {
          en: 'Treatment depends on stage and type — drops, laser trabeculoplasty, MIGS or filtration surgery. We tailor the plan and monitor pressure every visit.',
          es: 'El tratamiento depende de la etapa y tipo — gotas, trabeculoplastia láser, MIGS o cirugía filtrante. Personalizamos el plan y monitoreamos la presión en cada visita.',
        },
      },
    ],
    children: [
      { slug: 'what-is', titleKey: 'glaucoma.what' },
      { slug: 'treatment', titleKey: 'glaucoma.treatment' },
    ],
  },
  {
    slug: 'complete-eye-care',
    family: 'medical',
    title: { en: 'Complete Eye Care', es: 'Cuidado Visual Integral' },
    tagline: {
      en: 'From macular degeneration to dry eye — the everyday medical eye.',
      es: 'De degeneración macular a ojo seco — la medicina ocular cotidiana.',
    },
    accent: '#5c8c6e',
    image: 'https://www.malikeyecare.com/wp-content/uploads/2016/09/macular_degeneration.jpg',
    summary: {
      en: 'Malik Eye Care diagnoses and treats the full spectrum of eye diseases: macular degeneration, diabetic retinopathy, blepharitis, dry eye, pterygium and more. Early detection and personalized therapy keep the medical eye in balance.',
      es: 'Malik Eye Care diagnostica y trata el espectro completo de enfermedades oculares: degeneración macular, retinopatía diabética, blefaritis, ojo seco, pterigión y más. La detección temprana y la terapia personalizada mantienen el ojo en equilibrio.',
    },
    bullets: {
      en: [
        'Macular degeneration · wet & dry AMD',
        'Diabetic retinopathy · laser photocoagulation',
        'Dry eye, blepharitis & pterygium care',
      ],
      es: [
        'Degeneración macular · AMD húmeda y seca',
        'Retinopatía diabética · fotocoagulación láser',
        'Cuidado de ojo seco, blefaritis y pterigión',
      ],
    },
    sections: [
      {
        title: { en: 'Macular degeneration', es: 'Degeneración macular' },
        body: {
          en: 'The macula is required for central vision. AMD can be wet (neovascular) or dry (non-neovascular). Treatment slows progression and protects function — most powerful when caught early.',
          es: 'La mácula es esencial para la visión central. La AMD puede ser húmeda (neovascular) o seca (no neovascular). El tratamiento ralentiza la progresión y protege la función — más efectivo si se detecta temprano.',
        },
      },
      {
        title: { en: 'Diabetic retinopathy', es: 'Retinopatía diabética' },
        body: {
          en: 'High blood sugar damages retinal vessels. Annual dilated exams are essential. We treat with laser photocoagulation and emerging anti-VEGF therapies.',
          es: 'El azúcar alta daña los vasos retinales. Los exámenes anuales dilatados son esenciales. Tratamos con fotocoagulación láser y terapias anti-VEGF emergentes.',
        },
      },
      {
        title: { en: 'Dry eye & blepharitis', es: 'Ojo seco y blefaritis' },
        body: {
          en: 'Personalized drops, punctal plugs, lid hygiene and prescription therapy — calibrated to your case.',
          es: 'Gotas personalizadas, tapones lagrimales, higiene palpebral y terapia con receta — ajustadas a tu caso.',
        },
      },
    ],
    children: [],
  },
  {
    slug: 'optical',
    family: 'optical',
    title: { en: 'Optical & Eyewear', es: 'Óptica y Lentes' },
    tagline: {
      en: 'A measured, considered fitting. Lenses chosen for life.',
      es: 'Una adaptación medida y considerada. Lentes pensados para la vida.',
    },
    accent: '#1f3450',
    image: 'https://www.malikeyecare.com/wp-content/uploads/2016/09/cataract-symptom.jpg',
    summary: {
      en: 'Our opticians fit eyeglasses and contact lenses from leading designers. From CR-39 plastic to high-index and polycarbonate, we match the lens to the prescription and the life.',
      es: 'Nuestros ópticos adaptan anteojos y lentes de contacto de las principales marcas. De plástico CR-39 a alta densidad y policarbonato, ajustamos el lente a la receta y al estilo de vida.',
    },
    bullets: {
      en: [
        'Plastic CR-39 · half the weight of glass, excellent optics',
        'Polycarbonate · impact-resistant, ideal for kids & sport',
        'High-index · 35–50% thinner than basic plastic',
      ],
      es: [
        'Plástico CR-39 · mitad del peso del vidrio, óptica excelente',
        'Policarbonato · resistente a impacto, ideal para niños y deporte',
        'Alta densidad · 35–50% más delgados que el plástico básico',
      ],
    },
    sections: [
      {
        title: { en: 'Annual eye exams', es: 'Exámenes oculares anuales' },
        body: {
          en: 'Even with stable vision, an annual exam catches early signs of disease and keeps prescriptions accurate.',
          es: 'Incluso con visión estable, un examen anual detecta signos tempranos de enfermedad y mantiene la receta precisa.',
        },
      },
    ],
    children: [
      { slug: 'eye-exams', titleKey: 'optical.exams' },
    ],
  },
];

export function findService(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}
