import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Humedades y condensación en pisos de Tarragona",
  description:
    "Cómo distinguir condensación, filtración y capilaridad en pisos del Eixample, la Part Alta o el Serrallo, y qué obras conviene hacer antes del frío.",
  alternates: { canonical: "/blog/humedades-condensacion-pisos-antiguos-tarragona" },
  openGraph: {
    title: "Humedades y condensación en pisos de Tarragona",
    description:
      "Qué tipo de humedad tienes, qué puedes hacer este invierno y qué obras la resuelven de raíz en fincas antiguas de Tarragona.",
    url: "/blog/humedades-condensacion-pisos-antiguos-tarragona",
    type: "article",
    images: ["/images/blog/humedades-condensacion-pisos-antiguos-tarragona.webp"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Humedades y condensación en pisos antiguos de Tarragona: qué hacer antes del invierno",
  description:
    "Guía para identificar condensación, filtraciones y humedad por capilaridad en fincas antiguas de Tarragona y planificar las obras que la resuelven.",
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  author: { "@type": "Organization", name: "ARC Reformas Tarragona" },
  publisher: { "@id": "https://arcreformastarragona.es/#business" },
  image: "https://arcreformastarragona.es/images/blog/humedades-condensacion-pisos-antiguos-tarragona.webp",
  mainEntityOfPage: "https://arcreformastarragona.es/blog/humedades-condensacion-pisos-antiguos-tarragona",
};

const linkCls = "text-accent font-semibold underline underline-offset-2";

export default function PostHumedades() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Humedades y condensación en pisos antiguos", url: "/blog/humedades-condensacion-pisos-antiguos-tarragona" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="bg-beige">
        <div className="relative h-[360px] md:h-[460px] w-full overflow-hidden bg-dark">
          <Image
            src="/images/blog/humedades-condensacion-pisos-antiguos-tarragona.webp"
            alt="Humedades y condensación en pisos antiguos de Tarragona"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/55 to-dark/85" />
          <div className="relative z-10 h-full flex flex-col items-start justify-end max-w-[1100px] mx-auto px-5 pb-12">
            <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">Otoño e invierno</span>
            <h1 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[56px] text-white leading-[1.05] max-w-[900px]">
              Humedades y condensación en pisos antiguos de Tarragona: qué hacer antes del invierno
            </h1>
            <p className="text-white/70 text-sm mt-3">15 de noviembre de 2026 · 9 minutos de lectura</p>
          </div>
        </div>

        <div className="max-w-[820px] mx-auto px-5 py-16 md:py-20">
          <p className="font-body text-dark text-lg leading-relaxed mb-6">
            Cada año, cuando bajan las temperaturas de noche y se cierran las ventanas, empiezan las mismas llamadas: una mancha negra detrás del armario, gotas en los cristales por la mañana, pintura que se abomba junto al zócalo. En Tarragona el invierno es suave, pero muchas viviendas antiguas no tienen aislamiento ni ventilación pensados para el uso actual, y la humedad aparece justo cuando más tiempo pasamos dentro de casa.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            Antes de pintar con antimoho o comprar un deshumidificador conviene entender qué tipo de humedad tienes. No es lo mismo el vapor que se condensa en una pared fría que el agua que entra por una terraza o la que sube desde el terreno, y cada una se resuelve de forma distinta. En esta guía repasamos cómo distinguirlas, cómo se manifiestan en los distintos tipos de finca de la ciudad y qué obras merece la pena planificar.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Por qué las manchas aparecen en noviembre</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            Una vivienda genera mucho vapor de agua: duchas, cocina, ropa tendida dentro y la propia respiración. En verano las ventanas están abiertas y ese vapor sale sin problema. En otoño cerramos, encendemos la calefacción a ratos y el aire interior, cálido y cargado de humedad, toca superficies frías: el vidrio sencillo, el marco de aluminio sin rotura de puente térmico, la esquina de un muro de fachada orientado al norte o el frente del forjado. Al enfriarse, el vapor se convierte en agua líquida y, si la superficie no se seca, en pocas semanas aparece moho.
          </p>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            La cercanía del mar añade humedad ambiental, sobre todo en los días de levante, y los pisos que se ventilan poco durante la semana, porque sus ocupantes pasan el día fuera, son los más castigados.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Tres humedades distintas, tres soluciones distintas</h2>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-3 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Condensación:</strong> manchas difusas de moho en esquinas, detrás de muebles pegados a la pared, en el techo del baño y alrededor de las ventanas. Empeora en invierno y mejora si se ventila. Es un problema de temperatura superficial y de ventilación, no de agua que entra.</li>
            <li><strong className="text-dark">Filtración:</strong> mancha con borde definido que crece después de llover, a menudo bajo una terraza, junto a un bajante o en el encuentro con la cubierta. Suele dejar cerco amarillento y desconchar el yeso. Hay que localizar el punto de entrada antes de tocar el interior.</li>
            <li><strong className="text-dark">Capilaridad:</strong> humedad que sube desde el suelo por los muros de plantas bajas, con una franja oscura hasta cierta altura, pintura abombada y eflorescencias blancas de sales. No depende de la estación y es típica de casas antiguas sin barrera bajo los muros.</li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            A veces se combinan: un muro con algo de capilaridad está más frío y húmedo, y por tanto condensa más. Por eso en la visita técnica medimos con higrómetro y termómetro de superficie, y no solo miramos la mancha.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Cómo se manifiesta en cada tipo de finca de Tarragona</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            La ciudad tiene fincas muy distintas, y cada una tiende a un problema concreto:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-3 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Pisos del Eixample:</strong> las habitaciones que dan a patios de luces estrechos apenas reciben sol en invierno. Los dormitorios interiores y las galerías cerradas con aluminio antiguo concentran la condensación.</li>
            <li><strong className="text-dark">Casas de la Part Alta:</strong> muros de piedra gruesos que tardan en secarse, plantas bajas con capilaridad y cubiertas antiguas con filtraciones puntuales. Aquí los revestimientos impermeables empeoran el problema porque impiden que el muro transpire.</li>
            <li><strong className="text-dark">Serrallo y franja costera de Llevant:</strong> humedad ambiental alta y salitre. Las sales cristalizan en los revestimientos y la carpintería metálica se oxida antes.</li>
            <li><strong className="text-dark">Bloques de Sant Pere i Sant Pau, Torreforta o Bonavista:</strong> fachadas de ladrillo sin aislamiento y frentes de forjado y pilares que actúan como puentes térmicos. La mancha aparece en línea recta junto al techo o en la esquina de la fachada.</li>
          </ul>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Lo que puedes hacer tú esta semana</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Antes de pensar en obra, hay hábitos que reducen mucho la condensación y te ayudan a diagnosticar:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-2 mb-6 list-disc pl-6">
            <li>Ventila diez minutos cada mañana con corriente cruzada, aunque haga frío: renovar el aire seco cuesta menos energía que calentar aire húmedo.</li>
            <li>Usa la campana al cocinar y deja la puerta del baño cerrada y la ventana o el extractor funcionando después de la ducha.</li>
            <li>Separa unos centímetros los armarios y el cabecero de los muros de fachada.</li>
            <li>Evita tender la ropa dentro de casa; si no hay alternativa, hazlo en una estancia ventilada.</li>
            <li>Limpia el moho con un producto específico y vigila si vuelve: si reaparece en el mismo sitio en pocas semanas, la causa es constructiva.</li>
            <li>Haz fotos con fecha de las manchas y anota si cambian tras la lluvia; nos ayudará mucho en la visita.</li>
          </ul>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Obras que resuelven el problema de raíz</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-4">
            Cuando el problema persiste, hay soluciones constructivas que conviene estudiar en conjunto:
          </p>
          <ul className="font-body text-subtitle text-base leading-relaxed space-y-3 mb-6 list-disc pl-6">
            <li><strong className="text-dark">Ventanas con rotura de puente térmico y doble vidrio:</strong> elevan la temperatura del cristal y del marco y eliminan la mayor parte de la condensación en ventanas. Conviene que incorporen microventilación o aireadores para que la casa siga renovando aire.</li>
            <li><strong className="text-dark">Extracción mecánica en baño y cocina:</strong> un extractor con higrostato saca el vapor justo donde se genera. Es una partida pequeña dentro de una <Link href="/servicios/reformas-banos" className={linkCls}>reforma de baño</Link> y marca una gran diferencia.</li>
            <li><strong className="text-dark">Aislamiento por el interior en muros fríos:</strong> trasdosado con aislante y barrera de vapor en las paredes de fachada de dormitorios y salón. Resta algunos centímetros, pero corrige el puente térmico de pilares y frentes de forjado.</li>
            <li><strong className="text-dark">Tratamiento de capilaridad:</strong> en plantas bajas de la Part Alta o de casas de pueblo, barrera química por inyección o, según el caso, revestimientos transpirables de cal que dejan salir la humedad sin estropear el acabado.</li>
            <li><strong className="text-dark">Revisión de terrazas, cubiertas y bajantes:</strong> en filtraciones, el arreglo está fuera del piso. Si es un elemento común, tiene que intervenir la comunidad.</li>
          </ul>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            Si estás pensando en renovar la vivienda, lo más eficiente es incluir estas mejoras en la misma obra: cuando se cambian ventanas, se hacen rozas para la instalación eléctrica y se rehacen los yesos, el aislamiento interior y la ventilación cuestan mucho menos que hacerlos aparte. Es lo que planteamos en una <Link href="/servicios/reformas-pisos" className={linkCls}>reforma de piso</Link> o, si se redistribuye la vivienda, en una <Link href="/servicios/reformas-integrales" className={linkCls}>reforma integral</Link>.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Si vives en comunidad: cuándo es un problema del edificio</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            Las filtraciones desde la cubierta, la fachada, los bajantes generales o la terraza del vecino de arriba no se arreglan desde tu piso. En esos casos lo correcto es comunicarlo por escrito al administrador, con fotos y fechas, para que la comunidad encargue la reparación. Una vez reparado el origen, la reparación interior suele correr a cargo del seguro de la comunidad o del vecino causante, según el caso. Pintar antes de que se resuelva la causa solo esconde el problema unas semanas.
          </p>

          <h2 className="font-display font-extrabold text-2xl text-dark mt-10 mb-4">Planificar ahora para obrar en primavera</h2>
          <p className="font-body text-subtitle text-base leading-relaxed mb-6">
            El invierno es el mejor momento para diagnosticar, porque las humedades se ven con claridad. En cambio, muchas reparaciones funcionan mejor con el muro seco y temperaturas suaves. Por eso solemos recomendar visitar ahora, medir y documentar, redactar la memoria valorada y tramitar los permisos durante el invierno para empezar la obra en primavera. Si la mejora es energética, revisa también las <Link href="/blog/ayudas-rehabilitacion-energetica-tarragones" className={linkCls}>ayudas a la rehabilitación energética en el Tarragonès</Link>, porque muchas exigen solicitarse antes de empezar.
          </p>

          <div className="bg-accent rounded-2xl p-8 mt-12 text-white">
            <h3 className="font-display font-extrabold text-2xl mb-3">¿Tienes humedades en casa?</h3>
            <p className="text-white/90 mb-5 leading-relaxed">Pasamos a verlas, medimos y te explicamos de dónde vienen y qué opciones tienes, con una memoria valorada si decides hacer obra. Visita técnica sin coste.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-display font-bold text-sm hover:bg-dark/80 transition-colors">
              Pedir visita técnica <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
