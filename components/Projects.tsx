import Image from "next/image";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((image, idx) => (
            <div key={`${image}-${idx}`} className="group relative h-64 overflow-hidden rounded-xl">
              <Image src={image} alt={`Project ${idx + 1}`} fill className="object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}