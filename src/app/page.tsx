import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import CTAButtons from "@/components/CTAButtons";
import TestimonialCard from "@/components/TestimonialCard";
import TickerBand from "@/components/TickerBand";
import HeroForm from "@/components/HeroForm";

const AnimatedCounter = dynamic(() => import("@/components/AnimatedCounter"));
const ProcessCard = dynamic(() => import("@/components/ProcessCard"));
const CTAForm = dynamic(() => import("@/components/CTAForm"));

const services = [
  {
    title: "Reformas Integrales",
    href: "/servicios/reformas-integrales",
    image: "/images/vivienda-reformada-centro-tarragona.webp",
    alt: "Reforma integral de vivienda en Tarragona",
  },
  {
    title: "Reformas de Cocinas",
    href: "/servicios/reformas-cocinas",
    image: "/images/cocina-piso-eixample-tarragona.webp",
    alt: "Reforma de cocina en piso del Eixample de Tarragona",
  },
  {
    title: "Reformas de Baños",
    href: "/servicios/reformas-banos",
    image: "/images/bano-piso-eixample-tarragona.webp",
    alt: "Reforma de baño en piso de Tarragona",
  },
  {
    title: "Reformas de Pisos",
    href: "/servicios/reformas-pisos",
    image: "/images/piso-reformado-eixample-tarragona.webp",
    alt: "Reforma de piso en el Eixample de Tarragona",
  },
  {
    title: "Reformas de Locales",
    href: "/servicios/reformas-locales",
    image: "/images/local-comercial-eixample-tarragona.webp",
    alt: "Reforma de local comercial en Tarragona",
  },
];

const testimonials = [
  {
    name: "Anna Roca",
    role: "Propietaria en el Eixample",
    quote: "Reformaron un piso de 1972 en la Rambla Nova respetando los frescos del techo y abriendo la cocina al comedor. Trato cuidado, plazos cumplidos y una memoria detallada de todo lo ejecutado.",
  },
  {
    name: "Marc Solé",
    role: "Comunidad de propietarios — Part Alta",
    quote: "Trabajan con la sensibilidad que un edificio catalogado de la Part Alta necesita. Documentación al día con patrimonio y un equipo que entiende de muros antiguos, no solo de yeso laminado.",
  },
  {
    name: "Laia Bertran",
    role: "Vivienda en Sant Pere i Sant Pau",
    quote: "Renovamos cocina, dos baños y la galería. Nos guiaron sin presionar y el coste pactado al inicio fue exactamente el final. Recomendable si buscas una empresa formal en la ciudad.",
  },
];

const processSteps = [
  {
    title: "Visita técnica a la finca",
    description: "Acudimos a tu vivienda en Tarragona, evaluamos el estado del edificio, instalaciones y elementos comunes, y te explicamos sobre el terreno qué intervenciones son viables. Sin cargo.",
    image: "/images/equipo-tecnico-visita-finca-tarragona.webp",
  },
  {
    title: "Memoria valorada y propuesta",
    description: "Recibes una memoria escrita con planos, fichas de materiales, partidas detalladas y plazos por fases. Si tu edificio está catalogado, incluimos los trámites con patrimonio.",
    image: "/images/estudio-presupuesto-tarragona.webp",
  },
  {
    title: "Obra coordinada por un único responsable",
    description: "Demolición, instalaciones y carpintería las ejecuta plantilla propia. Un técnico de obra te mantiene informado del avance y resuelve dudas con la comunidad de vecinos.",
    image: "/images/ejecucion-obra-edificio-protegido-tarragona.webp",
    objectPosition: "center 60%",
  },
  {
    title: "Entrega con documentación completa",
    description: "Te devolvemos la vivienda revisada estancia por estancia, con boletines eléctricos, fichas técnicas y una garantía firmada sobre materiales y mano de obra.",
    image: "/images/entrega-acabados-cuidados-tarragona.webp",
  },
];

