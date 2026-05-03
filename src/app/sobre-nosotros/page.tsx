import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Sobre Nosotros · Empresa de reformas en Tarragona",
  description:
    "ARC Reformas Tarragona: equipo técnico especializado en pisos del Eixample, fincas catalogadas de la Part Alta y bloques residenciales del Tarragonès. Memoria documentada y plantilla propia.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros · ARC Reformas Tarragona",
    description:
      "Empresa de reformas en Tarragona con experiencia en edificios del centro histórico, comunidades de propietarios y pisos racionalistas del Eixample.",
    url: "/sobre-nosotros",
    images: ["/images/equipo-tecnico-visita-finca-tarragona.webp"],
  },
};

const principios = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Trabajo trazable",
    description:
      "Cada partida se documenta. Memoria con planos a escala, fichas técnicas, boletines, registro fotográfico del avance y, al cerrar, un dossier que el propietario conserva. Si más adelante vendes el piso o presentas algún trámite ante el Ayuntamiento de Tarragona, todo lo ejecutado queda demostrable.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Oficio aplicado al patrimonio",
    description:
      "Una parte considerable de nuestras intervenciones son en fincas anteriores a 1960, en muchos casos sobre vestigios romanos del recinto antiguo. Hemos tratado con muros de mampostería, falsos techos con frescos, vigas centenarias y bajantes compartidos. Sabemos cuándo conservar y cuándo sustituir sin perder identidad.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Calendario realista",
    description:
      "Marcamos hitos por semanas y los cumplimos. Si una autorización de patrimonio tarda o un material tiene plazo de fabricación, lo avisamos antes y reordenamos el cronograma. Nada de prometer fechas que se incumplen.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Materiales sobrios y duraderos",
    description:
      "En una ciudad atemporal, las modas pasajeras no encajan. Trabajamos con porcelánico rectificado, aluminios mates con rotura de puente térmico, carpintería en roble o nogal, piedra natural local. Acabados que envejecen bien y mantienen el carácter de la finca.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Sobre Nosotros", url: "/sobre-nosotros" }]} />
      {/* ============ HERO ============ */}
      <HeroService
        title="Una empresa formal para reformar dentro de Tarragona"
        h1Keyword="Sobre ARC Reformas Tarragona"
        subtitle="Más de quince años trabajando en pisos del Eixample, fincas catalogadas de la Part Alta y bloques modernos de Sant Pere i Sant Pau. Equipo en plantilla, criterio técnico y memoria escrita en cada proyecto."
        image="/images/equipo-tecnico-visita-finca-tarragona.webp"
        imageAlt="Equipo de ARC Reformas en visita técnica a finca de Tarragona"
        badge="ARC Reformas Tarragona"
        showCTA
      />

      {/* ============ STORY ============ */}
      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Nuestra historia
              </p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">
                Empresa de reformas en Tarragona desde hace más de 15 años
              </h2>
              <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium">
                De aparejadores con sede en la Reina Maria Cristina
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed">
                ARC arrancó hace más de quince años en una ciudad con dos mil de historia. La primera obra fue un piso del Eixample con galería cerrada y bajante de fundición; la última, una vivienda dentro del recinto romano con servidumbres arqueológicas. Entre medias, más de cuarenta comunidades de propietarios, decenas de fincas de Sant Pere i Sant Pau y obras puntuales en Reus, Salou y Vila-seca.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                La sede en la calle Reina Maria Cristina no es casual. Estar en pleno Eixample nos permite acudir a cualquier finca del centro histórico o de la zona moderna en pocos minutos. La proximidad cuenta cuando un imprevisto en obra exige decidir sobre el terreno.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                No subcontratamos los oficios principales. La plantilla incluye albañilería, fontanería, electricidad y carpintería en personal propio, con varios años de rodaje en común. En una ciudad donde la mayoría de las fincas tienen rasgos de protección o particularidades constructivas, esa continuidad técnica es lo que separa una obra ordenada de una llena de incidencias.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Trabajamos con propietarios particulares, comunidades, despachos profesionales que renuevan local y, cada vez con más frecuencia, con familias que heredan un piso en el centro y deciden adecuarlo en lugar de venderlo.
              </p>
              <CTAButtons />
            </div>

            <div className="flex-1 relative min-h-[420px] lg:min-h-[600px] w-full rounded-[20px] overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/interior-reformado-clasico-tarragona.webp"
                alt="Reforma de vivienda clásica en finca del Eixample tarraconense"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Cuatro criterios que aplicamos
            </p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05] mb-5">
              Por qué elegir ARC Reformas Tarragona
            </h2>
            <p className="font-body text-white/55 text-base max-w-[560px] mx-auto">
              Así entendemos una reforma: cada decisión técnica responde a estas cuatro premisas. Si un cliente pide algo que las contradice, lo discutimos antes de firmar contrato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principios.map((v) => (
              <div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-4 hover:border-accent/40 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg">
                  {v.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Quién interviene en tu reforma
            </p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05] mb-5">
              Equipo técnico de reformas en Tarragona
            </h2>
            <p className="font-body text-subtitle text-base max-w-[600px] mx-auto">
              Tres figuras, un único responsable. En cada obra tienes asignado un técnico de obra que es tu interlocutor único. No tendrás que repetir el contexto con cada gremio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dirección técnica",
                role: "Memoria, planos y trámites",
                desc: "Levanta el estado actual de la finca, redacta la memoria valorada y tramita ante el Ayuntamiento de Tarragona y, si procede, el Servei de Patrimoni de la Generalitat. Acompaña al propietario en las juntas de comunidad cuando hay afecciones a elementos comunes.",
              },
              {
                name: "Equipo de obra",
                role: "Albañilería, instalaciones, carpintería",
                desc: "Plantilla propia con experiencia en muros antiguos, bajantes de fundición, vigas centenarias y bóvedas. Se desplazan en grupos pequeños para mantener orden y minimizar molestias en comunidades del Eixample y la Part Alta.",
              },
              {
                name: "Acabados y coordinación",
                role: "Materiales, instalaciones especiales",
                desc: "Selecciona pavimentos, revestimientos, carpintería interior y luminaria. Coordina con el cliente las decisiones que se ejecutan en la última fase y revisa estancia por estancia antes de la entrega.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[16px] p-8 border border-dark/5 flex flex-col gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-dark text-lg">
                  {member.name}
                </h3>
                <p className="font-body text-accent text-sm font-semibold">
                  {member.role}
                </p>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">
            Solicita presupuesto para tu reforma
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-[560px]">
            ¿Hablamos de tu finca? Visitamos tu vivienda en Tarragona, levantamos planos, te explicamos qué intervenciones son viables y, si todo encaja, te enviamos memoria valorada en menos de una semana. Sin coste y sin compromiso.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors"
            >
              Pedir visita técnica
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+34877278165"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-display font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              877 278 165
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
