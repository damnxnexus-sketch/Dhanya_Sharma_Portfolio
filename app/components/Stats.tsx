import React from 'react';

export default function ImpactStatsSection() {
  return (
    <section className="bg-[#fcf9f8] w-full py-[120px] px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
        
        {/* Card 1: Lives Impacted */}
        <div className="bg-white rounded-[1.5rem] p-10 flex flex-col justify-between h-[300px] shadow-[0_16px_40px_rgba(1,50,32,0.05)] transition-transform hover:-translate-y-1 duration-300">
          <div className="text-[#735c00]">
            {/* Users Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-serif text-[#1b1c1c] text-[2.25rem] font-semibold leading-[1.3]">
              50k+
            </span>
            <span className="font-sans text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase leading-[1.2]">
              Lives Impacted Globally
            </span>
          </div>
        </div>

        {/* Card 2: Educational Frameworks (Prominent) */}
        <div className="bg-[#001b0f] rounded-[1.5rem] p-10 flex flex-col justify-between h-[340px] shadow-[0_24px_64px_rgba(1,50,32,0.15)] md:-translate-y-4 transition-transform hover:-translate-y-5 duration-300 relative z-10">
          <div className="text-white">
            {/* Academic Cap Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-serif text-white text-[2.25rem] font-semibold leading-[1.3]">
              12+
            </span>
            <span className="font-sans text-[#6f9c84] text-[0.75rem] font-semibold tracking-[0.05em] uppercase leading-[1.2]">
              Educational Frameworks
            </span>
          </div>
        </div>

        {/* Card 3: Global Leadership Awards */}
        <div className="bg-white rounded-[1.5rem] p-10 flex flex-col justify-between h-[300px] shadow-[0_16px_40px_rgba(1,50,32,0.05)] transition-transform hover:-translate-y-1 duration-300">
          <div className="text-[#735c00]">
            {/* Award / Star Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-serif text-[#1b1c1c] text-[2.25rem] font-semibold leading-[1.3]">
              08
            </span>
            <span className="font-sans text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase leading-[1.2]">
              Global Leadership<br />Awards
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}