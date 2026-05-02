import React from 'react';

export default function EthosSection() {
  return (
    <section className="bg-white w-full py-[120px] px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        
        {/* Left Column: Heading (Spans 4 columns on desktop) */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-[2.25rem] font-semibold leading-[1.3] tracking-tight">
            The Ethos of <br className="hidden md:block" />
            Modern <br className="hidden md:block" />
            Leadership
          </h2>
          
          {/* Accent Line - Using the Secondary (Gold) theme color */}
          <div className="w-16 h-1 bg-[#735c00] mt-8 rounded-full"></div>
        </div>

        {/* Right Column: Body Text (Spans 7 columns, offset by 1 on large screens) */}
        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 flex flex-col gap-6">
          <p className="font-sans text-[#414943] text-lg lg:text-[1.125rem] leading-[1.7]">
            Dhanya Sharma's journey is defined by a relentless pursuit of excellence at the intersection of three vital pillars: medicine, education, and social impact. As a visionary founder, she bridges the gap between academic theory and real-world application, ensuring that leadership is not just a title, but a transformative force.
          </p>
          
          <p className="font-sans text-[#414943] text-lg lg:text-[1.125rem] leading-[1.7]">
            Her philosophy is simple yet profound: empower the mind to heal the collective. Through structured mentorship and clinical innovation, she is rewriting the narrative of what it means to be a healer in the 21st century.
          </p>
        </div>

      </div>
    </section>
  );
}