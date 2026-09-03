export type ProcedureSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
};

export type ProcedureFaq = {
  question: string;
  answer: string;
};

export type ProcedureArticle = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  description: string;
  keywords: string[];
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  backHref: string;
  backLabel: string;
  intro: string[];
  sections: ProcedureSection[];
  faqs: ProcedureFaq[];
};

export const procedureArticles: Record<string, ProcedureArticle> = {
  'body-contouring-liposuction-singapore': {
    slug: 'body-contouring-liposuction-singapore',
    title: 'Body Contouring & Liposuction in Singapore',
    eyebrow: 'Body contouring & liposuction',
    lead: 'A detailed guide to liposuction and body contouring in Singapore, including suitability, surgical planning, recovery, scars, limitations and risks.',
    description: 'Detailed patient information on body contouring and liposuction in Singapore, including suitability, consultation, technique selection, recovery, risks and realistic limitations.',
    keywords: ['body contouring Singapore', 'liposuction Singapore', 'plastic surgeon liposuction Singapore', 'body sculpting Singapore', 'abdominal liposuction Singapore'],
    heroImage: { src: '/images/aesthetic-ai/body-contouring.jpg', alt: 'Editorial-style image representing body contouring and liposuction consultation in Singapore', caption: 'Illustrative image for patient education; not a treatment result.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Body contouring refers to procedures that reshape selected areas of the body. Liposuction is one commonly used technique that removes localised fat deposits through small incisions using cannulas and suction.',
      'Liposuction is not a weight-loss operation. It is usually considered when a patient has relatively stable weight, reasonable skin quality and specific areas of disproportion or contour concern that do not respond adequately to lifestyle measures.',
      'The decision is not simply whether fat can be removed. Safe planning considers skin elasticity, muscle tone, previous scars, weight stability, medical fitness, anaesthesia, recovery time and the patient’s expectations about what contour change can realistically achieve.'
    ],
    sections: [
      {
        id: 'suitability',
        heading: 'Who may be suitable for liposuction?',
        paragraphs: ['Suitability depends on a clinical assessment rather than a fixed body size or a single photograph. A consultation helps determine whether liposuction, another body contouring operation, non-surgical treatment or no procedure is the most appropriate option.', 'Patients who do well with liposuction usually understand that the operation changes contour, not overall body weight. The most appropriate candidates often have localised fullness with enough skin recoil for the treated area to settle smoothly.'],
        items: ['localised fat deposits or contour imbalance', 'stable weight and realistic expectations', 'adequate skin elasticity in the treatment area', 'good general health for surgery and anaesthesia', 'understanding that loose skin, cellulite and stretch marks may not improve with liposuction alone']
      },
      {
        id: 'not-weight-loss',
        heading: 'Liposuction is not weight-loss surgery',
        paragraphs: ['Patients searching for liposuction in Singapore may be looking for abdominal, waist, arm, thigh, back or chin contouring. These are contour concerns, not substitutes for medical weight management.', 'If the main issue is general weight gain, unstable weight, visceral fat around the organs, or significant loose skin, liposuction alone may disappoint. In those situations, weight stabilisation, lifestyle treatment, abdominoplasty, skin excision or no procedure may be discussed instead.']
      },
      {
        id: 'areas',
        heading: 'Common areas discussed during body contouring consultation',
        paragraphs: ['The areas assessed depend on the patient’s anatomy and goals. Treatment should be planned in a way that respects natural body proportions rather than chasing maximal fat removal.'],
        items: ['abdomen, waist and flanks', 'upper arms', 'inner or outer thighs', 'back rolls or bra-line fullness', 'male chest contour in selected cases', 'neck or submental fullness in selected patients']
      },
      {
        id: 'consultation',
        heading: 'Consultation and planning',
        paragraphs: ['Consultation includes discussion of the patient’s goals, examination of the treatment areas, assessment of skin quality and review of medical history. The surgeon may discuss whether liposuction alone is reasonable or whether skin-tightening or excisional surgery is more appropriate.', 'Photographs may be taken for medical documentation and planning. Patients should be prepared to discuss medications, smoking, previous procedures, weight changes and any medical conditions that may affect safety or healing.']
      },
      {
        id: 'singapore-planning',
        heading: 'Body contouring consultation in Singapore',
        paragraphs: ['Patients in Singapore often compare surgical liposuction with non-surgical fat reduction, radiofrequency, ultrasound or device-based contouring. These options are not interchangeable. Non-surgical treatments may be reasonable for selected minor concerns, while surgery may be considered when a more direct contour change is appropriate.', 'A plastic surgery consultation should clarify whether the concern is excess fat, loose skin, muscle separation, cellulite, weight fluctuation or a combination of factors. The discussion should include anaesthesia, recovery time, compression garments, scars, revision risk and realistic contour limits.']
      },
      {
        id: 'procedure',
        heading: 'How liposuction is performed',
        paragraphs: ['Liposuction is usually performed through small incisions. Fluid may be placed into the tissues before fat is removed with fine cannulas. The technique and anaesthesia depend on the number of areas treated, the expected volume, patient factors and surgical plan.', 'The goal is controlled contour change, not maximal fat removal. Over-aggressive treatment can increase risks and may lead to contour irregularity, skin laxity, prolonged swelling or unevenness.']
      },
      {
        id: 'skin-quality',
        heading: 'Skin quality, loose skin and contour irregularity',
        paragraphs: ['Skin quality is one of the main limits of liposuction. If the skin has poor elasticity, stretch marks, previous pregnancy-related laxity or major weight-loss changes, removing fat may make looseness more obvious.', 'Contour irregularity can occur even with careful technique, especially when tissue quality is uneven or previous procedures have changed the fat layer. The consultation should address these limitations before surgery.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after body contouring',
        paragraphs: ['Recovery varies with the number of areas treated and the extent of surgery. Bruising, swelling, numbness, tenderness and temporary firmness are common early changes. Compression garments may be recommended.', 'Many patients return gradually to light activities first, with exercise and heavier activity resumed only when advised. Final contour changes take time as swelling settles, and some firmness or unevenness can continue to change over months.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, infection, fluid collection, contour irregularity, asymmetry, altered sensation, skin laxity, scarring, pigmentation change, delayed healing, anaesthetic risks and need for revision surgery. Liposuction cannot assure a particular body shape and does not replace weight management.', 'Patients should seek prompt medical advice if they develop concerning symptoms after surgery such as increasing pain, shortness of breath, chest pain, fever, spreading redness, one-sided leg swelling or sudden deterioration.']
      },
      {
        id: 'questions',
        heading: 'Questions to ask before liposuction',
        items: ['Is my concern mainly fat, loose skin, muscle separation or weight-related change?', 'What contour change is realistic for my anatomy?', 'Where will the scars be placed?', 'What compression garment and activity restrictions are expected?', 'What complications should prompt urgent medical attention?', 'What are the alternatives if liposuction alone is unlikely to help?']
      }
    ],
    faqs: [
      { question: 'Is liposuction a weight-loss procedure?', answer: 'No. Liposuction is intended for contouring selected areas. It is not a treatment for obesity or a substitute for weight management.' },
      { question: 'Will liposuction tighten loose skin?', answer: 'Liposuction primarily removes fat. Skin tightening is variable and depends on skin quality, age, genetics, pregnancy history and the amount of fat removed. Loose skin may need a different procedure such as tummy tuck / abdominoplasty in selected patients.' },
      { question: 'Which areas can be treated with liposuction?', answer: 'Common areas include the abdomen, waist, flanks, arms, thighs, back, male chest and selected neck concerns. Suitability depends on anatomy, skin quality and safety considerations.' },
      { question: 'What is body contouring treatment in Singapore?', answer: 'Body contouring treatment may refer to surgical options such as liposuction or skin-excision procedures, and sometimes to non-surgical device-based treatments. These options are not interchangeable; assessment should clarify whether the concern is localised fat, loose skin, muscle laxity, weight change or a combination.' },
      { question: 'How do I compare body contouring procedures?', answer: 'Useful comparison points include whether the procedure treats fat, skin or muscle laxity; whether anaesthesia is needed; expected recovery; scars; compression garments; limitations; and complication risks. The safest option depends on examination and realistic goals rather than a generic package.' },
      { question: 'When will the final result be visible?', answer: 'Swelling improves gradually over weeks to months. The timeline varies by area treated, extent of surgery, garment use and individual healing.' },
      { question: 'Can liposuction be combined with other procedures?', answer: 'Sometimes, but combination surgery increases planning complexity and may affect anaesthesia, recovery and risk. The decision should be individualised.' }
    ]
  },
  'tummy-tuck-singapore': {
    slug: 'tummy-tuck-singapore',
    title: 'Tummy Tuck / Abdominoplasty in Singapore',
    eyebrow: 'Tummy tuck & abdominoplasty',
    lead: 'A patient guide to tummy tuck surgery in Singapore, including loose abdominal skin, diastasis recti repair, mini versus full abdominoplasty, liposuction, recovery, scars and risks.',
    description: 'Patient information on tummy tuck and abdominoplasty in Singapore, including loose abdominal skin, diastasis recti, mini versus full tummy tuck, liposuction, recovery, scars and risks.',
    keywords: ['tummy tuck Singapore', 'abdominoplasty Singapore', 'mini tummy tuck Singapore', 'diastasis recti repair Singapore', 'post pregnancy tummy tuck Singapore', 'loose abdominal skin surgery Singapore', 'mommy makeover Singapore'],
    heroImage: { src: '/images/aesthetic-ai/body-contouring.jpg', alt: 'Educational image representing abdominal contouring and tummy tuck consultation in Singapore', caption: 'Illustrative image for patient education; not a treatment result.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'A tummy tuck, also called abdominoplasty, is surgery to improve selected abdominal concerns such as loose lower-abdominal skin, stretched skin after pregnancy or weight change, abdominal wall laxity and selected scar or fold problems.',
      'It is different from liposuction. Liposuction removes localised fat, while tummy tuck surgery removes excess skin and may tighten the abdominal wall when diastasis recti or muscle separation is present. Some patients need liposuction, some need abdominoplasty, and some may need a combined or staged plan.',
      'This page explains how tummy tuck planning is approached in Singapore, including mini versus full abdominoplasty, diastasis recti repair, C-section scar considerations, recovery, scars, limitations and safety.'
    ],
    sections: [
      {
        id: 'what-it-treats',
        heading: 'What a tummy tuck can treat',
        paragraphs: ['A tummy tuck may be considered when the main concern is loose abdominal skin, a persistent lower-abdominal fold, stretch-related skin excess, abdominal wall laxity or a combination of skin, fat and muscle changes.', 'The operation is not a weight-loss procedure. It is usually planned when weight is reasonably stable and the concern is abdominal contour, skin excess or abdominal wall support rather than overall body weight.'],
        items: ['loose lower-abdominal skin after pregnancy or weight change', 'skin overhang or fold that does not respond to fat reduction alone', 'selected C-section scar tethering or lower-abdominal scar/fold concerns', 'diastasis recti or abdominal muscle separation in suitable patients', 'abdominal contour concerns where liposuction alone is unlikely to be enough']
      },
      {
        id: 'liposuction-vs-tummy-tuck',
        heading: 'Tummy tuck versus liposuction',
        paragraphs: ['Liposuction is useful for selected localised fat deposits when skin quality is good enough to settle after fat removal. It does not reliably tighten loose skin or repair separated abdominal muscles.', 'A tummy tuck addresses skin excess and may repair abdominal wall laxity. If a patient has significant loose skin, stretch marks, skin fold, poor skin recoil or diastasis recti, liposuction alone may worsen looseness or disappoint.']
      },
      {
        id: 'mini-full',
        heading: 'Mini tummy tuck versus full tummy tuck',
        paragraphs: ['A mini tummy tuck is usually limited to selected lower-abdominal skin excess below the belly button. It is not a smaller version of every tummy tuck and is only suitable for specific anatomy.', 'A full tummy tuck typically treats a larger area of abdominal skin and allows more comprehensive abdominal wall assessment and repair where appropriate. The belly button may need to be repositioned through the skin flap in a full abdominoplasty.'],
        items: ['mini tummy tuck: limited lower-abdominal skin excess, selected patients only', 'full tummy tuck: broader skin excess and abdominal wall planning', 'extended tummy tuck: may be discussed after major weight change or wider skin excess', 'the safest choice depends on examination, not preference for a shorter scar alone']
      },
      {
        id: 'diastasis',
        heading: 'Diastasis recti and abdominal wall repair',
        paragraphs: ['Diastasis recti is separation or stretching of the midline abdominal muscles, commonly after pregnancy or major abdominal distension. It may contribute to a persistent abdominal bulge even when body fat is not the main problem.', 'When clinically appropriate, tummy tuck surgery may include repair of abdominal wall laxity. This is different from treating a true hernia, which may require separate assessment or combined planning depending on the case.']
      },
      {
        id: 'post-pregnancy',
        heading: 'Post-pregnancy abdominal changes and mommy makeover discussions',
        paragraphs: ['After pregnancy, patients may notice loose skin, stretch marks, a lower-abdominal fold, C-section scar tethering, separated abdominal muscles or changes in breast volume and shape. These concerns should be assessed separately rather than grouped automatically into a package.', 'A so-called mommy makeover may include abdominal and breast procedures in selected patients, but combination surgery increases anaesthesia time, recovery demands and risk. The decision should be individualised and safety-led.']
      },
      {
        id: 'consultation',
        heading: 'Consultation and planning',
        paragraphs: ['Consultation includes weight history, pregnancy history, plans for future pregnancy, previous abdominal surgery, C-section scars, hernia symptoms, smoking status, medications, medical conditions, skin quality, fat distribution and abdominal wall assessment.', 'A formal examination helps determine whether the issue is mainly loose skin, fat, muscle separation, scar tethering, visceral abdominal fullness or a combination. This distinction matters because different problems require different treatments.']
      },
      {
        id: 'scars-belly-button',
        heading: 'Scars and belly button considerations',
        paragraphs: ['Tummy tuck surgery leaves a lower-abdominal scar. The scar length and position depend on the amount and distribution of excess skin, previous scars and the surgical plan. A longer scar may sometimes be needed to avoid bunching or dog-ears.', 'In a full tummy tuck, the belly button is usually brought through the tightened skin flap. Belly button shape, scar visibility, asymmetry and healing changes should be discussed before surgery. No surgical scar can be expected to be invisible.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after tummy tuck surgery',
        paragraphs: ['Recovery is more involved than liposuction alone. Patients may need dressings, drains in selected cases, compression garments, a flexed posture initially, time away from work and help at home, especially if caring for young children.', 'Swelling, tightness, bruising, altered sensation and scar maturation are expected. Heavy lifting, strenuous exercise and abdominal strain are usually restricted until cleared. Final contour and scar maturation take months.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, haematoma, infection, seroma, wound breakdown, delayed healing, skin or umbilical circulation problems, visible or widened scars, dog-ears, asymmetry, altered sensation, contour irregularity, recurrent laxity, venous thromboembolism, anaesthetic risks and need for revision surgery.', 'Smoking, diabetes, high BMI, unstable weight, poor nutrition, previous scars and extensive combination surgery may increase risk. Patients should seek prompt medical advice after surgery if they develop increasing pain, fever, spreading redness, sudden swelling, shortness of breath, chest pain, calf pain or sudden deterioration.']
      },
      {
        id: 'questions',
        heading: 'Questions to ask before tummy tuck surgery',
        items: ['Is my concern mainly loose skin, fat, muscle separation, scar tethering or visceral fullness?', 'Am I a better candidate for liposuction, mini tummy tuck, full tummy tuck or staged surgery?', 'Do I have diastasis recti or a possible hernia that needs assessment?', 'Where will the scar sit and how long may it be?', 'Will the belly button be repositioned?', 'How much help at home will I need during recovery?', 'What factors increase my wound-healing or clot risk?']
      }
    ],
    faqs: [
      { question: 'Is tummy tuck the same as liposuction?', answer: 'No. Liposuction removes selected fat deposits. A tummy tuck removes excess skin and may repair abdominal wall laxity or diastasis recti in suitable patients.' },
      { question: 'Can tummy tuck repair diastasis recti?', answer: 'In suitable patients, abdominoplasty may include repair of abdominal wall separation. A true hernia is different and may need separate or combined assessment.' },
      { question: 'What is the difference between mini and full tummy tuck?', answer: 'A mini tummy tuck is limited to selected lower-abdominal skin excess. A full tummy tuck treats broader abdominal skin excess and may include more comprehensive abdominal wall repair and belly-button repositioning.' },
      { question: 'When can I consider tummy tuck after pregnancy?', answer: 'Timing depends on recovery from pregnancy, breastfeeding, weight stability, childcare demands, medical fitness and whether future pregnancy is planned. This should be discussed in consultation.' },
      { question: 'Will the tummy tuck scar be visible?', answer: 'Yes. A lower-abdominal scar is expected. Scar position and length depend on anatomy and skin excess, and scar maturation varies between individuals.' },
      { question: 'Is tummy tuck a weight-loss operation?', answer: 'No. It is a body-contouring operation for selected skin, fat and abdominal wall concerns. Weight should usually be reasonably stable before surgery.' }
    ]
  },

  'breast-augmentation-singapore': {
    slug: 'breast-augmentation-singapore',
    title: 'Breast Augmentation in Singapore',
    eyebrow: 'Breast augmentation & implants',
    lead: 'A patient guide to breast augmentation in Singapore, including implant selection, Motiva implant planning, fat grafting alternatives, recovery, screening, risks and long-term implant follow-up.',
    description: 'Patient information on breast augmentation in Singapore, including breast implants, Motiva implant planning, implant size and profile, fat grafting alternatives, recovery, screening and risks.',
    keywords: ['breast augmentation Singapore', 'breast implant Singapore', 'breast implants Singapore', 'breast enlargement Singapore', 'Motiva implants Singapore', 'boob job Singapore', 'aesthetic breast surgery Singapore'],
    heroImage: { src: '/images/aesthetic-breast/breast-implants-motiva-consultation-singapore.jpg', alt: 'Breast implant sizers and Motiva implant samples used during breast augmentation consultation planning in Singapore', caption: 'Breast implant samples used for patient education during consultation; not a before-and-after result or product endorsement.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Breast augmentation is surgery to increase or restore breast volume and refine breast shape. In Singapore, patients may consider breast augmentation for naturally small breast volume, postpartum volume loss, asymmetry, body proportion concerns or reconstruction-related goals.',
      'The safest plan is not simply choosing a cup size. Breast augmentation planning should consider breast base width, soft-tissue thickness, chest wall shape, nipple position, skin quality, implant dimensions, incision, implant plane, recovery needs and long-term follow-up.',
      'This page explains the main decisions patients should understand before breast augmentation, including implant selection, Motiva implant discussions, selected fat grafting alternatives, 24-hour rapid recovery principles and reasons breast screening or additional medical assessment may be needed before elective surgery.'
    ],
    sections: [
      {
        id: 'what-it-can-do',
        heading: 'What breast augmentation can and cannot do',
        paragraphs: ['Breast augmentation can increase breast volume, improve selected proportions and help address mild asymmetry in suitable patients. It may also restore some volume lost after pregnancy, breastfeeding or weight change.', 'It cannot guarantee a specific cup size, perfect symmetry or a fixed long-term breast shape. If the main issue is significant drooping, loose skin or low nipple position, an implant alone may not be enough and a breast lift may need to be discussed.']
      },
      {
        id: 'consultation',
        heading: 'Breast augmentation consultation and measurements',
        paragraphs: ['Consultation includes breast measurements, skin and soft-tissue assessment, chest wall shape, nipple position, asymmetry, previous scars, pregnancy and breastfeeding history, weight changes, medical history and breast-screening history.', 'Implant planning should match the patient’s anatomy rather than forcing the tissues to fit a preferred size. Measurements such as breast base width and tissue thickness help narrow the range of implant dimensions that may be safer and more proportionate.']
      },
      {
        id: 'implant-choices',
        heading: 'Implant size, profile, shape and feel',
        paragraphs: ['Breast implants differ in volume, base width, projection, profile, shell, gel characteristics and shape. During consultation, implant samples or sizers may help patients understand how these choices relate to their frame and goals.', 'The image on this page shows implant samples used for educational discussion. Brand names may come up during consultation, including Motiva implants, but implant choice should be based on anatomy, safety, device characteristics, surgeon judgement and patient goals rather than brand familiarity alone.'],
        items: ['base width and implant diameter', 'projection and profile', 'round versus anatomical-style planning considerations', 'surface and shell characteristics', 'gel feel and cohesivity', 'long-term monitoring and possible future surgery']
      },
      {
        id: 'plane-incision',
        heading: 'Implant pocket and incision planning',
        paragraphs: ['The implant may be placed in different planes depending on anatomy and goals, such as under breast tissue or under/partly under muscle. Each approach has trade-offs involving implant visibility, animation, recovery, soft-tissue coverage and revision considerations.', 'Incisions may be planned in different locations depending on anatomy and surgeon preference. Scar position, access, implant type, breast fold anatomy and long-term healing should be discussed before surgery.']
      },
      {
        id: 'fat-grafting-lift',
        heading: 'Implants, fat grafting and breast lift alternatives',
        paragraphs: ['Implants are a common way to increase breast volume, but they are not the only aesthetic breast option. Fat grafting may be considered for selected contour refinement or modest volume goals, but it is limited by donor fat, tissue capacity and how much transferred fat persists.', 'A breast lift addresses nipple position and loose skin rather than simply adding volume. Some patients need a lift, an augmentation, or a combined/staged plan depending on breast position, skin quality and desired change.']
      },
      {
        id: 'screening-safety',
        heading: 'Breast screening and medical safety before cosmetic surgery',
        paragraphs: ['Elective breast augmentation should not bypass appropriate breast assessment. Patients with breast lumps, nipple discharge, skin changes, strong family history, abnormal imaging or unexplained symptoms may need imaging or breast specialist review before cosmetic surgery is considered.', 'Patients should also understand that implants are medical devices. They may require monitoring, can affect some imaging techniques, and may need future surgery for rupture, capsular contracture, malposition, infection, size change or other concerns.']
      },
      {
        id: 'rapid-recovery',
        heading: '24-hour rapid recovery breast augmentation principles',
        paragraphs: ['For selected primary breast augmentation patients, Dr Sun may discuss rapid recovery principles learnt directly from Dr William Adams during aesthetic breast surgery training. These principles emphasise careful planning, gentle tissue handling, pocket control, bleeding control and structured early movement.', 'This should not be understood as an assured 24-hour timeline for every patient. Suitability depends on anatomy, implant choice, surgical plan, anaesthesia recovery, symptoms, confidence with early movement and individual healing.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after breast augmentation',
        paragraphs: ['Recovery varies between patients. Swelling, tightness, bruising, temporary altered sensation and implant settling are expected early changes. Patients may need a supportive garment and should follow specific activity instructions.', 'Light daily activity may resume earlier in selected patients, but heavy lifting, strenuous exercise and contact activity should only resume when advised. Breast shape and scars continue to mature over weeks to months.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, infection, haematoma, wound healing problems, visible scars, asymmetry, altered nipple or skin sensation, implant malposition, capsular contracture, implant rupture, rippling, need for revision surgery and anaesthetic risks. Outcomes vary and cannot be promised in advance.', 'Patients should seek medical advice promptly after surgery if they develop rapidly increasing swelling, severe one-sided pain, fever, spreading redness, shortness of breath, chest pain, fainting or sudden deterioration.']
      },
      {
        id: 'questions',
        heading: 'Questions to ask before breast augmentation',
        items: ['Is my goal mainly volume increase, upper-pole fullness, symmetry, shape or correction of postpartum change?', 'What implant dimensions fit my breast base width and soft-tissue coverage?', 'Would implants, fat grafting, a breast lift or a staged plan best match my anatomy?', 'Do I need breast imaging or specialist review before elective surgery?', 'Where will the scar be and how may it mature?', 'What implant-specific risks and long-term follow-up should I understand?']
      }
    ],
    faqs: [
      { question: 'What is the difference between breast augmentation and breast implants?', answer: 'Breast augmentation is the procedure. Breast implants are one method used to increase breast volume. Selected patients may also discuss fat grafting, breast lift or other aesthetic breast options depending on anatomy and goals.' },
      { question: 'Are Motiva implants the best option for everyone?', answer: 'No single implant brand or model is best for every patient. Motiva implants may be discussed during consultation, but implant choice should be based on anatomy, tissue quality, implant dimensions, safety considerations, surgeon judgement and patient goals.' },
      { question: 'Can breast augmentation correct sagging?', answer: 'Implants may improve selected mild volume-related deflation, but significant sagging or low nipple position often requires discussion of a breast lift rather than implant alone.' },
      { question: 'Do breast implants need to be replaced every 10 years?', answer: 'Not automatically. Implants are not lifetime devices for every patient, but replacement is usually based on symptoms, imaging findings, implant problems, patient preference or revision needs rather than a fixed date alone.' },
      { question: 'Can breast augmentation be planned for rapid recovery?', answer: 'Selected primary breast augmentation patients may be suitable for rapid recovery principles, but this is not assured for every patient. Recovery depends on anatomy, implant choice, surgical plan, anaesthesia recovery and individual healing.' },
      { question: 'Will breast augmentation affect breast screening?', answer: 'Breast implants can affect imaging technique and should be disclosed to screening providers. Patients with symptoms, family history or abnormal imaging may need assessment before elective cosmetic surgery.' }
    ]
  },

  'breast-aesthetic-surgery-singapore': {
    slug: 'breast-aesthetic-surgery-singapore',
    title: 'Breast Augmentation & Aesthetic Breast Surgery in Singapore',
    eyebrow: 'Breast aesthetic surgery',
    lead: 'A detailed guide to breast augmentation, 24-hour rapid recovery principles, lift, reduction and asymmetry correction in Singapore, including planning, screening considerations, recovery and risks.',
    description: 'Detailed patient information on breast augmentation and aesthetic breast surgery in Singapore, including implants, 24-hour rapid recovery principles, lift, reduction, asymmetry correction, consultation and risks.',
    keywords: ['breast aesthetic surgery Singapore', 'breast augmentation Singapore', '24 hour rapid recovery breast augmentation Singapore', 'rapid recovery breast augmentation Singapore', 'breast lift Singapore', 'breast reduction Singapore', 'breast implant Singapore', 'breast asymmetry surgery Singapore'],
    heroImage: { src: '/images/aesthetic-ai/breast-aesthetic.jpg', alt: 'Editorial-style image representing breast aesthetic surgery consultation and planning', caption: 'Illustrative image for patient education; not a before-and-after result.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Breast aesthetic surgery includes procedures that change breast size, shape, position or symmetry. Common operations include breast augmentation, breast lift, breast reduction and correction of asymmetry.',
      'The right operation depends on the patient’s anatomy, skin quality, breast volume, nipple position, chest wall shape, personal goals and health factors. Some patients need a single procedure, while others may need a combined or staged plan.',
      'Planning should be medically careful as well as aesthetic. Breast symptoms, family history, previous imaging, pregnancy plans, breastfeeding goals and long-term follow-up all matter when choosing an operation.'
    ],
    sections: [
      {
        id: 'options',
        heading: 'Common breast aesthetic surgery options',
        paragraphs: ['Different breast procedures address different concerns. A consultation helps identify which option matches the anatomy and goals.'],
        items: ['breast augmentation with implants or selected fat grafting approaches', 'breast lift for ptosis or drooping', 'breast reduction for heavy or symptomatic breasts', 'asymmetry correction when breast shape or size differs between sides', 'revision surgery after previous breast procedures']
      },
      {
        id: 'assessment',
        heading: 'Assessment and planning',
        paragraphs: ['Assessment includes breast measurements, skin and soft-tissue evaluation, nipple-areola position, chest wall shape, previous scars and discussion of pregnancy, breastfeeding, weight changes and screening history.', 'Patients may be advised to complete age-appropriate breast screening or specialist breast assessment before elective surgery where clinically indicated. This is especially important when there are breast symptoms, family history or imaging concerns.']
      },
      {
        id: 'augmentation',
        heading: 'Breast augmentation planning',
        paragraphs: ['Breast augmentation is not only a question of implant size. Planning includes base width, soft-tissue thickness, chest wall shape, nipple position, desired upper-pole fullness, cleavage goals and how the breast may age over time.', 'Implant selection may involve discussion of shape, projection, surface, placement plane and incision. The plan should avoid choosing a size that exceeds what the tissues can safely support.']
      },
      {
        id: 'rapid-recovery-augmentation',
        heading: '24-hour rapid recovery breast augmentation',
        paragraphs: ['For selected breast augmentation patients, Dr Sun may discuss a 24-hour rapid recovery approach based on principles taught by Dr William Adams, from whom Dr Sun learnt directly during aesthetic breast surgery training.', 'The concept combines careful tissue handling, precise implant-pocket planning, bloodless dissection where possible, appropriate implant selection and a strict post-surgery activity protocol. The aim is to reduce unnecessary downtime while still respecting surgical safety and individual healing.', 'Under this type of protocol, suitable patients may be encouraged to move early, use their arms in a controlled way, go out for dinner on the same day, and wash their hair on the same night. These examples are not fixed recovery expectations for every patient; they depend on the operation performed, anaesthesia recovery, pain control, bleeding risk, patient confidence and the surgeon’s specific instructions.', 'Patients should follow the prescribed recovery protocol closely and seek medical advice promptly for concerning symptoms such as increasing pain, marked swelling, fever, spreading redness, shortness of breath or sudden deterioration.']
      },
      {
        id: 'lift-reduction',
        heading: 'Breast lift and breast reduction',
        paragraphs: ['A breast lift addresses drooping by reshaping the breast and repositioning the nipple-areola complex. It may be considered when breast volume is adequate but position and skin envelope are the main concerns.', 'Breast reduction removes breast tissue and skin to reduce size and weight. It may be considered for heavy breasts, discomfort, posture symptoms, skin irritation or proportion concerns. Scars, sensation changes and breastfeeding considerations should be discussed carefully.']
      },
      {
        id: 'asymmetry',
        heading: 'Breast asymmetry and combined procedures',
        paragraphs: ['Most patients have some natural breast asymmetry. Surgery may improve selected differences in volume, fold height, nipple position or breast shape, but perfect symmetry is not realistic.', 'Asymmetry correction may require different procedures on each side, such as augmentation on one side, reduction or lift on the other, or staged surgery. This should be explained clearly before surgery.']
      },
      {
        id: 'singapore-consultation',
        heading: 'Breast aesthetic surgery consultation in Singapore',
        paragraphs: ['A breast aesthetic consultation should be more detailed than choosing an implant size. Planning includes breast measurements, soft-tissue thickness, chest wall shape, nipple position, desired proportions, lifestyle, future pregnancy considerations and breast-screening history.', 'In Singapore, patients may also be balancing discretion, downtime, work commitments and family responsibilities. These practical factors should be discussed alongside surgical safety, scars, implant choices, revision possibilities and long-term follow-up.']
      },
      {
        id: 'screening',
        heading: 'Breast screening and medical safety',
        paragraphs: ['Elective breast aesthetic surgery should not bypass appropriate medical assessment. Patients with breast lumps, nipple discharge, skin changes, strong family history, abnormal imaging or unexplained symptoms may need breast specialist review or imaging before cosmetic surgery is considered.', 'Patients should keep future breast screening in mind. Implants and previous surgery can affect imaging technique and follow-up, so long-term communication with screening providers is important.']
      },
      {
        id: 'implants',
        heading: 'Implants, fat grafting and trade-offs',
        paragraphs: ['Implants can increase breast volume and shape, but involve implant-specific considerations such as capsular contracture, implant visibility, rupture, malposition, infection and possible future revision surgery.', 'Fat grafting uses the patient’s own fat and may be useful in selected circumstances, but the amount of reliable volume increase is limited and some transferred fat may not persist. It may be more suitable for contour refinement than large-volume enlargement.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after breast aesthetic surgery',
        paragraphs: ['Recovery depends on the operation performed. Swelling, bruising, tightness, temporary altered sensation and scar maturation are expected after surgery. Activity restrictions, supportive garments and follow-up vary by procedure.', 'For selected breast augmentation cases using a rapid recovery protocol, early controlled arm movement and return to light daily activities may be encouraged rather than prolonged immobilisation. This is different from recovery after a lift, reduction, combined procedure or more complex revision, where restrictions may be more conservative.', 'Patients should avoid judging the final shape too early. Implants, scars and breast tissues may settle over weeks to months. Revision decisions, if needed, are usually considered only after adequate healing unless there is an urgent complication.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, infection, wound healing problems, scarring, asymmetry, altered nipple or skin sensation, implant-related problems, fat grafting changes, inability to breastfeed in some situations, need for future surgery and anaesthetic risks. Outcomes vary and cannot be promised in advance.', 'Implants are medical devices and may require monitoring or future surgery. Breast tissues also change with ageing, weight change, pregnancy and hormonal factors.']
      },
      {
        id: 'questions',
        heading: 'Questions to ask before breast aesthetic surgery',
        items: ['Which operation matches my anatomy: augmentation, lift, reduction, asymmetry correction or a combination?', 'Do I need breast imaging or specialist review before elective surgery?', 'Where will the scars be and how may they mature?', 'What are the implant-specific risks and long-term follow-up needs?', 'How might pregnancy, breastfeeding or weight change affect the result?', 'What revision risks should I understand before proceeding?']
      }
    ],
    faqs: [
      { question: 'Is breast augmentation always done with implants?', answer: 'Not always. Implants are a common option for volume increase, while fat grafting may be considered in selected patients. Each has different limitations and risks.' },
      { question: 'What is 24-hour rapid recovery breast augmentation?', answer: 'It refers to a selected-patient breast augmentation protocol based on careful surgical technique and structured early recovery instructions. Dr Sun learnt these principles directly from Dr William Adams. Some suitable patients may be able to go out for dinner on the day of surgery and wash their hair that night, but this is not assured and depends on the surgical plan, anaesthetic recovery, symptoms and individual circumstances.' },
      { question: 'Can a breast lift be combined with implants?', answer: 'Sometimes. A lift and implant can be combined when both breast position and volume need to be addressed, but this may increase complexity and requires careful planning.' },
      { question: 'Do I need breast screening before cosmetic breast surgery?', answer: 'Some patients may need age-appropriate screening, imaging or breast specialist review before elective surgery, especially if there are symptoms, family history or previous imaging concerns.' },
      { question: 'Will scars disappear?', answer: 'No surgical scar disappears completely. Scars usually mature over months and vary depending on the procedure, skin type, wound healing and individual biology.' },
      { question: 'Will implants need to be replaced in the future?', answer: 'Not every implant requires replacement at a fixed time, but implants are not lifetime devices for every patient. Monitoring and possible future surgery should be discussed before augmentation.' }
    ]
  },
  'asian-rhinoplasty-singapore': {
    slug: 'asian-rhinoplasty-singapore',
    title: 'Asian Rhinoplasty in Singapore',
    eyebrow: 'Asian rhinoplasty',
    lead: 'A detailed guide to Asian rhinoplasty in Singapore, including nasal bridge and tip planning, structural support, rib cartilage considerations, recovery and risks.',
    description: 'Detailed patient information on Asian rhinoplasty in Singapore, including consultation, structural rhinoplasty, rib cartilage, revision planning, recovery, risks and limitations.',
    keywords: ['Asian rhinoplasty Singapore', 'rhinoplasty Singapore', 'rib cartilage rhinoplasty Singapore', 'nose surgery Singapore', 'structural rhinoplasty Singapore'],
    heroImage: { src: '/images/aesthetic-ai/asian-rhinoplasty.jpg', alt: 'Editorial-style image representing Asian rhinoplasty consultation and facial profile planning', caption: 'Illustrative image for patient education; individual anatomy and outcomes vary.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Asian rhinoplasty is nose reshaping surgery planned around the anatomy and goals commonly seen in Asian patients, including nasal bridge height, tip projection, tip definition, nostril shape and facial balance.',
      'In many Asian noses, the septal cartilage inside the nose is not thick or strong enough to provide major support for augmentation rhinoplasty. That is why rib cartilage is often preferred when stronger framework is needed — it can support nasal height, projection, tip definition and long-term structural stability.',
      'Not every patient needs rib cartilage or a large structural operation. The plan should be tailored to the patient’s anatomy, skin thickness, existing cartilage support, previous surgery, airway symptoms and goals.'
    ],
    sections: [
      {
        id: 'assessment',
        heading: 'Assessment for Asian rhinoplasty',
        paragraphs: ['Assessment includes facial proportions, nasal bridge height, tip support, nostril shape, septal deviation, airway symptoms, skin thickness and previous fillers or surgery.', 'Photographs and clinical examination help determine whether the concern is primarily bridge height, tip projection, nostril shape, asymmetry, breathing, revision issues or a combination of factors. A careful plan should balance appearance with nasal function and long-term support.']
      },
      {
        id: 'singapore-asian-nose',
        heading: 'Asian rhinoplasty planning in Singapore',
        paragraphs: ['Patients considering rhinoplasty in Singapore often seek bridge refinement, tip projection, nostril balance or revision after fillers, implants or previous surgery. Asian rhinoplasty planning should consider the patient’s ethnic anatomy, skin thickness, cartilage strength, facial proportions and airway symptoms.', 'A structural plan may be preferred when the nose needs support rather than surface camouflage alone. However, the operation should still be proportionate: not every patient needs rib cartilage, major augmentation or an open approach.']
      },
      {
        id: 'goals',
        heading: 'Common concerns in Asian nose surgery',
        paragraphs: ['The requested change is often described in simple terms, but the surgical issue may involve several structures. Bridge height, radix shape, tip projection, nostril show, alar width, columella support and nasal airway should be assessed together.'],
        items: ['low or underprojected bridge', 'poor tip projection or definition', 'wide or flared nostrils', 'short nose appearance or poor support', 'asymmetry after previous surgery or fillers', 'airway concerns from septal deviation or structural narrowing']
      },
      {
        id: 'structural',
        heading: 'Structural rhinoplasty and cartilage support',
        paragraphs: ['Structural rhinoplasty uses cartilage framework to support the nose rather than relying only on surface augmentation. Cartilage sources may include septal cartilage, ear cartilage or rib cartilage depending on the required support.', 'In many Asian noses, septal cartilage may be limited in amount or strength for major augmentation. Rib cartilage can provide stronger material when substantial bridge, tip or revision support is needed. It also adds a donor-site incision, chest-wall discomfort and a small risk of donor-site issues, so the decision should be made carefully.']
      },
      {
        id: 'materials',
        heading: 'Implants, cartilage grafts and rib cartilage',
        paragraphs: ['Some rhinoplasty plans use implants, some use autologous cartilage and some use a combination. The discussion should include the patient’s anatomy, previous treatments, desired degree of change, infection risk, long-term support and revision considerations.', 'Rib cartilage may be considered when stronger structural support is needed for nasal height, projection, tip definition or revision surgery. Ear cartilage may be useful for selected contour or support needs, but it is usually softer and more curved. Septal cartilage can be useful when available, particularly for internal support and septal correction.']
      },
      {
        id: 'revision-fillers',
        heading: 'Revision rhinoplasty and previous fillers',
        paragraphs: ['Revision rhinoplasty can be more complex because previous surgery, implants, grafts, scar tissue or filler can alter normal planes and blood supply. The limits of safe change may be different from a first-time operation.', 'Patients who have had nose fillers should disclose the product used, timing and any complications. Filler history can affect surgical planning, even if the filler is no longer obvious on the surface.']
      },
      {
        id: 'procedure',
        heading: 'Surgical planning and technique',
        paragraphs: ['Rhinoplasty may be performed through open or closed approaches depending on the goals and anatomy. The operation may involve bridge augmentation, tip grafting, septal correction, nostril refinement or revision of previous implants or grafts.', 'The safest plan is not simply the most dramatic change. Aesthetic goals must be balanced with nasal skin, long-term support, airway function and realistic healing.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after rhinoplasty',
        paragraphs: ['Swelling, bruising, nasal blockage, tip firmness and numbness can occur after rhinoplasty. A splint or taping may be used early. Most swelling improves gradually, but tip definition can continue to refine over many months.', 'Rib cartilage harvest, when used, adds a separate donor-site recovery. Patients should avoid trauma to the nose during healing and follow specific instructions on exercise, glasses, wound care and follow-up.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, infection, scarring, asymmetry, contour irregularity, graft warping or visibility, implant or graft problems, breathing changes, altered sensation, donor-site scar if cartilage is harvested, and need for revision surgery. Perfect symmetry is not realistic.', 'A rhinoplasty result also depends on skin thickness and healing biology. Thick skin, scar tissue and previous procedures can limit how much definition is visible even when the underlying framework is changed.']
      },
      {
        id: 'questions',
        heading: 'Questions to ask before rhinoplasty',
        items: ['Is my goal mainly bridge height, tip projection, nostril refinement, airway improvement or revision?', 'What graft or implant material is being considered, and why?', 'Is rib cartilage needed in my case, or are other options reasonable?', 'How will the plan protect nasal breathing and long-term support?', 'What donor-site scar or recovery should I expect if rib cartilage is used?', 'What are the limits created by my skin thickness or previous procedures?']
      }
    ],
    faqs: [
      { question: 'Do all Asian rhinoplasty patients need rib cartilage?', answer: 'No. Rib cartilage is considered when stronger structural support is needed. Some patients may be suitable for other cartilage sources, implants, limited grafting or a different approach.' },
      { question: 'Why is rib cartilage often discussed in Asian rhinoplasty?', answer: 'In many Asian noses, septal cartilage may not provide enough strength or quantity for major augmentation. Rib cartilage can provide a stronger framework for height, projection, tip definition and support when those goals are appropriate.' },
      { question: 'Can rhinoplasty improve breathing?', answer: 'If there is septal deviation or structural airway obstruction, functional correction may be discussed. Cosmetic rhinoplasty alone is not the same as airway surgery.' },
      { question: 'How long does swelling last?', answer: 'Early swelling improves over weeks, but nasal tip swelling and refinement can take months. Revision cases and thicker skin may take longer.' },
      { question: 'Is revision rhinoplasty more complex?', answer: 'Often yes. Scar tissue, previous implants, fillers, grafts and altered anatomy can make revision surgery more complex and may limit what can be safely changed.' }
    ]
  },
  'face-neck-lift-singapore': {
    slug: 'face-neck-lift-singapore',
    title: 'Face and Neck Lift in Singapore',
    eyebrow: 'Face and neck lift',
    lead: 'A detailed guide to face lift and neck lift surgery in Singapore, including suitability, facial analysis, scars, recovery, risks and non-surgical alternatives.',
    description: 'Detailed patient information on face lift and neck lift surgery in Singapore, including suitability, consultation, surgical planning, recovery, scarring, risks and realistic limitations.',
    keywords: ['face lift Singapore', 'neck lift Singapore', 'facelift Singapore', 'lower face lift Singapore', 'jowl surgery Singapore', 'neck tightening surgery Singapore'],
    heroImage: { src: '/images/aesthetic-ai/face-neck-lift.jpg', alt: 'Editorial-style image representing face and neck lift consultation and ageing changes', caption: 'Illustrative image for patient education; not a treatment result.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Face and neck lift surgery addresses selected age-related changes in the lower face, jawline and neck. It may improve laxity of deeper tissues and skin, but it does not stop ageing or create a standardised appearance.',
      'Modern planning focuses on facial balance, skin quality, tissue descent, neck anatomy and natural-looking proportions. The most appropriate approach varies between patients and should be based on examination rather than a package label.',
      'Some patients benefit from surgery, while others may be better served by non-surgical treatments, skin treatments, volume restoration or no procedure. A consultation should clarify which concern is actually driving the visible change.'
    ],
    sections: [
      {
        id: 'suitability',
        heading: 'Who may be suitable for a face and neck lift?',
        paragraphs: ['Face and neck lift surgery may be considered when there is lower-face laxity, jowling, neck skin laxity, platysmal banding or loss of jawline definition. Suitability depends on anatomy, skin quality, medical fitness and expectations.', 'The operation is usually less appropriate when the main concern is fine skin texture, pigmentation, early volume loss or mild laxity that may be better addressed by non-surgical or skin-focused treatments.']
      },
      {
        id: 'assessment',
        heading: 'Consultation and facial analysis',
        paragraphs: ['Consultation includes assessment of the face, jawline, neck, skin quality, hairline, scars, facial asymmetry and previous treatments. Medical history, smoking status and medications are important for safety planning.', 'A careful plan distinguishes between skin laxity, deeper tissue descent, fat distribution, volume loss, platysmal bands and skin-surface changes because these require different treatments. Photographs may be used for documentation and planning.']
      },
      {
        id: 'singapore-options',
        heading: 'Face lift, neck lift and non-surgical options in Singapore',
        paragraphs: ['Patients often compare face and neck lift surgery with injectables, thread lifting, lasers or device-based skin tightening. These options are not interchangeable. Non-surgical treatments may help selected texture, volume or mild laxity concerns, while surgery is considered when tissue laxity and neck contour changes are more significant.', 'A consultation should define the main problem before choosing treatment. This helps avoid repeated minor treatments for a concern that is fundamentally surgical, while also avoiding surgery when a smaller or non-surgical approach is more appropriate.']
      },
      {
        id: 'anatomy',
        heading: 'What a face and neck lift can and cannot address',
        paragraphs: ['A face and neck lift may improve selected lower-face and neck contour concerns by repositioning deeper tissues and redraping skin. It does not change every sign of facial ageing.', 'Skin pigmentation, fine lines, acne scarring, eyelid heaviness, brow position and midface volume loss may need different treatments or no treatment depending on the patient’s goals. Combining procedures can be considered in selected patients but increases planning complexity and recovery.'],
        items: ['jowls and jawline soft-tissue descent', 'neck laxity or platysmal banding in selected cases', 'skin excess that cannot be corrected by devices alone', 'selected neck contour concerns where surgery is appropriate']
      },
      {
        id: 'procedure',
        heading: 'Surgical approach and scar planning',
        paragraphs: ['A face and neck lift may involve incisions around the ear and hairline, lifting and repositioning of deeper tissues, neck contouring and skin redraping. The exact technique depends on anatomy and goals.', 'Scar placement is planned around hairline, ear anatomy and the direction of tissue movement. Scars usually mature over months and are positioned to reduce visibility where possible, but no surgical scar disappears completely.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after face and neck lift',
        paragraphs: ['Bruising, swelling, tightness, numbness and scar maturation are expected after surgery. Patients usually need time away from strenuous activity and should follow wound-care instructions closely.', 'Early swelling and bruising improve gradually, but final refinement takes time. Numbness, firmness and scar redness may continue to change over months. Patients should avoid judging the final result too early.']
      },
      {
        id: 'safety',
        heading: 'Safety and medical planning',
        paragraphs: ['Safety planning includes review of blood pressure, bleeding risk, smoking or nicotine exposure, diabetes, medications, supplements and previous procedures. Some patients may need optimisation before elective surgery.', 'Patients should seek prompt medical attention after surgery if they develop rapidly increasing swelling, severe pain, shortness of breath, fever, spreading redness, wound concerns, facial weakness or sudden deterioration.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, haematoma, infection, wound healing problems, visible scars, altered sensation, hairline changes, asymmetry, facial nerve weakness, skin loss, prolonged swelling, contour irregularity and need for revision surgery.', 'Outcomes vary and continued ageing occurs. Surgery cannot assure symmetry, a particular degree of tightening or a permanent result.']
      },
      {
        id: 'questions',
        heading: 'Questions to ask before face and neck lift surgery',
        items: ['Is my main concern skin laxity, deeper tissue descent, neck bands, volume loss or skin quality?', 'Which concerns are likely to improve with surgery and which may not?', 'Where will the scars be placed and how will they mature?', 'What downtime and activity restrictions should I expect?', 'Would a non-surgical treatment, smaller procedure or no treatment be more appropriate?', 'What complications should prompt urgent medical attention?']
      }
    ],
    faqs: [
      { question: 'Is a face lift the same as skin tightening?', answer: 'No. A face lift may address deeper tissue laxity as well as skin redraping. Skin quality, pigmentation and surface texture may require separate treatments.' },
      { question: 'Will a face lift change how I look?', answer: 'The aim is usually refreshed facial contour rather than a different identity. The degree of change depends on anatomy, technique and healing.' },
      { question: 'Can non-surgical treatments replace surgery?', answer: 'Non-surgical treatments can help selected concerns, but they cannot reproduce the tissue repositioning and skin redraping of surgery in patients with significant laxity.' },
      { question: 'Where are face lift scars placed?', answer: 'Scar placement depends on the technique and anatomy, but incisions are commonly planned around the ear and hairline. Scars mature over months and do not disappear completely.' },
      { question: 'How long is recovery after a face and neck lift?', answer: 'Recovery varies. Bruising, swelling, tightness and numbness are common early changes, while scar maturation and final contour refinement continue over months.' },
      { question: 'Can a neck lift be done without a face lift?', answer: 'Sometimes. The decision depends on whether the main concern is isolated to the neck or also involves the jawline and lower face. A consultation is needed to assess this properly.' }
    ]
  },
  'lasers-injectables-singapore': {
    slug: 'lasers-injectables-singapore',
    title: 'Lasers and Injectables in Singapore',
    eyebrow: 'Lasers and injectables',
    lead: 'Patient information on aesthetic lasers, botulinum toxin, fillers, skin quality treatments, safety and risks.',
    description: 'Patient information on lasers and injectables in Singapore, including consultation, treatment planning, safety, recovery and risks.',
    keywords: ['lasers injectables Singapore', 'aesthetic laser Singapore', 'botulinum toxin filler Singapore'],
    heroImage: { src: '/images/aesthetic-ai/lasers-injectables.jpg', alt: 'Editorial-style image representing lasers and injectables consultation in Singapore', caption: 'Illustrative image for patient education; not a treatment result.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Lasers and injectables are non-surgical or minimally invasive treatments used for selected skin, contour and ageing-related concerns. They include energy-based devices, botulinum toxin, dermal fillers and other skin-quality treatments.',
      'Although these treatments are common, they are still medical procedures with risks. Careful assessment, appropriate indications and anatomical knowledge are important for safety.',
      'A treatment plan should be individualised rather than based on trends or a fixed package.'
    ],
    sections: [
      { id: 'options', heading: 'Common treatment categories', paragraphs: ['Treatment categories vary by concern and device or product used.'], items: ['laser or light-based treatment for pigmentation, redness, texture or scars in selected cases', 'botulinum toxin for selected dynamic wrinkles or muscle-related concerns', 'dermal fillers for selected volume or contour concerns', 'skin-quality treatments such as biostimulators or hydration-focused injectables where appropriate', 'combination plans when several concerns are present'] },
      { id: 'assessment', heading: 'Consultation and skin assessment', paragraphs: ['Assessment includes skin type, pigmentation tendency, medical history, previous treatments, medications, allergies, pregnancy status where relevant and the specific concern being treated.', 'Patients should disclose previous fillers, skin reactions, cold sores, keloid tendency and any autoimmune or bleeding issues.'] },
      { id: 'safety', heading: 'Safety considerations', paragraphs: ['Injectables require detailed anatomical knowledge. Filler complications, although uncommon, can be serious and may include vascular compromise. Laser settings must be selected with skin type and pigmentation risk in mind.', 'Treatment should be delayed or avoided when the indication is unclear, expectations are unrealistic or medical factors increase risk.'] },
      { id: 'recovery', heading: 'Recovery and aftercare', paragraphs: ['Recovery varies by treatment. Redness, swelling, bruising, tenderness, pigmentation changes or temporary skin sensitivity may occur. Some laser treatments require sun avoidance and skincare modification.', 'Patients should receive clear instructions about aftercare and warning signs that need prompt medical attention.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include bruising, swelling, infection, allergic reaction, nodules, asymmetry, overcorrection, undercorrection, pigment change, burns, scarring, vascular compromise with fillers and need for further treatment. Results are variable and not permanent.'] }
    ],
    faqs: [
      { question: 'Are injectables low-risk because they are non-surgical?', answer: 'No. Injectables are medical procedures and can have complications. Safe treatment depends on anatomy, indication, product choice and technique.' },
      { question: 'Can lasers treat all pigmentation?', answer: 'No. Pigmentation has different causes. Some pigment can worsen if the diagnosis or settings are inappropriate, especially in darker Asian skin types.' },
      { question: 'How often are treatments needed?', answer: 'This depends on the treatment type, indication, dose, device, skin response and patient goals. Maintenance should be discussed individually.' }
    ]
  },
  'fat-grafting-singapore': {
    slug: 'fat-grafting-singapore',
    title: 'Fat Grafting in Singapore',
    eyebrow: 'Fat grafting',
    lead: 'Patient information on fat transfer for contour refinement, reconstructive and aesthetic uses, recovery and risks.',
    description: 'Patient information on fat grafting and fat transfer in Singapore, including indications, consultation, recovery, limitations and risks.',
    keywords: ['fat grafting Singapore', 'fat transfer Singapore', 'autologous fat grafting Singapore'],
    heroImage: { src: '/images/aesthetic-ai/fat-grafting.jpg', alt: 'Editorial-style image representing facial fat grafting and volume restoration planning', caption: 'Illustrative image for patient education; not a treatment result.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Fat grafting, also called fat transfer, uses a patient’s own fat to improve selected contour, volume or soft-tissue quality concerns. Fat is usually harvested with liposuction, processed and placed into the target area in small amounts.',
      'Fat grafting may be used in aesthetic surgery, reconstructive surgery or revision surgery. It is not a fully predictable volume replacement method because some transferred fat may not survive.',
      'The plan depends on donor-site availability, tissue quality, the recipient area, previous surgery or radiotherapy and realistic goals.'
    ],
    sections: [
      { id: 'uses', heading: 'Where fat grafting may be used', paragraphs: ['Fat grafting can be considered for selected contour or soft-tissue concerns.'], items: ['facial volume restoration or contour refinement', 'breast contour refinement in selected aesthetic or reconstructive cases', 'softening selected contour irregularities after surgery or trauma', 'scar or radiotherapy-related tissue quality concerns in selected cases', 'small-volume body contour refinement'] },
      { id: 'assessment', heading: 'Assessment and planning', paragraphs: ['Consultation includes assessment of both donor and recipient areas. The surgeon considers how much fat can safely be harvested, how much is needed, tissue quality, scars, circulation and whether staged treatment may be required.', 'Patients should understand that fat grafting is biological. Fat survival varies and overfilling or aggressive placement can increase complications.'] },
      { id: 'procedure', heading: 'How fat grafting is performed', paragraphs: ['Fat is harvested using liposuction through small incisions. It is then prepared and injected carefully into the target area in small parcels to encourage blood supply from surrounding tissues.', 'The approach differs depending on whether the goal is facial contouring, breast refinement, scar softening or reconstruction.'] },
      { id: 'recovery', heading: 'Recovery after fat grafting', paragraphs: ['Recovery involves both donor and recipient sites. Bruising, swelling, tenderness, numbness and firmness can occur. Compression may be used for donor areas, depending on the plan.', 'Some early volume is swelling and some transferred fat may resorb. Final assessment takes time and staged procedures may be discussed for selected patients.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include bleeding, infection, fat necrosis, oil cysts, calcification, contour irregularity, asymmetry, undercorrection, overcorrection, scarring, donor-site contour issues and need for further procedures. Fat grafting cannot assure a specific volume or long-term result.'] }
    ],
    faqs: [
      { question: 'Does all transferred fat survive?', answer: 'No. Some fat may be reabsorbed. Survival varies depending on technique, tissue quality, recipient blood supply and individual healing.' },
      { question: 'Can fat grafting replace implants?', answer: 'Sometimes fat grafting can provide modest volume or contour refinement, but it usually cannot match the predictable large-volume change of an implant.' },
      { question: 'Is fat grafting permanent?', answer: 'Fat that survives may persist, but volume can change with weight change, ageing and individual biology. Results vary between individuals.' }
    ]
  },
  'thread-lifting-singapore': {
    slug: 'thread-lifting-singapore',
    title: 'Thread Lifting in Singapore',
    eyebrow: 'Thread lifting',
    lead: 'Patient information on thread lifting, patient selection, expected limitations, recovery and risks.',
    description: 'Patient information on thread lifting in Singapore, including suitability, consultation, recovery, risks and how it compares with surgery.',
    keywords: ['thread lift Singapore', 'thread lifting Singapore', 'non surgical face lift Singapore'],
    heroImage: { src: '/images/aesthetic-ai/thread-lifting.jpg', alt: 'Editorial-style image representing thread lifting and facial rejuvenation consultation', caption: 'Illustrative image for patient education; not a treatment result.' },
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Thread lifting is a minimally invasive procedure that uses absorbable threads placed under the skin to provide selected lifting or support effects. It is sometimes considered for mild facial laxity or contour concerns.',
      'Thread lifting is not the same as a surgical face lift. It cannot remove significant loose skin or reposition deeper tissues to the same degree as surgery.',
      'Careful patient selection is important. The procedure may be unsuitable when laxity is advanced, expectations are unrealistic or tissue quality is not favourable.'
    ],
    sections: [
      { id: 'suitability', heading: 'Who may be suitable?', paragraphs: ['Thread lifting may be considered for selected patients with mild soft-tissue descent who want a limited, non-surgical approach and understand the limitations. It is not a substitute for face and neck lift surgery when laxity is significant.'] },
      { id: 'assessment', heading: 'Consultation and planning', paragraphs: ['Assessment includes facial anatomy, skin thickness, tissue heaviness, asymmetry, previous fillers or procedures and the patient’s goals. A safe plan considers thread type, vector, entry points and potential alternatives.', 'Some patients are better treated with skin-quality procedures, injectables, surgery or no procedure.'] },
      { id: 'procedure', heading: 'How thread lifting is performed', paragraphs: ['Threads are inserted under local anaesthesia or other anaesthetic arrangements depending on the plan. They are positioned to create selected support or lifting vectors.', 'The degree of visible change is usually more limited than surgery. Overcorrection, dimpling or asymmetry may occur early and requires follow-up.'] },
      { id: 'recovery', heading: 'Recovery after thread lifting', paragraphs: ['Bruising, swelling, tenderness, tightness, dimpling or irregularity can occur after treatment. Patients may be advised to avoid vigorous facial massage, dental procedures, heavy exercise or wide mouth opening for a period of time.', 'The timeline varies depending on thread type, number of threads and individual healing.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include bruising, swelling, infection, thread visibility, dimpling, asymmetry, discomfort, thread extrusion, nerve irritation, unsatisfactory result and need for removal or further treatment. Effects are not permanent and outcomes vary.'] }
    ],
    faqs: [
      { question: 'Is thread lifting a replacement for a face lift?', answer: 'No. Thread lifting may help selected mild concerns, but it cannot reproduce the deeper tissue repositioning and skin redraping of surgery.' },
      { question: 'How long does a thread lift last?', answer: 'Duration varies depending on thread type, tissue quality, facial movement and ageing. It should not be viewed as permanent.' },
      { question: 'Can thread lifting be combined with other treatments?', answer: 'Sometimes, but sequencing and safety need to be planned carefully, especially if fillers, lasers or surgery are also being considered.' }
    ]
  },
  'lower-limb-reconstruction-singapore': {
    slug: 'lower-limb-reconstruction-singapore',
    title: 'Lower Limb Reconstruction in Singapore',
    eyebrow: 'Lower limb reconstruction',
    lead: 'Patient information on reconstruction for lower limb wounds, trauma, infection, cancer defects and complex soft-tissue problems.',
    description: 'Patient information on lower limb reconstruction in Singapore, including wound assessment, flap reconstruction, recovery, risks and multidisciplinary planning.',
    keywords: ['lower limb reconstruction Singapore', 'leg reconstruction Singapore', 'flap reconstruction leg Singapore'],
    backHref: '/#reconstructive-surgery',
    backLabel: 'Back to reconstructive surgery',
    intro: [
      'Lower limb reconstruction addresses complex wounds or defects of the leg, ankle or foot after trauma, infection, cancer surgery, diabetic complications or previous surgery.',
      'The aim is to provide stable soft-tissue coverage, protect exposed structures and support function where possible. Reconstruction may involve skin grafts, local flaps, regional flaps or microsurgical free flaps.',
      'Planning often requires coordination with orthopaedic, vascular, infectious disease, rehabilitation or wound-care teams depending on the cause and severity of the problem.'
    ],
    sections: [
      { id: 'indications', heading: 'When lower limb reconstruction may be needed', paragraphs: ['Reconstruction may be considered when a wound cannot heal safely with dressings alone or when important structures need coverage.'], items: ['open fractures or traumatic soft-tissue loss', 'exposed bone, tendon, metalwork or vessels', 'infection-related wounds after debridement', 'cancer or tumour excision defects', 'diabetic or vascular-related wounds in selected cases after optimisation', 'unstable scars or chronic wounds'] },
      { id: 'assessment', heading: 'Assessment and multidisciplinary planning', paragraphs: ['Assessment includes wound cause, blood supply, sensation, infection control, bone stability, tendon function, patient mobility, diabetes control, smoking status and rehabilitation needs.', 'Vascular assessment is especially important. A technically good flap may still fail if blood supply, infection or pressure issues are not addressed.'] },
      { id: 'options', heading: 'Reconstructive options', paragraphs: ['Options range from skin grafting to complex flap reconstruction. Local tissue may be used when suitable. Free flap reconstruction transfers tissue from another body area and reconnects its blood vessels using microsurgery.', 'The simplest safe option that provides durable coverage is usually preferred. The choice depends on defect size, location, exposed structures, blood supply and patient factors.'] },
      { id: 'recovery', heading: 'Recovery and rehabilitation', paragraphs: ['Recovery may involve hospital monitoring, wound care, elevation, restricted weight-bearing, splints, physiotherapy and staged return to walking. The timeline depends on the injury, reconstruction type and associated bone or tendon problems.', 'Long-term outcomes depend not only on the flap but also on nerve, tendon, bone, joint and vascular recovery.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include bleeding, infection, wound breakdown, flap or graft loss, donor-site problems, scarring, stiffness, pain, altered sensation, prolonged rehabilitation, need for further surgery and amputation in severe cases. Outcomes vary with injury severity and medical factors.'] }
    ],
    faqs: [
      { question: 'What is a free flap for leg reconstruction?', answer: 'A free flap transfers tissue from another body area to the leg and reconnects its blood vessels using microsurgery to provide soft-tissue coverage.' },
      { question: 'Is reconstruction always possible?', answer: 'Not always. Blood supply, infection, general health, wound severity and limb function all affect whether reconstruction is suitable.' },
      { question: 'Will leg reconstruction restore normal function?', answer: 'The goal is stable coverage and best possible function, but function depends on the original injury, bone, joints, nerves, tendons and rehabilitation.' }
    ]
  },
  'head-neck-reconstruction-singapore': {
    slug: 'head-neck-reconstruction-singapore',
    title: 'Head and Neck Reconstruction in Singapore',
    eyebrow: 'Head and neck reconstruction',
    lead: 'Patient information on reconstruction after head and neck cancer, trauma or complex facial defects.',
    description: 'Patient information on head and neck reconstruction in Singapore, including flap reconstruction, microsurgery, recovery, risks and multidisciplinary planning.',
    keywords: ['head neck reconstruction Singapore', 'facial reconstruction Singapore', 'microsurgical reconstruction Singapore'],
    backHref: '/#reconstructive-surgery',
    backLabel: 'Back to reconstructive surgery',
    intro: [
      'Head and neck reconstruction restores form and function after cancer surgery, trauma, infection or complex facial defects. It may involve skin, soft tissue, bone, nerve or lining reconstruction depending on the defect.',
      'Reconstruction in this region must consider appearance, speech, swallowing, breathing, facial movement, oral function and future cancer treatment where relevant.',
      'Planning is usually multidisciplinary, involving head and neck surgeons, oncologists, speech therapists, dietitians, dentists, rehabilitation teams and plastic surgeons as needed.'
    ],
    sections: [
      { id: 'indications', heading: 'When reconstruction may be needed', paragraphs: ['Head and neck reconstruction may be considered after removal of tumours, traumatic tissue loss, complex infection, facial wounds, burns or previous surgery complications.'], items: ['skin and soft-tissue defects of the face or scalp', 'oral cavity, tongue, jaw or throat defects after cancer surgery', 'facial trauma with tissue loss', 'exposed bone, tendon, vessels or hardware', 'scar contracture or contour deformity after previous treatment'] },
      { id: 'planning', heading: 'Functional and aesthetic planning', paragraphs: ['The plan depends on the location and tissues involved. For example, reconstruction of the mouth must consider speech and swallowing, while scalp or facial reconstruction must consider durable coverage and visible contour.', 'When cancer treatment is involved, reconstruction should support safe tumour clearance, timely recovery and coordination with radiotherapy or other treatments.'] },
      { id: 'options', heading: 'Reconstructive options', paragraphs: ['Options may include local flaps, skin grafts, regional flaps or microsurgical free flaps. Some defects require tissue with skin, muscle, fascia or bone. The best option depends on defect needs and patient factors.', 'Microsurgical reconstruction may be needed for larger or three-dimensional defects where local tissue is insufficient.'] },
      { id: 'recovery', heading: 'Recovery and rehabilitation', paragraphs: ['Recovery varies widely. Patients may need wound care, flap monitoring, swallowing or speech therapy, dental planning, nutritional support and staged revisions.', 'Scars and contour changes mature over time. Additional refinements may be considered after healing and after any cancer treatment is completed.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include bleeding, infection, wound breakdown, flap or graft loss, fistula, scarring, contour irregularity, altered sensation, speech or swallowing difficulties, donor-site issues, need for further surgery and cancer-treatment related delays or complications.'] }
    ],
    faqs: [
      { question: 'Why is head and neck reconstruction multidisciplinary?', answer: 'The region affects speech, swallowing, breathing, facial movement and appearance, so several specialist teams may be needed.' },
      { question: 'What is microsurgical free flap reconstruction?', answer: 'It transfers tissue from another body area and reconnects blood vessels under a microscope to reconstruct a complex defect.' },
      { question: 'Can reconstruction be refined later?', answer: 'Often yes. Revision or contour-refinement procedures may be discussed after healing and after any required cancer treatment.' }
    ]
  },
  'trauma-lacerations-singapore': {
    slug: 'trauma-lacerations-singapore',
    title: 'Trauma and Laceration Repair in Singapore',
    eyebrow: 'Trauma and lacerations',
    lead: 'Patient information on plastic surgical repair of lacerations, facial injuries, scars and soft-tissue trauma.',
    description: 'Patient information on trauma and laceration repair in Singapore, including wound assessment, repair, scar care, recovery and risks.',
    keywords: ['laceration repair Singapore', 'facial laceration Singapore', 'trauma reconstruction Singapore'],
    backHref: '/#reconstructive-surgery',
    backLabel: 'Back to reconstructive surgery',
    intro: [
      'Trauma and laceration repair involves assessment and treatment of cuts, soft-tissue injuries and wounds caused by accidents, falls, bites, sports injuries or other trauma.',
      'Plastic surgical principles can be helpful when wounds involve the face, eyelids, lips, nose, hands, exposed structures, tissue loss or areas where scar placement and function are important.',
      'The priority is safe wound management: cleaning, removal of non-viable tissue where needed, protection of important structures, appropriate closure and follow-up scar care.'
    ],
    sections: [
      { id: 'urgent', heading: 'When urgent assessment is important', paragraphs: ['Some wounds need prompt medical attention because of infection risk, depth or involvement of important structures.'], items: ['deep facial cuts or wounds crossing the lip, eyelid, eyebrow or nose', 'wounds with numbness, weakness or loss of movement', 'exposed tendon, bone, cartilage or foreign material', 'animal or human bites', 'crush injuries, dirty wounds or delayed presentation', 'heavy bleeding or rapidly increasing swelling'] },
      { id: 'assessment', heading: 'Assessment of a traumatic wound', paragraphs: ['Assessment includes how the injury occurred, contamination, tetanus status, sensation, movement, blood supply, wound depth and whether imaging or other specialists are needed.', 'Not every wound should simply be stitched closed immediately. Some require cleaning, debridement, antibiotics, staged closure or specialist assessment first.'] },
      { id: 'repair', heading: 'Repair and reconstruction options', paragraphs: ['Simple lacerations may be repaired with layered closure. More complex injuries may require flap repair, grafting, tendon or nerve assessment, or staged reconstruction.', 'For facial wounds, repair aims to align important landmarks and place tension carefully, while recognising that every cut heals with a scar.'] },
      { id: 'scar-care', heading: 'Scar care and follow-up', paragraphs: ['Scar maturation takes months. Follow-up may include wound checks, suture removal, silicone gel or sheets, sun protection, massage when appropriate and monitoring for hypertrophic or keloid scarring.', 'Scar revision may be considered later if a mature scar remains raised, widened, painful, tight or poorly aligned.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include infection, bleeding, wound breakdown, visible scarring, hypertrophic or keloid scar, altered sensation, stiffness, contour irregularity, retained foreign body, need for revision and functional impairment depending on injury severity.'] }
    ],
    faqs: [
      { question: 'Will a plastic surgeon repair leave no scar?', answer: 'No. Any cut through the skin heals with a scar. Careful repair and scar care can help, but scars cannot be eliminated.' },
      { question: 'When should a facial cut be seen?', answer: 'Deep cuts, wounds near the eyelid, lip, nose or eyebrow, bites, contaminated wounds, numbness, weakness or heavy bleeding should be assessed promptly.' },
      { question: 'Can an old trauma scar be improved?', answer: 'Sometimes. Options depend on scar maturity, location, thickness, colour, tightness and symptoms. The degree of improvement varies between individuals.' }
    ]
  },
  'scar-reconstruction-singapore': {
    slug: 'scar-reconstruction-singapore',
    title: 'Scar Reconstruction and Scar Revision in Singapore',
    eyebrow: 'Scar reconstruction',
    lead: 'Patient information on scar revision, keloid and hypertrophic scar management, assessment, treatment options and risks.',
    description: 'Patient information on scar reconstruction and scar revision in Singapore, including keloids, hypertrophic scars, consultation, treatment options and risks.',
    keywords: ['scar revision Singapore', 'keloid treatment Singapore', 'scar reconstruction Singapore'],
    backHref: '/#reconstructive-surgery',
    backLabel: 'Back to reconstructive surgery',
    intro: [
      'Scar reconstruction and scar revision aim to improve selected scars that are raised, widened, tight, painful, itchy, unstable or functionally limiting. Scars may follow surgery, trauma, burns, acne, infection or piercings.',
      'No treatment can remove a scar completely. The realistic goal is improvement in symptoms, position, contour, function or appearance where possible.',
      'Different scar types require different strategies. Keloid scars, hypertrophic scars, contractures, depressed scars and widened scars behave differently and have different recurrence risks.'
    ],
    sections: [
      { id: 'scar-types', heading: 'Types of scars assessed', paragraphs: ['Assessment begins by identifying the scar type and the patient’s main concern.'], items: ['hypertrophic scars that are raised but remain within the wound boundary', 'keloid scars that grow beyond the original wound and may recur after treatment', 'widened or stretched scars', 'contracture scars that restrict movement', 'depressed or tethered scars', 'unstable or painful scars'] },
      { id: 'assessment', heading: 'Consultation and planning', paragraphs: ['Consultation includes scar history, cause, duration, symptoms, previous treatments, skin type, keloid tendency, scar location and whether function is affected.', 'A young, active scar may need non-surgical management first. Mature scars that remain problematic may be considered for revision or combination treatment.'] },
      { id: 'treatments', heading: 'Treatment options', paragraphs: ['Options may include silicone therapy, pressure therapy, steroid injection, other injections, laser treatment, surgical scar revision, release of contracture, fat grafting in selected tethered scars, or combination therapy.', 'Keloids require particular caution because excision alone may recur. A combined recurrence-reduction plan may be discussed depending on scar location and patient factors.'] },
      { id: 'recovery', heading: 'Recovery and scar maturation', paragraphs: ['After scar revision, the new scar still needs to mature. Redness, firmness and sensitivity can persist for months. Scar care, sun protection and follow-up are important.', 'Patients prone to keloids or hypertrophic scars may need prolonged monitoring and additional treatment.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include recurrence, worse scarring, infection, wound breakdown, pigment change, contour irregularity, pain, numbness, incomplete improvement and need for repeated treatments. Keloid recurrence is a particular limitation.'] }
    ],
    faqs: [
      { question: 'Can a scar be removed completely?', answer: 'No. Scar revision replaces or modifies a scar; it cannot make skin completely scar-free.' },
      { question: 'Why do keloids recur?', answer: 'Keloids are driven by abnormal scar biology. Even after removal, the skin may form another keloid, so combination treatment and follow-up may be needed.' },
      { question: 'When is scar revision considered?', answer: 'It is often considered after a scar has matured, unless the scar is causing functional restriction, breakdown or significant symptoms that need earlier attention.' }
    ]
  },
  'gender-affirming-chest-reconstruction-singapore': {
    slug: 'gender-affirming-chest-reconstruction-singapore',
    title: 'Gender-Affirming Chest Reconstruction in Singapore',
    eyebrow: 'Gender-affirming chest reconstruction',
    lead: 'Patient information on chest reconstruction planning, surgical options, recovery, scars, risks and multidisciplinary care.',
    description: 'Patient information on gender-affirming chest reconstruction in Singapore, including assessment, surgical planning, recovery, scars and risks.',
    keywords: ['gender affirming chest reconstruction Singapore', 'chest reconstruction Singapore', 'top surgery Singapore'],
    backHref: '/#reconstructive-surgery',
    backLabel: 'Back to reconstructive surgery',
    intro: [
      'Gender-affirming chest reconstruction is surgery to reshape the chest in a way that may better align with a person’s gender identity and goals. The operation and planning must be individualised.',
      'This page provides general information on surgical planning, scars, recovery and risks. It does not replace personalised assessment, counselling or multidisciplinary care where appropriate.',
      'Patients should be assessed in a respectful, medically appropriate and safety-focused way, with attention to physical anatomy, mental health support, expectations, consent and aftercare.'
    ],
    sections: [
      { id: 'assessment', heading: 'Assessment and care planning', paragraphs: ['Assessment includes chest size and skin quality, nipple-areola position, asymmetry, previous surgery, medical history, smoking status, medications, support at home and the patient’s goals.', 'Depending on the clinical context and local requirements, documentation, mental health support or multidisciplinary input may be relevant. Patients should receive clear counselling before surgery.'] },
      { id: 'options', heading: 'Surgical options', paragraphs: ['Surgical options depend on anatomy. Some patients may be suitable for smaller-incision approaches, while others require double-incision techniques with nipple-areola grafting or repositioning. Liposuction may be used as an adjunct in selected cases.', 'The appropriate technique balances chest contour, skin excess, nipple position, scar pattern, sensation and revision risk.'] },
      { id: 'recovery', heading: 'Recovery after chest reconstruction', paragraphs: ['Recovery may involve dressings, drains, compression garments, restricted arm movement and time away from strenuous activity. Swelling, bruising, tightness, altered sensation and scar maturation are expected.', 'Nipple-areola grafts or repositioned tissues require careful wound care and monitoring. Scar maturation takes months.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include bleeding, haematoma, infection, wound breakdown, nipple-areola loss or pigment change, altered sensation, asymmetry, contour irregularity, dog-ears, visible scars, need for revision and anaesthetic risks. Some changes are irreversible.'] },
      { id: 'support', heading: 'Support and expectations', paragraphs: ['Chest reconstruction can be a significant physical and emotional step. Patients should have realistic expectations about scars, sensation, symmetry and the possibility of revision. Support during recovery is important.', 'The discussion should be respectful and patient-centred while remaining clear about medical risks and limitations.'] }
    ],
    faqs: [
      { question: 'Which chest reconstruction technique is best?', answer: 'There is no single best technique for everyone. The choice depends on chest size, skin excess, nipple position, goals, scars and safety considerations.' },
      { question: 'Will nipple sensation be preserved?', answer: 'Sensation can change after surgery and may be reduced or lost, especially when nipple-areola grafting is required. This should be discussed before surgery.' },
      { question: 'Are revisions sometimes needed?', answer: 'Yes. Revision may be considered for contour irregularity, dog-ears, scars, asymmetry or nipple-areola concerns after healing.' }
    ]
  }
};

export const procedureArticleList = Object.values(procedureArticles);
