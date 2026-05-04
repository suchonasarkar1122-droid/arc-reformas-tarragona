interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://arcreformastarragona.es${url}`,
    image: `https://arcreformastarragona.es${image}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "ARC Reformas Tarragona",
      telephone: "+34877278109",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carrer de la Reina Maria Cristina, 27",
        addressLocality: "Tarragona",
        addressRegion: "Tarragona",
        postalCode: "43002",
        addressCountry: "ES",
      },
    },
    areaServed: [
      { "@type": "City", name: "Tarragona" },
      { "@type": "City", name: "Reus" },
      { "@type": "City", name: "Vila-seca" },
      { "@type": "City", name: "Salou" },
      { "@type": "City", name: "La Canonja" },
      { "@type": "City", name: "Constantí" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
