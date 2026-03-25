import Link from "next/link";
import { navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#08101c] py-14 text-slate-300">
      <div className="container grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-white">SolarNova</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-secondary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>+1 (000) 111-2222</li>
            <li>hello@solarnova.com</li>
            <li>123 Energy Street, Sun City</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Newsletter</h4>
          <p className="mt-4 text-sm text-slate-400">Lorem ipsum dolor sit amet consectetur.</p>
          <div className="mt-4 flex gap-2">
            <input placeholder="Your email" className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none" />
            <button className="rounded-md bg-brand-secondary px-4 py-2 text-sm font-bold text-brand-text">Send</button>
          </div>
        </div>
      </div>

      <div className="container mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} SolarNova. All rights reserved.
      </div>
    </footer>
  );
}