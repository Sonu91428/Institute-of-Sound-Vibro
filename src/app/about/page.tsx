import { about } from "@/content/about";
export const metadata = {
  title: "About ISV",
  description: "Vision, mission and team of Institute of Sound & Vibro.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto container-padded py-16">
      <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
      <p className="text-[var(--muted)] mt-2 max-w-prose">ISV is an engineering firm focused on NVH. Our mission is to enable quieter, safer and more comfortable infrastructure, buildings and vehicles across India.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6"><div className="text-[var(--gold)] font-semibold">Vision</div><p className="text-sm text-[var(--muted)] mt-2">{about.vision}</p></div>
        <div className="card p-6"><div className="text-[var(--gold)] font-semibold">Mission</div><p className="text-sm text-[var(--muted)] mt-2">{about.mission}</p></div>
        <div className="card p-6"><div className="text-[var(--gold)] font-semibold">Careers</div><p className="text-sm text-[var(--muted)] mt-2">{about.careers}</p></div>
      </div>
    </div>
  );
}


