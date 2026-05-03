import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en La Canonja · Visitas frecuentes desde Tarragona",
  description:
    "Reformas en La Canonja centre y Mas dels Frares. Sede en Tarragona ciudad: por proximidad podemos visitar la obra varias veces por semana sin coste extra.",
  alternates: { canonical: "/zonas/reformas-la-canonja" },
  openGraph: {
    title: "Reformas en La Canonja | ARC Reformas Tarragona",
    description: "Reformas en La Canonja con seguimiento técnico cercano desde Tarragona.",
    url: "/zonas/reformas-la-canonja",
    images: ["/images/vivienda-reformada-centro-tarragona.webp"],
  },
};

const faqs = [
  {
    q: "¿Qué tipos de vivienda predominan en La Canonja?",
    a: "La Canonja combina casas de pueblo de dos plantas en el centro histórico con bloques residenciales de los años 70-90 en la zona de expansión y unifamiliares modernas en Mas dels Frares. La intervención típica varía mucho según la tipología: en casa de pueblo se trabaja con estructura antigua, en bloque residencial con bajantes comunitarios.",
  },
  {
    q: "¿Por qué es ventajosa la cercanía con Tarragona ciudad?",
    a: "La Canonja está pegada a Tarragona, separadas por el polígono Riu Clar y diez minutos de coche. Eso nos permite visitar la obra dos o tres veces por semana sin cargar coste de desplazamiento. Las decisiones que en obras alejadas se toman por foto, aquí podemos resolverlas en persona el mismo día.",
  },
  {
    q: "¿Trabajáis con casas de pueblo del centro de La Canonja?",
    a: "Sí. Las casas de pueblo del nucli antic suelen tener estructura de bovedilla cerámica, vigas de madera y muros de mampostería. Respetamos lo que tiene valor estructural y estético, modernizamos solo las instalaciones (eléctrica, fontanería, telecomunicaciones) y, si hace falta refuerzo de forjado, lo proyectamos con técnico especializado.",
  },
];

export default function ZonaLaCanonjaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Zonas", url: "/zonas" },
          { name: "Reformas en La Canonja", url: "/zonas/reformas-la-canonja" },
        ]}
      />
      <HeroService
        title="Reformas en La Canonja — Pegada a Tarragona, atención inmediata"
        h1Keyword="Reformas en La Canonja"
        subtitle="A diez minutos del Eixample tarraconense. La proximidad nos permite intervenir con frecuencia sin sumar logística al presupuesto, lo que se nota en la calidad del seguimiento de obra."
        image="/images/hero-reforma-tarragona-clasica.webp"
        imageAlt="Reformas en La Canonja"
        badge="La Canonja · Tarragonès"
        showCTA
        trustItems={["La Canonja centre", "Mas dels Frares", "Atención cercana"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] flex flex-col gap-8">
          <div>
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Cobertura en La Canonja</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-4">Reformas en La Canonja con seguimiento cercano</h2>
            <p className="font-body text-subtitle text-sm uppercase tracking-[0.12em] font-medium mb-4">El equipo que está, casi, en tu calle</p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              La Canonja es un municipio del Tarragonès con menos de 6.000 habitantes que tiene un parque inmobiliario muy variado: casas de pueblo en el nucli antic, bloques residenciales de los años 70-90 y unifamiliares más recientes en Mas dels Frares. Por su proximidad con la ciudad de Tarragona —el centro de La Canonja está literalmente pegado al barrio de Sant Salvador y al polígono industrial—, la consideramos prácticamente parte de nuestra zona base.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px] mb-3">
              Esa proximidad cambia la dinámica de la obra. Mientras en zonas más alejadas hay que planificar las visitas técnicas con antelación, aquí podemos pasar a primera hora si surge una decisión a tomar (un escollo en una pared, una pieza que no llegó del proveedor, una duda del propietario sobre una distribución). En reformas largas, esa cercanía se traduce en menos errores y mejor coordinación.
            </p>
            <p className="font-body text-subtitle leading-relaxed text-[15.5px]">
              Los proyectos más habituales que firmamos en La Canonja son la rehabilitación integral de casa de pueblo heredada, la actualización de pisos de bloque residencial con cocina abierta y la reforma puntual de baños accesibles para vecinos de mayor edad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "La Canonja centre", d: "Casas de pueblo del nucli antic con estructura antigua y necesidades de actualización integral." },
              { t: "Mas dels Frares", d: "Unifamiliares y bloques residenciales modernos donde se busca abrir cocina y mejorar climatización." },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Servicios de reformas en La Canonja</h2>
        </div>
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Reformas Integrales", desc: "Casa de pueblo del nucli antic o piso completo a renovar.", href: "/servicios/reformas-integrales" },
            { title: "Reformas de Cocinas", desc: "Apertura al comedor y encimera porcelánica resistente.", href: "/servicios/reformas-cocinas" },
            { title: "Reformas de Baños", desc: "Plato de obra, accesibilidad mejorada y mampara a medida.", href: "/servicios/reformas-banos" },
            { title: "Reformas de Pisos", desc: "Renovación completa con instalaciones nuevas y pavimento uniforme.", href: "/servicios/reformas-pisos" },
            { title: "Reformas de Locales", desc: "Adecuación de comercios y despachos del eje principal.", href: "/servicios/reformas-locales" },
            { title: "Visita técnica gratis", desc: "Pasamos en el día. Memoria valorada en menos de 48 horas.", href: "/contacto" },
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en La Canonja</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">Solicita presupuesto para tu reforma en La Canonja</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">¿Tu obra está en La Canonja? Cobertura cercana, visita en el día y memoria valorada en menos de 48 horas.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-display font-bold text-[15px] hover:bg-dark/80 transition-colors">
            Solicita valoración <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
