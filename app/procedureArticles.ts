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
    lead: 'Patient information on liposuction, body contouring, assessment, recovery, limitations and risks.',
    description: 'Patient information on body contouring and liposuction in Singapore, including suitability, consultation, recovery, risks and realistic limitations.',
    keywords: ['body contouring Singapore', 'liposuction Singapore', 'plastic surgeon liposuction Singapore'],
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Body contouring refers to procedures that reshape selected areas of the body. Liposuction is one commonly used technique that removes localised fat deposits through small incisions using cannulas and suction.',
      'Liposuction is not a weight-loss operation. It is usually considered when a patient has relatively stable weight, reasonable skin quality and specific areas of disproportion or contour concern that do not respond adequately to lifestyle measures.',
      'Planning should be individualised. The safest and most appropriate approach depends on anatomy, skin elasticity, medical history, previous surgery, treatment areas and expectations.'
    ],
    sections: [
      {
        id: 'suitability',
        heading: 'Who may be suitable?',
        paragraphs: ['Suitability depends on a clinical assessment rather than a fixed body size or single photograph. A consultation helps determine whether liposuction, another body contouring operation, non-surgical treatment or no procedure is the most appropriate option.'],
        items: ['localised fat deposits or contour imbalance', 'stable weight and realistic expectations', 'adequate skin elasticity in the treatment area', 'good general health for surgery and anaesthesia', 'understanding that loose skin, cellulite and stretch marks may not improve with liposuction alone']
      },
      {
        id: 'consultation',
        heading: 'Consultation and planning',
        paragraphs: ['Consultation includes discussion of the patient’s goals, examination of the treatment areas, assessment of skin quality and review of medical history. The surgeon may discuss whether liposuction alone is reasonable or whether skin-tightening or excisional surgery is more appropriate.', 'Photographs may be taken for medical documentation and planning. Patients should be prepared to discuss medications, smoking, previous procedures, weight changes and any medical conditions that may affect safety or healing.']
      },
      {
        id: 'singapore-planning',
        heading: 'Body contouring consultation in Singapore',
        paragraphs: ['Patients searching for liposuction in Singapore often compare surgical and non-surgical contouring options. A plastic surgery consultation should clarify whether the concern is excess fat, loose skin, muscle separation, cellulite, weight fluctuation or a combination of factors.', 'For some patients, liposuction may be part of a broader body contouring plan. For others, a non-surgical option, weight stabilisation, abdominoplasty or no procedure may be more appropriate. The discussion should include anaesthesia, recovery time, compression garments, scars, revision risk and realistic contour limits.']
      },
      {
        id: 'procedure',
        heading: 'How liposuction is performed',
        paragraphs: ['Liposuction is usually performed through small incisions. Fluid may be placed into the tissues before fat is removed with fine cannulas. The technique and anaesthesia depend on the number of areas treated, the expected volume, patient factors and surgical plan.', 'The goal is controlled contour change, not maximal fat removal. Over-aggressive treatment can increase risks and may lead to contour irregularity, skin laxity or prolonged swelling.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after body contouring',
        paragraphs: ['Recovery varies with the number of areas treated and the extent of surgery. Bruising, swelling, numbness, tenderness and temporary firmness are common early changes. Compression garments may be recommended.', 'Many patients return gradually to light activities first, with exercise and heavier activity resumed only when advised. Final contour changes take time as swelling settles.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, infection, fluid collection, contour irregularity, asymmetry, altered sensation, skin laxity, scarring, pigmentation change, delayed healing, anaesthetic risks and need for revision surgery. Liposuction cannot guarantee a particular body shape and does not replace weight management.']
      }
    ],
    faqs: [
      { question: 'Is liposuction a weight-loss procedure?', answer: 'No. Liposuction is intended for contouring selected areas. It is not a treatment for obesity or a substitute for weight management.' },
      { question: 'Will liposuction tighten loose skin?', answer: 'Liposuction primarily removes fat. Skin tightening is variable and depends on skin quality, age, genetics, pregnancy history and the amount of fat removed. Loose skin may need a different procedure.' },
      { question: 'When will the final result be visible?', answer: 'Swelling improves gradually over weeks to months. The timeline varies by area treated, extent of surgery, garment use and individual healing.' }
    ]
  },
  'breast-aesthetic-surgery-singapore': {
    slug: 'breast-aesthetic-surgery-singapore',
    title: 'Breast Aesthetic Surgery in Singapore',
    eyebrow: 'Breast aesthetic surgery',
    lead: 'Patient information on breast augmentation, lift, reduction, asymmetry correction, planning, recovery and risks.',
    description: 'Patient information on breast aesthetic surgery in Singapore, including augmentation, lift, reduction, asymmetry correction, consultation, recovery and risks.',
    keywords: ['breast aesthetic surgery Singapore', 'breast augmentation Singapore', 'breast lift Singapore', 'breast reduction Singapore'],
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Breast aesthetic surgery includes procedures that change breast size, shape, position or symmetry. Common operations include breast augmentation, breast lift, breast reduction and correction of asymmetry.',
      'The right operation depends on the patient’s anatomy, skin quality, breast volume, nipple position, chest wall shape, personal goals and health factors. Some patients need a single procedure, while others may need a combined or staged plan.',
      'Breast surgery planning should be balanced and realistic. The goal is to choose an option that is medically appropriate and proportionate to the patient’s frame, rather than aiming for a standardised size or look.'
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
        id: 'singapore-consultation',
        heading: 'Breast aesthetic surgery consultation in Singapore',
        paragraphs: ['A breast aesthetic consultation should be more detailed than choosing an implant size. Planning includes breast measurements, soft-tissue thickness, chest wall shape, nipple position, desired proportions, lifestyle, future pregnancy considerations and breast-screening history.', 'In Singapore, patients may also be balancing discretion, downtime, work commitments and family responsibilities. These practical factors should be discussed alongside surgical safety, scars, implant choices, revision possibilities and long-term follow-up.']
      },
      {
        id: 'implants',
        heading: 'Implants, fat grafting and trade-offs',
        paragraphs: ['Implants can increase breast volume and shape, but involve implant-specific considerations such as capsular contracture, implant visibility, rupture, malposition, infection and possible future revision surgery.', 'Fat grafting uses the patient’s own fat and may be useful in selected circumstances, but the amount of reliable volume increase is limited and some transferred fat may not persist. It may be more suitable for contour refinement than large-volume enlargement.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after breast aesthetic surgery',
        paragraphs: ['Recovery depends on the operation performed. Swelling, bruising, tightness, temporary altered sensation and scar maturation are expected after surgery. Activity restrictions, supportive garments and follow-up vary by procedure.', 'Patients should avoid judging the final shape too early. Implants, scars and breast tissues may settle over weeks to months.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, infection, wound healing problems, scarring, asymmetry, altered nipple or skin sensation, implant-related problems, fat grafting changes, inability to breastfeed in some situations, need for future surgery and anaesthetic risks. Outcomes vary and cannot be guaranteed.']
      }
    ],
    faqs: [
      { question: 'Is breast augmentation always done with implants?', answer: 'Not always. Implants are a common option for volume increase, while fat grafting may be considered in selected patients. Each has different limitations and risks.' },
      { question: 'Can a breast lift be combined with implants?', answer: 'Sometimes. A lift and implant can be combined when both breast position and volume need to be addressed, but this may increase complexity and requires careful planning.' },
      { question: 'Will scars disappear?', answer: 'No surgical scar disappears completely. Scars usually mature over months and vary depending on the procedure, skin type, wound healing and individual biology.' }
    ]
  },
  'asian-rhinoplasty-singapore': {
    slug: 'asian-rhinoplasty-singapore',
    title: 'Asian Rhinoplasty in Singapore',
    eyebrow: 'Asian rhinoplasty',
    lead: 'Patient information on Asian rhinoplasty, structural support, rib cartilage considerations, recovery and risks.',
    description: 'Patient information on Asian rhinoplasty in Singapore, including consultation, structural rhinoplasty, rib cartilage, recovery, risks and limitations.',
    keywords: ['Asian rhinoplasty Singapore', 'rhinoplasty Singapore', 'rib cartilage rhinoplasty Singapore'],
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Asian rhinoplasty is nose reshaping surgery planned around the anatomy and goals commonly seen in Asian patients, including nasal bridge height, tip projection, tip definition, nostril shape and facial balance.',
      'In many Asian noses, native septal cartilage may be limited in strength or quantity for major structural support. When stronger framework is needed for nasal height, projection, tip definition or long-term support, rib cartilage may be discussed as one option.',
      'Not every patient needs rib cartilage or a large structural operation. The plan should be tailored to the patient’s anatomy, skin thickness, existing cartilage support, previous surgery and goals.'
    ],
    sections: [
      {
        id: 'assessment',
        heading: 'Assessment for Asian rhinoplasty',
        paragraphs: ['Assessment includes facial proportions, nasal bridge height, tip support, nostril shape, septal deviation, airway symptoms, skin thickness and previous fillers or surgery.', 'Photographs and clinical examination help determine whether the concern is primarily bridge height, tip projection, nostril shape, asymmetry, breathing, revision issues or a combination of factors.']
      },
      {
        id: 'singapore-asian-nose',
        heading: 'Asian rhinoplasty planning in Singapore',
        paragraphs: ['Patients considering rhinoplasty in Singapore often seek bridge refinement, tip projection, nostril balance or revision after fillers, implants or previous surgery. Asian rhinoplasty planning should consider the patient’s ethnic anatomy, skin thickness, cartilage strength, facial proportions and airway symptoms.', 'A structural plan may be preferred when the nose needs support rather than surface camouflage alone. However, the operation should still be proportionate: not every patient needs rib cartilage, major augmentation or an open approach.']
      },
      {
        id: 'structural',
        heading: 'Structural support and cartilage choices',
        paragraphs: ['Structural rhinoplasty uses cartilage framework to support the nose rather than relying only on surface augmentation. Cartilage sources may include septal cartilage, ear cartilage or rib cartilage depending on the required support.', 'Rib cartilage can provide stronger material when major augmentation or revision support is needed. It also adds a donor-site scar and recovery considerations, so the decision should be made carefully.']
      },
      {
        id: 'procedure',
        heading: 'Surgical planning and technique',
        paragraphs: ['Rhinoplasty may be performed through open or closed approaches depending on the goals and anatomy. The operation may involve bridge augmentation, tip grafting, septal correction, nostril refinement or revision of previous implants or grafts.', 'The safest plan is not simply the most dramatic change. Aesthetic goals must be balanced with nasal skin, long-term support, airway function and realistic healing.']
      },
      {
        id: 'recovery',
        heading: 'Recovery after rhinoplasty',
        paragraphs: ['Swelling, bruising, nasal blockage, tip firmness and numbness can occur after rhinoplasty. A splint or taping may be used early. Most swelling improves gradually, but tip definition can continue to refine over many months.', 'Patients should avoid trauma to the nose during healing and follow specific instructions on exercise, glasses, wound care and follow-up.']
      },
      {
        id: 'risks',
        heading: 'Risks and limitations',
        paragraphs: ['Risks include bleeding, infection, scarring, asymmetry, contour irregularity, graft warping or visibility, implant or graft problems, breathing changes, altered sensation, donor-site scar if cartilage is harvested, and need for revision surgery. Perfect symmetry is not realistic.']
      }
    ],
    faqs: [
      { question: 'Do all Asian rhinoplasty patients need rib cartilage?', answer: 'No. Rib cartilage is considered when stronger structural support is needed. Some patients may be suitable for other cartilage sources or more limited approaches.' },
      { question: 'Can rhinoplasty improve breathing?', answer: 'If there is septal deviation or structural airway obstruction, functional correction may be discussed. Cosmetic rhinoplasty alone is not the same as airway surgery.' },
      { question: 'How long does swelling last?', answer: 'Early swelling improves over weeks, but nasal tip swelling and refinement can take months. Revision cases and thicker skin may take longer.' }
    ]
  },
  'face-neck-lift-singapore': {
    slug: 'face-neck-lift-singapore',
    title: 'Face and Neck Lift in Singapore',
    eyebrow: 'Face and neck lift',
    lead: 'Patient information on face lift and neck lift surgery, assessment, recovery, scars, risks and alternatives.',
    description: 'Patient information on face and neck lift surgery in Singapore, including suitability, consultation, recovery, scarring, risks and limitations.',
    keywords: ['face lift Singapore', 'neck lift Singapore', 'facelift Singapore'],
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Face and neck lift surgery addresses selected age-related changes in the lower face, jawline and neck. It may improve laxity of deeper tissues and skin, but it does not stop ageing or create a standardised appearance.',
      'Modern planning focuses on facial balance, skin quality, tissue descent, neck anatomy and natural-looking proportions. The most appropriate approach varies between patients.',
      'Some patients benefit from surgery, while others may be better served by non-surgical treatments, skin treatments, volume restoration or no procedure.'
    ],
    sections: [
      { id: 'suitability', heading: 'Who may be suitable?', paragraphs: ['Face and neck lift surgery may be considered when there is lower-face laxity, jowling, neck skin laxity, platysmal banding or loss of jawline definition. Suitability depends on anatomy, skin quality, medical fitness and expectations.'] },
      { id: 'assessment', heading: 'Consultation and facial analysis', paragraphs: ['Consultation includes assessment of the face, jawline, neck, skin quality, hairline, scars, facial asymmetry and previous treatments. Medical history, smoking status and medications are important for safety planning.', 'A careful plan distinguishes between skin laxity, deeper tissue descent, fat distribution, volume loss and skin-surface changes because these require different treatments.'] },
      { id: 'singapore-options', heading: 'Face lift, neck lift and non-surgical options in Singapore', paragraphs: ['Patients often compare face and neck lift surgery with injectables, thread lifting, lasers or device-based skin tightening. These options are not interchangeable. Non-surgical treatments may help selected texture, volume or mild laxity concerns, while surgery is considered when tissue laxity and neck contour changes are more significant.', 'A consultation should define the main problem before choosing treatment. This helps avoid using repeated minor treatments for a concern that is fundamentally surgical, while also avoiding surgery when a smaller or non-surgical approach is more appropriate.'] },
      { id: 'procedure', heading: 'Surgical approach', paragraphs: ['A face and neck lift may involve incisions around the ear and hairline, lifting and repositioning of deeper tissues, neck contouring and skin redraping. The exact technique depends on anatomy and goals.', 'Adjuncts such as fat grafting, eyelid surgery or skin resurfacing may be discussed for selected patients, but combining procedures increases planning complexity and recovery considerations.'] },
      { id: 'recovery', heading: 'Recovery after face and neck lift', paragraphs: ['Bruising, swelling, tightness, numbness and scar maturation are expected after surgery. Patients usually need time away from strenuous activity and should follow wound-care instructions closely.', 'Final refinement takes time. Scars usually mature over months and may be positioned to reduce visibility, but they do not disappear completely.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include bleeding, haematoma, infection, wound healing problems, visible scars, altered sensation, hairline changes, asymmetry, facial nerve weakness, skin loss, prolonged swelling and need for revision surgery. Outcomes vary and continued ageing occurs.'] }
    ],
    faqs: [
      { question: 'Is a face lift the same as skin tightening?', answer: 'No. A face lift may address deeper tissue laxity as well as skin redraping. Skin quality and surface texture may require separate treatments.' },
      { question: 'Will a face lift change how I look?', answer: 'The aim is usually refreshed facial contour rather than a different identity. The degree of change depends on anatomy, technique and healing.' },
      { question: 'Can non-surgical treatments replace surgery?', answer: 'Non-surgical treatments can help selected concerns, but they cannot reproduce the tissue repositioning of surgery in patients with significant laxity.' }
    ]
  },
  'lasers-injectables-singapore': {
    slug: 'lasers-injectables-singapore',
    title: 'Lasers and Injectables in Singapore',
    eyebrow: 'Lasers and injectables',
    lead: 'Patient information on aesthetic lasers, botulinum toxin, fillers, skin quality treatments, safety and risks.',
    description: 'Patient information on lasers and injectables in Singapore, including consultation, treatment planning, safety, recovery and risks.',
    keywords: ['lasers injectables Singapore', 'aesthetic laser Singapore', 'botulinum toxin filler Singapore'],
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
      { question: 'Are injectables risk-free because they are non-surgical?', answer: 'No. Injectables are medical procedures and can have complications. Safe treatment depends on anatomy, indication, product choice and technique.' },
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
    backHref: '/#aesthetic-surgery',
    backLabel: 'Back to aesthetic surgery',
    intro: [
      'Fat grafting, also called fat transfer, uses a patient’s own fat to improve selected contour, volume or soft-tissue quality concerns. Fat is usually harvested with liposuction, processed and placed into the target area in small amounts.',
      'Fat grafting may be used in aesthetic surgery, reconstructive surgery or revision surgery. It is not a guaranteed volume replacement method because some transferred fat may not survive.',
      'The plan depends on donor-site availability, tissue quality, the recipient area, previous surgery or radiotherapy and realistic goals.'
    ],
    sections: [
      { id: 'uses', heading: 'Where fat grafting may be used', paragraphs: ['Fat grafting can be considered for selected contour or soft-tissue concerns.'], items: ['facial volume restoration or contour refinement', 'breast contour refinement in selected aesthetic or reconstructive cases', 'softening selected contour irregularities after surgery or trauma', 'scar or radiotherapy-related tissue quality concerns in selected cases', 'small-volume body contour refinement'] },
      { id: 'assessment', heading: 'Assessment and planning', paragraphs: ['Consultation includes assessment of both donor and recipient areas. The surgeon considers how much fat can safely be harvested, how much is needed, tissue quality, scars, circulation and whether staged treatment may be required.', 'Patients should understand that fat grafting is biological. Fat survival varies and overfilling or aggressive placement can increase complications.'] },
      { id: 'procedure', heading: 'How fat grafting is performed', paragraphs: ['Fat is harvested using liposuction through small incisions. It is then prepared and injected carefully into the target area in small parcels to encourage blood supply from surrounding tissues.', 'The approach differs depending on whether the goal is facial contouring, breast refinement, scar softening or reconstruction.'] },
      { id: 'recovery', heading: 'Recovery after fat grafting', paragraphs: ['Recovery involves both donor and recipient sites. Bruising, swelling, tenderness, numbness and firmness can occur. Compression may be used for donor areas, depending on the plan.', 'Some early volume is swelling and some transferred fat may resorb. Final assessment takes time and staged procedures may be discussed for selected patients.'] },
      { id: 'risks', heading: 'Risks and limitations', paragraphs: ['Risks include bleeding, infection, fat necrosis, oil cysts, calcification, contour irregularity, asymmetry, undercorrection, overcorrection, scarring, donor-site contour issues and need for further procedures. Fat grafting cannot guarantee a specific volume or long-term result.'] }
    ],
    faqs: [
      { question: 'Does all transferred fat survive?', answer: 'No. Some fat may be reabsorbed. Survival varies depending on technique, tissue quality, recipient blood supply and individual healing.' },
      { question: 'Can fat grafting replace implants?', answer: 'Sometimes fat grafting can provide modest volume or contour refinement, but it usually cannot match the predictable large-volume change of an implant.' },
      { question: 'Is fat grafting permanent?', answer: 'Fat that survives may persist, but volume can change with weight change, ageing and individual biology. Results cannot be guaranteed.' }
    ]
  },
  'thread-lifting-singapore': {
    slug: 'thread-lifting-singapore',
    title: 'Thread Lifting in Singapore',
    eyebrow: 'Thread lifting',
    lead: 'Patient information on thread lifting, patient selection, expected limitations, recovery and risks.',
    description: 'Patient information on thread lifting in Singapore, including suitability, consultation, recovery, risks and how it compares with surgery.',
    keywords: ['thread lift Singapore', 'thread lifting Singapore', 'non surgical face lift Singapore'],
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
      { question: 'Can an old trauma scar be improved?', answer: 'Sometimes. Options depend on scar maturity, location, thickness, colour, tightness and symptoms. Improvement cannot be guaranteed.' }
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
