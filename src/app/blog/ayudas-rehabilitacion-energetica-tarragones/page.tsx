import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Ayudas a la rehabilitación energética en el Tarragonès en 2026",
  description:
    "Subvenciones disponibles en 2026 para reformas energéticas en Tarragona y comarca: Fondos Next Generation, programas de la Generalitat y bonificaciones municipales.",
  alternates: { canonical: "/blog/ayudas-rehabilitacion-energetica-tarragones" },
  openGraph: {
    title: "Ayudas a la rehabilitación energética en el Tarragonès",
    description:
      "Qué subvenciones aplican a tu vivienda en Tarragona en 2026 y cómo se tramitan.",
    url: "/blog/ayudas-rehabilitacion-energetica-tarragones",
    type: "article",
    images: ["/images/vivienda-rehabilitacion-energetica-tarragona.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ayudas a la rehabilitación energética en el Tarragonès en 2026",
  description:
    "Subvenciones para reformas energéticas en Tarragona y comarca en 2026, con detalle de cuantías, requisitos y plazos.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  author: { "@type": "Organization", name: "ARC Reformas Tarragona" },
  publisher: { "@id": "https://arcreformastarragona.es/#business" },
  image: "https://arcreformastarragona.es/images/vivienda-rehabilitacion-energetica-tarragona.webp",
  mainEntityOfPage: "https://arcreformastarragona.es/blog/ayudas-rehabilitacion-energetica-tarragones",
};

export default function PostAyudas() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Ayudas a la rehabilitación energética", url: "/blog/ayudas-rehabilitacion-energetica-tarragones" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-beige">
        <div className="relative h-[360px] md:h-[460px] w-full overflow-hidden bg-dark">
          <Image
            src="/images/vivienda-rehabilitacion-energetica-tarragona.webp"
            alt="Ayudas a la rehabilitación energética en Tarragona"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/55 to-dark/85" />
          <div className="relative z-10 h-full flex flex-col items-start justify-end max-w-[1100px] mx-auto px-5 pb-12">
            <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">Ayudas y subvenciones</span>
            <h1 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[56px] text-white leading-[1.05] max-w-[900px]">
              Ayudas a la rehabilitación energética en el Tarragonès en 2026
            </h1>
            <p className="text-white/70 text-sm mt-3">1 de mayo de 2026 · 6 minutos de lectura</p>
          </div>
        </div>

        <div className="max-w-[820px] mx-auto px-5 py-16 md:py-20">
          <p className="font-body text-dark text-lg leading-relaxed mb-6">
            Si tienes pensado mejorar la eficiencia energética de tu vivienda en Tarragona, Reus, Vila-seca o cualquier municipio del Tarragonès, en 2026 hay varias líneas de ayuda activas. Conviene conocerlas antes de redactar la memoria de obra: muchas exigen iniciar el trámite antes de empezar las obras, no después.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Programas Next Generation EU para vivienda</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Los Fondos Next Generation siguen activos en 2026 a través del Real Decreto 853/2021, gestionados en Cataluña por la Agència de l'Habitatge de Catalunya. Hay tres programas principales que aplican al Tarragonès:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-3 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Programa 3 — Mejora de eficiencia energética en vivienda:</strong> hasta el 40% del coste de la obra (con límite de 3.000 € por vivienda) si se reduce un 30% la demanda anual de calefacción y refrigeración. Aplica a aislamiento de fachada, cubierta, ventanas, aerotermia o caldera de biomasa.</li>
            <li><strong className="text-dark">Programa 4 — Rehabilitación de edificios:</strong> hasta 18.800 € por vivienda si la actuación es comunitaria y se acredita una mejora del 60% en eficiencia. Especialmente interesante para fincas del Eixample con calefacción central a sustituir.</li>
            <li><strong className="text-dark">Programa 5 — Elaboración del Libro del Edificio Existente:</strong> ayuda directa al despacho técnico para la documentación previa, hasta 700 € por vivienda. Es el paso previo a cualquier solicitud comunitaria.</li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            La tramitación es por convocatoria abierta hasta agotar fondos. En 2025 los fondos del programa 3 se agotaron en seis meses, así que conviene preparar documentación cuanto antes.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Programas de la Generalitat de Catalunya</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Más allá de los Next Generation, la Generalitat mantiene líneas propias:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-2 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Plan d'Habitatge de Catalunya:</strong> ayudas a la rehabilitación residencial con criterios sociales y eficiencia energética. Cuantía variable según ingresos del beneficiario.</li>
            <li><strong className="text-dark">ICAEN — Programa de subvenciones a renovables:</strong> aerotermia, fotovoltaica, calderas de biomasa. Hasta el 50% del coste con límite de 7.000 €.</li>
            <li><strong className="text-dark">Programa de cubiertas verdes y patios bioclimáticos:</strong> específico para zonas urbanas con isla de calor, aplica al casco de Tarragona.</li>
          </ul>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Bonificaciones municipales</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            El Ayuntamiento de Tarragona aplica las siguientes bonificaciones para obras energéticas:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-2 mb-6 list-disc pl-6">
            <li>Bonificación del <strong className="text-dark">95% en la tasa de licencia de obra</strong> si la actuación incluye mejora certificada de eficiencia energética.</li>
            <li>Bonificación del <strong className="text-dark">50% en el IBI</strong> durante 3 años para viviendas que instalen autoconsumo fotovoltaico.</li>
            <li>Reducción del <strong className="text-dark">30% en la tasa de residuos</strong> para obras con plan de gestión de residuos certificado.</li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            En municipios próximos como Reus, Salou o Constantí existen bonificaciones similares con porcentajes que varían entre el 20% y el 50%. Conviene consultar la ordenanza fiscal de cada ayuntamiento antes de presentar licencia.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Qué obras se subvencionan más fácilmente</h2>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-2 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Aislamiento de fachada por el exterior (SATE):</strong> reducción de demanda 25-40%.</li>
            <li><strong className="text-dark">Sustitución de carpintería exterior</strong> por ventana con rotura de puente térmico y vidrio bajo emisivo.</li>
            <li><strong className="text-dark">Aerotermia</strong> para producción de calefacción, refrigeración y agua caliente sanitaria.</li>
            <li><strong className="text-dark">Sustitución de calderas</strong> de gasoil o gas antiguas por bomba de calor o caldera de condensación.</li>
            <li><strong className="text-dark">Aislamiento de cubierta</strong>, especialmente en edificios anteriores a 1979.</li>
          </ul>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Cómo te acompañamos en la tramitación</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            Trabajamos con técnicos colegiados especializados en certificación energética. Te facilitamos el certificado previo y posterior, la memoria justificada, las facturas en formato exigido por la convocatoria y la documentación gráfica del antes y después. Si la finca es comunitaria, asistimos a la junta para explicar el alcance y los plazos a los vecinos.
          </p>

          <div className="bg-accent rounded-2xl p-8 mt-12 text-white">
            <h3 className="font-display font-extrabold text-2xl mb-3">¿Quieres aprovechar las ayudas?</h3>
            <p className="text-white/90 mb-5 leading-relaxed">Te explicamos qué línea encaja con tu vivienda y preparamos la memoria valorada con la documentación que pide cada convocatoria. Sin coste hasta firmar contrato.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-display font-bold text-sm hover:bg-dark/80 transition-colors">
              Pedir asesoramiento <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
