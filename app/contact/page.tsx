import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Send us a message and we will get back to you.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <form className="rounded-2xl bg-white p-6 shadow-soft space-y-4">
              <input className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none" placeholder="Full Name" />
              <input className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none" placeholder="Email Address" />
              <input className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none" placeholder="Phone Number" />
              <textarea className="h-36 w-full rounded-md border border-slate-300 px-4 py-3 outline-none" placeholder="Your Message" />
              <button className="rounded-md bg-brand-secondary px-6 py-3 font-bold text-brand-text">Submit</button>
            </form>

            <div className="rounded-2xl bg-brand-primary p-6 text-white shadow-soft">
              <h3 className="text-2xl font-bold">Office Info</h3>
              <ul className="mt-5 space-y-3 text-slate-200">
                <li>Email: hello@solarnova.com</li>
                <li>Phone: +1 (000) 111-2222</li>
                <li>Address: 123 Energy Street, Sun City</li>
                <li>Hours: Mon - Fri, 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}