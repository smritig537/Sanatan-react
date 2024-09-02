function SwamijiAbout({ title, content }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-5">
        <h2 className="text-4xl mb-2 text-center text-orange-900">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
    </>
  );
}

export default SwamijiAbout;
