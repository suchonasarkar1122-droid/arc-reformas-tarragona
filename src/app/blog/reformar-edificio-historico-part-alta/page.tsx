import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformar un edificio histórico en la Part Alta · Lo que hay que saber",
  description:
    "Cómo afrontar una reforma dentro del recinto romano de Tarragona. Trámites con patrimonio, materiales que respetan el carácter y obstáculos arqueológicos frecuentes.",
  alternates: { canonical: "/blog/reformar-edificio-historico-part-alta" },
  openGraph: {
    title: "Reformar un edificio histórico en la Part Alta de Tarragona",
    description:
      "Patrimonio, materiales, trámites y plazos: lo que hay que saber antes de reformar dentro del recinto romano.",
    url: "/blog/reformar-edificio-historico-part-alta",
    type: "article",
    images: ["/images/cocina-clasica-part-alta-tarragona.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reformar un edificio histórico en la Part Alta: lo que hay que saber",
  description:
    "Guía técnica para afrontar una reforma dentro del recinto romano de Tarragona, con normativa de patrimonio, materiales adecuados y plazos.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  author: { "@type": "Organization", name: "ARC Reformas Tarragona" },
  publisher: { "@id": "https://arcreformastarragona.es/#business" },
  image: "https://arcreformastarragona.es/images/cocina-clasica-part-alta-tarragona.webp",
  mainEntityOfPage: "https://arcreformastarragona.es/blog/reformar-edificio-historico-part-alta",
};

export default function PostPartAlta() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Reformar un edificio histórico en la Part Alta", url: "/blog/reformar-edificio-historico-part-alta" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-beige">
        <div className="relative h-[360px] md:h-[460px] w-full overflow-hidden bg-dark">
          <Image
            src="/images/cocina-clasica-part-alta-tarragona.webp"
            alt="Reforma en edificio histórico de la Part Alta de Tarragona"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/55 to-dark/85" />
          <div className="relative z-10 h-full flex flex-col items-start justify-end max-w-[1100px] mx-auto px-5 pb-12">
            <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">Patrimonio</span>
            <h1 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[56px] text-white leading-[1.05] max-w-[900px]">
              Reformar un edificio histórico en la Part Alta: lo que hay que saber
            </h1>
            <p className="text-white/70 text-sm mt-3">1 de mayo de 2026 · 8 minutos de lectura</p>
          </div>
        </div>

        <div className="max-w-[820px] mx-auto px-5 py-16 md:py-20">
          <p className="font-body text-dark text-lg leading-relaxed mb-6">
            La Part Alta de Tarragona se asienta sobre dos mil años de historia. Reformar un edificio dentro del recinto romano no es solo una obra: es una conversación con el patrimonio. Lo que cuesta tiempo, lo gana en valor patrimonial y, casi siempre, en autenticidad para la vivienda terminada.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Saber primero qué nivel de protección tiene tu finca</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            No todos los edificios históricos están protegidos al mismo nivel. En Tarragona, las categorías habituales son:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-3 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Bé Cultural d'Interès Nacional (BCIN):</strong> máximo nivel de protección. Cualquier intervención requiere informe favorable del Departament de Cultura de la Generalitat. Los plazos de tramitación pueden alcanzar los 4-6 meses.</li>
            <li><strong className="text-dark">Bé Cultural d'Interès Local (BCIL):</strong> protegido por el Ayuntamiento. Los trámites son más ágiles (2-3 meses) pero exigen memoria justificada de cada material y técnica.</li>
            <li><strong className="text-dark">Edificio en entorno protegido:</strong> sin catalogación individual pero dentro del perímetro del recinto histórico. Limitaciones sobre fachada, cubierta y volumen visible.</li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            La consulta previa al Servei de Patrimoni Arquitectònic suele ser gratuita. Antes de firmar contrato de compraventa o iniciar memoria de obra, es imprescindible saber qué se puede tocar y qué no. Te ahorras frustraciones y, sobre todo, gasto en proyectos no viables.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Los hallazgos arqueológicos: cómo afrontarlos</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            En el recinto romano es habitual que, al picar un suelo o abrir una zanja, aparezcan restos de pavimento, muros romanos o cerámicas. La normativa obliga a paralizar la obra y avisar al servicio de patrimonio en 48 horas. La intervención puede consistir en:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-2 mb-6 list-disc pl-6">
            <li>Documentación gráfica del hallazgo y continuación de obra (lo más habitual).</li>
            <li>Conservación in situ del resto, integrándolo en el diseño del piso (excepcional pero posible).</li>
            <li>Excavación arqueológica completa antes de seguir (en casos de hallazgos relevantes).</li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            En la memoria valorada conviene reservar un 8-12% como contingencia para imprevistos arqueológicos. Si no aparecen, se descuenta del presupuesto final.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Materiales que dialogan con la piedra original</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Una vivienda dentro del recinto romano pide materiales sobrios y compatibles con la fábrica histórica:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-2 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Mortero de cal hidráulica</strong> en lugar de cemento Portland: respeta la transpirabilidad del muro de mampostería.</li>
            <li><strong className="text-dark">Pavimento hidráulico</strong> recuperado o reproducido: una vuelta al material original con mejoras de durabilidad.</li>
            <li><strong className="text-dark">Carpintería en madera tratada</strong>: roble, nogal o pino sometidos a tratamiento ignífugo y antixilófagos.</li>
            <li><strong className="text-dark">Iluminación cálida y discreta</strong>: focos empotrados de bajo consumo y luz indirecta sobre techo o pared.</li>
            <li><strong className="text-dark">Pintura mineral o al silicato</strong>: deja respirar la pared sin atrapar humedad.</li>
          </ul>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Plazos realistas: lo que se tarda en una obra protegida</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Una intervención integral en finca catalogada de la Part Alta tiene tres fases:
          </p>
          <div className="bg-white rounded-2xl border border-dark/5 p-6 mb-6">
            <ul className="font-body text-dark text-sm md:text-base leading-relaxed space-y-2">
              <li>· <strong>Memoria, planos y trámite con patrimonio:</strong> 8 a 16 semanas según categoría.</li>
              <li>· <strong>Ejecución de obra:</strong> 14 a 22 semanas (un piso de 80-100 m² protegido).</li>
              <li>· <strong>Cierre administrativo y certificados:</strong> 2 a 4 semanas.</li>
            </ul>
          </div>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            Total entre el primer correo y la entrega final: 6-10 meses. Si lo planteas como una decisión a varios años, los plazos no asustan.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Diez consejos prácticos antes de empezar</h2>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-2 mb-6 list-disc pl-6">
            <li>Consulta el catastro y el catálogo municipal antes de firmar nada.</li>
            <li>Pide vista previa al servicio de patrimonio: ahorra meses de trabajo en balde.</li>
            <li>Reserva contingencia para hallazgos arqueológicos.</li>
            <li>Trabaja con técnico colegiado con experiencia documentada en patrimonio.</li>
            <li>No prometas plazos a familiares o inquilinos hasta tener todos los permisos.</li>
            <li>Documenta el estado actual con fotos antes de tocar nada.</li>
            <li>Conserva muestras de pavimento, baldosas o azulejos por si hay que reproducirlos.</li>
            <li>Habla con el administrador de la finca antes de informar a vecinos.</li>
            <li>Pide certificado energético previo: es obligatorio para alquilar o vender.</li>
            <li>Confía en empresa local con conocimiento del territorio.</li>
          </ul>

          <div className="bg-accent rounded-2xl p-8 mt-12 text-white">
            <h3 className="font-display font-extrabold text-2xl mb-3">¿Tu finca está en la Part Alta?</h3>
            <p className="text-white/90 mb-5 leading-relaxed">Te acompañamos desde la consulta inicial al servicio de patrimonio hasta la entrega con dossier completo. Visita técnica sin coste.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-display font-bold text-sm hover:bg-dark/80 transition-colors">
              Hablar con un técnico <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
