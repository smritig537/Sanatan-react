function SwamijiAbout({ title, content }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[20%_80%] gap-x-5">
        <div className="text-4xl mb-2 text-center text-orange-900">{title}</div>
        <div className="text-gray-700">{content}</div>
      </div>
    </>
  );
}

export default SwamijiAbout;
