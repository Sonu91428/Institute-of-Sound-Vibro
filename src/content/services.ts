export const servicesHub = [
  { title: "Noise & Acoustics", href: "/services/noise", desc: "Monitoring, mapping, barrier design." },
  { title: "Vibration & Structural Dynamics", href: "/services/vibration", desc: "Rail/tunnel isolation and building dynamics." },
  { title: "Building & Environmental NVH", href: "/services/building", desc: "Room acoustics, environmental compliance." },
  { title: "Automotive & Vehicular NVH", href: "/services/auto", desc: "Pass-by noise and in-cabin comfort." },
];

export const servicePages = {
  noise: {
    title: "Noise & Acoustics",
    intro: "Uncontrolled noise impacts health, operations and compliance. ISV delivers accurate measurement, insightful analysis and proven remedial design.",
    sections: {
      measurement: [
        "Environmental noise monitoring",
        "Vehicular pass-by noise",
        "Construction site compliance",
      ],
      analysis: [
        "Noise mapping for corridors",
        "Source identification and beam forming",
        "FFT and octave analysis",
      ],
      design: [
        "Noise barrier design & testing",
        "Building facade upgrades",
        "Material selection and specifications",
      ],
    },
    technology:
      "Advanced instrumentation including multi-channel analyzers (e.g., SPIDER-BOX) and beam forming software ensure reliable datasets and defensible recommendations.",
    cta: { label: "Request detailed breakdown", href: "/contact" },
  },
  vibration: {
    title: "Vibration & Structural Dynamics",
    intro: "Excess vibration risks comfort, equipment performance and structural integrity. ISV measures, models and designs isolation systems that work.",
    sections: {
      measurement: [
        "Rail/tunnel vibration monitoring",
        "Building floor vibration",
        "Machine foundation surveys",
      ],
      analysis: [
        "Transfer function & modal analysis",
        "Finite-element and isolation modeling",
        "Compliance checks vs. limits",
      ],
      design: [
        "Rail pads, ballast mats, floating slabs",
        "Equipment isolation & tuned dampers",
        "Installation QA/QC and validation",
      ],
    },
    cta: { label: "Book a technical consultation", href: "/contact" },
  },
  building: {
    title: "Building & Environmental NVH",
    intro: "From luxury residences to hospitals and data centers, ISV designs quiet spaces that meet standards and elevate comfort.",
    sections: {
      measurement: [
        "Room/space noise and vibration",
        "MEP equipment noise",
        "Environmental baselines",
      ],
      analysis: [
        "Facade and partition performance",
        "Reverberation and speech privacy",
        "Noise mapping for masterplans",
      ],
      design: [
        "Specification of materials and details",
        "Building acoustics upgrades",
        "On-site validation and sign-off",
      ],
    },
    cta: { label: "Start your project", href: "/contact" },
  },
  auto: {
    title: "Automotive & Vehicular NVH",
    intro: "Support for OEMs and suppliers: testing, diagnostics and actionable engineering for competitive refinement.",
    sections: {
      measurement: [
        "Pass-by noise (ISO 362)",
        "In-cabin noise & vibration",
        "Component-level diagnostics",
      ],
      analysis: [
        "Order tracking, FFT, octave",
        "Source contribution analysis",
        "Benchmarking and targets",
      ],
      design: [
        "Insulation and damping packages",
        "Sealing and trim solutions",
        "Validation and reporting",
      ],
    },
    cta: { label: "Discuss your testing needs", href: "/contact" },
  },
} as const;


