import React from "react";

function Bloglist() {
  const Lists = [
    {
      id: 1,
      name: "Sanatana Dharma Foundation: Reviving Ancient Wisdom and Modern Values",
      link: "/blogs/reviving-ancient-wisdom",
    },
    {
      id: 2,
      name: "Hindu Religious Texts and Scriptures",
      link: "blogs/Hindu-Religious-Texts-and-Scriptures",
    },
  ];

  return (
    <section className="w-full md:w-1/4 px-4">
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" aria-level="2">
          Recent Posts
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          {Lists.map((list) => (
            <li className="text-lg" key={list.id}>
              <a
                href={list.link}
                className="text-blue-700 hover:underline break-words"
                style={{ whiteSpace: "normal" }}
                aria-label={`Read more about ${list.name}`}
              >
                {list.name}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Bloglist;
