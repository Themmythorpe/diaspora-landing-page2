import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I know my parents will actually receive the care I'm paying for?",
    answer: "Every visit is GPS-verified and timestamped. We send photos of medication administration and health checks. You'll have more proof of care than if you lived next door to them.",
  },
  {
    question: 'My parents are resistant to accepting help. How do you handle that?',
    answer: 'Our care team is trained to build trust and rapport with elders, approaching each visit with empathy and patience. We work with families to find the best approach for each individual.',
  },
  {
    question: 'What if my parents need emergency care?',
    answer: 'In case of emergencies, our team will contact you immediately and coordinate with local emergency services to ensure your parents receive prompt care.',
  },
  {
    question: "How do I pay if I'm overseas?",
    answer: 'You can pay securely online using international debit/credit cards or other supported payment methods.',
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: 'We value your feedback and will work to resolve any issues. If you are not satisfied, you may cancel or adjust your plan at any time.',
  },
  {
    question: "Can my whole family be involved in my parents' care plan?",
    answer: "Yes, you can invite family members to join the care plan and stay updated on your parents' well-being.",
  },
  {
    question: 'What is OneWellness Diaspora?',
    answer: 'OneWellness Diaspora helps you care for loved ones back home with services like elderly care, medication sourcing, health monitoring, and insurance.',
  },
  {
    question: 'How can I pay for services?',
    answer: 'You can pay for services using your debit card, bank transfer, or mobile money.',
  },
  {
    question: 'What does the Elderly Care Visit service include?',
    answer: 'The Elderly Care Visit service includes a comprehensive health checkup, medication review, and lifestyle advice.',
  },
  {
    question: "Can I monitor my family member's health?",
    answer: "Yes, you can monitor your family member's health by using the OneWellness Diaspora app.",
  },
  {
    question: 'What medications are available for sourcing?',
    answer: 'We source medications from reputable pharmacies in Nigeria.',
  },
  {
    question: 'Does OneWellness offer health insurance?',
    answer: 'Yes, we offer health insurance plans for individuals and families.',
  },
  {
    question: 'How do rewards on healthy living work?',
    answer: 'Rewards on healthy living are based on your health metrics and lifestyle choices.',
  },
  {
    question: 'What is the Fundable Wallet, and how does it work?',
    answer: 'The Fundable Wallet is a feature that allows you to manage your rewards and savings.',
  },
  {
    question: 'Who is the Dedicated Care Partner, and what do they do?',
    answer: 'The Dedicated Care Partner is a team of healthcare professionals who are dedicated to providing the best possible care for your loved ones.',
  },
  {
    question: 'How can I get started with OneWellness Diaspora?',
    answer: 'You can get started with OneWellness Diaspora by signing up on our website or downloading the OneWellness Diaspora app.',
  },
];

const FAQSection = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // const [openIndex, setOpenIndex] = useState(0);
  // const contentRefs = useRef([]);

  // const handleToggle = (idx) => {
  //   setOpenIndex(idx === openIndex ? null : idx);
  // };

  // useEffect(() => {
  //   // Ensure the open panel is scrolled into view on mobile
  //   if (openIndex !== null && contentRefs.current[openIndex]) {
  //     contentRefs.current[openIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  //   }
  // }, [openIndex]);

  return (
    <section id="faq" className="pb-10 bg-transparent">
      <div className="w-full container mx-auto px-4 md:px-20 py-16 flex flex-col md:flex-row items-center md:items-stretch flex-col-reverse md:flex-row gap-8 md:gap-12 rounded-3xl bg-[#FCF4EB]">
        {/* Left: Questions List */}
        <div className="md:w-1/2 w-full bg-[#FCF7F0] md:bg-transparent rounded-3xl flex flex-col justify-center">
          <h2 className="text-[#006B4F] text-xl md:text-2xl font-semibold mb-2">Common Questions About the<br />Mama and Papa Care Plan</h2>
          <span className="inline-block bg-white w-fit text-[#006B4F] text-xs font-medium px-3 py-1 rounded-full shadow mb-6">FAQs</span>
          <div className="flex flex-col gap- h-[350px] overflow-y-auto scrollbar-hide scroll-m-0 scrollbar-width-none">
            {faqs.map((faq, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`text-left px-3 py-2 rounded-0 transition-all duration-200 font-normal text-sm ${
                  selectedIdx === idx
                    ? ' text-[#006B4F] border-l-2 border-[#006B4F] font-normal'
                    : 'bg-transparent text-[#222] border-l-2 border-[#00000012] hover:bg-[#F3F3F3]'
                }`}
                style={{ outline: 'none' }}
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>
        {/* Right: Answer Display */}
        <div className="md:w-1/2 w-full bg-white rounded-3xl p-6 md:p-10 flex flex-col justify-center shadow-md ">
          <h3 className="text-[#006B4F] text-lg md:text-lg font-semibold mb-16">
            {faqs[selectedIdx].question}
          </h3>
          <p className="text-gray-600 text-base md:text-md font-normal">
            {faqs[selectedIdx].answer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 