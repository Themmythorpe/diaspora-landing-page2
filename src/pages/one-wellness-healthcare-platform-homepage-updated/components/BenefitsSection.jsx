import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="w-full flex justify-center bg-white px-3 pb-12 pt-12">
      <div className="container bg-[#FCF4EB] rounded-3xl px-4 md:px-10 py-16 md:py-32 flex flex-col md:flex-row items-center relative overflow-hidden">
      <img src="/photos/sect_two_watermark.png" alt="Watermark image" className="absolute top-[12px] right-[-32px] rounded-2xl w-[350px] md:w-[400px] lg:w-[500px] h-[300px] z-10" />

        {/* Left Content */}
        <div className="flex-1 z-10">
          <div className="mb-4">
            <span className="inline-block bg-[#2A8774] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-widest">MAMA & PAPA NEED YOU</span>
          </div>
          <h1 className="text-[#025F4C] text-3xl md:text-4xl font-semibold leading-tight mb-4 max-w-xl">
          Send Health Home Without Stress
          </h1>
          <p className="text-[#595959] text-sm mb-8 max-w-lg">
          Living abroad while your parents age in Nigeria creates a gap that phone calls can't fill. The worry keeps you up at night but the Mama and Papa Care Plan bridges this gap with real people, real visits, and real proof with the healthcare standard you receive in abroad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#chat-with-our-expert" className="px-4 py-3 text-center text-sm bg-[#3DA647] text-white rounded-lg font-normal hover:bg-[#218838] transition">Talk to our expert</a>
            <a href="#pricing" className="px-4 py-3 text-center text-sm border border-[#228821] text-[#228821] rounded-lg font-normal hover:bg-white hover:text-[#11694A] transition">Check our health plans <span className="text-sm">&darr;</span></a>
          </div>
        </div>
        {/* Right Image & Avatars */}
        <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
          <div className="relative">
            <img src="/photos/sect_two_img.png" alt="Nurse with elderly woman" className="rounded-2xl w-[350px] md:w-[400px] lg:w-[450px] z-10 relative" />
            {/* Avatars */}
            {/* <img src="/images/avatar1.png" alt="avatar1" className="absolute -top-10 -left-10 w-24 h-24 rounded-full border-4 border-white shadow-md" />
            <img src="/images/avatar2.png" alt="avatar2" className="absolute top-1/2 -right-12 w-24 h-24 rounded-full border-4 border-white shadow-md" style={{transform: 'translateY(-50%)'}} />
            <img src="/images/avatar3.png" alt="avatar3" className="absolute -bottom-10 left-1/2 w-24 h-24 rounded-full border-4 border-white shadow-md" style={{transform: 'translateX(-50%)'}} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
