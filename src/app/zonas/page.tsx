import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Zonas de servicio",
  description:
    "Reformas en Tarragona barrio a barrio y en Salou, La Canonja y Constantí. Equipo propio con sede en el Eixample tarraconense.",
  alternates: { canonical: "/zonas" },
  openGraph: {
    title: "Zonas de servicio · ARC Reformas Tarragona",
    description: "Reformas en Tarragona y municipios del Tarragonès: Salou, La Canonja y Constantí.",
    url: "/zonas",
    images: ["/images/hero-reforma-tarragona-clasica.webp"],
  },
};

const zones = [
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
        subtitle="La sede está en la calle Reina Maria Cristina, en pleno Eixample. Desde ahí llegamos a cualquier barrio de la ciudad y a Salou, La Canonja y Constantí en menos de veinte minutos."
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
            <p className="font-body text-subtitle text-base max-w-[560px] mx-auto mt-4">Tarragona ciudad y entorno comarcal: Salou, La Canonja y Constantí.</p>
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

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Barrio a barrio</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-6">Qué tipo de obra encontramos en cada parte de Tarragona</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">Dentro del término municipal la casuística cambia mucho de un barrio a otro, y conviene tenerlo en cuenta antes de pedir presupuesto. Esto es lo que solemos encontrar:</p>
          <h3 className="font-display font-bold text-dark text-xl mt-8 mb-3">Part Alta</h3>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">El casco antiguo sobre el recinto romano. Casas entre medianeras de tres y cuatro plantas, muros de piedra, forjados de madera y fachadas protegidas. Antes de proyectar comprobamos el nivel de protección y si hay cautelas arqueológicas, y planificamos la logística en calles estrechas donde muchas veces no entra un camión.</p>
          <h3 className="font-display font-bold text-dark text-xl mt-8 mb-3">Eixample</h3>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">Pisos amplios de mediados del siglo XX alrededor de la Rambla Nova, con galerías a patio de manzana, techos altos y bajantes compartidos. Es donde más <Link href="/servicios/reformas-cocinas" className="text-accent font-semibold underline underline-offset-2">reformas de cocinas</Link> hacemos, porque reabrir la galería cambia por completo la luz de la vivienda.</p>
          <h3 className="font-display font-bold text-dark text-xl mt-8 mb-3">Serrallo</h3>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">El barrio marinero junto al puerto. Casas bajas y bloques pequeños expuestos a la humedad y al salitre: carpinterías y barandillas se degradan antes que en el centro, y las plantas bajas suelen tener humedad que sube por los muros.</p>
          <h3 className="font-display font-bold text-dark text-xl mt-8 mb-3">Sant Pere i Sant Pau</h3>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">Bloques de los años sesenta a ochenta en la parte norte de la ciudad, con pisos de tres habitaciones y un solo baño. La petición típica es ganar un segundo baño o abrir la cocina al salón dentro de una <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline underline-offset-2">reforma de piso</Link> completa.</p>
          <h3 className="font-display font-bold text-dark text-xl mt-8 mb-3">Torreforta, Bonavista y los barrios de Ponent</h3>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">Bloques y casas levantados en pocos años al ritmo de la industria. Muchas viviendas necesitan rehacer la electricidad, mejorar el aislamiento y revisar cubiertas y terrazas, y aquí una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline underline-offset-2">reforma integral</Link> bien planificada suele salir más a cuenta que ir parcheando.</p>
          <h3 className="font-display font-bold text-dark text-xl mt-8 mb-3">Llevant y la franja costera</h3>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">Edificios y urbanizaciones más recientes hacia la Via Augusta y las playas de l'Arrabassada y la Llarga, donde la reforma suele centrarse en actualizar baños, cocinas y ventanas con criterios de eficiencia y materiales preparados para el ambiente marino.</p>
          <h3 className="font-display font-bold text-dark text-xl mt-8 mb-3">Municipios cercanos</h3>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">Fuera de la ciudad trabajamos de forma habitual en tres municipios. En <Link href="/zonas/reformas-salou" className="text-accent font-semibold underline underline-offset-2">Salou</Link> reformamos sobre todo pisos de uso residencial estable; en <Link href="/zonas/reformas-la-canonja" className="text-accent font-semibold underline underline-offset-2">La Canonja</Link>, casas de pueblo y viviendas de Mas dels Frares; y en <Link href="/zonas/reformas-constanti" className="text-accent font-semibold underline underline-offset-2">Constantí</Link>, pisos heredados y casas del casco antiguo. El equipo, la forma de presupuestar y la garantía son los mismos que en Tarragona.</p>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">Para no perder tiempo en desplazamientos, agrupamos las visitas técnicas por zonas y te damos una franja horaria concreta. Si tu municipio no aparece en la lista, llámanos igualmente: te diremos con franqueza si podemos atender la obra con la frecuencia de seguimiento que necesita.</p>
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
