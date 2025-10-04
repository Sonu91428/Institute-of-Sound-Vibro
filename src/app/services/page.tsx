import Link from "next/link";
import { servicesHub } from "@/content/services";

export default function ServicesHubPage() {
  const items = [
    { title: "Noise & Acoustics", href: "/services/noise", desc: "Monitoring, mapping, barrier design." },
    { title: "Vibration & Structural Dynamics", href: "/services/vibration", desc: "Rail/tunnel isolation and building dynamics." },
    { title: "Building & Environmental NVH", href: "/services/building", desc: "Room acoustics, environmental compliance." },
    { title: "Automotive & Vehicular NVH", href: "/services/auto", desc: "Pass-by noise and in-cabin comfort." },
  ];

  return (
    <div className="max-w-6xl mx-auto container-padded py-16">
      <h1 className="text-3xl md:text-4xl font-bold">NVH Technology Services</h1>
      <p className="text-[var(--muted)] mt-2 max-w-prose">ISV provides end-to-end measurement, analysis, modeling and remedial design services across infrastructure, construction and automotive sectors.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {servicesHub.map((i) => (
          <Link key={i.title} href={i.href} className="card p-6 hover:shadow-lg hover:shadow-black/20 transition">
            <div className="text-[var(--gold)] font-semibold">{i.title}</div>
            <div className="text-sm text-[var(--muted)] mt-2">{i.desc}</div>
            <div className="mt-4 text-sm text-[var(--muted)]">Learn more →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}


