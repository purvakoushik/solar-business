import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="section-title">About Us</h1>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-brand-primary">Our Mission</h3>
              <p className="mt-3 text-brand-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-brand-primary">Our Vision</h3>
              <p className="mt-3 text-brand-muted">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}