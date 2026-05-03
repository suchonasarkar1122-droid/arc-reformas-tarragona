import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal · ARC Reformas Tarragona",
  description: "Aviso legal del sitio web de ARC Reformas Tarragona. Datos del titular, condiciones de uso y propiedad intelectual.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <>
      <section className="bg-dark px-5 pt-32 pb-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-white leading-[1.05]">
            Aviso Legal
          </h1>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] font-body text-dark space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              1. Datos identificativos del titular
            </h2>
            <p className="text-subtitle leading-relaxed">
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se reflejan los siguientes datos identificativos del titular:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-subtitle mt-3">
              <li><strong>Denominación comercial:</strong> ARC Reformas Tarragona</li>
              <li><strong>Domicilio social:</strong> Carrer de la Reina Maria Cristina, 27, 43002 Tarragona</li>
              <li><strong>Teléfono:</strong> 877 278 165</li>
              <li><strong>Correo electrónico:</strong> info@arcreformastarragona.es</li>
              <li><strong>Sitio web:</strong> arcreformastarragona.es</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              2. Objeto del sitio web
            </h2>
            <p className="text-subtitle leading-relaxed">
              Este sitio web informa de los servicios de reformas integrales, reformas de cocinas, baños, pisos y locales comerciales que presta ARC Reformas Tarragona en la ciudad de Tarragona y los municipios del Tarragonès, especialmente Reus, Vila-seca, Salou, La Canonja y Constantí.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              3. Condiciones de uso
            </h2>
            <p className="text-subtitle leading-relaxed">
              La navegación por este sitio implica la condición de usuario y conlleva aceptar todas las disposiciones recogidas en el presente Aviso Legal. El usuario se compromete a utilizar los contenidos respetando la buena fe, la normativa vigente y los derechos de terceros.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              4. Propiedad intelectual e industrial
            </h2>
            <p className="text-subtitle leading-relaxed">
              Los textos, fotografías, marcas, gráficos, diseño y código fuente son titularidad de ARC Reformas Tarragona o de terceros que han autorizado su uso. Queda prohibida la reproducción, distribución o transformación total o parcial sin autorización expresa por escrito.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              5. Exclusión de responsabilidad
            </h2>
            <p className="text-subtitle leading-relaxed">
              ARC Reformas Tarragona no se hace responsable de los perjuicios derivados de eventuales interrupciones, fallos técnicos o pérdida de datos que pudieran producirse durante el acceso al sitio. Tampoco asume responsabilidad por contenidos enlazados a páginas externas.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">
              6. Legislación y jurisdicción
            </h2>
            <p className="text-subtitle leading-relaxed">
              Las relaciones derivadas del uso de este sitio se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Tarragona, salvo que la ley aplicable disponga otro fuero.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
