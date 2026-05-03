import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Vila-seca · Trabajos coordinados desde Tarragona",
  description:
    "Reformas en Vila-seca y La Pineda para clientes con sede o vínculo en Tarragona. Equipo radicado en la capital, sin coste de desplazamiento añadido.",
  alternates: { canonical: "/zonas/reformas-vila-seca" },
  openGraph: {
    title: "Reformas en Vila-seca | ARC Reformas Tarragona",
    description: "Reformas en Vila-seca centre y La Pineda gestionadas desde Tarragona capital.",
    url: "/zonas/reformas-vila-seca",
    images: ["/images/piso-reformado-eixample-tarragona.webp"],
  },
};

const faqs = [
  {
    q: "¿Trabajáis en pisos de La Pineda con uso vacacional?",
    a: "Sí. Una parte importante de los pisos de La Pineda son segundas residencias de propietarios que viven habitualmente en Tarragona, Barcelona o Cataluña central. Coordinamos la obra a distancia, compartimos registro fotográfico del avance y procuramos entregar la vivienda antes de la temporada alta.",
  },
  {
    q: "¿Qué materiales recomendáis para la zona costera de Vila-seca?",
    a: "El salitre y la humedad obligan a elegir bien. Aluminios anodizados o lacados con tratamiento marino, grifería con cuerpo de cromo macizo, suelos porcelánicos rectificados de baja porosidad, pintura transpirable con tratamiento antimoho. La carpintería de madera, en interiores, mejor en roble o nogal acabado al barniz.",
  },
  {
    q: "¿Cuánto cuesta una reforma media en La Pineda?",
    a: "Para un piso de segunda residencia de 70-90 m² con cocina abierta, dos baños y suelos completos, la horquilla habitual es de 32.000 € a 48.000 €. Si la finca tiene bajantes a sustituir o se cambia carpintería exterior por aluminio nuevo, hay que sumar partidas. La memoria valorada lo concreta tras la visita.",
  },
];

export default function ZonaVilaSecaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en Vila-seca", url: "/zonas/reformas-vila-seca" },
        ]}
      />
      <HeroService
        title="Reformas en Vila-seca — Equipo coordinado desde Tarragona"
        h1Keyword="Reformas en Vila-seca"
        subtitle="A quince minutos por la N-340. Trabajamos en Vila-seca centre y La Pineda con propietarios que residen habitualmente en Tarragona, valoran un equipo cercano y prefieren tratar con una empresa con sede en la capital."
        image="/images/hero-reforma-tarragona-clasica.webp"
        imageAlt="Reformas en Vila-seca y La Pineda"
        badge="Vila-seca · Tarragonès"
        showCTA
        trustItems={["Vila-seca centre", "La Pineda", "Costa Daurada"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] flex flex-col gap-8">
          <div>
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Cobertura en Vila-seca</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-4">Reformas en Vila-seca y La Pineda</h2>
            <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium mb-4">Trabajamos para clientes con base en Tarragona</p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              Vila-seca es un municipio costero del Tarragonès con dos realidades distintas: el casco urbano histórico con casas de pueblo y pisos de los años 70, y La Pineda como zona de segunda residencia y temporada vacacional. Nuestra cobertura aquí está pensada sobre todo para propietarios que viven o trabajan en Tarragona y tienen una vivienda en Vila-seca por motivos familiares, vacaciones o herencia.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              La distancia con la capital son quince minutos por la N-340 o por la AP-7. Eso nos permite trasladar al equipo en el día, hacer visitas cortas para tomar decisiones urgentes y coordinar entregas de material sin sumar logística cara al presupuesto.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px]">
              En La Pineda, la mayoría de obras que firmamos son adecuaciones de pisos de los años 80-90 para alargar su vida útil otros veinte años: cambio de bajantes, sustitución de carpintería exterior por aluminio con rotura de puente térmico, plato de obra en sustitución de bañera y suelos uniformes en toda la vivienda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Vila-seca centre", d: "Casas de pueblo, pisos de los 70 con cocina cerrada y necesidades de actualización completa de instalaciones." },
              { t: "La Pineda", d: "Segundas residencias frente al mar, con prioridad en aluminios marinos, suelos baja porosidad y pintura antimoho." },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Servicios de reformas en Vila-seca</h2>
        </div>
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Reformas Integrales", desc: "Llave en mano en casas de pueblo del centro o pisos de La Pineda.", href: "/servicios/reformas-integrales" },
            { title: "Reformas de Cocinas", desc: "Cocinas abiertas en pisos de segunda residencia, encimera resistente.", href: "/servicios/reformas-cocinas" },
            { title: "Reformas de Baños", desc: "Plato de obra, ventilación mejorada y materiales de baja humedad.", href: "/servicios/reformas-banos" },
            { title: "Reformas de Pisos", desc: "Pisos vacacionales actualizados antes de temporada.", href: "/servicios/reformas-pisos" },
            { title: "Reformas de Locales", desc: "Acondicionamiento de comercios costeros con licencia tramitada.", href: "/servicios/reformas-locales" },
            { title: "Visita técnica gratis", desc: "Visita por la zona y memoria valorada en 48 horas hábiles.", href: "/contacto" },
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Vila-seca</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma en Vila-seca</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">¿Tu vivienda está en Vila-seca o La Pineda? Cuéntanos los metros, el año y la zona. Te enviamos memoria valorada en 48 horas.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors">
            Solicita valoración <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
