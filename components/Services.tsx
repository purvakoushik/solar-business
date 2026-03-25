import Image from "next/image";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Solar Services</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl bg-white shadow-soft">
              <div className="relative h-52 w-full">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-primary">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{s.desc}</p>
                <button className="mt-5 text-sm font-bold text-brand-secondary">Learn More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}