export const metadata = {
  title: "Technology & Equipment",
  description: "Instrumentation and software used by ISV for NVH engineering.",
};

export default function TechnologyPage() {
  return (
    <div className="max-w-6xl mx-auto container-padded py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Technology & Equipment</h1>
      <p className="text-[var(--muted)] mt-2 max-w-prose">Reliable outcomes depend on reliable data. ISV deploys modern multi-channel acquisition systems, calibrated sensors and specialized analysis software.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="card p-6">
          <div className="text-[var(--gold)] font-semibold">Instrumentation</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <li>SPIDER-BOX multi-channel analyzers</li>
            <li>Class 1 sound level meters</li>
            <li>Triaxial accelerometers</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-[var(--gold)] font-semibold">Software</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <li>Beam forming and source localization</li>
            <li>Noise mapping & modeling tools</li>
            <li>FE and modal analysis toolchain</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-[var(--gold)] font-semibold">Testing Capabilities</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <li>Pass-by noise tracks</li>
            <li>Rail/tunnel vibration suites</li>
            <li>On-site barrier performance checks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


