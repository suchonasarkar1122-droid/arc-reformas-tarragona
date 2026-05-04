import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  title: "Reformas de Locales en Tarragona · Diseño y obra",
  description:
    "Reforma de locales comerciales y despachos en Tarragona: Rambla Nova, Eixample, Part Alta y polígono. Tramitación de licencia, accesibilidad y eficiencia energética.",
  alternates: { canonical: "/servicios/reformas-locales" },
  openGraph: {
    title: "Reformas de Locales en Tarragona | ARC Reformas",
    description:
      "Acondicionamiento de locales en Tarragona con licencia, accesibilidad y diseño funcional.",
    url: "/servicios/reformas-locales",
    images: ["/images/local-comercial-eixample-tarragona.webp"],
  },
};

export default function ReformasLocalesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Reformas de Locales", url: "/servicios/reformas-locales" },
        ]}
      />
      <ServiceSchema
        name="Reformas de locales en Tarragona"
        description="Acondicionamiento y reforma de locales comerciales en Tarragona con tramitación de licencia y accesibilidad cumplida."
        url="/servicios/reformas-locales"
        image="/images/local-comercial-eixample-tarragona.webp"
      />

      <HeroService
        title="Reforma de locales comerciales en Tarragona: diseño y obra"
        subtitle="Acondicionamos locales en la Rambla Nova, calle Apodaca, plaça Corsini y zona de la Part Alta. También trabajamos para despachos profesionales que se trasladan al Eixample y necesitan un proyecto técnico cerrado."
        image="/images/local-comercial-eixample-tarragona.webp"
        imageAlt="Reforma de local comercial en Tarragona"
        imageTitle="Local comercial reformado en el Eixample tarraconense"
        h1Keyword="Reformas de locales en Tarragona"
        badge="Locales comerciales"
        showCTA
        trustItems={["Licencia tramitada", "Accesibilidad", "Calendario por fases"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Tipologías habituales</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Tipos de reformas de locales en Tarragona
              </h2>
              <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium">
                Locales que conocemos al detalle
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[560px]">
                Tarragona tiene tejido comercial muy diverso. La Rambla Nova concentra retail y oficinas, la Part Alta es zona de hostelería y comercio especializado, y el Eixample alberga clínicas, despachos y franquicias. Cada zona tiene normativa propia de fachada, accesibilidad y horarios.
              </p>
              <ul className="space-y-3 font-body text-subtitle text-[15px] leading-relaxed max-w-[560px]">
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Comercio retail:</b> apertura de escaparate, suelo continuo, cerramiento de almacén y zona de caja.</span></li>
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Despachos profesionales:</b> recepción, sala de juntas insonorizada, despachos individuales con luz natural y zona de espera.</span></li>
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Hostelería ligera:</b> cafeterías, panaderías y comercios de alimentación con campana, salida de humos y aseo accesible.</span></li>
                <li className="flex gap-3"><span className="font-display font-bold text-dark">·</span><span><b className="text-dark">Clínicas y centros estéticos:</b> separación entre zona pública y técnica, suelos vinílicos sanitarios, aire renovado.</span></li>
              </ul>
              <p className="font-display font-semibold text-dark text-base">
                La licencia y los planos los tramitamos nosotros para que puedas centrarte en tu negocio.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/local-part-alta-tarragona.webp"
                alt="Local reformado en la Part Alta de Tarragona"
                title="Local comercial en la Part Alta"
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Qué incluye una reforma de local</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-white leading-[1.05]">Qué incluye una reforma de local en Tarragona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Licencia y proyecto técnico", d: "Memoria, planos visados y trámites ante el Ayuntamiento de Tarragona. Coordinación con la Generalitat si hay actividad regulada." },
              { t: "Accesibilidad cumplida", d: "Acceso a ras de calle, aseo accesible y mostrador con altura adaptada. Cumplimos el código de accesibilidad de Cataluña." },
              { t: "Instalaciones nuevas", d: "Eléctrica con boletín, contador específico, climatización por inverter, alarma de incendios y red de datos." },
              { t: "Suelo y revestimientos", d: "Microcemento o porcelánico técnico para tránsito intenso. Paramentos en pintura lavable o paneles acústicos según uso." },
              { t: "Imagen de marca", d: "Rotulación exterior coordinada con la corporativa, escaparate con vinilos cortados o impresos, iluminación de fachada cumpliendo normativa." },
              { t: "Calendario por fases", d: "Si necesitas seguir abriendo durante parte de la obra, organizamos por sectores y horarios. Coordinación con vecinos si hay molestias previsibles." },
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
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">Preguntas frecuentes sobre reformas de locales en Tarragona</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { q: "¿Cuánto tarda reformar un local en Tarragona?", a: "Un local pequeño-medio (40-90 m²) con licencia ya concedida se entrega en 6-10 semanas. La obtención de licencia depende de la actividad: actividades inocuas pueden estar en 4-6 semanas, mientras que las clasificadas exigen 2-3 meses. Lo planificamos en paralelo siempre que se pueda." },
              { q: "¿Os encargáis también del proyecto técnico?", a: "Sí. Trabajamos con arquitectos y ingenieros colegiados para emitir el proyecto visado, certificados de instalaciones y comunicaciones previas o licencias según marque la ordenanza municipal de Tarragona." },
              { q: "¿Es necesario adaptar el local a accesibilidad?", a: "Sí, en la mayoría de casos. La normativa catalana exige acceso a ras (o rampa con pendiente máxima), aseo adaptado y radio de giro de 1,50 m en zonas de público. Si la finca antigua tiene impedimentos físicos, se puede solicitar exención justificada." },
              { q: "¿Atendéis también locales en Reus, Salou o Vila-seca?", a: "Sí. La proximidad nos permite trabajar en toda la conurbación sin coste de desplazamiento añadido. Para reformas en Reus capital, Salou centre o La Pineda, los plazos son los mismos que para Tarragona ciudad." },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma de local</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[560px]">¿Reformamos tu local en Tarragona? Te visitamos, hacemos levantamiento y entregamos memoria valorada con tramitación de licencia incluida.</p>
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
