import React from 'react';

export default function IdeologyImpactSection() {
  return (
    <section className="bg-gradient-to-b from-[#fcf9f8] to-[#f3f0ef] w-full py-[120px] px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow for a modern, premium aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6f9c84]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center relative z-10">
        
        {/* Card 1: Local SEO & Community Focus */}
        <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[1.5rem] p-10 flex flex-col justify-between h-[300px] shadow-[0_16px_40px_rgba(1,50,32,0.04)] transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(1,50,32,0.08)] duration-300">
          <div className="text-[#6f9c84]">
            {/* Location / Target Area Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-[#1b1c1c] text-[2.25rem] font-semibold leading-[1.3]">
              Delhi NCR
            </h3>
            <span className="font-sans text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase leading-[1.4]">
              Primary Impact Zone for <br/> Gyanam Education
            </span>
          </div>
        </div>

        {/* Card 2: Core Ideology (Prominent) */}
        <div className="bg-[#001b0f] rounded-[1.5rem] p-10 flex flex-col justify-between h-[340px] shadow-[0_24px_64px_rgba(1,50,32,0.2)] md:-translate-y-4 transition-all hover:-translate-y-6 hover:shadow-[0_30px_70px_rgba(1,50,32,0.3)] duration-300 relative z-20 border border-white/10">
          <div className="text-white">
            {/* Sparkle / Ideology Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-white text-[2.25rem] font-semibold leading-[1.3]">
              100%
            </h3>
            <span className="font-sans text-[#6f9c84] text-[0.75rem] font-semibold tracking-[0.05em] uppercase leading-[1.4]">
              Student-First Curriculum & <br/> Learning Philosophy
            </span>
          </div>
        </div>

        {/* Card 3: Future Vision / Approach */}
        <div className="bg-white/80 backdrop-blur-md border border-white/50 rounded-[1.5rem] p-10 flex flex-col justify-between h-[300px] shadow-[0_16px_40px_rgba(1,50,32,0.04)] transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(1,50,32,0.08)] duration-300">
          <div className="text-[#6f9c84]">
            {/* Lightbulb / Vision Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-[#1b1c1c] text-[2.25rem] font-semibold leading-[1.3]">
              Vision
            </h3>
            <span className="font-sans text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase leading-[1.4]">
              Building Accessible & <br /> Future-Ready Education
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}