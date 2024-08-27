function SwamijiAbout({ title, content }) {
  return (
    <>
      <main className="grid grid-cols-1 sm:grid-cols-[20%_80%] gap-x-5">
        <h2 className="text-4xl mb-2 text-center text-orange-900">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </main>
    </>
  );
}

export default SwamijiAbout;
