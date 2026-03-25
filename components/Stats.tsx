import { stats } from "@/data/site";

export default function Stats() {
  return (
    <section className="-mt-10 relative z-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-soft md:grid-cols-4 md:p-8">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-brand-primary">{item.value}</p>
              <p className="mt-1 text-sm text-brand-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}