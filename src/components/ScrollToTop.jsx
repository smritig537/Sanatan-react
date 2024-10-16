import React from 'react';

const ScrollToTop = () => {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={goTop} 
      className='h-[50px] z-10 cursor-pointer fixed bottom-4 right-4 bg-orange-800 w-[50px] flex justify-center items-center rounded-full'
    >
      <i id='om' className="fa-solid fa-om text-white text-[20px]"></i>
    </button>
  );
}

export default ScrollToTop;
