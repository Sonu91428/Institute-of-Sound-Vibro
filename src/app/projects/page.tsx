"use client";
import { useMemo, useState } from "react";
import { cases as CASES, sectors as SECTORS, type Sector } from "@/content/projects";

export default function ProjectsPage() {
  const [sector, setSector] = useState<Sector | "All">("All");
  const sectors = SECTORS;

  const visible = useMemo(() => {
    if (sector === "All") return CASES;
    return CASES.filter((c) => c.sector === sector);
  }, [sector]);

  return (
    <div className="max-w-6xl mx-auto container-padded py-16">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Projects & Case Studies</h1>
          <p className="text-[var(--muted)] mt-2">Evidence of measurable outcomes across sectors.</p>
        </div>
        <div className="flex gap-2">
          {sectors.map((s) => (
            <button key={s} className={`btn ${sector === s ? "btn-primary" : "btn-outline"}`} onClick={() => setSector(s)}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {visible.map((c) => (
          <div key={c.id} className="card p-6">
            <div className="text-xs text-[var(--muted)]">{c.sector}</div>
            <div className="mt-1 font-semibold">{c.title}</div>
            <div className="text-sm text-[var(--muted)] mt-2">Outcome: {c.outcome}</div>
            <div className="text-sm text-[var(--muted)] mt-3">Challenge, ISV Solution, and detailed outcome will be populated with real data.</div>
          </div>
        ))}
      </div>
    </div>
  );
}


