import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Zonas de servicio · Reformas en Tarragona y el Tarragonès",
  description:
    "ARC Reformas Tarragona atiende también obras en Reus, Vila-seca, Salou, La Canonja y Constantí. Plantilla propia con sede en el Eixample tarraconense.",
  alternates: { canonical: "/zonas" },
  openGraph: {
    title: "Zonas de servicio · ARC Reformas Tarragona",
    description: "Reformas en Tarragona y municipios del Tarragonès: Reus, Vila-seca, Salou, La Canonja y Constantí.",
    url: "/zonas",
    images: ["/images/hero-reforma-tarragona-clasica.webp"],
  },
};

const zones = [
  { name: "Reus", slug: "reformas-reus", description: "Capital del Baix Camp. Reformamos en pisos del centro histórico, ensanche modernista y bloques de la zona Mas Iglesias para clientes que prefieren contratar empresa con sede en la capital." },
  { name: "Vila-seca", slug: "reformas-vila-seca", description: "Atendemos a propietarios de Vila-seca centre y La Pineda que valoran un equipo radicado en Tarragona, sin trayectos largos para visita técnica ni respuesta a incidencias." },
  { name: "Salou", slug: "reformas-salou", description: "Pisos en Salou Centre, Cap Salou y Capellans, especialmente segundas residencias de propietarios que viven habitualmente en Tarragona o Cataluña central." },
  { name: "La Canonja", slug: "reformas-la-canonja", description: "Trabajos en La Canonja centre y Mas dels Frares. Por la cercanía con el casco urbano de Tarragona, podemos visitar la obra varias veces por semana sin coste extra." },
  { name: "Constantí", slug: "reformas-constanti", description: "Reformas en Constantí centre y la zona próxima a Centcelles. Coordinación específica para obras en pisos heredados y casas con elementos antiguos." },
];

export default function ZonasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Zonas", url: "/zonas" }]} />
      <HeroService
        title="Atendemos toda la conurbación tarraconense"
        h1Keyword="Reformas en Tarragona y el Tarragonès"
        subtitle="La sede está en la calle Reina Maria Cristina, en pleno Eixample. Desde ahí, llegamos a Reus, Vila-seca, Salou, La Canonja y Constantí en menos de veinte minutos."
        image="/images/hero-reforma-tarragona-clasica.webp"
        imageAlt="Cobertura de reformas en Tarragona y comarca"
        badge="Cobertura comarcal"
        showCTA
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Municipios donde intervenimos</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-dark leading-[1.1]">Reformas en el Tarragonès y zonas cercanas</h2>
            <p className="font-body text-subtitle text-base max-w-[560px] mx-auto mt-4">Tarragona ciudad y entorno comarcal: Reus, Vila-seca, Salou, La Canonja y Constantí.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-accent rounded-[20px] p-8 flex flex-col gap-4 text-white">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3 className="font-display font-bold text-xl">Tarragona ciudad</h3>
              <p className="text-white/85 text-sm leading-relaxed">Sede principal en el Eixample. La mayoría de obras son en pisos del Eixample, edificios catalogados de la Part Alta y bloques de Sant Pere i Sant Pau.</p>
              <Link href="/" className="inline-flex items-center gap-1 text-white text-xs font-bold uppercase tracking-wider mt-auto hover:underline">
                Ver portada <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {zones.map((zone) => (
              <Link key={zone.slug} href={`/zonas/${zone.slug}`} className="group bg-white rounded-[20px] p-8 flex flex-col gap-4 border border-dark/5 hover:border-accent/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3 className="font-display font-bold text-dark text-xl group-hover:text-accent transition-colors">{zone.name}</h3>
                <p className="text-subtitle text-sm leading-relaxed">{zone.description}</p>
                <span className="font-display font-bold text-accent text-sm inline-flex items-center gap-1 mt-auto">
                  Ver zona <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[560px]">¿Tu municipio no figura? Cubrimos todo el Tarragonès y, según volumen, también Camp de Tarragona y Baix Camp. Consúltanos: si la obra encaja en nuestro calendario, te lo confirmamos en la primera llamada.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors">
            Consultar disponibilidad <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
