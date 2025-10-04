export type Sector = "Railway" | "Highway" | "Buildings" | "Automotive";

export const sectors: (Sector | "All")[] = [
  "All",
  "Railway",
  "Highway",
  "Buildings",
  "Automotive",
];

export const cases = [
  { id: 1, sector: "Railway" as Sector, title: "Metro Rail Noise Barrier Design", outcome: "Compliance achieved" },
  { id: 2, sector: "Highway" as Sector, title: "Expressway Noise Mapping", outcome: "Optimized barrier layout" },
  { id: 3, sector: "Buildings" as Sector, title: "Hospital Vibration Control", outcome: "MRI suite isolation" },
  { id: 4, sector: "Automotive" as Sector, title: "EV Cabin NVH Improvement", outcome: "3 dB reduction" },
];


