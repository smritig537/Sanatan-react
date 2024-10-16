
import banner from "./banner.webp"

const Banner = () => {
    return (
        <>
        
        <img 
        src={banner} 
        alt="Sanatana Dharma Foundation Banner" 
        loading='lazy'
        className="aspect-auto w-full h-[300px] object-contain"
      />
      </>
    );
};

export default Banner;