import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center bg-white px-3 pb-1 pt-24">
      <div className="container bg-[#025F4C] rounded-3xl px-4 md:px-10 py-12 md:py-20 flex flex-col md:flex-row items-center relative overflow-hidden">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <div className="mb-4">
            <span className="inline-block bg-[#2A8774] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-widest">FOR AFRICANS LIVING ABROAD</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight mb-4 max-w-xl">
            The Eyes, Ears and Hands You Wish You Had Back Home
          </h1>
          <p className="text-white text-sm mb-8 max-w-lg">
            Give Your Parents The Care They Deserve - With Proof It's Getting Done Right
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#chat-with-our-expert" className="px-8 py-3 text-center text-sm bg-[#28A745] text-white rounded-lg font-normal hover:bg-[#218838] transition">Talk to our expert</a>
            <a href="#pricing" className="px-8 py-3 text-center text-sm border border-white text-white rounded-lg font-normal hover:bg-white hover:text-[#11694A] transition">Check our health plans</a>
          </div>
          <div className="flex gap-10 mt-6">
            <div>
              <div className="text-[#3DA647] text-lg font-bold">Western</div>
              <div className="text-white text-sm">Standards Procedures</div>
            </div>
            <div>
              <div className="text-[#3DA647] text-lg font-bold">10/10</div>
              <div className="text-white text-sm">Rated Service</div>
            </div>
          </div>
        </div>
        {/* Right Image & Avatars */}
        <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
          <div className="relative">
            <img src="/photos/hero_sect_img.png" alt="Nurse with elderly woman" className="rounded-2xl w-[350px] md:w-[400px] lg:w-[420px] z-10 relative" />
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

export default HeroSection;