const galleryImages = [
  { src: "/images/cocina-galeria-reabierta-tarragona.webp", caption: "Cocina con galería reabierta", alt: "Cocina de piso del Eixample con galería reabierta en Tarragona" },
  { src: "/images/bano-mampara-cristal-tarragona.webp", caption: "Baño con plato de obra", alt: "Baño reformado con mampara de cristal en piso de Tarragona" },
  { src: "/images/salon-piso-historico-tarragona.webp", caption: "Salón en finca clásica", alt: "Salón reformado en finca histórica de Tarragona" },
  { src: "/images/cocina-renovada-piso-clasico-tarragona.webp", caption: "Cocina abierta al comedor", alt: "Cocina abierta tras reforma de piso clásico en Tarragona" },
  { src: "/images/dormitorio-piso-clasico-tarragona.webp", caption: "Dormitorio sobrio y luminoso", alt: "Dormitorio reformado en piso del Eixample tarraconense" },
  { src: "/images/interior-reformado-clasico-tarragona.webp", caption: "Vivienda en finca de los 60", alt: "Interior reformado en finca de los años 60 en Tarragona" },
];

const faqs = [
  {
    q: "¿Trabajáis en edificios catalogados de la Part Alta?",
    a: "Sí. Una parte importante de nuestra actividad es intervenir en fincas con protección patrimonial dentro del recinto romano. Tramitamos los informes con el Servei de Patrimoni y respetamos vigas, dovelas y muros de mampostería. La obra se ajusta a la ordenanza municipal y a los criterios de la Generalitat.",
  },
  {
    q: "¿Cuánto suele tardar reformar un piso del Eixample tarraconense?",
    a: "En un piso de los años 60-80 de entre 80 y 100 m² la obra completa se mueve entre 9 y 13 semanas. Los pisos con galerías cerradas que se quieren reabrir o con bajantes compartidas requieren coordinación con la comunidad y suelen sumar dos semanas. Te damos un calendario por fases en la primera memoria.",
  },
  {
    q: "¿Cómo gestionáis las comunidades de propietarios?",
    a: "Asistimos a la junta si hace falta, presentamos un escrito formal con afecciones a elementos comunes (bajantes, fachada, patio interior) y mantenemos al administrador informado de cada hito. La obra se planifica para minimizar molestias en horarios y accesos.",
  },
  {
    q: "¿Atendéis en Reus, Vila-seca, Salou, La Canonja y Constantí?",
    a: "Sí. Cubrimos toda la conurbación de Tarragona y el Tarragonès con el mismo equipo. La proximidad nos permite resolver imprevistos sin cargar costes de desplazamiento al cliente. Para obras en La Pineda, Salou centro o Reus capital la respuesta es inmediata.",
  },
  {
    q: "¿Incluye la oferta la gestión de licencias y la limpieza final?",
    a: "Las dos están dentro del coste pactado. Nos ocupamos de la comunicación previa o la licencia de obra mayor en el Ayuntamiento de Tarragona, alquilamos el contenedor de obra y al finalizar dejamos el piso con limpieza fina, libre de restos y polvo de obra hasta en cajones y cristales.",
  },
];

