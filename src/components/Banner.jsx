
import banner from "./banner.webp"

const Banner = () => {
    return (
        <>
        
        <img 
        src={banner} 
        alt="Sanatana Dharma Foundation Banner" 
        loading='lazy'
        className="aspect-auto w-full h-[600px] object-cover"
      />
      </>
    );
};

export default Banner;