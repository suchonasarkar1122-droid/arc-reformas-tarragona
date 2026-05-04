import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · ARC Reformas Tarragona",
  description: "Política de privacidad de ARC Reformas Tarragona. Tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  alternates: { canonical: "/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <section className="bg-dark px-5 pt-32 pb-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-white leading-[1.05]">
            Política de Privacidad
          </h1>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] font-body text-dark space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">1. Responsable del tratamiento</h2>
            <ul className="list-disc pl-6 space-y-1 text-subtitle">
              <li><strong>Responsable:</strong> ARC Reformas Tarragona</li>
              <li><strong>Domicilio:</strong> Carrer de la Reina Maria Cristina, 27, 43002 Tarragona</li>
              <li><strong>Teléfono:</strong> 877 278 109</li>
              <li><strong>Correo:</strong> info@arcreformastarragona.es</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">2. Finalidad del tratamiento</h2>
            <p className="text-subtitle leading-relaxed">Los datos personales facilitados a través de los formularios de la web se tratarán para:</p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle mt-3">
              <li>Atender la solicitud de valoración técnica o de información sobre nuestros servicios.</li>
              <li>Mantener la relación contractual con clientes que decidan contratar la obra (presupuesto, calendario, facturación).</li>
              <li>Enviar comunicaciones comerciales sobre servicios propios cuando el usuario otorgue su consentimiento expreso.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">3. Legitimación</h2>
            <p className="text-subtitle leading-relaxed">La base legal del tratamiento es:</p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle mt-3">
              <li><strong>Consentimiento</strong> del interesado al enviar el formulario.</li>
              <li><strong>Ejecución de contrato</strong> cuando se contrata la obra o se solicita memoria valorada.</li>
              <li><strong>Interés legítimo</strong> para la gestión administrativa y contable.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">4. Destinatarios de los datos</h2>
            <p className="text-subtitle leading-relaxed">No se ceden datos a terceros salvo obligación legal (Hacienda, Seguridad Social u otras administraciones competentes). No se realizan transferencias internacionales.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">5. Plazo de conservación</h2>
            <p className="text-subtitle leading-relaxed">Los datos se conservan mientras dure la relación comercial y, posteriormente, durante los plazos exigidos por la normativa fiscal y laboral. Las solicitudes que no derivan en contratación se mantienen un máximo de 12 meses desde el último contacto, salvo solicitud previa de eliminación.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">6. Derechos del interesado</h2>
            <p className="text-subtitle leading-relaxed">Conforme al RGPD y la LOPDGDD, puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <strong>info@arcreformastarragona.es</strong> con copia de tu documento de identidad. También tienes derecho a reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent underline">www.aepd.es</a>) si consideras que tus derechos no han sido atendidos.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">7. Medidas de seguridad</h2>
            <p className="text-subtitle leading-relaxed">Aplicamos medidas técnicas y organizativas razonables para proteger la integridad y confidencialidad de los datos, conforme al estado actual de la tecnología y a los riesgos asociados al tipo de información tratada.</p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] text-dark mb-4">8. Modificaciones</h2>
            <p className="text-subtitle leading-relaxed">ARC Reformas Tarragona puede actualizar esta política para adaptarla a cambios legislativos o jurisprudenciales. Los cambios se publicarán en esta misma página con antelación razonable a su entrada en vigor.</p>
          </div>
        </div>
      </section>
    </>
  );
}
