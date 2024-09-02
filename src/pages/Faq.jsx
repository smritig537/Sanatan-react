import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "What is the Sanatana Dharma Foundation?",
    answer: "The Sanatana Dharma Foundation is an organization dedicated to helping people explore and deepen their understanding of Hinduism, also known as Sanatana Dharma. We offer a range of programs such as spiritual workshops, cultural festivals, and meditation retreats. Our goal is to guide individuals on their spiritual journey, promote Vedic traditions, and foster a deeper connection with Hindu philosophy. By participating in our events and initiatives, you can reconnect with ancient wisdom, engage with a supportive community, and enrich your spiritual life"
  },
  {
    id: 2,
    question: "What is the main source of Sanatana Dharma?",
    answer: "“Sanatana Dharma” can be translated as “eternal law” and it was first found in the Buddhist Mahavagga. Among other things, some Hindus used this phrase in reference to Hinduism in order to use a different name than the other religions from the late XIX century. There exists an understanding among the context of the writings such as the Vedas and the Upanishads pertaining to Advaita Vedanta, which is a teaching about oneness as absolute reality. This phrase is also used in socioeligious-contextual situations and for many, it has political relevance."
  },
  {
    id: 3,
    question: "What are the fundamentals of Sanatana Dharma?",
    answer: "Sanatana Dharma or Hinduism as it is more simply put has certain basics and among them are: Virtues: Declares the importance of valour, non­-lie, non-violence, cleanliness by heart, kindness, compassion, tolerance, self-control, charitable disposition, and asceticism. Karma: Every single action leaves an impact as directed towards in Vivekananda's philosophy that actions bring fruits, good actions will bring good results, and negative will bring bad results. Dharmic Qualities: Prominent features include patience, compassion, self-restraint, integrity, chastity, sense restraint, wisdom, learning, truth, and non-anger. Pancha Bhuta: Basic elements include Earth Water Light Air and Ether."
  },
  {
    id: 4,
    question: "Who is the father of Sanatan Dharma?",
    answer: "Unlike other faiths, Hinduism, better known as Sanatan Dharma, does not have one single founder. Instead, it incorporates the cream of many beliefs. The following individuals and concepts are also related to Sanatan Dharma: Brahman: The ultimate reality or divine essence that constitutes the universe. Rama: An embodiment of dharma, or a virtuous life, as depicted in the epic Ramayana. Adi Shankaracharya: Reestablished Sanatan Dharma in response to the threat of Buddhism. Manu: The first man or archetypal man according to early Hindu texts."
  },
  {
    id: 5,
    question: "What is the goal of Sanatana Dharma?",
    answer: "The ultimate goal of Sanatana Dharma is to achieve moksha, a state of spiritual release and deliverance from the repetitive process of birth and death. For attaining moksha, Hindus seek to gain positive karma through righteous living and acts of selfless behavior. The system of Sanatana Dharma could also be interpreted as a way of life that is meaningful and productive. It has the potential to center people's actions and decisions on values and purpose, which in turn could bring about mental clarity, improved relationships, and better physical health."
  },
  {
    id: 6,
    question: "What are the 4 pillars of Sanatan Dharma?",
    answer: "The four pillars of Sanatana Dharma include Gau, Gita, Ganga, and Gayatri. Gau means the cow, which represents sacrifice, patience, and selfless service. Gita refers to Srimad Bhāgavad Gītā, supposed to be a repository of divine wisdom pertaining to modern life. Ganga means Ganges, a holy river that has connected different cultures and ideologies across India. And lastly, Gayatri means the Gayatri mantra, believed to be the essence of the Vedas."
  },
  {
    id: 7,
    question: "What are the 4 stages of Sanatan Dharma?",
    answer: "Hinduism defines four stages of life: Brahmacharya, student; Gṛhastha, householder; Vanaprastha, forest dweller; and Sannyasa, renouncer. Each stage has specific duties and focuses, respectively: education, family responsibilities, withdrawal from material life, and spiritual liberation. Duties, or dharma, which are dependent upon one's stage in life as well as caste/community, vary. Moksha, or liberation from rebirth, is primarily pursued in the Vanaprastha and Sannyasa stages. Ideally, individuals go through all four stages in the course of a lifetime."
  },
  {
    id: 8,
    question: "What is the basic concept of Sanatan Dharma?",
    answer: "Sanatan Dharma refers to eternal duties and virtues central to Hinduism. Combines 'Sanatana' (eternal) and 'Dharma' (law/order). Includes duties to the nation, king, parents, gurus, and care for the poor. Emphasizes virtues like honesty, purity, mercy, patience, and generosity. Mentioned in ancient texts like The Mahabharata; historical roots in the 19th century"
  },
  {
    id: 9,
    question: "What are the 4 Vedas of Sanatan Dharma?",
    answer: "The four Vedas of Sanatan Dharma are: 1. Rigveda 2. Yajurveda 3. Samaveda, 4. Atharvaveda. Rigveda: It means 'Knowledge of the Verses'. Yajurveda: One of the four Vedas. Samaveda: One of the four Vedas. Atharvaveda: One of the four Vedas. The first three Vedas, such as Rigveda, Yajurveda, and Samaveda, are known as trayi-vidya, or 'threefold knowledge'. The Vedas are considered the sacred books of Hinduism and a fundamental source of ancient Indian history. Indeed, they contain information on spiritual principles, cosmic laws, and the influence of the Tattvas, considered as cosmic elements and principles. Besides, in the Vedas, concepts and practices of the Vedic religion take shape, and these are the grounds for classical Hinduism."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <li className={`bg-white my-2 shadow-lg ${isOpen ? 'bg-light-blue' : ''}`}>
    <h2
      onClick={onClick}
      className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
    >
      <span>{question}</span>
      {isOpen ? (
        <i className="fas fa-chevron-up text-purple-700 h-6 w-6"></i>
      ) : (
        <i className="fas fa-chevron-down text-purple-700 h-6 w-6"></i>
      )}
    </h2>
    <div
      className={`border-l-2 border-purple-600 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
    >
      <p className="p-3 text-gray-900">{answer}</p>
    </div>
  </li>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="p-5 bg-light-blue">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">FAQ - Sanatana Dharma Foundation</h2>
          <ul className="flex flex-col">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => handleToggle(faq.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