const pricingTiers = [
  {
    name: "Reforma puntual",
    desc: "Cocina o baño en piso del Eixample. Acabados estándar, instalación básica revisada.",
    price: "desde 420 €/m²",
    items: [
      "Demolición y retirada",
      "Fontanería y eléctrica revisadas",
      "Pavimento y alicatado",
      "Mobiliario de gama media",
      "Limpieza profesional al entregar",
    ],
  },
  {
    name: "Reforma media",
    desc: "Vivienda completa de 70-100 m². Apertura de cocina, dos baños y carpintería renovada.",
    price: "desde 520 €/m²",
    items: [
      "Memoria con planos a escala",
      "Instalaciones nuevas con boletín",
      "Carpintería interior y exterior",
      "Aislamiento térmico mejorado",
      "Coordinación con la comunidad",
    ],
    featured: true,
  },
  {
    name: "Reforma integral",
    desc: "Finca catalogada, piso histórico o vivienda de gran superficie con servidumbres.",
    price: "desde 640 €/m²",
    items: [
      "Trámites con patrimonio",
      "Refuerzo estructural si procede",
      "Materiales nobles seleccionados",
      "Domótica e iluminación a medida",
      "Garantía documentada extendida",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-dark">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-reforma-tarragona-clasica.webp"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14 pt-32 pb-20 lg:pt-36 lg:pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-screen">
          {/* Left - copy */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-accent" />
              <span className="font-body text-accent text-[11px] uppercase tracking-[0.3em] font-bold">Empresa de reformas en Tarragona</span>
            </div>

            <p className="font-body text-accent text-sm md:text-base uppercase tracking-[0.2em] font-semibold mb-2">Tu reforma en Tarragona</p>

            <h1 className="font-display font-extrabold text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[104px] text-white leading-[1] tracking-tight mb-6">
              Reformas <span className="text-accent">Tarragona</span>
            </h1>

            <p className="font-body text-white/55 text-[15px] max-w-[440px] leading-[1.7] mb-6">
              Trabajamos en edificios protegidos de la Part Alta, pisos del Eixample con galerías a reabrir y fincas modernas de Sant Pere i Sant Pau. Materiales sobrios, ejecución técnica y respeto por el carácter de cada finca.
            </p>

            <div className="mb-8">
              <span className="inline-block bg-accent/[0.12] text-accent font-body font-semibold text-[13px] px-5 py-2.5 rounded-lg border border-accent/20">
                Coste pactado &middot; Plantilla propia &middot; Memoria documentada
              </span>
            </div>

            <a
              href="tel:+34877278109"
              className="inline-flex items-center gap-2.5 border-2 border-white/20 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-all duration-300 w-fit mb-8"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              877 278 109
            </a>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/40 text-[11px] font-body uppercase tracking-[0.15em]">
              <span>Coste pactado</span>
              <span className="w-px h-3 bg-white/10" />
              <span>+140 obras entregadas</span>
              <span className="w-px h-3 bg-white/10" />
              <span>Equipo en plantilla</span>
              <span className="w-px h-3 bg-white/10" />
              <span>Garantía firmada</span>
            </div>
          </div>

          {/* Right - form */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <HeroForm />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-20" />
      </section>

      {/* ============ TICKER ============ */}
      <TickerBand
        items={["pisos del Eixample", "Part Alta · edificios catalogados", "comunidades de propietarios", "obras llave en mano", "Tarragonès", "trabajo documentado"]}
        bgColor="bg-accent"
        textColor="text-white"
        direction="right"
        size="small"
      />

      {/* ============ SERVICES ============ */}
      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Lo que hacemos</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] lg:text-[64px] text-dark leading-[1.05] mb-5">
              Servicios de reformas en Tarragona
            </h2>
            <p className="font-body text-subtitle text-lg max-w-[600px] mx-auto">
              Reformas integrales, cocinas, baños, pisos y locales pensadas para una ciudad histórica: desde edificios sobre vestigios romanos hasta pisos racionalistas del Eixample. Nos adaptamos a lo que la finca exige, sin atajos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-[24px] overflow-hidden min-h-[280px] md:min-h-[480px] flex flex-col justify-end"
              >
                <Image src={service.image} alt={service.alt} title={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-accent/80 group-hover:via-accent/20 transition-all duration-500" />
                <div className="relative z-10 p-7 md:p-8">
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white leading-[1.1] inline-flex items-center gap-3">
                    {service.title}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.slice(3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-[24px] overflow-hidden min-h-[280px] md:min-h-[320px] flex flex-col justify-end"
              >
                <Image src={service.image} alt={service.alt} title={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-accent/80 group-hover:via-accent/20 transition-all duration-500" />
                <div className="relative z-10 p-6 md:p-7">
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-white leading-[1.1] inline-flex items-center gap-3">
                    {service.title}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST ============ */}
      <section className="bg-beige py-20 md:py-28 px-5 overflow-hidden">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Por qué ARC Reformas</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[52px] lg:text-[64px] text-dark leading-[1.05] mb-5">
              Por qué elegir ARC Reformas Tarragona
            </h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[620px] mx-auto">
              Una empresa formal, hecha para la ciudad. Reformar dentro de Tarragona implica trabajar con comunidades de vecinos, normativas urbanas y, a menudo, fincas con hallazgos arqueológicos. Nuestro método está pensado para que el propietario no tenga que aprenderse esa burocracia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-dark/10 rounded-2xl p-8 flex gap-5 items-start hover:border-accent/40 transition-colors duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-dark text-lg mb-2">Memoria valorada por partidas</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Trabajamos con presupuesto detallado por partidas. Si surge un imprevisto técnico durante la obra (humedades antiguas, instalaciones obsoletas), te lo comunicamos antes de actuar y lo valoramos contigo.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/10 rounded-2xl p-8 flex gap-5 items-start hover:border-accent/40 transition-colors duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-dark text-lg mb-2">Plazos firmes y comunicados</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Trabajamos por hitos y te mantenemos informado del avance de la obra de forma regular. Si una pieza tiene plazo largo de fabricación o el ayuntamiento tarda en una autorización, lo sabes con tiempo suficiente.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/10 rounded-2xl p-8 flex gap-5 items-start hover:border-accent/40 transition-colors duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-dark text-lg mb-2">Equipo en plantilla, sin intermediarios</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Operarios propios de cada oficio (albañilería, fontanería, electricidad y carpintería) con varios años de rodaje conjunto. En una finca catalogada o en un piso de comunidad pequeña, esa coordinación interna marca la diferencia entre una obra limpia y una llena de roces.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/10 rounded-2xl p-8 flex gap-5 items-start hover:border-accent/40 transition-colors duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8612A" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.73 0 3.35.49 4.72 1.33" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-dark text-lg mb-2">Documentación al detalle</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Memoria con planos, fichas de materiales, boletines eléctricos y de gas, contrato con calendario y garantía firmada. Si vendes el piso en 5 años, todo lo ejecutado queda trazable.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>

      {/* ============ METRICS ============ */}
      <section className="bg-accent py-10 px-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <AnimatedCounter end={140} prefix="+" label="Obras entregadas" />
            <AnimatedCounter end={16} prefix="+" label="Años en la ciudad" />
            <AnimatedCounter end={5} prefix="" suffix="" label="Líneas de servicio" />
            <AnimatedCounter end={6} prefix="+" suffix="" label="Municipios atendidos" />
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-beige py-12 md:py-16 px-5">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-black/10">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-sm uppercase text-accent tracking-wide">Testimonios</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[40px] lg:text-[56px] text-dark leading-[1.1] tracking-[0.01em]">
                Opiniones de clientes en Tarragona
              </h2>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Propietarios y comunidades de vecinos que confiaron en ARC Reformas Tarragona para obras en el Eixample, la Part Alta y el Tarragonès.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-subtitle">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E8612A">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-body">Trabajos en Tarragona y Tarragonès</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS — VERTICAL TIMELINE ============ */}
      <section className="bg-beige-warm pt-16 px-5 pb-24 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-[1100px] flex flex-col items-center gap-14">
          <div className="text-center max-w-[760px]">
            <p className="font-bold text-sm uppercase text-accent mb-4 tracking-[0.15em]">Cómo trabajamos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[60px] text-dark mb-5 leading-[1.05] tracking-[0.01em]">
              Nuestro proceso de reforma paso a paso
            </h2>
            <p className="text-subtitle text-base font-medium">Cuatro fases con un único responsable. Un proceso ordenado, pensado para fincas urbanas con comunidades, normativa de patrimonio y vecinos a los que respetar.</p>
          </div>

          <div className="max-w-2xl mx-auto w-full">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-4 md:gap-6 relative">
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[1.4rem] top-12 w-px bg-accent/20 h-full" aria-hidden="true" />
                )}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white font-display font-bold text-lg flex items-center justify-center z-10 shadow-lg shadow-accent/20">
                  {i + 1}
                </div>
                <div className="pb-10 md:pb-12 flex-1 min-w-0">
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2 text-dark leading-tight">{step.title}</h3>
                  <p className="font-body text-subtitle text-[15px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <TickerBand
        items={["Rambla Nova", "Part Alta", "Eixample", "Sant Pere i Sant Pau", "Tarragonès", "obra documentada"]}
        bgColor="bg-accent"
        textColor="text-white"
        direction="right"
        size="small"
      />

      {/* ============ ZONES ============ */}
      <section className="bg-beige py-16 md:py-20 px-5">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-bold text-sm uppercase text-accent mb-4 tracking-wide">Zonas de servicio</p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05] mb-8">
            Reformas en Tarragona y municipios del Tarragonès
          </h2>
          <p className="font-body text-subtitle max-w-[640px] mx-auto mb-8 leading-relaxed">
            La sede está en el corazón del Eixample, en la calle Reina Maria Cristina. Atendemos también clientes con segunda vivienda o piso heredado en los municipios de la conurbación.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Reus", slug: "reformas-reus" },
              { name: "Vila-seca", slug: "reformas-vila-seca" },
              { name: "Salou", slug: "reformas-salou" },
              { name: "La Canonja", slug: "reformas-la-canonja" },
              { name: "Constantí", slug: "reformas-constanti" },
            ].map((zone) => (
              <Link
                key={zone.slug}
                href={`/zonas/${zone.slug}`}
                className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full font-display font-semibold text-dark text-sm border border-dark/10 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Reformas en {zone.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="bg-beige py-20 md:py-28 px-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Rangos orientativos</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-dark leading-[1.05] mb-5">
              Cuánto cuesta una reforma en Tarragona
            </h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[620px] mx-auto">
              Tres formatos, tres niveles de inversión orientados a proyectos cerrados en la ciudad. Cada finca es distinta: un piso del Eixample con galería no requiere lo mismo que una vivienda dentro del recinto romano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col gap-5 border ${tier.featured ? "bg-dark text-white border-accent" : "bg-white text-dark border-dark/10"}`}
              >
                <div>
                  <p className={`font-body uppercase tracking-[0.18em] text-xs font-bold mb-2 ${tier.featured ? "text-accent" : "text-accent"}`}>{tier.name}</p>
                  <p className={`font-display text-2xl font-bold leading-[1.2] ${tier.featured ? "text-white" : "text-dark"}`}>{tier.price}</p>
                </div>
                <p className={`text-sm leading-relaxed ${tier.featured ? "text-white/70" : "text-subtitle"}`}>{tier.desc}</p>
                <ul className={`flex flex-col gap-2 text-sm ${tier.featured ? "text-white/80" : "text-subtitle"}`}>
                  {tier.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={`mt-1 flex-shrink-0 ${tier.featured ? "text-accent" : "text-accent"}`}>
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors ${tier.featured ? "bg-accent text-white hover:bg-accent-light" : "bg-dark text-white hover:bg-accent"}`}
                >
                  Pedir valoración
                </Link>
              </div>
            ))}
          </div>
          <p className="font-body text-subtitle text-xs text-center max-w-[640px] mx-auto mt-10 leading-relaxed">
            Cifras orientativas. Cada proyecto se valora en visita técnica. Las partidas detalladas incluyen mano de obra, materiales de gama media y limpieza final; excluyen mobiliario y electrodomésticos.
          </p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-beige px-5 pb-20">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-12">
            <p className="font-bold text-sm uppercase text-accent mb-4 tracking-wide">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">
              Preguntas frecuentes sobre reformas en Tarragona
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(f => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="bg-beige px-5 pb-12">
        <div className="mx-auto max-w-[1400px] rounded-[10px] overflow-hidden relative">
          <Image
            src="/images/demolicion-controlada-edificio-tarragona.webp"
            alt="Obra de reforma en marcha en Tarragona"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="relative z-10 px-4 py-16 md:px-8 md:py-20">
            <div className="max-w-[684px] bg-accent rounded-[10px] px-6 py-10 md:px-8 md:py-12 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg uppercase text-white">
                  Valoración sin coste
                </p>
                <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[56px] text-white leading-[1.1] tracking-[0.01em]">
                  Solicita presupuesto para tu reforma en Tarragona
                </h2>
                <p className="text-white/90 text-[17px] leading-relaxed">
                  ¿Empezamos a estudiar tu finca? Cuéntanos en qué edificio está, su año aproximado y qué te gustaría priorizar. En 24 horas laborables tendrás un primer enfoque y un calendario realista de visita técnica.
                </p>
                <div className="flex flex-col gap-2 text-beige text-sm mt-2">
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Memoria valorada en 24-48 horas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    <span>Plantilla propia desde la primera visita</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Garantía documentada por escrito</span>
                  </div>
                </div>
              </div>

              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
