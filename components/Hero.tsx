import { hero } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[78vh] min-h-[540px] bg-cover bg-center" style={{ backgroundImage: `url(${hero.image})` }}>
        <div className="h-full w-full bg-black/50">
          <div className="container flex h-full items-center">
            <div className="max-w-2xl text-white">
              <span className="inline-block rounded-full bg-brand-accent/20 px-4 py-1 text-xs font-semibold text-white">
                Clean • Smart • Sustainable
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">{hero.title}</h1>
              <p className="mt-5 text-slate-200 md:text-lg">{hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-lg bg-brand-secondary px-6 py-3 font-bold text-brand-text">
                  {hero.ctaPrimary}
                </button>
                <button className="rounded-lg border border-white px-6 py-3 font-bold text-white">
                  {hero.ctaSecondary}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}