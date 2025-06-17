import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 flex justify-center px-2 py-3 bg-transparent">
      <div className="dropped_shadow relative container flex items-center justify-between border-2 border-black rounded-2xl shadow-lg px-3 py-2 bg-white ">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src="/photos/hero_img.png" alt="logo" className='h-8' />
          {/* <span className="text-2xl font-bold tracking-tight mr-2">MAMA &amp; PAPA</span>
          <span className="text-base font-normal">by </span>
          <span className="text-base font-bold ml-1">
            <span className="text-[#F7931E]">One</span>
            <span className="text-[#28A745]">wellness</span>
          </span> */}
        </div>
        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a href="#pricing" className="px-6 py-2 border border-[#28A745] rounded-md text-[#28A745] text-sm font-normal bg-white hover:bg-[#e6f4ea] transition">Buy health plan</a>
          <a href="#chat-with-our-expert" className="px-6 py-2 rounded-md bg-[#28A745] text-white text-sm font-normal hover:bg-[#218838] transition">Talk to an expert</a>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex items-center justify-center p-2 rounded-md border border-[#28A745] text-[#28A745] bg-white ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="#28A745" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full flex flex-col items-center bg-white z-40 animate-fadeIn">
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-6 py-3 border-b border-[#e6f4ea] text-[#28A745] font-medium hover:bg-[#e6f4ea]">Buy health plan</a>
          <a href="#chat-with-our-expert" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-6 py-3 text-white bg-[#28A745] font-medium hover:bg-[#218838]">Talk to an expert</a>
        </div>
      )}
    </header>
  );
};

export default Header;