import React from 'react'
import Om from './om.png';
import yog from './yog.png';
import Krishna from './Shri_Jagannatha_Temple.jpg'
const Main = () => {
  return (
    <>
    <div className='krishna'>
    <img src={Krishna} alt="" className='Mandir'/>
    <div className="overlay">
        <h1 className="text">Jaggannath Puri</h1>
        <p className='textp'>
        The Jagannath Temple in Puri, Odisha, India, is a revered Hindu shrine known for its stunning architecture and spiritual significance. Dedicated to Lord Jagannath, along with his siblings, the temple hosts the famous Rath Yatra procession each year, drawing millions of devotees. With its ancient rituals and festivals like Snana Yatra, the temple remains a cherished pilgrimage site, managed by the Shree Jagannath Temple Administration.</p>
      </div>
    </div>
    <div class="main">
      <img src={Om} alt=''/>
      <div class="para">
      <h2> Om Sanatana Dharma</h2>
      <p>Sanatana Dharma, meaning "eternal duty" or "eternal law," is the spiritual and philosophical foundation of Hinduism. It is not just a religion but a way of life, embracing a rich tapestry of beliefs, customs, and practices that have evolved over millennia. At its core, Sanatana Dharma teaches the eternal principles of righteousness, morality, duty, and cosmic order. 
      Central to Sanatana Dharma is the concept of dharma, which encompasses the duties, responsibilities, and moral obligations that individuals must uphold in their lives. Dharma guides individuals in living harmoniously with themselves, others, and the universe.</p>
   </div>
    </div>
    <div class="center">
    <div class="yog">
        <img src={yog} alt=''/>
        </div>
        <div class="yog_para">
            <h2> Yog Sanatana Dharma</h2>
            <p>Sanatana Dharma, meaning "eternal duty" or "eternal law," is the spiritual and philosophical foundation of Hinduism. It is not just a religion but a way of life, embracing a rich tapestry of beliefs, customs, and practices that have evolved over millennia. At its core, Sanatana Dharma teaches the eternal principles of righteousness, morality, duty, and cosmic order. 
            Central to Sanatana Dharma is the concept of dharma, which encompasses the duties, responsibilities, and moral obligations that individuals must uphold in their lives. Dharma guides individuals in living harmoniously with themselves, others, and the universe.</p>
         </div>    
</div>
</>
  )
}

export default Main;
