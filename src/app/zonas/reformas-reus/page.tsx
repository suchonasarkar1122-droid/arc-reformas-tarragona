import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Reus · Empresa de confianza desde Tarragona",
  description:
    "Reformas en Reus capital del Baix Camp. Trabajamos en pisos del centro modernista, ensanche y Mas Iglesias para clientes que prefieren empresa con sede en la capital tarraconense.",
  alternates: { canonical: "/zonas/reformas-reus" },
  openGraph: {
    title: "Reformas en Reus | ARC Reformas Tarragona",
    description: "Reformas integrales y por estancias en Reus, con plantilla propia desde Tarragona.",
    url: "/zonas/reformas-reus",
    images: ["/images/vivienda-reformada-centro-tarragona.webp"],
  },
};

const faqs = [
  {
    q: "¿Cuánto cuesta una reforma integral en un piso del centro de Reus?",
    a: "Para un piso modernista de 90 m² del centro de Reus, con cocina, dos baños y suelos completos, el rango habitual va de 38.000 € a 55.000 €. Si la finca es Bé Cultural d'Interès Local hay que sumar 8-12% por trámites con patrimonio. Te enviamos memoria valorada por partidas tras la visita.",
  },
  {
    q: "¿Por qué contratar a una empresa de Tarragona para una obra en Reus?",
    a: "La distancia entre las dos capitales son veinte minutos. Para clientes que se mueven entre ambas ciudades —por trabajo, familia o segunda residencia— resulta cómodo tener un equipo radicado en la capital de la provincia. La obra avanza igual y la coordinación es la misma que si la finca estuviese en el Eixample tarraconense.",
  },
  {
    q: "¿Tenéis experiencia con fincas modernistas?",
    a: "Sí. El centro de Reus tiene un patrimonio modernista importante, con elementos como esgrafiados, vitrales emplomados, pavimento hidráulico y forjados de bovedilla. Hemos intervenido en varias fincas conservando lo que tiene valor y modernizando solo las instalaciones obsoletas. Trabajamos siempre dentro del marco normativo del Ayuntamiento de Reus.",
  },
];

export default function ZonaReusPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en Reus", url: "/zonas/reformas-reus" },
        ]}
      />
      <HeroService
        title="Reformas en Reus — Empresa con sede en Tarragona capital"
        h1Keyword="Reformas en Reus"
        subtitle="Capital del Baix Camp, separada de Tarragona por veinte minutos de C-14. Trabajamos en pisos del centro modernista, fincas del ensanche y bloques de Mas Iglesias para propietarios que valoran un equipo radicado en la capital provincial."
        image="/images/hero-reforma-tarragona-clasica.webp"
        imageAlt="Reformas en Reus desde Tarragona"
        badge="Reus · Baix Camp"
        showCTA
        trustItems={["Centro modernista", "Ensanche", "Mas Iglesias"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] flex flex-col gap-8">
          <div>
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Sobre nuestra cobertura en Reus</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-4">Reformas en Reus desde Tarragona capital</h2>
            <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium mb-4">Treinta minutos a tu finca, sin coste de desplazamiento</p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              Reus tiene más de 100.000 habitantes y un parque de viviendas variado: el casco antiguo conserva fincas modernistas catalogadas, el ensanche del XIX-XX combina edificios de tres y cuatro plantas, y la zona Mas Iglesias y Mas Pellicer reúne los bloques residenciales más recientes. Cada barrio plantea soluciones técnicas distintas.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              Nuestra base operativa está en el Eixample tarraconense, en la calle Reina Maria Cristina. La distancia con Reus es de unos veinte minutos por la C-14, lo que nos permite intervenir sin cargar coste de desplazamiento al cliente. Si surge una incidencia en obra, podemos estar al día siguiente.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px]">
              Atendemos sobre todo a clientes que se mueven entre Reus y Tarragona —familias con casa en una y trabajo en otra, propietarios que han heredado un piso o profesionales que abren consulta en Reus pero residen en la capital. La cercanía simplifica la logística y mantiene el contacto técnico fluido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Centre i Mas Iglesias", d: "Pisos modernistas con elementos protegidos y bloques de los 80 con bajantes a sustituir." },
              { t: "Ensanche del XIX", d: "Fincas de tres-cuatro plantas con techos altos, suelos hidráulicos y necesidad de actualización eléctrica completa." },
              { t: "Mas Pellicer y entorno", d: "Bloques modernos donde se busca abrir cocina al salón y mejorar climatización." },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Servicios de reformas en Reus</h2>
        </div>
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Reformas Integrales", desc: "Llave en mano para pisos modernistas o fincas del ensanche reusense.", href: "/servicios/reformas-integrales" },
            { title: "Reformas de Cocinas", desc: "Apertura al comedor, encimera porcelánica y galerías reabiertas.", href: "/servicios/reformas-cocinas" },
            { title: "Reformas de Baños", desc: "Plato de obra, mampara a medida y reordenación accesible.", href: "/servicios/reformas-banos" },
            { title: "Reformas de Pisos", desc: "Renovación completa para pisos heredados o segunda residencia.", href: "/servicios/reformas-pisos" },
            { title: "Reformas de Locales", desc: "Acondicionamiento de comercio y despacho con tramitación de licencia.", href: "/servicios/reformas-locales" },
            { title: "Visita técnica gratis", desc: "Visita a la finca, levantamiento y memoria valorada en 48 horas.", href: "/contacto" },
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Reus</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma en Reus</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">¿Tu obra está en Reus? Visita técnica sin coste, memoria valorada en 48 horas y plantilla propia desde Tarragona capital.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors">
            Solicita valoración <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
