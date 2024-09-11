import React from "react";
import { Link } from "react-router-dom";
import reviving from "./reviving.webp";
import scriptures from "./scriptures.webp"
import { Helmet } from "react-helmet-async";

function Blogs() {
  const blogPosts = [
    {
      title:
        "Sanatana Dharma Foundation: Reviving Ancient Wisdom and Modern Values",
      description:
        "The Sanatana Dharma Foundation blends ancient wisdom with modern values, fostering unity and integrity through education and cultural initiatives.",
      imageUrl: reviving,
      link: "/blogs/reviving-ancient-wisdom",
    },
    {
      title:
        "Hindu Religious Texts and Scripturess",
      description:
        "Discover Hinduism’s Sacred Wisdom: Dive into the Vedas, Upanishads, Bhagavad Gita, and Ramayana. Explore their timeless teachings and their impact on spiritual and ethical living today.",
      imageUrl: scriptures,
      link: "/blogs/Hindu-Religious-Texts-and-Scriptures",
    },
 
  ];

  return (
    <>
     <Helmet>
        <title>Blogs - Sanatana Dharma Foundation</title>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanatanadharmafoundation.co/blogs" />
        <meta
          name="description"
          content="Browse through the latest blogs from the Sanatana Dharma Foundation, exploring topics related to ancient wisdom, modern values, and cultural initiatives."
        />
        <meta
          name="keywords"
          content="Sanatana Dharma, blogs, ancient wisdom, modern values, cultural initiatives, education, unity, integrity"
        />
        <meta property="og:title" content="Blogs - Sanatana Dharma Foundation" />
        <meta
          property="og:description"
          content="Explore the latest blogs from the Sanatana Dharma Foundation, featuring insights on ancient wisdom and contemporary values."
        />
        <meta property="og:image" content={reviving} />
        <meta property="og:url" content="https://yourwebsite.com/blogs" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs - Sanatana Dharma Foundation" />
        <meta
          name="twitter:description"
          content="Discover insightful blogs from the Sanatana Dharma Foundation, covering topics on ancient wisdom and modern values."
        />
        <meta name="twitter:image" content={reviving} />
      </Helmet>
      <section className="px-8 mb-4">
        <div className="flex justify-center">
          <h1 className="text-4xl md:text-3xl pl-2 my-8 font-sans font-bold dark:text-gray-200">
            Blogs
          </h1>
        </div>

        {/* Grid layout for tablet and larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link to={post.link}>
                <img
                  className="rounded-t-lg w-full object-cover object-center h-[280px]"
                  src={post.imageUrl}
                  alt={`Image for ${post.title}`}
                />
              </Link>
              <div className="p-5">
                <Link to={post.link}>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 dark:text-white">
                    {post.title}
                  </h2>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.description}
                </p>
                <Link
                  to={post.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blogs;
