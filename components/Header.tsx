"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-extrabold text-brand-primary">
          SolarNova
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition ${
                  active ? "text-brand-primary" : "text-slate-700 hover:text-brand-secondary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button className="rounded-lg bg-brand-secondary px-4 py-2 text-sm font-bold text-brand-text hover:opacity-90">
          Free Consultation
        </button>
      </div>
    </header>
  );
}