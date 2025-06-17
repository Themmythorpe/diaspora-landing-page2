import React from 'react';

const RemoteHealthSection = () => {
  return (
    <section className="pt-12 md:pt-20 pb-8 bg-white">
      <div className="container mx-auto px-">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-4 w-full">
            <span className="inline-block bg-[#2A8774] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-widest"
            style={{
              letterSpacing: '0.2em',
            }}>
              PEACE OF MIND EVEN FROM AFAR
            </span>
          </div>
          <h2 className="text-[#0A4B35] text-3xl md:text-3xl font-semibold mb-4 max-w-[800px] mx-auto">
            We make sure your parents are cared for and send you evidence daily to prove it
          </h2>
          {/* <p className="text-gray-600 text-md">
            Designed to support you and your family with affordable, accessible care.
          </p> */}
        </div>

        <div className="flex flex-col md:flex-row gap-12 w-full">
          {/* Card 1 */}
          <div className="flex-1 bg-[#FCF8F4] rounded-2xl px-4 pt-8 flex flex-col md:flex-row gap-6 justify-between shadow-md">
            <div className="flex-1">
              <h3 className="text-[#11694A] text-xl font-semibold mb-2">
                “Diaspora Standard” care for Mama and Papa
              </h3>
              <p className="text-[#11694A] text-xs mb-6">
                Our Diaspora Standard Care treats every patient like our only patient. We deliver
                real care that matches the quality standards you're used to abroad.
              </p>
              {/* Audio Testimonial */}
              <div className="flex items-center bg-white rounded-xl px-2 py-2 mt-4 shadow">
                <button className="w-8 h-8 flex items-center justify-center bg-[#3DA647] rounded-full mr-2">
                  <svg width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="M4 3.993v8.014c0 .548.592.885 1.06.553l6.518-4.007a.667.667 0 0 0 0-1.106L5.06 3.44A.667.667 0 0 0 4 3.993z" />
                  </svg>
                </button>
                <div>
                  <div className="text-xs font-normal text-[#11694A] whitespace-nowrap">
                    Hear it from Mama Shade
                  </div>
                  <div className="text-[11px] text-[#8B8B8B]">
                    56 years old <span className="text-[#E05A33]">• Ibadan</span>
                  </div>
                </div>
                <span className="ml-auto text-xs text-[#8B8B8B]">01:05</span>
              </div>
            </div>

            <div className="flex-1 items-end gap-2 pt-6 mb-6">
              <img
                src="/photos/sect_three_img01.png"
                alt="Mama and nurse"
                className=" object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-[#FCF8F4] rounded-2xl px-4 pt-8 pb-4 flex flex-col md:flex-row gap-10 justify-between shadow-md">
            <div className="flex-1">
              <h3 className="text-[#11694A] text-xl font-semibold mb-2">
                See their care happen even from afar
              </h3>
              <p className="text-[#11694A] text-xs mb-6">
                Never wonder if Mama took her medicine or if Papa follows doctor's orders. We visit
                them and guide them every step of the way. You see it all—doctor visits, medicines,
                tests—in real time, in one place even when miles away.
              </p>
              {/* Audio Testimonial */}
              <div className="flex items-center bg-white rounded-xl px-2 py-2 mt-4 shadow">
                <button className="w-8 h-8 flex items-center justify-center bg-[#3DA647] rounded-full mr-2">
                  <svg width="16" height="16" fill="white" viewBox="0 0 16 16">
                    <path d="M4 3.993v8.014c0 .548.592.885 1.06.553l6.518-4.007a.667.667 0 0 0 0-1.106L5.06 3.44A.667.667 0 0 0 4 3.993z" />
                  </svg>
                </button>
                <div>
                  <div className="text-xs font-normal text-[#11694A] whitespace-nowrap">
                    Hear it from Pa Chijiekwu
                  </div>
                  <div className="text-[11px] text-[#8B8B8B]">
                    72 years old <span className="text-[#E05A33]">• Lagos</span>
                  </div>
                </div>
                <span className="ml-auto text-xs text-[#8B8B8B]">01:05</span>
              </div>
            </div>

            <div className="flex-1 items-end gap-2 mb-6">
              <img
                src="/photos/sect_three_img02.png"
                alt="Phone notification"
                className=" object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Buttons below cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-4">
          <a
            href="#chat-with-our-expert"
            className="px-4 py-3 text-center text-sm bg-[#28A745] text-white rounded-lg font-normal hover:bg-[#218838] transition"
          >
            Talk to our expert
          </a>
          <a
            href="#pricing"
            className="px-4 py-3 text-center text-sm border border-[#28A745] text-[#28A745] rounded-lg font-normal bg-white hover:bg-[#e6f4ea] transition"
          >
            Check our health plans ↓
          </a>
        </div>

        {/* Content Blocks */}
        <div className="space-y-20 pt-12 md:pt-20 bg-[#025F4C] rounded-3xl px-4 md:px-10 py-16 mt-10 md:mt-20">
          <div className="mb- w-fit mx-auto">
            <span className="block mx-auto bg-[#2A8774] w-fit text-center text-white text-xs font-semibold px-4 py-2 rounded-full tracking-widest"
            style={{
                letterSpacing: '0.2em',
              }}>
              CARE THAT DOESN’T END AT TREATMENTS
            </span>

            <div className="text-[#FFFFFF] text-3xl md:text-3xl font-semibold text-center mb-4 mt-6 max-w-[800px] mx-auto">
              Care that goes over and beyond for mama and papa.
            </div>
          </div>
          {/* First Block - Peace of Mind */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 lg:pl-">
              <h3 className="text-[#FFFFFF] text-xl md:text-3xl font-semibold mb-4">
                No more worrying about your parents' medications
              </h3>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Delivery within 1-2 hours
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Photo proof of each dose
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                3-month supply planning
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We save you money on medicine costs
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We keep track of all medicines in one place for easy access by you and doctors
              </p>

              <div className="mt-10">
                <a
                  href="#chat-with-our-expert"
                  className="px-4 py-3 text-sm bg-transparent border border-[#FFFFFF] text-white rounded-lg font-normal hover:bg-[#218838] transition"
                >
                  Get started today
                </a>
              </div>

              <div className="flex gap-4 md:gap-10 mt-10">
                <div className='w-full'>
                  <div className="text-[#3DA647] text-lg whitespace-nowrap font-bold">Why this matters?</div>
                  <div className="text-white text-xs">
                    You'll stop worrying about whether Mom and Dad are taking their medicine
                    correctly.
                  </div>
                </div>
                <div className='w-full'>
                  <div className="text-[#3DA647] text-lg whitespace-nowrap font-bold">Our promise</div>
                  <div className="text-white text-xs">
                    We send you a photo every time your parent takes their medicine.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden lg:px-16">
                <img
                  src="/photos/sect_four_img01.png"
                  alt="Elderly person using tablet with caregiver"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Block - Cost-Effective Solutions */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden lg:px-16">
                <img
                  src="/photos/sect_four_img02.png"
                  alt="Elderly person using tablet with caregiver"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-">
              <h3 className="text-[#FFFFFF] text-xl md:text-3xl font-semibold mb-4">
                We Visit In Person, Not Just Phone Calls
              </h3>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We visit your parents twice every month, same person each time
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We conduct weekly checkins to check BP and other health signs
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We look around the house to make sure it's safe
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We can be there in 30 minutes if there's an emergency
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We help your parents video call you during our visits
              </p>

              <div className="mt-10">
                <a
                  href="#chat-with-our-expert"
                  className="px-4 py-3 text-sm bg-transparent border border-[#FFFFFF] text-white rounded-lg font-normal hover:bg-[#218838] transition"
                >
                  Get started today
                </a>
              </div>

              <div className="flex gap-4 md:gap-10 mt-10">
                <div className='w-full'>
                  <div className="text-[#3DA647] text-lg whitespace-nowrap font-bold">Why this matters?</div>
                  <div className="text-white text-xs">
                    You won't feel guilty about being far away because someone you trust checks on
                    your parents regularly.
                  </div>
                </div>
                <div className='w-full'>
                  <div className="text-[#3DA647] text-lg whitespace-nowrap font-bold">Our promise</div>
                  <div className="text-white text-xs">
                    You will know the name of your parents' care partner and have their WhatsApp
                    number.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Block - Peace of Mind */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 lg:pl-">
              <h3 className="text-[#FFFFFF] text-xl md:text-3xl font-semibold mb-4">
                We Send Clear Reports You Can Understand
              </h3>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Live updates on your parents' health, daily and weekly in plain English
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We track health changes so you can spot problems early
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We explain how well your parents are taking their medicine
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We translate what the doctor says into simple terms
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We put all reports in one place for your whole family
              </p>

              <div className="mt-10">
                <a
                  href="#chat-with-our-expert"
                  className="px-4 py-3 text-sm bg-transparent border border-[#FFFFFF] text-white rounded-lg font-normal hover:bg-[#218838] transition"
                >
                  Get started today
                </a>
              </div>

              <div className="flex gap-4 md:gap-10 mt-10">
                <div className='w-full'>
                  <div className="text-[#3DA647] text-lg whitespace-nowrap font-bold">Why this matters?</div>
                  <div className="text-white text-xs">
                    You won't be confused by medical language or miss important updates about your
                    parents.
                  </div>
                </div>
                <div className='w-full'>
                  <div className="text-[#3DA647] text-lg whitespace-nowrap font-bold">Our promise</div>
                  <div className="text-white text-xs">
                    Our reports are checked by doctors who trained in the UK/US to make sure you can
                    understand everything.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden lg:px-16">
                <img
                  src="/photos/sect_four_img03.png"
                  alt="Elderly person using tablet with caregiver"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Fourth Block - Cost-Effective Solutions */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden lg:px-16">
                <img
                  src="/photos/sect_four_img04.png"
                  alt="Elderly person using tablet with caregiver"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-">
              <h3 className="text-[#FFFFFF] text-xl md:text-3xl font-semibold mb-4">
                We Prove Everything We Do
              </h3>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We track every visit with GPS so you know we were there
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We give money back if we ever miss a visit
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We send WhatsApp videos of important care moments
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                We have outside experts check our work
              </p>
              <p className="text-white text-sm flex items-center mb-4">
                <span className="mr-4">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.8284 1.41694L6.9183 0.517337C7.48343 1.44 8.03127 2.2358 8.5618 2.90474C9.09233 3.5852 9.64017 4.1907 10.2053 4.72124C10.7704 5.25177 11.3759 5.7477 12.0218 6.20904V6.31284C11.3759 6.7857 10.7704 7.28164 10.2053 7.80064C9.64017 8.33117 9.09233 8.93667 8.5618 9.61714C8.03127 10.2976 7.48343 11.0934 6.9183 12.0045L5.8284 11.1049C6.30127 10.3783 6.77413 9.72094 7.247 9.13274C7.7314 8.55607 8.21003 8.0486 8.6829 7.61034C9.15577 7.17207 9.6171 6.81454 10.0669 6.53774C10.5167 6.26094 10.9492 6.07064 11.3644 5.96684V6.55504C10.9492 6.45124 10.5167 6.26094 10.0669 5.98414C9.6171 5.70734 9.15577 5.3498 8.6829 4.91154C8.21003 4.47327 7.7314 3.96004 7.247 3.37184C6.77413 2.79517 6.30127 2.14354 5.8284 1.41694ZM0.5 5.56894H6.6415C7.3681 5.56894 8.00243 5.58624 8.5445 5.62084C9.0981 5.65544 9.58827 5.6958 10.015 5.74194L11.053 6.26094L10.015 6.77994C9.58827 6.82607 9.0981 6.86644 8.5445 6.90104C8.00243 6.93564 7.3681 6.95294 6.6415 6.95294H0.5V5.56894Z"
                      fill="white"
                    />
                  </svg>
                </span>
                WhatsApp group chat among doctors, you, and your parents for integrated care
              </p>

              <div className="mt-10">
                <a
                  href="#chat-with-our-expert"
                  className="px-4 py-3 text-sm bg-transparent border border-[#FFFFFF] text-white rounded-lg font-normal hover:bg-[#218838] transition"
                >
                  Get started today
                </a>
              </div>

              <div className="flex gap-4 md:gap-10 mt-10">
                <div className='w-full'>
                  <div className="text-[#3DA647] text-lg whitespace-nowrap font-bold">Why this matters?</div>
                  <div className="text-white text-xs">
                    You get the same reliable service you expect in the UK, US, or Canada.
                  </div>
                </div>
                <div className='w-full'>
                  <div className="text-[#3DA647] text-lg whitespace-nowrap font-bold">Our promise</div>
                  <div className="text-white text-xs">
                    We prove every visit with GPS tracking and send you notifications in real-time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteHealthSection;
