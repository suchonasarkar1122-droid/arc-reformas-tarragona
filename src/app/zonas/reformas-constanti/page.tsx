import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Constantí · Pisos heredados y casas con historia",
  description:
    "Reformas en Constantí centre y entorno de Centcelles. Pisos heredados, casas con elementos antiguos y bloques residenciales modernos. Sede en Tarragona capital.",
  alternates: { canonical: "/zonas/reformas-constanti" },
  openGraph: {
    title: "Reformas en Constantí | ARC Reformas Tarragona",
    description: "Reformas en Constantí gestionadas con criterio técnico desde Tarragona.",
    url: "/zonas/reformas-constanti",
    images: ["/images/interior-reformado-clasico-tarragona.webp"],
  },
};

const faqs = [
  {
    q: "¿Qué tipo de obras predominan en Constantí?",
    a: "Constantí mezcla casco antiguo con elementos del Mausoleo de Centcelles —patrimonio paleocristiano— y zonas residenciales más modernas. La intervención más frecuente que firmamos aquí es la actualización de pisos heredados de los años 70-80: cocina abierta, dos baños accesibles, suelos uniformes y carpintería renovada. Con menor frecuencia trabajamos también en casas individuales del centro y unifamiliares de la zona nueva.",
  },
  {
    q: "¿Cuánto cuesta reformar un piso de 80 m² en Constantí?",
    a: "Una reforma media en Constantí, con cocina, dos baños, suelos completos y pintura, se sitúa entre 30.000 € y 45.000 €. La factura final depende mucho del estado de las instalaciones generales del edificio y de si hay que sustituir bajantes en pared medianera. La memoria valorada lo concreta tras la visita técnica.",
  },
  {
    q: "¿Os encargáis también de la coordinación con la comunidad?",
    a: "Sí. Cuando hay afección a elementos comunes (bajante, fachada, patio interior), comparecemos en junta o presentamos un escrito formal al administrador. En municipios pequeños las comunidades suelen ser más pequeñas y el proceso es ágil, pero la formalidad es la misma que en Tarragona ciudad.",
  },
];

export default function ZonaConstantiPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en Constantí", url: "/zonas/reformas-constanti" },
        ]}
      />
      <HeroService
        title="Reformas en Constantí — Trabajo cuidado en municipio cercano"
        h1Keyword="Reformas en Constantí"
        subtitle="A doce minutos de Tarragona. Atendemos pisos heredados del centro de Constantí, bloques residenciales más recientes y obras puntuales en casas individuales próximas a Centcelles."
        image="/images/hero-reforma-tarragona-clasica.webp"
        imageAlt="Reformas en Constantí"
        badge="Constantí · Tarragonès"
        showCTA
        trustItems={["Constantí centre", "Centcelles", "Pisos heredados"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] flex flex-col gap-8">
          <div>
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Cobertura en Constantí</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-4">Reformas en Constantí desde Tarragona</h2>
            <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium mb-4">Un municipio con historia, viviendas a actualizar</p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              Constantí está a doce minutos de Tarragona por la C-14. Es un municipio de unos 6.500 habitantes con un centro histórico que conserva trazado medieval y un parque importante de pisos de los años 70 y 80. Cerca está el Mausoleo de Centcelles, monumento paleocristiano declarado patrimonio mundial, lo que da idea de la antigüedad de la zona.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              La mayoría de obras que firmamos en Constantí son pisos heredados que la siguiente generación quiere actualizar para vivir o alquilar. Suelen llegar con instalaciones eléctricas obsoletas, cocina cerrada con galería interior y dos baños con bañera de chapa y alicatado vinílico. La memoria valorada típica incluye cocina abierta al salón, sustitución de bañeras por platos de obra, suelos uniformes y boletines nuevos.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px]">
              También intervenimos puntualmente en casas individuales del centro, donde el reto suele ser conjugar elementos antiguos (vigas, muros) con instalaciones nuevas y un buen aislamiento térmico. Es el tipo de obra que requiere paciencia y criterio: lo afrontamos con técnico de estructura cuando hace falta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Constantí centre", d: "Pisos heredados de los 70-80 con cocina cerrada, baños obsoletos y eléctrica a actualizar al REBT vigente." },
              { t: "Entorno de Centcelles", d: "Casas individuales y bloques residenciales recientes donde se busca abrir espacios y mejorar eficiencia." },
            ].map(item => (
              <div key={item.t} className="bg-white rounded-2xl border border-dark/5 p-6">
                <h3 className="font-display font-bold text-dark text-base mb-2">{item.t}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <CTAButtons />
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] text-center mb-10">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Servicios disponibles</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Servicios de reformas en Constantí</h2>
        </div>
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Reformas Integrales", desc: "Pisos heredados completos, casas con elementos antiguos.", href: "/servicios/reformas-integrales" },
            { title: "Reformas de Cocinas", desc: "Apertura al salón, encimera porcelánica e iluminación zonificada.", href: "/servicios/reformas-cocinas" },
            { title: "Reformas de Baños", desc: "Sustitución de bañera por plato, mampara batiente y suelo continuo.", href: "/servicios/reformas-banos" },
            { title: "Reformas de Pisos", desc: "Renovación completa con eléctrica nueva y pavimento uniforme.", href: "/servicios/reformas-pisos" },
            { title: "Reformas de Locales", desc: "Adecuación de comercio o despacho con licencia tramitada.", href: "/servicios/reformas-locales" },
            { title: "Visita técnica gratis", desc: "Visita en horario laboral, memoria valorada en 48 horas.", href: "/contacto" },
          ].map(s => (
            <Link key={s.title} href={s.href} className="bg-dark-card border border-white/10 rounded-2xl p-6 hover:border-accent/40 transition-colors">
              <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="font-body text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-10">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Constantí</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl p-6 border border-dark/5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer flex items-start justify-between gap-4 font-display font-bold text-dark text-base leading-snug">
                  {f.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="text-accent flex-shrink-0 mt-1 transition-transform group-open:rotate-180">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="font-body text-subtitle text-sm md:text-base leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma en Constantí</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">¿Reformamos tu finca en Constantí? Sin coste de desplazamiento. Visita técnica y memoria valorada en menos de 72 horas hábiles.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors">
            Solicita valoración <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
