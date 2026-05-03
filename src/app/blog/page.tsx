import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog de reformas en Tarragona · Consejos y guías técnicas",
  description:
    "Artículos prácticos sobre cómo reformar pisos del Eixample tarraconense, fincas catalogadas de la Part Alta y ayudas a la rehabilitación en el Tarragonès.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · ARC Reformas Tarragona",
    description:
      "Guías técnicas y consejos para reformas urbanas en Tarragona y Tarragonès.",
    url: "/blog",
    images: ["/images/hero-reforma-tarragona-clasica.webp"],
  },
};

const posts = [
  {
    slug: "cuanto-cuesta-reformar-piso-tarragona",
    title: "Cuánto cuesta reformar un piso en Tarragona en 2026",
    excerpt:
      "Rangos por metro cuadrado para pisos del Eixample, casa de pueblo de la Part Alta y bloques modernos. Desglose de partidas y consejos prácticos para que la inversión cuadre.",
    image: "/images/reforma-piso-completo-tarragona.webp",
    imageAlt: "Coste de reforma de piso en Tarragona en 2026",
    date: "1 mayo 2026",
    category: "Guía de precios",
  },
  {
    slug: "reformar-edificio-historico-part-alta",
    title: "Reformar un edificio histórico en la Part Alta: lo que hay que saber",
    excerpt:
      "Trabajar dentro del recinto romano implica trámites con patrimonio, servidumbres arqueológicas y materiales que dialoguen con la piedra original. Cómo afrontarlo sin sustos.",
    image: "/images/cocina-clasica-part-alta-tarragona.webp",
    imageAlt: "Reforma en edificio histórico de la Part Alta de Tarragona",
    date: "1 mayo 2026",
    category: "Patrimonio",
  },
  {
    slug: "ayudas-rehabilitacion-energetica-tarragones",
    title: "Ayudas a la rehabilitación energética en el Tarragonès en 2026",
    excerpt:
      "Fondos Next Generation, programas autonómicos y subvenciones municipales para mejorar la eficiencia energética de tu vivienda. A qué obras aplican y cómo se tramitan.",
    image: "/images/vivienda-rehabilitacion-energetica-tarragona.webp",
    imageAlt: "Ayudas a la rehabilitación energética en Tarragona y comarca",
    date: "1 mayo 2026",
    category: "Ayudas y subvenciones",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Blog", url: "/blog" }]} />
      {/* ============ HERO ============ */}
      <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="font-display font-bold text-xs uppercase tracking-[0.3em] text-accent mb-4">
            ARC Reformas Tarragona
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[60px] lg:text-[72px] text-white leading-[1]">
            Blog · Consejos y guías sobre reformas en Tarragona
          </h1>
          <p className="text-white/60 text-base md:text-lg mt-4 max-w-[560px]">
            Artículos sobre cómo intervenir con criterio en pisos del Eixample, edificios catalogados y bloques modernos del Tarragonès.
          </p>
        </div>
      </section>

      {/* ============ POSTS GRID ============ */}
      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden border border-dark/5 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-subtitle text-xs font-body uppercase tracking-wider">
                    {post.date}
                  </span>
                  <h2 className="font-display font-bold text-dark text-lg leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-subtitle text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="font-display font-bold text-accent text-sm inline-flex items-center gap-1 mt-2">
                    Leer artículo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
