import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Reformas de Cocinas en Tarragona · Galerías reabiertas",
  description:
    "Reformamos cocinas en pisos del Eixample tarraconense, abriendo galerías cerradas y conectando con el comedor. Acabados sobrios, isla central si lo permite la finca. 877 278 109.",
  alternates: { canonical: "/servicios/reformas-cocinas" },
  openGraph: {
    title: "Reformas de Cocinas en Tarragona | ARC Reformas",
    description:
      "Especialistas en cocinas para pisos del Eixample y fincas históricas de Tarragona. Galerías reabiertas, islas y acabados duraderos.",
    url: "/servicios/reformas-cocinas",
    images: ["/images/cocina-piso-eixample-tarragona.webp"],
  },
};

export default function ReformasCocinasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas de Cocinas", url: "/servicios/reformas-cocinas" },
        ]}
      />
      <ServiceSchema
        name="Reformas de cocinas en Tarragona"
        description="Reforma de cocinas en pisos del Eixample y viviendas tarraconenses. Reapertura de galerías, islas centrales y materiales duraderos."
        url="/servicios/reformas-cocinas"
        image="/images/cocina-piso-eixample-tarragona.webp"
      />

      <HeroService
        title="Especialistas en cocinas para pisos del Eixample y fincas clásicas"
        subtitle="Una cocina urbana en Tarragona suele venir con galería cerrada en los años 90, una distribución cerrada y bajantes en pared medianera. Reabrimos espacios, conectamos con el comedor y ordenamos las instalaciones de forma duradera."
        image="/images/cocina-isla-vivienda-urbana-tarragona.webp"
        imageAlt="Reforma de cocina en piso del Eixample tarraconense"
        imageTitle="Cocina reformada en finca de Tarragona"
        h1Keyword="Reformas de cocinas en Tarragona"
        badge="Cocinas urbanas"
        showCTA
        trustItems={["Galerías reabiertas", "Encimera porcelánica", "Coste pactado"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">El ángulo tarraconense</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reformas de cocinas en pisos del Eixample tarraconense
              </h2>
              <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium">
                Cocinas en pisos del Eixample con galerías cerradas a reabrir
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[560px]">
                Las fincas de los años 60-80 en el Eixample tarraconense suelen tener una cocina estrecha y, pegada a ella, una galería cerrada con uralita o aluminio antiguo. La intervención más rentable consiste en eliminar la separación, integrar la galería como zona de office o lavandería ventilada y dotar al conjunto de luz y orden.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[560px]">
                En las fincas más antiguas, dentro del recinto romano, el reto es otro: muros gruesos, bóvedas y bajantes compartidos. Aquí trabajamos en cocinas más recogidas, con frente lineal, alacenas en obra y materiales que dialogan con la piedra original.
              </p>
              <p className="font-display font-semibold text-dark text-base">
                Te explicamos in situ qué se puede tocar y qué no antes de prometer nada.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/cocina-galeria-reabierta-tarragona.webp"
                alt="Cocina con galería reabierta en piso de Tarragona"
                title="Cocina reformada con galería integrada en Tarragona"
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Qué resolvemos en una cocina</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Qué incluye una reforma de cocina en Tarragona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Reapertura de galería", d: "Eliminamos la pared interior, recuperamos sección de fachada y dejamos un espacio único cocina-galería con doble iluminación natural." },
              { t: "Renovación de bajantes", d: "Sustitución de bajante de fundición por insonorizado, coordinada con la comunidad si afecta a vecinos superiores e inferiores." },
              { t: "Frente lineal o en U", d: "Diseño según el plano real. Si la finca lo permite, isla; si no, frente lineal con office sobre encimera." },
              { t: "Encimera porcelánica", d: "Porcelánico rectificado de gran formato, resistente a manchas y golpes. También piedra natural local en obras de gama alta." },
              { t: "Iluminación zonificada", d: "Tres niveles: general en techo, focal sobre encimera y ambiental bajo armarios. Evitamos el plafón único que aplana el espacio." },
              { t: "Electrodomésticos integrados", d: "Asesoramos en marcas con garantía y servicio técnico en Tarragona. Coordinamos toma de aguas y eléctrica antes de las instalaciones." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas de cocinas en Tarragona</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: "¿Cuánto tarda reformar una cocina en Tarragona?", a: "Una cocina sin abrir paredes ni reabrir galería se entrega en 4-5 semanas. Si reabrimos la galería con uralita y sustituimos bajantes, el plazo medio es de 6-8 semanas. Lo concretamos en la memoria valorada tras la visita técnica." },
              { q: "¿Es posible poner isla en un piso del Eixample?", a: "Depende del ancho útil. Por debajo de 3,40 metros de pasillo libre entre frentes, la isla resta más de lo que aporta. En esos casos proponemos península o barra office. En pisos más amplios o en bloques modernos de Sant Pere i Sant Pau, la isla suele encajar." },
              { q: "¿Hay que pedir permiso si afecta a la galería?", a: "Sí. La galería forma parte de la fachada del edificio. Tramitamos comunicación previa o licencia de obra mayor según el caso ante el Ayuntamiento de Tarragona, e informamos a la comunidad antes de empezar." },
              { q: "¿Qué encimera dura más en una cocina urbana?", a: "El porcelánico rectificado de 12 mm aguanta golpes de cazuela, manchas de vino y la radiación ultravioleta sin perder color. Es nuestra recomendación habitual. Para gama alta, piedras naturales como el granito gris Pineda son una alternativa muy local." },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma de cocina</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[560px]">¿Reformamos tu cocina en Tarragona? Visita técnica sin coste, planos a escala y memoria valorada. Si encaja, la obra puede empezar en 4-6 semanas.</p>
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
