export type NavItem = { label: string; href: string };

export const brand = {
  nameShort: "ISV",
  nameFull: "Institute of Sound & Vibro",
  tagline: "A Quiet Future",
};

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

export const seo = {
  title: "ISV | Institute of Sound & Vibro",
  description:
    "Noise, Vibration and Harshness (NVH) consulting, measurement, analysis and remedial design for infrastructure, construction and automotive.",
  baseUrl: "https://isv.example.com",
};


