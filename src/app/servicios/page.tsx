import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Servicios de reformas en Tarragona · Cocinas, Baños, Pisos y Locales",
  description:
    "Servicios de reformas en Tarragona y Tarragonès: integrales, cocinas, baños, pisos del Eixample y locales en la Part Alta. Memoria documentada y plantilla propia.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de reformas · ARC Reformas Tarragona",
    description:
      "Cinco líneas de servicio para reformar en Tarragona: integrales, cocinas, baños, pisos y locales.",
    url: "/servicios",
    images: ["/images/vivienda-reformada-centro-tarragona.webp"],
  },
};

const services = [
  {
    title: "Reformas Integrales",
    slug: "reformas-integrales",
    image: "/images/vivienda-reformada-centro-tarragona.webp",
    alt: "Reforma integral de vivienda en Tarragona",
    description:
      "Proyecto llave en mano para fincas del Eixample, edificios catalogados de la Part Alta o bloques modernos. Memoria valorada, plantilla propia y documentación completa al cierre.",
  },
  {
    title: "Reformas de Cocinas",
    slug: "reformas-cocinas",
    image: "/images/cocina-piso-eixample-tarragona.webp",
    alt: "Reforma de cocina en piso del Eixample de Tarragona",
    description:
      "Reabrimos galerías cerradas, integramos cocina y comedor en pisos antiguos y diseñamos islas en viviendas amplias. Encimeras de porcelánico rectificado o piedra natural local.",
  },
  {
    title: "Reformas de Baños",
    slug: "reformas-banos",
    image: "/images/bano-piso-eixample-tarragona.webp",
    alt: "Reforma de baño en finca de Tarragona",
    description:
      "Sustitución de bañera por plato de obra, mamparas a medida, suelos antideslizantes y accesibilidad mejorada. Soluciones pensadas para bajantes compartidos en fincas antiguas.",
  },
  {
    title: "Reformas de Pisos",
    slug: "reformas-pisos",
    image: "/images/piso-reformado-eixample-tarragona.webp",
    alt: "Reforma de piso en el Eixample tarraconense",
    description:
      "Renovación íntegra de pisos heredados o segundas residencias en Tarragona. Redistribución, instalaciones nuevas, pavimentos rectificados y carpintería interior renovada.",
  },
  {
    title: "Reformas de Locales",
    slug: "reformas-locales",
    image: "/images/local-comercial-eixample-tarragona.webp",
    alt: "Reforma de local comercial en Tarragona",
    description:
      "Acondicionamiento de despachos, comercios y locales hosteleros en la Rambla Nova, calle Apodaca y Eixample. Tramitación de licencia, accesibilidad y eficiencia energética.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Servicios", url: "/servicios" }]} />
      <HeroService
        title="Cinco líneas de servicio adaptadas a la ciudad"
        subtitle="Cada finca de Tarragona requiere criterio propio: una bóveda romana no se trata como una pared de pladur. Te explicamos qué hacemos en cada formato."
        image="/images/hero-reforma-tarragona-clasica.webp"
        imageAlt="Servicios de reformas en Tarragona"
        h1Keyword="Servicios de reformas en Tarragona"
        badge="Soluciones a medida"
        showCTA
      />

      {/* ============ LISTADO ============ */}
      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              ¿Qué necesitas reformar?
            </p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] lg:text-[56px] text-dark leading-[1.05]">
              Servicios de reformas en Tarragona
            </h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[600px] mx-auto mt-4">
              Elige el formato que se ajusta a tu finca: integrales, cocinas, baños, pisos y locales en Tarragona y el Tarragonès.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    title={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-display font-extrabold text-xl text-dark group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-subtitle text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-display font-bold text-accent text-sm uppercase tracking-wide">
                    Ver servicio
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIFERENCIAS ============ */}
      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
            ¿Por qué confiar la obra a ARC?
          </p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05] mb-12">
            Por qué elegir ARC Reformas Tarragona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: "Plantilla propia",
                text: "Albañilería, fontanería, electricidad y carpintería en plantilla. Una obra ordenada en finca compartida es lo primero.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Coste pactado",
                text: "Memoria valorada por partidas. Cualquier imprevisto técnico se valora contigo antes de actuar.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Calendario por fases",
                text: "Calendario por hitos comunicado al inicio. Si algo se desvía, lo sabes con tiempo para reorganizar.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Garantía firmada",
                text: "Documentación completa al cierre: boletines, fichas, planos as-built y garantía por escrito sobre materiales y mano de obra.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {item.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">
            Solicita presupuesto para tu reforma
          </h2>
          <p className="font-body text-white/90 text-lg max-w-[560px]">
            ¿Empezamos a estudiar tu finca? Indícanos el año del edificio, los metros útiles y la zona de la ciudad. Te enviamos primera valoración antes de 24 horas laborables.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-beige transition-colors"
            >
              Pedir valoración técnica
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+34877278165"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-display font-bold text-[15px] hover:bg-white/10 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              877 278 165
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
