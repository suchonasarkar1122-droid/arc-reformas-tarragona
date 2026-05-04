import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Reformas de Pisos en Tarragona · Eixample y Part Alta",
  description:
    "Renovación completa de pisos en Tarragona: distribución, instalaciones nuevas, pavimento y carpintería. Pisos heredados, segundas residencias y obra nueva personalizable.",
  alternates: { canonical: "/servicios/reformas-pisos" },
  openGraph: {
    title: "Reformas de Pisos en Tarragona | ARC Reformas",
    description:
      "Renovación de pisos en Tarragona y Tarragonès: pisos del Eixample, fincas históricas y bloques modernos.",
    url: "/servicios/reformas-pisos",
    images: ["/images/piso-reformado-eixample-tarragona.webp"],
  },
};

export default function ReformasPisosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas de Pisos", url: "/servicios/reformas-pisos" },
        ]}
      />
      <ServiceSchema
        name="Reformas de pisos en Tarragona"
        description="Renovación de pisos en Tarragona: redistribución, instalaciones, pavimentos y carpintería con criterio técnico."
        url="/servicios/reformas-pisos"
        image="/images/piso-reformado-eixample-tarragona.webp"
      />

      <HeroService
        title="Renovación de pisos a medida en Tarragona"
        subtitle="Reformamos pisos heredados que llegan a una nueva generación, segundas residencias urbanas que se quieren actualizar y bloques modernos donde se busca eficiencia. Cada caso pide una memoria distinta."
        image="/images/piso-reformado-eixample-tarragona.webp"
        imageAlt="Reforma completa de piso en el Eixample tarraconense"
        imageTitle="Piso reformado en finca del Eixample, Tarragona"
        h1Keyword="Reformas de pisos en Tarragona"
        badge="Pisos urbanos"
        showCTA
        trustItems={["Memoria por partidas", "Equipo en plantilla", "Garantía firmada"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Tres perfiles de cliente</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Tipos de reformas de pisos en Tarragona
              </h2>
              <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium">
                A quién acompañamos en una reforma de piso
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[560px]">
                Casi todos los pisos que reformamos en Tarragona entran en una de tres categorías. Saber cuál es la tuya nos ayuda a ajustar metodología, materiales y plazos desde el primer correo.
              </p>
              <ul className="space-y-3 font-body text-subtitle text-[15px] leading-relaxed max-w-[560px]">
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Pisos heredados:</b> familias que reciben un piso antiguo en el Eixample o la Part Alta y deciden actualizarlo en lugar de venderlo. Foco en instalaciones nuevas, suelos y baños accesibles.</span></li>
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Segundas residencias urbanas:</b> propietarios que viven fuera y quieren un piso utilizable durante el año. Coordinación a distancia, registro fotográfico del avance y materiales de bajo mantenimiento.</span></li>
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Bloques modernos a personalizar:</b> obra nueva o reciente en Sant Pere i Sant Pau o periferia, donde el comprador quiere ajustar acabados antes de mudarse.</span></li>
              </ul>
              <p className="font-display font-semibold text-dark text-base">
                Cada perfil necesita una conversación distinta. Empezamos por escucharte.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/espacio-diafano-piso-centrico-tarragona.webp"
                alt="Salón diáfano tras reforma en piso del Eixample tarraconense"
                title="Reforma de piso urbano en Tarragona"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Lo que cambiamos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Qué incluye una reforma de piso en Tarragona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Redistribución del salón-comedor", d: "Eliminación de tabiques no portantes con apeo y unión de cocina al salón cuando la finca lo permite." },
              { t: "Pavimentos uniformes", d: "Pavimento porcelánico rectificado de gran formato o parquet de roble con acabado mate. Suelo continuo en toda la vivienda salvo zonas húmedas." },
              { t: "Instalaciones revisadas", d: "Eléctrica adaptada al REBT, fontanería en multicapa y bajantes nuevos cuando hace falta. Boletines al cierre." },
              { t: "Carpintería interior", d: "Puertas en madera maciza con marcos limpios. Armarios empotrados a medida, optimizando los huecos heredados." },
              { t: "Climatización y eficiencia", d: "Aerotermia o split por estancia, según el caso. Mejoras de aislamiento en fachada interior cuando la finca lo permite." },
              { t: "Pintura y mecanismos", d: "Pintura plástica mate de alta cubrición, mecanismos en blanco roto o grafito. Iluminación zonificada con regulables en el salón." },
            ].map((it) => (
              <div key={it.t} className="bg-dark-card border border-white/10 rounded-2xl p-7 hover:border-accent/40 transition-colors">
                <h3 className="font-display font-bold text-white text-lg mb-3">{it.t}</h3>
                <p className="font-body text-white/55 text-sm leading-relaxed">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas habituales</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas de pisos en Tarragona</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: "¿Cuánto cuesta reformar un piso en Tarragona?", a: "Como referencia orientativa, una reforma media en un piso del Eixample suele moverse desde 520 €/m². Si la finca tiene bajantes a sustituir o si añadimos climatización por aerotermia, la cifra sube. Cada proyecto se valora en visita técnica y te enviamos memoria por partidas para que el cálculo sea claro." },
              { q: "¿Trabajáis con propietarios que no viven en Tarragona?", a: "Sí. En segundas residencias gestionamos llaves, recogemos materiales, asistimos a reuniones de comunidad si hace falta y compartimos registro fotográfico del avance. El propietario solo necesita venir a la firma del contrato y a la entrega final, salvo decisiones que prefiera tomar in situ." },
              { q: "¿Cuánto dura una reforma de piso completa?", a: "Un piso urbano de 80-100 m² se entrega en 10-13 semanas. Si se sustituye bajante o se interviene en estructura, hay que sumar 1-2 semanas. El calendario por hitos lo pactamos antes de empezar y lo respetamos salvo causa mayor justificada." },
              { q: "¿Y si tengo que pedir hipoteca para la reforma?", a: "La memoria valorada con planos y partidas que entregamos sirve como documento técnico para presentar en banco. Si necesitas certificado de habitabilidad, certificado energético o presupuesto formal en formato bancario, también lo emitimos." },
            ].map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl p-6 border border-dark/5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer flex items-start justify-between gap-4 font-display font-bold text-dark text-base md:text-lg leading-snug">
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma de piso</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[560px]">¿Renovamos tu piso en Tarragona? Memoria valorada en 48 horas tras visita técnica. Empezamos en 4-6 semanas cuando el calendario encaja.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors">
              Pedir valoración <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <a href="tel:+34877278109" className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-display font-bold text-[15px] hover:bg-white/10 transition-colors">
              877 278 109
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
