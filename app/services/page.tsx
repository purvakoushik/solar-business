import Header from "@/components/Header";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="section pb-0">
        <div className="container">
          <h1 className="section-title">Services</h1>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </section>
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}