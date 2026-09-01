export const baseUrl = 'https://www.drjeremysun.com';

export const physicianId = `${baseUrl}/#physician`;

export const lastReviewedIso = '2026-09-01';

export const physicianSameAs = [
  'https://www.cgh.com.sg/profile/Sun-Mingfa-Jeremy',
  'https://www.cgh.com.sg/doctor/plastic-surgery/sun-mingfa-jeremy',
  'https://www.linkedin.com/in/jeremy-sun-9131aa61/',
  'https://lymphedasia.com/dr-jeremy-sun-lymphedema-specialist/',
  'https://lymphedasia.com/lva-surgery-singapore/',
  'https://lymphedasia.com/lymphedema-surgery-singapore/',
  'https://lymphedasia.com/private-lymphedema-consultation-singapore/'
];

export const physicianJsonLd = {
  '@type': 'Physician',
  '@id': physicianId,
  name: 'Dr Jeremy Sun',
  alternateName: ['Dr Sun Mingfa Jeremy', 'Sun Mingfa Jeremy'],
  url: baseUrl,
  image: `${baseUrl}/images/dr-jeremy-sun-hero.jpg`,
  jobTitle: 'Senior Consultant Plastic Surgeon',
  medicalSpecialty: ['PlasticSurgery', 'ReconstructiveSurgery', 'CosmeticSurgery'],
  sameAs: physicianSameAs,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SG',
    addressLocality: 'Singapore'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Singapore'
  },
  knowsAbout: [
    'Aesthetic surgery',
    'Reconstructive microsurgery',
    'Scar reconstruction',
    'Lymphedema surgery',
    'Lymphatic surgery',
    'Lymphovenous bypass',
    'Body contouring',
    'Liposuction',
    'Breast surgery',
    'Breast augmentation',
    'Breast implants',
    '24-hour rapid recovery breast augmentation',
    'Aesthetic breast surgery',
    'Breast reconstruction',
    'Rhinoplasty',
    'Asian rhinoplasty',
    'Eyelid surgery',
    'Asian blepharoplasty',
    'Face and neck lift',
    'Lasers and injectables',
    'Fat grafting',
    'Thread lifting'
  ],
  affiliation: [
    { '@type': 'Organization', name: 'Changi General Hospital', url: 'https://www.cgh.com.sg' },
    { '@type': 'CollegeOrUniversity', name: 'Duke-NUS Medical School', url: 'https://www.duke-nus.edu.sg' }
  ]
};
