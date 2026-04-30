import React from 'react';

export default function VisionCTASection() {
  return (
    <section className="bg-[#fcf9f8] w-full py-[60px] md:py-[120px] px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto relative rounded-[1.5rem] bg-[#001b0f] overflow-hidden shadow-[0_24px_64px_rgba(1,50,32,0.15)]">
        
        {/* Background Decorative Pattern (Right Side) */}
        {/* This simulates the diagonal architectural lines in the design */}
        <div 
          className="absolute inset-y-0 right-0 w-full md:w-2/3 opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: 'repeating-linear-gradient(-45deg, #013220, #013220 8px, transparent 8px, transparent 24px)',
            maskImage: 'linear-gradient(to right, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black)'
          }}
        ></div>
        
        {/* Soft gradient overlay to blend the pattern smoothly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001b0f] via-[#001b0f]/90 to-transparent pointer-events-none z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center p-10 md:p-16 lg:p-20 w-full md:max-w-[70%]">
          
          <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.2] mb-6 tracking-tight">
            Bridging the Gap Between <br className="hidden md:block" />
            Vision and Reality
          </h2>

          <p className="font-sans text-[#a2d1b7] text-base md:text-lg leading-[1.7] mb-10 max-w-2xl pr-4">
            The future of healthcare and education lies in collaborative ecosystems. We are building 
            a world where medical expertise informs policy, and education empowers every 
            individual to take control of their destiny.
          </p>

          <a 
            href="#manifesto" 
            className="group inline-flex items-center gap-3 font-serif text-[#e9c349] text-lg font-medium transition-all duration-300 hover:text-[#ffe088] w-fit"
          >
            Read the 2025 Vision Manifesto
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}