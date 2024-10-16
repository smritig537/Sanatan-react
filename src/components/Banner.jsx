
import banner from "./banner.webp"

const Banner = () => {
    return (
        <>
        <div className="w-full h-[400px]">
        <img 
        src={banner} 
        alt="Sanatana Dharma Foundation Banner" 
        loading='lazy'
        className="aspect-auto w-full h-full object-contain"
      /></div>
      </>
    );
};

export default Banner;