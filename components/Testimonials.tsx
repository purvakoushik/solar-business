import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-brand-muted leading-7">“{t.text}”</p>
              <div className="mt-6">
                <p className="font-bold text-brand-primary">{t.name}</p>
                <p className="text-sm text-brand-muted">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}