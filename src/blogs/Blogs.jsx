import React from "react";
import {Link} from 'react-router-dom'

function Blogs() {
    const blogPosts = [
      {
        title:
          "Sanatana Dharma Foundation: Reviving Ancient Wisdom and Modern Values",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        imageUrl: temple,
        link: "#",
      },
    ];
  
    return (
      <>
        <section className="px-8">
          <div className="flex justify-center">
            <h1 className="text-4xl md:text-3xl pl-2 my-8 border-l-4 font-sans font-bold border-orange-500 dark:text-gray-200">
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
  