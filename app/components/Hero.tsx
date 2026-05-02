
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#fcf9f8] w-full py-[120px] px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Content (Spans 7 columns on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Tag / Chip */}
          <div className="bg-[#ffe088] text-[#574500] px-3 py-1.5 rounded-sm font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-8 shadow-sm">
            Expertise & Impact
          </div>

          {/* H1 Heading */}
          <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-[3rem] font-semibold leading-[1.2] tracking-[-0.01em] mb-6">
            Bridging Clinical Precision <br className="hidden lg:block" />
            with <span className="text-[#735c00] italic font-normal">Global Leadership</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-[#414943] text-lg leading-[1.7] max-w-xl mb-12">
            A synthesis of medical mastery, pedagogical innovation, and strategic business leadership designed to scale healthcare impact globally.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12 w-full max-w-xl">
            {/* Stat 1 */}
            <div className="flex flex-col gap-1">
              <span className="font-serif text-[2.25rem] font-semibold leading-[1.3] text-[#1b1c1c]">
                50k+
              </span>
              <span className="font-sans text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase">
                Students Impacted
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-12 bg-[#e4e2e1]"></div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-1">
              <span className="font-serif text-[2.25rem] font-semibold leading-[1.3] text-[#1b1c1c]">
                10+
              </span>
              <span className="font-sans text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase">
                Programs Created
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-12 bg-[#e4e2e1]"></div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-1">
              <span className="font-serif text-[2.25rem] font-semibold leading-[1.3] text-[#1b1c1c]">
                15+
              </span>
              <span className="font-sans text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase">
                Years Experience
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Image & Glass Card (Spans 5 columns on desktop) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0 lg:ml-auto w-full max-w-md lg:max-w-none">
          
          {/* Main Portrait Container */}
          <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_24px_64px_rgba(1,50,32,0.08)] bg-[#e4e2e1] aspect-[4/5] w-full">
            {/* Note: Replace src with Dhanya's actual high-res image path */}
            <Image 
              src="/dhanya.png" 
              alt="Dhanya Sharma - Founder of Gyanam Education"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Floating Glassmorphic Badge */}
          <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_16px_40px_rgba(1,50,32,0.08)] rounded-[1rem] p-5 flex items-center gap-4 z-20 transition-transform hover:-translate-y-1 duration-300">
            {/* Badge Icon Container */}
            <div className="bg-[#001b0f] text-white p-2.5 rounded-full flex-shrink-0 shadow-inner">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Badge Text */}
            <div className="flex flex-col pr-4">
              <span className="font-serif text-[#1b1c1c] text-[1rem] font-semibold leading-[1.3]">
                Global Recognition
              </span>
              <span className="font-sans text-[#414943] text-[0.875rem] mt-0.5">
                Top Educator 2023
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}