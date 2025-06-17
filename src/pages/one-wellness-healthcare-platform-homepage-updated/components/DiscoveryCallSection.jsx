import React from 'react';
import { useNavigate } from 'react-router-dom';

const DiscoveryCallSection = () => {
  const navigate = useNavigate();

  return (
    <section id="chat-with-our-expert" className="w-full flex justify-center items-center pt-10 pb-10 px-2 bg-white">
      <div className="w-full container bg-[#025F4C] rounded-3xl flex flex-col md:flex-row items-center md:items-stretch shadow-lg overflow-hidden px-4 md:px-0">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start pl- md:pl-8 lg:pl-32 pr- md:pr-8 py-12 md:py-16">
          <img
            src={`/images/vic_img.png`}
            alt="Victoria"
            className="w-20 h-20 rounded-full mb-6 object-cover"
          />
          <div className="text-white text-base mb-2">Book a Discovery call with Victoria</div>
          <div className="text-white text-3xl md:text-4xl font-bold mb-4">30 mins discovery call</div>
          <div className="text-white text-sm font-light mb-8 max-w-md">
            At the end of your discovery call, you'll have a clear roadmap of the next steps you need to take to provide your parent the relevant and consistent care plan to help them manage lifestyle conditions, stay well and live longer even though you're oceans apart
          </div>
          <div className="flex gap-12 mt-4">
            <div>
              <div className="text-[#3DA647] text-lg font-bold">30 mins</div>
              <div className="text-white text-xs mt-1">Duration</div>
            </div>
            <div>
              <div className="text-[#3DA647] text-lg font-bold">Google Meet</div>
              <div className="text-white text-xs mt-1">Location</div>
            </div>
          </div>
        </div>
        {/* Right Side - Calendar */}
        <div className="flex-1 flex justify-center items-center bg-transparent p-8 md:p-12">
          <div 
            onClick={() => navigate('/booking-confirmed')} 
            className="cursor-pointer bg-white rounded-2xl shadow-md p-6 md:p-6 min-w-[320px] max-w-[360px] border-2 border-[#A3E3B7]"
          >
            <div className="text-[#025F4C] text-lg font-semibold mb-4">May 2025</div>
            <div className="grid grid-cols-7 gap-2 text-center text-[#176B1B] font-medium mb-2">
              <div className="text-[#A0A0A0]">S</div>
              <div className="text-[#A0A0A0]">M</div>
              <div className="text-[#A0A0A0]">T</div>
              <div className="text-[#A0A0A0]">W</div>
              <div className="text-[#A0A0A0]">T</div>
              <div className="text-[#A0A0A0]">F</div>
              <div className="text-[#A0A0A0]">S</div>
            </div>
            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2 text-center text-[#176B1B]">
              {/* Previous month days */}
              <div className="text-[#C0C0C0] line-through">27</div>
              <div className="text-[#C0C0C0] line-through">28</div>
              <div className="text-[#C0C0C0] line-through">29</div>
              <div className="text-[#C0C0C0] line-through">30</div>
              <div className=' line-through'>1</div>
              <div className=' line-through'>2</div>
              <div className=' line-through'>3</div>
              <div className=' line-through'>4</div>
              <div className=' line-through'>5</div>
              <div className=' line-through'>6</div>
              <div className=' line-through'>7</div>
              <div className=' line-through'>8</div>
              <div className="bg-[#025F4C] text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto">9</div>
              <div className=' line-through'>10</div>
              <div className=' line-through'>11</div>
              <div className=' line-through'>12</div>
              <div className=' line-through'>13</div>
              <div className="bg-[#A3E3B7] text-[#176B1B] rounded-full w-8 h-8 flex items-center justify-center mx-auto">14</div>
              <div className=' line-through'>15</div>
              <div className=' line-through'>16</div>
              <div className=' line-through'>17</div>
              <div className=' line-through'>18</div>
              <div className=' line-through'>19</div>
              <div className=' line-through'>20</div>
              <div className=' line-through'>21</div>
              <div className=' line-through'>22</div>
              <div className=' line-through'>23</div>
              <div className=' line-through'>24</div>
              <div className=' line-through'>25</div>
              <div className=' line-through'>26</div>
              <div className=' line-through'>27</div>
              <div className=' line-through'>28</div>
              <div className=' line-through'>29</div>
              <div className=' line-through'>30</div>
              <div className=' line-through'>31</div>
              <div className="text-[#C0C0C0] line-through">1</div>
              <div className="text-[#C0C0C0] line-through">2</div>
              <div className="text-[#C0C0C0] line-through">3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCallSection; 