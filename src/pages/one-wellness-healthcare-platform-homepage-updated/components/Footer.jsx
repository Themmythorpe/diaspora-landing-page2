import React from 'react';

const Footer = () => {
  return (
    <>
    <div className="w-full relative">
    <footer className="w-full bg-transparent md:pb-12 flex flex-col items-center justify-center">
      <div className="w-full container mx-auto bg-white rounded-3xl border border-[#F2F2F2] flex flex-col items-center px-4 md:px-0 py-16 relative">
        {/* Logo */}
        <img src="/photos/hero_img.png" alt="OneWellness" className="h-10 mx-auto mb-4" />
        {/* Title */}
        {/* <div className="text-center mb-8">
          <h2 className="text-[#006B4F] text-3xl md:text-4xl font-bold tracking-wide leading-tight">MAMA & PAPA</h2>
          <span className="block text-[#228821] text-lg font-semibold -mt-1">by <span className="text-[#228821] font-bold">One</span><span className="text-[#228821]">wellness</span></span>
        </div> */}
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <a href='#pricing' className="px-6 text-sm py-2 border border-[#006B4F] text-[#006B4F] rounded-lg font-medium bg-white hover:bg-[#F3F3F3] transition">
            Buy health plan
          </a>
          <a href='#chat-with-our-expert' className="px-6 text-sm py-2 bg-[#3DA647] text-white rounded-lg font-medium hover:bg-[#1a6a1a] transition">
            Talk to an expert
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex gap-4 mb-10">
          <a
            href="https://www.tiktok.com/@onewellnessng?_t=ZM-8x5fIw9Dhm4&_r=1"
            target='_blank'
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-[#E5E7EB] shadow-sm hover:bg-[#F3F3F3] transition"
          >
            {/* TikTok icon */}
            {/* <img src="/images/tiktok.svg" alt="TikTok" className="w-5 h-5" /> */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11010_22764)">
                <g clip-path="url(#clip1_11010_22764)">
                  <g clip-path="url(#clip2_11010_22764)">
                    <path
                      d="M10.0011 0.908203C4.98029 0.908203 0.910156 4.97834 0.910156 9.99911C0.910156 15.0199 4.98029 19.09 10.0011 19.09C15.0219 19.09 19.092 15.0199 19.092 9.99911C19.092 4.97834 15.0219 0.908203 10.0011 0.908203ZM14.6041 9.16039C13.6387 9.16039 12.6994 8.84712 11.9762 8.31701L11.9704 11.9214C11.9699 12.5893 11.7656 13.2411 11.3849 13.7898C11.0042 14.3387 10.4652 14.7583 9.83988 14.9927C9.21452 15.2272 8.53251 15.2654 7.88487 15.1022C7.23725 14.939 6.65478 14.5822 6.21523 14.0793C5.77567 13.5765 5.49991 12.9516 5.42476 12.2879C5.34961 11.6243 5.47863 10.9535 5.79462 10.3651C6.1106 9.77666 6.59852 9.29866 7.19326 8.99476C7.78799 8.69087 8.46127 8.57558 9.12325 8.66428V10.4344C8.81097 10.3421 8.47758 10.3505 8.17037 10.4584C7.86316 10.5662 7.5977 10.7681 7.41166 11.0353C7.22562 11.3026 7.12843 11.6216 7.13388 11.9471C7.13934 12.2727 7.24715 12.5882 7.44204 12.849C7.63692 13.1099 7.90898 13.3027 8.21964 13.4003C8.53029 13.4978 8.86377 13.495 9.17279 13.3924C9.48179 13.2897 9.75061 13.0924 9.94116 12.8284C10.1317 12.5643 10.2342 12.247 10.2343 11.9214V4.79077H12.0552C12.0552 5.12548 12.1211 5.45691 12.2492 5.76614C12.3772 6.07538 12.565 6.35635 12.8017 6.59302C13.0383 6.82969 13.3193 7.01744 13.6285 7.14552C13.9378 7.2736 14.2692 7.33953 14.604 7.33952L14.6041 9.16039Z"
                      fill="#001912"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_11010_22764">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip1_11010_22764">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip2_11010_22764">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/onewellnessapp?igsh=MWtrZzA3bXY3aWRheg=="
            target='_blank'
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-[#E5E7EB] shadow-sm hover:bg-[#F3F3F3] transition"
          >
            {/* Instagram icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11010_22769)">
                <g clip-path="url(#clip1_11010_22769)">
                  <g clip-path="url(#clip2_11010_22769)">
                    <mask
                      id="mask0_11010_22769"
                      style={{ maskType: 'luminance' }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <path d="M20 0H0V20H20V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_11010_22769)">
                      <path
                        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                        fill="#001912"
                      />
                      <path
                        d="M13.4375 2.1875H6.5625C5.40218 2.1875 4.28938 2.64844 3.46891 3.46891C2.64844 4.28938 2.1875 5.40218 2.1875 6.5625V13.4375C2.1875 14.5978 2.64844 15.7106 3.46891 16.5311C4.28938 17.3516 5.40218 17.8125 6.5625 17.8125H13.4375C14.5978 17.8125 15.7106 17.3516 16.5311 16.5311C17.3516 15.7106 17.8125 14.5978 17.8125 13.4375V6.5625C17.8125 5.40218 17.3516 4.28938 16.5311 3.46891C15.7106 2.64844 14.5978 2.1875 13.4375 2.1875ZM10 13.75C9.25832 13.75 8.5333 13.5301 7.91661 13.118C7.29993 12.706 6.81928 12.1203 6.53545 11.4351C6.25162 10.7498 6.17736 9.99584 6.32206 9.26841C6.46675 8.54098 6.8239 7.8728 7.34835 7.34835C7.8728 6.8239 8.54098 6.46675 9.26841 6.32206C9.99584 6.17736 10.7498 6.25162 11.4351 6.53545C12.1203 6.81928 12.706 7.29993 13.118 7.91661C13.5301 8.5333 13.75 9.25832 13.75 10C13.75 10.9946 13.3549 11.9484 12.6517 12.6517C11.9484 13.3549 10.9946 13.75 10 13.75ZM14.0625 6.875C13.8771 6.875 13.6958 6.82002 13.5417 6.717C13.3875 6.61399 13.2673 6.46757 13.1964 6.29627C13.1254 6.12496 13.1068 5.93646 13.143 5.7546C13.1792 5.57275 13.2685 5.4057 13.3996 5.27459C13.5307 5.14348 13.6977 5.05419 13.8796 5.01801C14.0615 4.98184 14.25 5.00041 14.4213 5.07136C14.5926 5.14232 14.739 5.26248 14.842 5.41665C14.945 5.57082 15 5.75208 15 5.9375C15 6.18614 14.9012 6.4246 14.7254 6.60041C14.5496 6.77623 14.3111 6.875 14.0625 6.875Z"
                        fill="#001912"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_11010_22769">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip1_11010_22769">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip2_11010_22769">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          {/* <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-[#E5E7EB] shadow-sm hover:bg-[#F3F3F3] transition"
          >
        Telegram icon 
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11010_22779)">
                <g clip-path="url(#clip1_11010_22779)">
                  <g clip-path="url(#clip2_11010_22779)">
                    <path
                      d="M10.0008 0.800781C15.082 0.800781 19.2008 4.91958 19.2008 10.0008C19.2008 15.082 15.082 19.2008 10.0008 19.2008C4.91958 19.2008 0.800781 15.082 0.800781 10.0008C0.800781 4.91958 4.91958 0.800781 10.0008 0.800781ZM13.1744 13.7508C13.3436 13.2316 14.1364 8.05718 14.2344 7.03758C14.264 6.72878 14.1664 6.52358 13.9752 6.43198C13.744 6.32078 13.4016 6.37638 13.0044 6.51958C12.4596 6.71598 5.49478 9.67318 5.09238 9.84438C4.71078 10.0064 4.34998 10.1832 4.34998 10.4392C4.34998 10.6192 4.45678 10.7204 4.75118 10.8256C5.05758 10.9348 5.82918 11.1688 6.28478 11.2944C6.72358 11.4156 7.22318 11.3104 7.50318 11.1364C7.79998 10.952 11.2252 8.65998 11.4712 8.45918C11.7168 8.25838 11.9128 8.51558 11.712 8.71678C11.5112 8.91758 9.15998 11.1996 8.84998 11.5156C8.47358 11.8992 8.74078 12.2968 8.99318 12.456C9.28158 12.6376 11.3556 14.0288 11.668 14.252C11.9804 14.4752 12.2972 14.5764 12.5872 14.5764C12.8772 14.5764 13.03 14.1944 13.1744 13.7508Z"
                      fill="black"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_11010_22779">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip1_11010_22779">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip2_11010_22779">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a> */}
          <a
            href="https://x.com/onewellnessng?s=21"
            target='_blank'
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-[#E5E7EB] shadow-sm hover:bg-[#F3F3F3] transition"
          >
            {/* X icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11010_22784)">
                <g clip-path="url(#clip1_11010_22784)">
                  <path
                    d="M15.2013 1.875H17.9579L11.9354 8.75833L19.0204 18.125H13.4729L9.12797 12.4442L4.15631 18.125H1.39797L7.83964 10.7625L1.04297 1.875H6.73131L10.6588 7.0675L15.2013 1.875ZM14.2338 16.475H15.7613L5.90131 3.43833H4.26214L14.2338 16.475Z"
                    fill="#001912"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_11010_22784">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
                <clipPath id="clip1_11010_22784">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        {/* Bottom Row */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end px-2 md:px-8 mt-8">
          <div className="text-xs text-[#6B7280] text-center md:text-left mb-2 md:mb-0">
            Need help? Reach us at{' '}
            <span className="text-[#006B4F]">onewellness@onehealthng.com</span>
            <br />
            ©2024 OneWellness All Rights Reserved.
          </div>
          <div className="text-xs text-[#6B7280] text-center md:text-right">
            Address <span className="text-black">56 Opebi Road, Ikeja, Lagos</span>
            <br />
            <a href="#" className="hover:underline mr-2">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>

    <footer
      className="w-fit mx-auto relative md:mx-auto md:fixed md:left-[50%] md:transform md:-translate-x-1/2 bottom-0 z-50 flex justify-center px-2 py-6 bg-transparent"
      style={{
        width: 'max-content',
        // left: '50%',
        // transform: 'translateX(-50%)',
      }}
    >
      <div
        className="dropped_shadow relative container flex flex-col md:flex-row items-center justify-between border-2 border-black rounded-xl shadow-lg px-3 md:px-5 py-2 bg-white gap-3 md:gap-0"
        style={{ minWidth: '320px' }}
      >
        {/* Logo and Text */}
        <div className="flex flex-col md:flex-row items-center md:items-center w-full md:w-auto">
          <div className="relative w-fit flex-shrink-0 flex items-center justify-center">
            <img src="/photos/footer_avatar01.png" alt="logo" className="relative h-8 w-8" />
            <img src="/photos/footer_avatar02.png" alt="logo" className="absolute top-0 left-6 h-8" />
          </div>
          <span className="text-base md:text-xl font-semibold tracking-tight whitespace-nowrap ml-0 md:ml-8 mt-2 md:mt-0 text-center">
            Get started with an intro call
          </span>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto md:ml-16 mt-2 md:mt-0">
          <a
            href="#pricing"
            className="text-xs px-4 py-2 border border-[#28A745] rounded-md text-[#28A745] font-normal bg-white hover:bg-[#e6f4ea] transition w-full md:w-auto text-center"
          >
            Buy health plan
          </a>
          <a
            href="#chat-with-our-expert"
            className="text-xs px-4 py-2 rounded-md bg-[#28A745] text-white font-normal hover:bg-[#218838] transition w-full md:w-auto text-center"
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
};

export default Footer;
