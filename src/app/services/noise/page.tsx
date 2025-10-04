import { servicePages } from "@/content/services";

export default function NoiseServicePage() {
  const c = servicePages.noise;
  return (
    <div className="max-w-6xl mx-auto container-padded py-16">
      <h1 className="text-3xl md:text-4xl font-bold">{c.title}</h1>
      <p className="text-[var(--muted)] mt-2 max-w-prose">{c.intro}</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="card p-6">
          <div className="text-[var(--gold)] font-semibold">Measurement</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {c.sections.measurement.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-[var(--gold)] font-semibold">Analysis & Modeling</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {c.sections.analysis.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-[var(--gold)] font-semibold">Design & Remedial</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {c.sections.design.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card p-6 mt-10">
        <div className="text-[var(--gold)] font-semibold">Technology</div>
        <p className="text-sm text-[var(--muted)] mt-2">{c.technology}</p>
      </div>

      <a href={c.cta.href} className="btn btn-primary mt-10 inline-block">{c.cta.label}</a>
    </div>
  );
}


