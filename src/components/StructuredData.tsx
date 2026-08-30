export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": "https://arcreformastarragona.es/#business",
    name: "ARC Reformas Tarragona",
    url: "https://arcreformastarragona.es",
    logo: "https://arcreformastarragona.es/images/hero-reforma-tarragona-clasica.webp",
    image: "https://arcreformastarragona.es/images/hero-reforma-tarragona-clasica.webp",
    telephone: "+34877278109",
    email: "info@arcreformastarragona.es",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer de la Reina Maria Cristina, 27",
      addressLocality: "Tarragona",
      addressRegion: "Tarragona",
      postalCode: "43002",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.1187653,
      longitude: 1.2528495,
    },
    areaServed: [
      { "@type": "City", name: "Tarragona" },
      { "@type": "City", name: "Reus" },
      { "@type": "City", name: "Vila-seca" },
      { "@type": "City", name: "Salou" },
      { "@type": "City", name: "La Canonja" },
      { "@type": "City", name: "Constantí" },
    ],
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
