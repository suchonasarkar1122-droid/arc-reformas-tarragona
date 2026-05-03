import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Cuánto cuesta reformar un piso en Tarragona en 2026",
  description:
    "Rangos por metro cuadrado para reformar un piso en Tarragona en 2026. Pisos del Eixample, casa de pueblo de la Part Alta y bloques modernos. Desglose por partidas.",
  alternates: { canonical: "/blog/cuanto-cuesta-reformar-piso-tarragona" },
  openGraph: {
    title: "Cuánto cuesta reformar un piso en Tarragona en 2026",
    description:
      "Guía actualizada de precios para reformar pisos en Tarragona. Rangos por m², partidas y consejos prácticos.",
    url: "/blog/cuanto-cuesta-reformar-piso-tarragona",
    type: "article",
    images: ["/images/reforma-piso-completo-tarragona.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cuánto cuesta reformar un piso en Tarragona en 2026",
  description:
    "Rangos por metro cuadrado y desglose por partidas para reformar un piso en Tarragona en 2026, según tipología y zona.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  author: { "@type": "Organization", name: "ARC Reformas Tarragona" },
  publisher: { "@id": "https://arcreformastarragona.es/#business" },
  image: "https://arcreformastarragona.es/images/reforma-piso-completo-tarragona.webp",
  mainEntityOfPage: "https://arcreformastarragona.es/blog/cuanto-cuesta-reformar-piso-tarragona",
};

export default function PostCuantoCuesta() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Cuánto cuesta reformar un piso en Tarragona", url: "/blog/cuanto-cuesta-reformar-piso-tarragona" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-beige">
        <div className="relative h-[360px] md:h-[460px] w-full overflow-hidden bg-dark">
          <Image
            src="/images/reforma-piso-completo-tarragona.webp"
            alt="Reforma de piso en el Eixample de Tarragona"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/55 to-dark/85" />
          <div className="relative z-10 h-full flex flex-col items-start justify-end max-w-[1100px] mx-auto px-5 pb-12">
            <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">Guía de precios</span>
            <h1 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[56px] text-white leading-[1.05] max-w-[900px]">
              Cuánto cuesta reformar un piso en Tarragona en 2026
            </h1>
            <p className="text-white/70 text-sm mt-3">1 de mayo de 2026 · 7 minutos de lectura</p>
          </div>
        </div>

        <div className="max-w-[820px] mx-auto px-5 py-16 md:py-20 prose-content">
          <p className="font-body text-dark text-lg leading-relaxed mb-6">
            Reformar un piso en Tarragona en 2026 cuesta, de media, entre 480 y 1.050 euros por metro cuadrado. La horquilla es amplia porque cambia mucho según el tipo de finca, los acabados y, sobre todo, el estado de las instalaciones generales del edificio.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">El precio depende, primero, del tipo de finca</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            En la ciudad conviven realidades constructivas muy distintas, y el precio refleja esa diferencia. Estos son los tres escenarios que vemos a diario:
          </p>

          <ul className="font-body text-subtitle text-base leading-relaxed space-y-3 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Piso del Eixample (1950-1980):</strong> 520-720 €/m². La intervención típica incluye apertura de cocina, dos baños accesibles, suelos uniformes y pintura completa. Si hay que cambiar bajantes o reabrir galería, hay que sumar partidas.</li>
            <li><strong className="text-dark">Casa de pueblo o piso de la Part Alta (catalogado):</strong> 750-1.050 €/m². El sobrecoste viene de los trámites con patrimonio, los materiales que respetan el carácter del edificio (mortero de cal, baldosa hidráulica recuperada) y la mano de obra cualificada para muros de mampostería.</li>
            <li><strong className="text-dark">Bloque moderno de Sant Pere i Sant Pau o periferia (post-1990):</strong> 480-620 €/m². Las instalaciones son más actuales, no hay servidumbres y los acabados se pueden optimizar. Es la opción más económica de las tres.</li>
          </ul>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Desglose por partidas: 90 m² del Eixample como ejemplo</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Tomamos como referencia un piso urbano de 90 m² útiles, en finca del Eixample tarraconense de los años 70, con cocina cerrada y dos baños obsoletos. Reforma media, sin tocar bajantes generales:
          </p>
          <div className="bg-white rounded-2xl border border-dark/5 p-6 mb-6">
            <ul className="font-body text-dark text-sm md:text-base leading-relaxed space-y-2">
              <li>· Demolición y retirada de escombros: <strong>2.800 - 3.500 €</strong></li>
              <li>· Albañilería y tabiques nuevos: <strong>5.500 - 7.500 €</strong></li>
              <li>· Fontanería y bajantes interiores: <strong>4.200 - 5.800 €</strong></li>
              <li>· Eléctrica con boletín: <strong>4.500 - 6.000 €</strong></li>
              <li>· Cocina con mobiliario y encimera porcelánica: <strong>7.500 - 10.500 €</strong></li>
              <li>· Dos baños completos (plato + mampara + sanitarios): <strong>9.000 - 13.000 €</strong></li>
              <li>· Suelos porcelánicos rectificados (90 m²): <strong>5.500 - 7.500 €</strong></li>
              <li>· Carpintería interior (puertas + armarios): <strong>4.000 - 6.500 €</strong></li>
              <li>· Pintura plástica completa: <strong>2.000 - 3.000 €</strong></li>
              <li>· Iluminación y mecanismos: <strong>1.500 - 2.500 €</strong></li>
              <li className="border-t border-dark/10 pt-2 font-bold">Total estimado: <span className="text-accent">46.500 - 65.800 €</span></li>
            </ul>
          </div>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Qué encarece la obra (y conviene saber antes)</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Cuatro factores son los que más mueven la cifra final hacia arriba:
          </p>
          <ol className="font-body text-subtitle text-base leading-relaxed space-y-3 mb-6 list-decimal pl-6">
            <li><strong className="text-dark">Sustitución de bajantes generales.</strong> Si la finca tiene bajantes de fundición que pasan por las cocinas y baños, sustituirlos requiere coordinación con vecinos superiores e inferiores. Suma 4.000-7.000 €.</li>
            <li><strong className="text-dark">Reapertura de galerías cerradas.</strong> Recuperar la sección original de fachada implica trabajos de albañilería, carpintería nueva y, en algunos casos, licencia de obra mayor. Suma 5.500-9.000 €.</li>
            <li><strong className="text-dark">Trámites con patrimonio.</strong> En fincas catalogadas de la Part Alta, los informes ante el Servei de Patrimoni y los materiales específicos suman entre un 12 y un 18% al presupuesto base.</li>
            <li><strong className="text-dark">Instalaciones especiales.</strong> Aerotermia, suelo radiante, domótica integrada o iluminación regulable elevan el coste de instalaciones entre 6.000 y 14.000 € adicionales.</li>
          </ol>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Cómo afinar la inversión sin perder calidad</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Una memoria valorada por partidas, en lugar de un precio cerrado a tanto alzado, permite ver dónde está el dinero. Algunos consejos prácticos:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-2 mb-6 list-disc pl-6">
            <li>Concentra la mejora en cocina y baños: aportan más valor de uso que cualquier otra zona.</li>
            <li>Evita modas pasajeras en revestimientos. El porcelánico mate gris claro envejece mejor que cualquier color del año.</li>
            <li>Si el bajante general está envejecido, abórdalo ahora: hacerlo después dobla el coste por la pérdida de acabados.</li>
            <li>Pide tres memorias valoradas y compara partida a partida, no totales.</li>
          </ul>

          <div className="bg-accent rounded-2xl p-8 mt-12 text-white">
            <h3 className="font-display font-extrabold text-2xl mb-3">¿Necesitas una memoria valorada para tu piso?</h3>
            <p className="text-white/90 mb-5 leading-relaxed">Visita técnica sin coste y memoria detallada en 48 horas. Trabajamos en Tarragona ciudad, Reus, Vila-seca, Salou, La Canonja y Constantí.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-display font-bold text-sm hover:bg-dark/80 transition-colors">
              Solicitar valoración <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
