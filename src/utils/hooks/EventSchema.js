import React from "react";

const EventSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Kumbh Mela 2025",
    "startDate": "2025-01-12T06:00:00+05:30",
    "endDate": "2025-01-16T23:59:59+05:30",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Prayagraj, Kumbh Mela Grounds",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kumbh Mela Grounds, Triveni Sangam",
        "addressLocality": "Prayagraj",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "211001",
        "addressCountry": "IN"
      }
    },
    "image": [
      "https://sanatanadharmafoundation.co/static/media/sample.db48fff825386cdf9089.jpg",
      "https://sanatanadharmafoundation.co/static/media/preparation.4610835d449dc9681bc1.jpg"
    ],
    "description": "Experience the divine spiritual journey at Kumbh Mela 2025 in Prayagraj, India, with sacred rituals, cultural performances, and the world's largest gathering of pilgrims.",
    "offers": {
      "@type": "Offer",
      "url": "https://sanatanadharmafoundation.co/kumbhmela",
      "price": 1000,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-12-01T12:00:00+05:30"
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": "Various Cultural and Religious Performers"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Sanatana dharma foundation",
      "url": "https://sanatanadharmafoundation.co/"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default EventSchema;
