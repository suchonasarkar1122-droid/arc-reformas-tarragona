import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Reformas de Baños en Tarragona · Plato de obra y mampara",
  description:
    "Reforma de baños en Tarragona. Sustitución de bañera por plato de obra, accesibilidad mejorada y soluciones para bajantes compartidos en fincas antiguas. 877 278 109.",
  alternates: { canonical: "/servicios/reformas-banos" },
  openGraph: {
    title: "Reformas de Baños en Tarragona | ARC Reformas",
    description:
      "Tu reforma de baño en Tarragona: cambio de bañera por ducha, mampara a medida y materiales preparados para fincas antiguas.",
    url: "/servicios/reformas-banos",
    images: ["/images/bano-piso-eixample-tarragona.webp"],
  },
};

export default function ReformasBanosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas de Baños", url: "/servicios/reformas-banos" },
        ]}
      />
      <ServiceSchema
        name="Reformas de baños en Tarragona"
        description="Reforma de baños en Tarragona: plato de obra, accesibilidad y soluciones específicas para fincas con bajantes compartidos."
        url="/servicios/reformas-banos"
        image="/images/bano-piso-eixample-tarragona.webp"
      />

      <HeroService
        title="Tu reforma de baño en Tarragona: diseño sobrio y soluciones técnicas"
        subtitle="En la mayor parte de pisos del Eixample y la Part Alta, los baños se construyeron con bañera de chapa, alicatado vinílico y bajantes en pared medianera. Una reforma bien planteada cambia toda la experiencia diaria sin necesidad de tirar la finca."
        image="/images/bano-rediseno-completo-tarragona.webp"
        imageAlt="Reforma de baño en piso clásico de Tarragona"
        imageTitle="Baño reformado con materiales sobrios en Tarragona"
        h1Keyword="Reformas de baños en Tarragona"
        badge="Baños bien resueltos"
        showCTA
        trustItems={["Plato de obra", "Mampara a medida", "Garantía firmada"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Lo más habitual</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Reformas de baños en Tarragona: cambio de bañera por ducha
              </h2>
              <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium">
                Cambio de bañera por ducha y reordenación del baño
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[560px]">
                La sustitución de bañera por plato de obra de gran formato es la intervención que más solicitamos en Tarragona, sobre todo en familias con miembros mayores en la vivienda. Se gana espacio útil, se mejora la accesibilidad y se actualiza el aspecto del baño con una inversión contenida.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[560px]">
                El plato de obra impermeabilizado en lámina y rematado con porcelánico antideslizante es nuestra solución estándar. La mampara la elegimos batiente o corredera según el ancho disponible: por debajo de 1,20 metros recomendamos batiente sin perfilería. En fincas con bajantes compartidos o tabiques de mampostería, ajustamos la solución para no comprometer estructura.
              </p>
              <p className="font-display font-semibold text-dark text-base">
                Si necesitas duplicar baño aprovechando un trastero, también lo estudiamos.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/bano-mampara-cristal-tarragona.webp"
                alt="Baño reformado con mampara de cristal en Tarragona"
                title="Baño reformado en piso clásico de Tarragona"
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Acabados que aplicamos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Qué incluye una reforma de baño en Tarragona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Plato de obra impermeabilizado", d: "Lámina anti-humedad sobre forjado, formación de pendiente y porcelánico antideslizante en formato grande." },
              { t: "Mampara y grifería", d: "Mampara fija o corredera, grifería empotrada o vista, termostática si es baño principal con uso intensivo." },
              { t: "Sustitución de bajante interior", d: "Si el bajante es de fundición, lo cambiamos por insonorizado de PE para reducir el ruido entre plantas en fincas urbanas." },
              { t: "Saneamientos y ventilación", d: "Inodoro suspendido o convencional según mecánica del muro. Extracción mecánica con detector de humedad." },
              { t: "Iluminación y mecanismos", d: "Tres luces: techo, espejo y ambiental. Mecanismos blancos o grafito según paleta del baño y del resto de la vivienda." },
              { t: "Accesibilidad mejorada", d: "Suelo continuo, mampara abatible, asideros discretos y plato a ras. Pensamos cada baño con horizonte de 20 años de uso." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas de baños en Tarragona</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: "¿Cuánto cuesta cambiar la bañera por ducha en Tarragona?", a: "El cambio simple sin tocar alicatado es la intervención más contenida. Si se reforma el baño completo (suelo, pared, mampara, sanitarios, grifería) la cifra varía según superficie y calidades. Cada proyecto se valora en visita técnica y la memoria detalla cada partida." },
              { q: "¿Cuántos días dura una reforma de baño?", a: "Un baño completo se entrega en 2-3 semanas si no afectamos a bajantes ni estructura. Cuando hay que sustituir bajante de fundición o intervenir en muros antiguos, el plazo se sitúa entre 3 y 4 semanas." },
              { q: "¿Hay que avisar a la comunidad?", a: "Si la obra toca exclusivamente al interior del baño y no se modifica el bajante, no hace falta autorización formal pero sí informar al administrador. Si tocamos bajante general, lo presentamos en junta para coordinar accesos a vecinos superiores." },
              { q: "¿Dejáis el baño en uso cada noche?", a: "Lo intentamos, pero hay fases en las que es imposible (rotura del antiguo plato, secado de impermeabilización, fragüe de cementos cola). Coordinamos con el cliente para que el segundo baño asuma esos días o, si no existe, organizamos calendario en función de viajes." },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma de baño</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[560px]">¿Cambiamos tu baño en Tarragona? Te visitamos, tomamos medidas y enviamos memoria valorada en 48 horas. Sin compromiso.</p>
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
