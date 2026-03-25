export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="rounded-2xl bg-brand-primary p-8 md:p-12 text-white shadow-soft">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold">Ready to Switch to Solar?</h2>
              <p className="mt-3 text-slate-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
              </p>
            </div>
            <div className="md:text-right">
              <button className="rounded-lg bg-brand-secondary px-7 py-3 font-bold text-brand-text">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}