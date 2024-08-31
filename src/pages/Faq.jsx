import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "When will my order arrive?",
    answer: "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
  },
  {
    id: 2,
    question: "How do I track my order?",
    answer: "Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order."
  },
  {
    id: 3,
    question: "What’s your return policy?",
    answer: "We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label."
  },
  {
    id: 4,
    question: "How do I make changes to an existing order?",
    answer: "Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require."
  },
  {
    id: 5,
    question: "What shipping options do you have?",
    answer: "For USA domestic orders we offer FedEx and USPS shipping."
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer: "Any method of payments acceptable by you. For example: We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc."
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
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">FAQ - Order, Shipping, Etc.</h2>
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
