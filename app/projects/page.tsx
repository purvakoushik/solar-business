import Header from "@/components/Header";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <section className="section pb-0">
        <div className="container">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.
          </p>
        </div>
      </section>
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}