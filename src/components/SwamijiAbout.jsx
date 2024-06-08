function SwamijiAbout({ title, content }) {
  return (
    <>
      <div className="grid grid-cols-[20%_80%] gap-x-5">
        <div className="text-4xl text-orange-900">{title}</div>
        <div className="text-gray-700">{content}</div>
      </div>
    </>
  );
}

export default SwamijiAbout;
