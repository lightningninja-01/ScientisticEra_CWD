/**
 * Founder Achievement Gallery Data
 *
 * Each category maps to a URL slug used via /gallery?category=<id>.
 * Images are served from /founder/<category-slug>/... (Next.js public directory).
 * Research Publications and Intellectual Property have subcategories
 * (international / national) preserved as metadata.
 */

export interface FounderGalleryImage {
  src: string;
  alt: string;
  subcategory?: "international" | "national";
}

export interface FounderGalleryCategory {
  id: string;
  label: string;
  images: FounderGalleryImage[];
}

export const founderGalleryCategories: FounderGalleryCategory[] = [
  // ── 1. Appreciations & Recognitions ──────────────────────────────────────
  {
    id: "appreciations-recognitions",
    label: "Appreciations & Recognitions",
    images: [
      { src: "/founder/appreciations-recognitions/academia-edu.jpg",  alt: "Academia.edu Appreciation" },
      { src: "/founder/appreciations-recognitions/gold-fish.jpg",      alt: "Gold Fish Recognition" },
      { src: "/founder/appreciations-recognitions/ug-college.jpg",     alt: "UG College Recognition" },
      { src: "/founder/appreciations-recognitions/ajio.jpg",           alt: "Ajio Appreciation" },
      { src: "/founder/appreciations-recognitions/ips.jpg",            alt: "IPS Recognition" },
      { src: "/founder/appreciations-recognitions/ijdrl.jpg",          alt: "IJDRL Appreciation" },
      { src: "/founder/appreciations-recognitions/sripad.jpg",         alt: "Sripad Recognition" },
      { src: "/founder/appreciations-recognitions/boxing.jpg",         alt: "Boxing Recognition" },
      { src: "/founder/appreciations-recognitions/sripadh.jpg",        alt: "Sripadh Recognition" },
    ],
  },

  // ── 2. Research Publications ─────────────────────────────────────────────
  {
    id: "research-publications",
    label: "Research Publications",
    images: [
      // International (28)
      { src: "/founder/research-publications/international/journal-of-forensic-and-legal-medicine.jpg",      alt: "Journal of Forensic and Legal Medicine",                        subcategory: "international" },
      { src: "/founder/research-publications/international/iranian-journal-of-blood-and-cancer.jpg",         alt: "Iranian Journal of Blood & Cancer",                             subcategory: "international" },
      { src: "/founder/research-publications/international/chinese-journal-of-health-management.jpg",        alt: "Chinese Journal of Health Management",                          subcategory: "international" },
      { src: "/founder/research-publications/international/chinese-journal-of-health-management-4.jpg",      alt: "Chinese Journal of Health Management (4)",                      subcategory: "international" },
      { src: "/founder/research-publications/international/medicinal-chemistry-journal-5.jpg",               alt: "Medicinal Chemistry Journal",                                   subcategory: "international" },
      { src: "/founder/research-publications/international/journal-of-forensic-sciences.jpg",                alt: "Journal of Forensic Sciences",                                  subcategory: "international" },
      { src: "/founder/research-publications/international/current-proteomics-by-elsevier.jpg",              alt: "Current Proteomics by Elsevier",                                subcategory: "international" },
      { src: "/founder/research-publications/international/frontiers-in-natural-products.jpg",               alt: "Frontiers in Natural Products",                                 subcategory: "international" },
      { src: "/founder/research-publications/international/archives-of-dermatological-research-journal.jpg", alt: "Archives of Dermatological Research Journal",                   subcategory: "international" },
      { src: "/founder/research-publications/international/a-review-on-integrative-approaches-in-oncology.jpg", alt: "A Review on Integrative Approaches in Oncology",            subcategory: "international" },
      { src: "/founder/research-publications/international/frontiers-in-natural-products-biological-activities.jpg", alt: "Frontiers in Natural Products – Biological Activities of Natural Products", subcategory: "international" },
      { src: "/founder/research-publications/international/current-proteomics-12.jpg",                       alt: "Current Proteomics",                                            subcategory: "international" },
      { src: "/founder/research-publications/international/current-proteomics-13.jpg",                       alt: "Current Proteomics",                                            subcategory: "international" },
      { src: "/founder/research-publications/international/elsevier-i.jpg",                                  alt: "Elsevier International Publication",                            subcategory: "international" },
      { src: "/founder/research-publications/international/nature.jpg",                                      alt: "Nature Publication",                                            subcategory: "international" },
      { src: "/founder/research-publications/international/bentham-15.jpg",                                  alt: "Bentham Science Publication",                                   subcategory: "international" },
      { src: "/founder/research-publications/international/medicinal-chemistry-journal-16.jpg",              alt: "Medicinal Chemistry Journal",                                   subcategory: "international" },
      { src: "/founder/research-publications/international/springer-nature.jpg",                             alt: "Springer Nature Publication",                                   subcategory: "international" },
      { src: "/founder/research-publications/international/bentham-18.jpg",                                  alt: "Bentham Science Publication",                                   subcategory: "international" },
      { src: "/founder/research-publications/international/african-journal-extra.jpg",                       alt: "African Journal Extra",                                         subcategory: "international" },
      { src: "/founder/research-publications/international/african-journal.jpg",                             alt: "African Journal",                                               subcategory: "international" },
      { src: "/founder/research-publications/international/african-journal-of-biomedical-research.jpg",      alt: "African Journal of Biomedical Research",                        subcategory: "international" },
      { src: "/founder/research-publications/international/africa.jpg",                                      alt: "Africa Journal Publication",                                    subcategory: "international" },
      { src: "/founder/research-publications/international/medknow.jpg",                                     alt: "Medknow Publication",                                           subcategory: "international" },
      { src: "/founder/research-publications/international/elsevier-ecological-and-behavioral.jpg",          alt: "Elsevier – Ecological and Behavioral Publication",              subcategory: "international" },
      { src: "/founder/research-publications/international/elsevier-24.jpg",                                 alt: "Elsevier Publication",                                          subcategory: "international" },
      { src: "/founder/research-publications/international/chemoprofiling-and-medicinal.jpg",                alt: "Chemoprofiling and Medicinal Chemistry Publication",            subcategory: "international" },
      { src: "/founder/research-publications/international/quantification.jpg",                              alt: "Quantification Research Publication",                           subcategory: "international" },
      // National (6)
      { src: "/founder/research-publications/national/ajio-1.jpg",   alt: "National Research Publication 1", subcategory: "national" },
      { src: "/founder/research-publications/national/ajio-2.jpg",   alt: "National Research Publication 2", subcategory: "national" },
      { src: "/founder/research-publications/national/ajio-3.jpg",   alt: "National Research Publication 3", subcategory: "national" },
      { src: "/founder/research-publications/national/ajio-4.jpg",   alt: "National Research Publication 4", subcategory: "national" },
      { src: "/founder/research-publications/national/ajio-5.jpg",   alt: "National Research Publication 5", subcategory: "national" },
      { src: "/founder/research-publications/national/ajio-6.jpg",   alt: "National Research Publication 6", subcategory: "national" },
    ],
  },

  // ── 3. Books & Book Chapters ─────────────────────────────────────────────
  {
    id: "books-book-chapters",
    label: "Books & Book Chapters",
    images: [
      { src: "/founder/books-book-chapters/disease-prediction-and-healthcare-innovation.jpg",         alt: "Disease Prediction and Healthcare Innovation" },
      { src: "/founder/books-book-chapters/deep-science-publishing.jpg",                              alt: "Deep Science Publishing" },
      { src: "/founder/books-book-chapters/neuroayurveda-ancient-texts-translational-neuroscience.jpg", alt: "NeuroAyurveda: From Ancient Texts to Translational Neuroscience" },
      { src: "/founder/books-book-chapters/chromatographic-techniques-in-modern-forensics.jpg",       alt: "Chromatographic Techniques in Modern Forensics" },
      { src: "/founder/books-book-chapters/novel-drug-delivery-system-from-fundamental.jpg",          alt: "Novel Drug Delivery System from Fundamental" },
      { src: "/founder/books-book-chapters/review-4.jpg",                                             alt: "Book Chapter Review" },
      { src: "/founder/books-book-chapters/sprout-4.jpg",                                             alt: "Book Chapter – Sprout" },
      { src: "/founder/books-book-chapters/review-5.jpg",                                             alt: "Book Chapter Review" },
      { src: "/founder/books-book-chapters/review-6.jpg",                                             alt: "Book Chapter Review" },
      { src: "/founder/books-book-chapters/novel-drug.jpg",                                           alt: "Novel Drug Book Chapter" },
      { src: "/founder/books-book-chapters/10-keys.jpg",                                              alt: "10 Keys Book Chapter" },
      { src: "/founder/books-book-chapters/pharmacognostic.jpg",                                      alt: "Pharmacognostic Book Chapter" },
      { src: "/founder/books-book-chapters/futuristic-trends-herbal-medicines-1.jpg",                 alt: "Futuristic Trends in Herbal Medicines and Food Products (Vol. 1)" },
      { src: "/founder/books-book-chapters/futuristic-trends-herbal-medicines-2.jpg",                 alt: "Futuristic Trends in Herbal Medicines and Food Products (Vol. 2)" },
      { src: "/founder/books-book-chapters/futuristic-trends-herbal-medicines-3.jpg",                 alt: "Futuristic Trends in Herbal Medicines and Food Products (Vol. 3)" },
      { src: "/founder/books-book-chapters/book-13.jpg",                                              alt: "Book Publication" },
      { src: "/founder/books-book-chapters/book-chapter-14.jpg",                                      alt: "Book Chapter Publication" },
    ],
  },

  // ── 4. Intellectual Property ─────────────────────────────────────────────
  {
    id: "intellectual-property",
    label: "Intellectual Property",
    images: [
      // International (4)
      { src: "/founder/intellectual-property/international/united-kingdom-1.jpg",          alt: "United Kingdom Design Patent 1",        subcategory: "international" },
      { src: "/founder/intellectual-property/international/united-kingdom-2.jpg",          alt: "United Kingdom Design Patent 2",        subcategory: "international" },
      { src: "/founder/intellectual-property/international/united-kingdom-design-grant.jpg", alt: "United Kingdom Design Grant",         subcategory: "international" },
      { src: "/founder/intellectual-property/international/smart-thermocycler-d.jpg",      alt: "Smart Thermocycler Design Patent (UK)", subcategory: "international" },
      // National (18)
      { src: "/founder/intellectual-property/national/socks.jpg",                                             alt: "Socks Patent",                                         subcategory: "national" },
      { src: "/founder/intellectual-property/national/smart-stability-testing-chamber.jpg",                  alt: "Smart Stability Testing Chamber Patent",               subcategory: "national" },
      { src: "/founder/intellectual-property/national/gloves-for-rheumatoid-arthritis-relief.jpg",           alt: "Gloves for Rheumatoid Arthritis Relief Patent",        subcategory: "national" },
      { src: "/founder/intellectual-property/national/apparatus-for-continuous-real-time.jpg",               alt: "Apparatus for Continuous Real-Time Monitoring Patent", subcategory: "national" },
      { src: "/founder/intellectual-property/national/ai-based-apparatus-for-spectroscopic-drug.jpg",        alt: "AI-Based Apparatus for Spectroscopic Drug Patent",     subcategory: "national" },
      { src: "/founder/intellectual-property/national/ai-based-apparatus-for-molecular-docking.jpg",         alt: "AI-Based Apparatus for Molecular Docking Patent",      subcategory: "national" },
      { src: "/founder/intellectual-property/national/automatic-herbal-tablet-counting-device.jpg",          alt: "Automatic Herbal Tablet Counting Device Patent",       subcategory: "national" },
      { src: "/founder/intellectual-property/national/real-time-state-monitoring-and-dosage.jpg",            alt: "Real-Time State Monitoring and Dosage Patent",         subcategory: "national" },
      { src: "/founder/intellectual-property/national/natural-products-in-drug-discovery-and-development.jpg", alt: "Natural Products in Drug Discovery & Development Patent", subcategory: "national" },
      { src: "/founder/intellectual-property/national/nanotech.jpg",                                         alt: "Nanotech Patent",                                      subcategory: "national" },
      { src: "/founder/intellectual-property/national/virus-eradication-device.jpg",                         alt: "Virus Eradication Device Patent",                      subcategory: "national" },
      { src: "/founder/intellectual-property/national/diabetic-foot-ulcer.jpg",                              alt: "Diabetic Foot Ulcer Patent",                           subcategory: "national" },
      { src: "/founder/intellectual-property/national/chalcones-derivatives.jpg",                            alt: "Chalcones Derivatives Patent",                         subcategory: "national" },
      { src: "/founder/intellectual-property/national/design-nanoparticle.jpg",                              alt: "Design Nanoparticle Patent",                           subcategory: "national" },
      { src: "/founder/intellectual-property/national/smart-micro.jpg",                                      alt: "Smart Micro Patent",                                   subcategory: "national" },
      { src: "/founder/intellectual-property/national/chemoprofiling-and-medicinal.jpg",                     alt: "Chemoprofiling and Medicinal Patent",                  subcategory: "national" },
      { src: "/founder/intellectual-property/national/portable.jpg",                                         alt: "Portable Device Patent",                               subcategory: "national" },
      { src: "/founder/intellectual-property/national/laser.jpg",                                            alt: "Laser Patent",                                         subcategory: "national" },
    ],
  },

  // ── 5. Copyrights ─────────────────────────────────────────────────────────
  {
    id: "copyrights",
    label: "Copyrights",
    images: [
      { src: "/founder/copyrights/copyright.jpg",                           alt: "Copyright Registration" },
      { src: "/founder/copyrights/plaginomo.jpg",                           alt: "Plaginomo Copyright" },
      { src: "/founder/copyrights/innovative-gel-capsule-d.jpg",            alt: "Innovative Gel Capsule Design Copyright" },
      { src: "/founder/copyrights/in-silico-design-synthesis-and-biological.jpg", alt: "In Silico Design, Synthesis and Biological Evaluation Copyright" },
    ],
  },

  // ── 6. Design Registrations ───────────────────────────────────────────────
  // Intentionally empty — real images will be added in the future.
  {
    id: "design-registrations",
    label: "Design Registrations",
    images: [],
  },

  // ── 7. Awards & Honors ───────────────────────────────────────────────────
  {
    id: "awards-honors",
    label: "Awards & Honors",
    images: [
      { src: "/founder/awards-honors/nobel-scientist-award-1.jpg",          alt: "Nobel Scientist Award" },
      { src: "/founder/awards-honors/nobel-scientist-award-2.jpg",          alt: "Nobel Scientist Award" },
      { src: "/founder/awards-honors/mahatma-gandhi-global-peace-award.jpg", alt: "Mahatma Gandhi Global Peace Award" },
      { src: "/founder/awards-honors/young-scientist-research-award-ktk.jpg", alt: "Young Scientist Research Award by KTK" },
      { src: "/founder/awards-honors/institute-of-scholars-insc.jpg",       alt: "Institute of Scholars (InSc) Award" },
      { src: "/founder/awards-honors/young-researcher-award-2024-insc.jpg", alt: "Young Researcher Award 2024 by InSc" },
      { src: "/founder/awards-honors/insc.jpg",                             alt: "InSc Award" },
    ],
  },

  // ── 8. Conferences & Scientific Engagements ──────────────────────────────
  {
    id: "conferences-scientific-engagements",
    label: "Conferences & Scientific Engagements",
    images: [
      { src: "/founder/conferences-scientific-engagements/switzerland.jpg",                               alt: "Switzerland Conference" },
      { src: "/founder/conferences-scientific-engagements/world-cancer-day.jpg",                          alt: "World Cancer Day Event" },
      { src: "/founder/conferences-scientific-engagements/conference-1731231048552.jpg",                  alt: "Scientific Engagement" },
      { src: "/founder/conferences-scientific-engagements/conference-1731231050258.jpg",                  alt: "Scientific Engagement" },
      { src: "/founder/conferences-scientific-engagements/conference-1731504972392.jpg",                  alt: "Scientific Engagement" },
      { src: "/founder/conferences-scientific-engagements/conference-1731504972404.jpg",                  alt: "Scientific Engagement" },
      { src: "/founder/conferences-scientific-engagements/conference-1731504972669.jpg",                  alt: "Scientific Engagement" },
      { src: "/founder/conferences-scientific-engagements/lung-cancer-awareness.jpg",                     alt: "Lung Cancer Awareness Conference" },
      { src: "/founder/conferences-scientific-engagements/pharma-startups-science-innovation-business-healthcare.jpg", alt: "Pharma Startups – Uniting Science, Innovation, and Business to Transform Healthcare" },
      { src: "/founder/conferences-scientific-engagements/cancer.jpg",                                    alt: "Cancer Conference" },
    ],
  },
];
