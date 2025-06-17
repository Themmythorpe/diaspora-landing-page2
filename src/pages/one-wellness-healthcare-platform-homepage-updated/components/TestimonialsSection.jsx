import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatima Shuaibu",
      role: "Lead Accountant, Faygo.",
      image: "/images/testimonial_img01.png",
      content: "With OneWellness Remit, I can monitor my mom and dad's medical records from Sweden, including their risk levels and any times they needed hospitalization. The best part? I no longer have to worry about sending money to my parents on time to cover their medical expenses—it's all taken care of seamlessly."
    },
    {
      id: 2,
      name: "Gbenga Adeniji",
      role: "Operations Analyst, Hefty.",
      image: "/images/testimonial_img01.png",
      content: "OneWellness has transformed how I manage my parents' healthcare from abroad. The platform's comprehensive monitoring and automatic payment systems give me complete peace of mind, knowing they're well taken care of without any financial delays."
    },
    {
      id: 3,
      name: "Nkechi Akagbogu",
      role: "Finance Lead, Satrin.",
      image: "/images/testimonial_img01.png",
      content: "The seamless integration of healthcare monitoring and payment systems has made it so much easier to ensure my parents receive timely medical care. OneWellness truly understands the challenges of managing family healthcare from a distance."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoWidth, setVideoWidth] = useState(420);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
    setIsPlaying(!isPlaying);
  };
  const makeBig = () => setVideoWidth(560);
  const makeSmall = () => setVideoWidth(320);
  const makeNormal = () => setVideoWidth(420);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <section id="testimonials" className="pb-5 bg-transparent">
      <div className="container mx-auto px-">
      <div className="space-y-20 bg-[#FCF4EB] rounded-3xl px-10 py-10">
      {/* Header */}
          {/* <div className="mb-12">
            <p className="text-gray-600 text-lg mb-4">See what our customers are saying</p>
            <h2 className="text-[#0A4B35] text-3xl md:text-5xl font-bold">
              Don't Take Our<br />
              Word for It
            </h2>
          </div> */}

          {/* Testimonial Content */}
          <div className="w-full max-w-4xl mx-auto rounded-3xl flex flex-col items-center justify-center px-4 py-10 relative">
              <div className="flex flex-col items-center rounded-full bg-[#025F4C33] text-[#176B1B] text-xs font-semibold px-4 py-2 mb-4"
              style={{
                letterSpacing: '0.15em',
              }}>
                WANT MORE DETAILS?
              </div>
              <div className="text-[#176B1B] text-xl md:text-3xl text-center font-semibold mb-7">
                Victoria will explain everything
              </div>
              {/* Video Controls */}
              <div className="flex flex-col items-center w-full mb-4">
                {/* <div className="flex flex-wrap justify-center gap-2 mb-3">
                  <button onClick={playPause} className="px-4 py-2 bg-[#3DA647] text-white rounded-md text-xs font-medium hover:bg-[#218838] transition">Play/Pause</button>
                  <button onClick={makeBig} className="px-4 py-2 bg-[#E6F4EA] text-[#025F4C] rounded-md text-xs font-medium border border-[#3DA647] hover:bg-[#3DA647] hover:text-white transition">Big</button>
                  <button onClick={makeSmall} className="px-4 py-2 bg-[#E6F4EA] text-[#025F4C] rounded-md text-xs font-medium border border-[#3DA647] hover:bg-[#3DA647] hover:text-white transition">Small</button>
                  <button onClick={makeNormal} className="px-4 py-2 bg-[#E6F4EA] text-[#025F4C] rounded-md text-xs font-medium border border-[#3DA647] hover:bg-[#3DA647] hover:text-white transition">Normal</button>
                </div> */}

                <div className="relative w-fit mx-auto border" onClick={playPause}>
                <video
                  id="video1"
                  ref={videoRef}
                  width={videoWidth}
                  className="mx-auto w-full h-auto max-h-[500px] rounded-lg border border-[#E6F4EA]"
                  src="/videos/landpage_video.mp4"
                  autoPlay
                  loop={false}
                  // controls
                >
                  Your browser does not support HTML video.
                </video>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <button onClick={playPause} className={`cursor-pointer z-50 w-12 h-12 flex items-center justify-center ${isPlaying ? 'bg-transparent border border-[#FFFFFF] text-[#FFFFFF]' : 'bg-[#3DA647] text-white'} rounded-full text-xs font-medium  transition`}>
                    {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
                  </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;