import Link from "next/link";
import { hero, servicesOverview, trust, featuredProject } from "@/content/home";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto container-padded py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{hero.headline}</h1>
            <p className="mt-4 text-lg text-[var(--muted)] max-w-prose">{hero.subheadline}</p>
            <div className="mt-8 flex gap-4">
              <Link href={hero.primaryCta.href} className="btn btn-primary">{hero.primaryCta.label}</Link>
              <Link href={hero.secondaryCta.href} className="btn btn-outline">{hero.secondaryCta.label}</Link>
            </div>
          </div>
          <div className="card p-6">
            <div className="aspect-video w-full rounded-md bg-[linear-gradient(135deg,_#1a1a1d_0%,_#0e0e10_100%)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)]">
              Hero Image / Video Placeholder
            </div>
            <p className="text-xs text-[var(--muted)] mt-3">Use high-quality site photos (e.g., rail noise monitoring, barriers).</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-6xl mx-auto container-padded py-16">
        <h2 className="text-2xl md:text-3xl font-bold">NVH Technology Services</h2>
        <p className="text-[var(--muted)] mt-2">Clear, outcome-led solutions for decision-makers.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {servicesOverview.map((s) => (
            <Link key={s.title} href={s.href} className="card p-6 hover:shadow-lg hover:shadow-black/20 transition">
              <div className="text-[var(--gold)] font-semibold">Service</div>
              <div className="mt-1 text-lg font-medium">{s.title}</div>
              <div className="mt-4 text-sm text-[var(--muted)]">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-6xl mx-auto container-padded py-12">
        <div className="card p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-[var(--gold)] font-semibold">Why ISV</div>
              <h3 className="text-2xl md:text-3xl font-bold mt-1">{trust.heading}</h3>
              <p className="text-[var(--muted)] mt-3">Specialist consulting and testing across rail, highways, buildings and automotive. From measurement to modeling to remedial design.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              {trust.bullets.map((b) => (
                <div key={b.label} className="p-4 rounded-lg bg-black/30 border border-[var(--border)]"><div className="text-3xl font-bold">{b.value}</div><div className="text-xs text-[var(--muted)] mt-1">{b.label}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="max-w-6xl mx-auto container-padded py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="card p-6 h-full flex items-center justify-center text-[var(--muted)]">Case Study Image</div>
          <div>
            <div className="text-[var(--gold)] font-semibold">Featured Project</div>
            <h3 className="text-2xl md:text-3xl font-bold mt-1">{featuredProject.title}</h3>
            <p className="text-[var(--muted)] mt-3">{featuredProject.summary}</p>
            <div className="mt-6">
              <Link href={featuredProject.cta.href} className="btn btn-outline">{featuredProject.cta.label}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
