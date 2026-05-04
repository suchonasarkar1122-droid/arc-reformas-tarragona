import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Reformas Integrales en Tarragona · Llave en mano",
  description:
    "Reforma integral de viviendas en Tarragona: pisos del Eixample, fincas catalogadas de la Part Alta y bloques modernos. Memoria valorada y plantilla propia. 877 278 109.",
  alternates: { canonical: "/servicios/reformas-integrales" },
  openGraph: {
    title: "Reformas Integrales en Tarragona | ARC Reformas",
    description:
      "Proyecto llave en mano de reforma integral en Tarragona. Documentación completa, plantilla propia y coste pactado.",
    url: "/servicios/reformas-integrales",
    images: ["/images/vivienda-reformada-centro-tarragona.webp"],
  },
};

export default function ReformasIntegralesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas Integrales", url: "/servicios/reformas-integrales" },
        ]}
      />
      <ServiceSchema
        name="Reformas integrales en Tarragona"
        description="Reforma integral llave en mano para viviendas en Tarragona y comarca. Memoria valorada, plantilla propia y documentación trazable."
        url="/servicios/reformas-integrales"
        image="/images/vivienda-reformada-centro-tarragona.webp"
      />

      <HeroService
        title="Reforma integral de viviendas en Tarragona: proyecto llave en mano"
        subtitle="Asumimos la obra completa de tu vivienda en Tarragona, desde la memoria técnica hasta la entrega con boletines y dossier final. Trabajamos en pisos heredados del Eixample, fincas catalogadas y bloques modernos."
        image="/images/hero-reforma-tarragona-clasica.webp"
        imageAlt="Reforma integral de vivienda en Tarragona"
        imageTitle="Reforma integral en finca de Tarragona — ARC Reformas"
        h1Keyword="Reformas integrales en Tarragona"
        badge="Llave en mano"
        showCTA
        trustItems={["+140 obras entregadas", "16 años en la ciudad", "Coste pactado"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Reforma integral completa
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Tipos de reformas integrales en Tarragona
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[560px]">
                En Tarragona conviven realidades constructivas muy distintas. Una reforma integral en una finca racionalista de la Rambla Nova no se parece a la rehabilitación de una vivienda dentro del recinto romano. Por eso ajustamos la metodología a cada caso: técnicas, materiales y plazos cambian según el edificio.
              </p>
              <ul className="space-y-3 font-body text-subtitle text-[15px] leading-relaxed max-w-[560px]">
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Pisos del Eixample (1950-1980):</b> sustitución de bajantes de fundición, reapertura de galerías y mejora del aislamiento sin perder identidad.</span></li>
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Fincas catalogadas de la Part Alta:</b> coordinación con el Servei de Patrimoni y conservación de elementos protegidos.</span></li>
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Bloques modernos de Sant Pere i Sant Pau:</b> redistribución para abrir cocina al salón y mejorar la eficiencia energética.</span></li>
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Casas de pueblo y unifamiliares:</b> recuperación de patios interiores, refuerzo estructural y soluciones de cubierta.</span></li>
              </ul>
              <p className="font-display font-semibold text-dark text-base">
                Una memoria valorada por escrito antes de empezar. La cifra firmada es la cifra final.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/obra-integral-finca-tarragona.webp"
                alt="Obra de reforma integral en finca de Tarragona"
                title="Reforma integral en finca de Tarragona"
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Qué incluye una reforma integral</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Qué incluye una reforma integral en Tarragona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Demolición controlada", d: "Picado selectivo, retirada de bajantes obsoletos y gestión de residuos en planta autorizada. Si la finca tiene afecciones arqueológicas, se documenta cada hallazgo." },
              { t: "Instalaciones nuevas", d: "Eléctrica con boletín, fontanería con tubería multicapa, gas y telecomunicaciones renovadas. Adaptamos a las exigencias del REBT y las ordenanzas locales." },
              { t: "Albañilería estructural", d: "Refuerzos de forjado, eliminación de muros no portantes con apeo, recuperación de bóvedas y cuidado especial en muros centenarios." },
              { t: "Carpintería interior y exterior", d: "Puertas en madera maciza, armarios a medida y ventanas de aluminio con rotura de puente térmico u oscuro tradicional, según la normativa de la finca." },
              { t: "Pavimentos y revestimientos", d: "Porcelánico rectificado, microcemento, parquet de roble o piedra natural local. Replanteo previo para coordinar con instalaciones." },
              { t: "Acabados y revisión", d: "Pintura plástica de alta cubrición, mecanismos de gama media, iluminación LED y revisión final estancia por estancia antes de la entrega." },
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas integrales en Tarragona</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: "¿Cuánto cuesta de media reformar un piso de 90 m² en Tarragona?", a: "Como referencia orientativa, una reforma integral en finca del Eixample suele partir desde 520 €/m² si el edificio tiene buenas instalaciones generales. En fincas con bajantes a sustituir o servidumbres comunitarias, la cifra puede subir un 10-15%. Cada proyecto se valora en visita técnica y la memoria concreta cada partida." },
              { q: "¿Cuánto dura una obra integral?", a: "Un piso de 80-100 m² se entrega habitualmente entre 10 y 14 semanas. Una vivienda dentro del recinto romano que requiera trámites con patrimonio puede sumar 3-5 semanas adicionales por la espera de informes. El calendario por fases lo recibes antes de empezar." },
              { q: "¿Hace falta avisar a la comunidad de propietarios?", a: "Sí. Para cualquier afección a elementos comunes (bajantes, fachada, patio interior, bombo de gas) presentamos por escrito el alcance al administrador y, si hace falta, comparecemos en junta. Lo gestionamos nosotros para que el propietario no se pierda en la burocracia." },
              { q: "¿Podemos seguir viviendo durante la obra?", a: "En reforma integral nuestra recomendación es desocupar la vivienda. La obra es más limpia, los plazos se reducen un 15-20% y se evita el polvo en cajones y armarios. Si por motivos justificados es imposible, organizamos zonas de obra estancas y trabajamos por fases." },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma integral</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[560px]">¿Hablamos de tu reforma integral en Tarragona? Cuéntanos en qué edificio está la vivienda y qué te gustaría priorizar. Concertamos visita técnica sin coste para esta semana o la próxima.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors">
              Pedir visita técnica <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
