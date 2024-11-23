import React from 'react'
import preparaton from '../kumbhmela/preparation.jpg'

const Preparation = () => {
  return (
    <>
    <section id="preparation" className="mt-24">
        <div className="flex justify-center flex-wrap-reverse lg:justify-around">
      <div id="text-content" className="lg:w-[42%] w-[80%] hidden-element" >
          <span className="text-base font-[Catamaran] font-light">Popular All Over World</span>
          <h2 className="sm:text-6xl text-3xl font-bold  mt-8 font-[Catamaran]">Veda Pro Gives You An Extra Energy For Boost</h2>
          <p className="sm:text-lg text-base mt-6 " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dolore consectetur voluptatem, soluta dolorum aut nostrum neque,
            quod dicta quaerat temporibus corrupti atque laudantium debitis
            cumque ipsa adipisci autem assumenda?
            dolore consectetur voluptatem, soluta dolorum aut nostrum neque,
            quod dicta quaerat temporibus corrupti atque laudantium debitis
            cumque ipsa adipisci autem assumenda?
            dolore consectetur voluptatem, soluta dolorum aut nostrum neque,
            quod dicta quaerat temporibus corrupti atque laudantium debitis
            cumque ipsa adipisci autem assumenda?
          </p>
        </div>
       <img src={preparaton} loading='lazy' className="lg:w-[50%] w-[80%]" alt="sanatan dharma foundation maha kubh mela 2025 preparation" />
        </div>
       
      </section>
    </>
  )
}

export default Preparation