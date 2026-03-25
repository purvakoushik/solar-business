export default function WhyUs() {
  const points = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore.",
    "Ut enim ad minim veniam, quis nostrud exercitation.",
    "Duis aute irure dolor in reprehenderit in voluptate."
  ];

  return (
    <section className="section bg-white">
      <div className="container grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="section-title">Why Choose SolarNova?</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent text-xs text-white">
                  ✓
                </span>
                <span className="text-brand-muted">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-primary p-8 text-white shadow-soft">
          <h3 className="text-2xl font-bold">Energy Savings Calculator</h3>
          <p className="mt-3 text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, incidunt.
          </p>
          <div className="mt-6 space-y-3">
            <input className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 outline-none" placeholder="Monthly Electricity Bill" />
            <input className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-3 outline-none" placeholder="Property Type" />
            <button className="w-full rounded-md bg-brand-secondary px-4 py-3 font-bold text-brand-text">Estimate Savings</button>
          </div>
        </div>
      </div>
    </section>
  );
}