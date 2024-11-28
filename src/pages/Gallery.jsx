import React from "react";
import Divider from "../components/Divider";
import {Helmet} from 'react-helmet-async'

const imageUrl = {
  'Sacred Pooja with Revered Spiritual Leaders': Array.from({ length: 7 }, (_, index) => index + 1),
  'Preparations Of Maha Kumbh Mela': Array.from({ length: 11 }, (_, index) => index + 1),
  'Meeting with Professor Anand Bhalerao Ji': Array.from({ length: 3 }, (_, index) => index + 1),
  Parishad: Array.from({ length: 26 }, (_, index) => index + 1),
  Meetings: Array.from({ length: 140 }, (_, index) => index + 1),
  Political: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  Spiritual: Array.from({ length: 163 }, (_, index) => index + 1),
  "Spiritual Events 2": Array.from({ length: 156 }, (_, index) => index + 1),
  "Social Activity": Array.from({ length: 21 }, (_, index) => index + 1),
  Other: Array.from({ length: 120 }, (_, index) => index + 1),
};

const GallerySection = ({ title, category }) => {
  const images = imageUrl[category];

  return (
    <div className="my-10">
      <h1 className="font-oswald text-[#313131] font-bold text-3xl text-center mb-6">
        {title}
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-screen-xl">
        {images.map((e) => (
          <div
            key={e}
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
  src={`${process.env.PUBLIC_URL}/gallery/${category}/${e}.webp`}
  alt={`Sanatana Dharma Foundation ${title} image number ${e} showcasing ${category}`}
  loading="lazy"
  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
/>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              {title}
            </span>
          </div>
        ))}
      </div>
      <Divider />
    </div>
  );
};

function Gallery() {
  <Helmet>
  <title>Gallery - Sanatana Dharma Foundation</title>
  <meta name="description" content="Explore the gallery of Sanatana Dharma Foundation showcasing spiritual events, meetings, Maha Kumbh Mela preparations, political and social activities, and more." />
  <meta name="keywords" content="Sanatana Dharma Foundation gallery, spiritual events, Maha Kumbh Mela, political meetings, social activities, photos, events gallery" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Gallery - Sanatana Dharma Foundation" />
  <meta property="og:description" content="Explore the gallery of Sanatana Dharma Foundation showcasing spiritual events, meetings, Maha Kumbh Mela preparations, political and social activities, and more." />
  <meta property="og:image" content="https://sanatanadharmafoundation.co/static/media/om-bg-remove.999d758e15021726580b.png" />
  <link rel="canonical" href="https://sanatanadharmafoundation.co/gallery" />
  <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Sanatana Dharma Foundation Gallery",
      "description": "Explore the gallery of Sanatana Dharma Foundation showcasing spiritual events, meetings, and various activities.",
      "url": "https://sanatanadharmafoundation.co/gallery",
      "image": [
        ${imageUrl["Preparations Of Maha Kumbh Mela"].map(e => `"https://sanatanadharmafoundation.co/gallery/Preparations Of Maha Kumbh Mela/${e}.webp"`).join(", ")}
      ]
    }
  `}
</script>
</Helmet>

  return (
    <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h1 className="font-oswald text-[#313131] font-bold text-5xl text-center mb-12">
          Gallery
        </h1>
        <GallerySection title="Sacred Pooja with Revered Spiritual Leaders" category="Sacred Pooja with Revered Spiritual Leaders" />
        <GallerySection title="Preparations Of Maha Kumbh Mela 2025" category="Preparations Of Maha Kumbh Mela" />
        <GallerySection title="Spiritual Events 2" category="Spiritual Events 2" />
        <GallerySection title="Meeting with Professor Anand Bhalerao Ji" category="Meeting with Professor Anand Bhalerao Ji" />
        <GallerySection title="Parishad" category="Parishad" />
        <GallerySection title="Meetings" category="Meetings" />
        <GallerySection title="Spiritual Events" category="Spiritual" />
        <GallerySection title="Political" category="Political" />
        <GallerySection title="Social Activity" category="Social Activity" />
        <GallerySection title="Other Images" category="Other" />
      </div>
    </div>
  );
}

export default Gallery;
