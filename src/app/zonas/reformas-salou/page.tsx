import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Salou · Pisos urbanos y segundas residencias",
  description:
    "Reformas en Salou para propietarios con base en Tarragona: pisos del eje C-31, segundas residencias y viviendas heredadas en Cap Salou y Capellans. Memoria documentada.",
  alternates: { canonical: "/zonas/reformas-salou" },
  openGraph: {
    title: "Reformas en Salou | ARC Reformas Tarragona",
    description: "Reformas en Salou centre, Cap Salou y Capellans gestionadas desde Tarragona capital.",
    url: "/zonas/reformas-salou",
    images: ["/images/piso-reformado-eixample-tarragona.webp"],
  },
};

const faqs = [
  {
    q: "¿En qué se diferencia reformar en Salou desde Tarragona o desde Cambrils?",
    a: "Lo que cambia es el ángulo del cliente. Quien busca empresa con sede en Tarragona suele tener su residencia principal en la capital y un piso heredado o comprado en Salou para uso personal o alquiler estable, no turístico. Trabajamos con menos rotación y proyectos más reposados, dirigidos al uso doméstico habitual y no a alta rotación vacacional.",
  },
  {
    q: "¿Cuánto cuesta reformar un piso de los años 80 en Salou centre?",
    a: "Para un piso de 70-90 m² con cocina, dos baños y suelos completos, la inversión habitual es de 32.000 € a 48.000 €. En fincas frente al mar conviene presupuestar 4.000-7.000 € adicionales para sustituir carpintería exterior por aluminio con tratamiento marino y rotura de puente térmico.",
  },
  {
    q: "¿Atendéis pisos en Cap Salou y Capellans?",
    a: "Sí. Cap Salou y Capellans concentran segundas residencias antiguas que se están rehabilitando. La intervención típica incluye sustitución de carpintería, cambio de bañera por plato de obra, suelos uniformes y revisión completa de la instalación eléctrica para adaptarla al REBT vigente.",
  },
];

export default function ZonaSalouPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en Salou", url: "/zonas/reformas-salou" },
        ]}
      />
      <HeroService
        title="Reformas en Salou — Pisos para uso residencial estable"
        h1Keyword="Reformas en Salou"
        subtitle="A diez minutos por la C-31. Trabajamos en Salou centre, Cap Salou y Capellans con clientes que tienen su residencia principal en Tarragona y un piso aquí para uso propio o alquiler de larga estancia."
        image="/images/hero-reforma-tarragona-clasica.webp"
        imageAlt="Reformas en Salou y Cap Salou"
        badge="Salou · Tarragonès"
        showCTA
        trustItems={["Salou Centre", "Cap Salou", "Capellans"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] flex flex-col gap-8">
          <div>
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Cobertura en Salou</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-4">Reformas en Salou desde Tarragona capital</h2>
            <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium mb-4">Pisos para vivir, no para temporada turística</p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              Salou tiene una dimensión turística muy fuerte, pero también un parque importante de viviendas para uso residencial estable. Nuestros clientes habituales aquí son propietarios que residen habitualmente en Tarragona y tienen un piso en Salou —heredado, comprado para temporadas largas o destinado a alquiler de mediana duración— y necesitan reformarlo con criterio doméstico, no con lógica de rotación vacacional rápida.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              La distancia con la capital provincial son diez minutos por la C-31. Eso permite visitar la obra varias veces por semana sin coste de desplazamiento añadido al presupuesto. Si necesitamos retirar muestras de pavimento o la grifería del cliente, lo hacemos en una mañana.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px]">
              Las fincas más frecuentes en nuestra cartera de Salou son los pisos de los años 80-90 en el eje de la calle Major y avenida Carles Buïgas, donde el reto es modernizar instalaciones, sustituir carpintería marina y mejorar el aislamiento térmico para reducir consumo de aire acondicionado en verano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Salou Centre", d: "Pisos de los 80 con bajantes a renovar y carpintería de aluminio antiguo a sustituir." },
              { t: "Cap Salou", d: "Segundas residencias con vistas al mar, prioridad en aislamiento y aluminios marinos." },
              { t: "Capellans", d: "Bloques residenciales junto a la playa, intervenciones de actualización integral." },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Servicios de reformas en Salou</h2>
        </div>
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Reformas Integrales", desc: "Renovación completa para uso residencial estable, no turístico.", href: "/servicios/reformas-integrales" },
            { title: "Reformas de Cocinas", desc: "Apertura de espacios y materiales resistentes a humedad costera.", href: "/servicios/reformas-cocinas" },
            { title: "Reformas de Baños", desc: "Plato de obra, ventilación forzada y suelos antideslizantes.", href: "/servicios/reformas-banos" },
            { title: "Reformas de Pisos", desc: "Aislamiento térmico, carpintería marina y suelos uniformes.", href: "/servicios/reformas-pisos" },
            { title: "Reformas de Locales", desc: "Adecuación de despachos y comercios con tramitación.", href: "/servicios/reformas-locales" },
            { title: "Visita técnica gratis", desc: "Visita en el día y memoria valorada en 48 horas.", href: "/contacto" },
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Salou</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma en Salou</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">¿Hablamos de tu piso en Salou? Sin coste de desplazamiento. Visita técnica y memoria valorada en menos de 72 horas.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors">
            Solicita valoración <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
