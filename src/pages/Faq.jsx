import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "What is the Sanatana Dharma Foundation?",
    answer: "The Sanatana Dharma Foundation is an organization dedicated to helping people explore and deepen their understanding of Hinduism, also known as Sanatana Dharma. We offer a range of programs such as spiritual workshops, cultural festivals, and meditation retreats. Our goal is to guide individuals on their spiritual journey, promote Vedic traditions, and foster a deeper connection with Hindu philosophy. By participating in our events and initiatives, you can reconnect with ancient wisdom, engage with a supportive community, and enrich your spiritual life"
  },
  {
    id: 2,
    question: "What kind of programs does the Sanatana Dharma Foundation offer?",
    answer: "The foundation offers a range of programs including spiritual workshops, cultural festivals, and meditation retreats. These programs are designed to help people understand Hindu philosophy, practice Vedic traditions, and connect with a supportive community."
  },
  {
    id: 3,
    question: "What is the mission of the Sanatana Dharma Foundation?",
    answer: "The mission of the Sanatana Dharma Foundation is to provide a space for individuals to explore their spirituality, deepen their understanding of Hindu teachings, and connect with others. They focus on spreading messages of peace, love, and unity through their various outreach and cultural events."
  },
  {
    id: 4,
    question: "Who is the founder of the Sanatana Dharma Foundation?",
    answer: "The founder of the Sanatana Dharma Foundation is Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj. He is a respected spiritual leader dedicated to promoting and preserving the values and teachings of Sanatana Dharma."
  },
  {
    id: 5,
    question: "What is Mahamadaleshwar Shri Shri 1008 Anant Shri Vibhushit Swami Narayan Nand Giriji Maharaj's background?",
    answer: "Before becoming a spiritual leader, Mahamadaleshwar Giriji Maharaj had a successful career as a businessman. He later transitioned to spiritual leadership and has been actively involved in education and social activism, working to make a positive impact on society."
  },
  {
    id: 6,
    question: "How is the Sanatana Dharma Foundation working to preserve Sanatan culture?",
    answer: "The foundation, under the leadership of Mahamadaleshwar Giriji Maharaj, is working to promote Sanatan Dharma by spreading awareness and cultural pride, especially among the youth. They send books to temples across India and aim to foster a deeper understanding and appreciation of Sanatan culture."
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
