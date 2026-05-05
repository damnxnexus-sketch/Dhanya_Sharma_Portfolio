import React from 'react';
import Link from 'next/link';

export default function FounderProfileSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#001b0f] overflow-hidden">
      {/* Background Abstract Gradients for Bold Vibe */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#735c00]/20 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6f9c84]/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Bold Typography & SEO Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#ffe088]"></span>
              <span className="font-sans text-[#ffe088] text-sm font-bold tracking-[0.15em] uppercase">
                The Visionary Leadership
              </span>
            </div>

            {/* Core SEO Heading */}
            <h2 className="font-serif text-white text-5xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em] mb-6">
              Dhanya Sharma
              <span className="block text-[#6f9c84] text-3xl lg:text-5xl font-medium mt-2 italic">
                Founder of Gyanam Education
              </span>
            </h2>

            {/* SEO Optimized Paragraphs */}
            <div className="space-y-6 font-sans text-white/80 text-lg lg:text-xl leading-[1.7] max-w-2xl">
              <p>
                In a system obsessed with rote memorization, Dhanya took a bold stand to redefine what success looks like for students in Delhi NCR. She is not just an educator; she is an architect of modern learning ecosystems.
              </p>
              <p>
                At the helm of{' '}
                <a 
                  href="https://gyanam.net/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#ffe088] border-b-2 border-[#ffe088]/30 hover:border-[#ffe088] transition-colors duration-300"
                  aria-label="Visit Gyanam Education official website"
                >
                  Gyanam Education
                </a>
                , she has built an institution entirely around a student-first ideology. Under her aggressive yet empathetic leadership, Gyanam is breaking down traditional barriers to deliver stress-free, future-ready education that actually matters.
              </p>
            </div>

            {/* Call to Action / Impact Button */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://gyanam.net/"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ffe088] text-[#001b0f] font-sans font-bold text-base px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(255,224,136,0.2)] hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                Explore Gyanam's Impact
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Visual/Image with Glassmorphism */}
          <div className="lg:col-span-5 relative">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.4)] group">
              
              {/* Note: Replace 'src' with the actual high-quality image of Dhanya */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001b0f] via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <img 
                src="/images/dhanya-sharma-founder.jpg" 
                alt="Dhanya Sharma - Founder of Gyanam Education" 
                className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Floating Glassmorphism Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <span className="block font-serif text-white text-2xl font-bold leading-none mb-1">
                      Mission
                    </span>
                    <span className="font-sans text-[#ffe088] text-xs font-semibold tracking-widest uppercase">
                      Student First. Always.
                    </span>
                  </div>
                  <div className="bg-[#ffe088] p-3 rounded-full text-[#001b0f]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12.971 1.816A5.208 5.208 0 0014.39 5.2v.001c0 1.942-1.129 3.65-2.83 4.475M12.97 1.816c-.035.034-.07.069-.104.105l-5.18 5.433a2.646 2.646 0 00-.737 1.844v.534A2.625 2.625 0 009.574 12.3h2.385a2.625 2.625 0 002.593-2.22l.536-3.418c.038-.242.062-.486.062-.731A5.209 5.209 0 0012.97 1.816zM12 14.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM12 15a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#ffe088]/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <div className="w-2 h-2 bg-[#ffe088] rounded-full absolute top-0"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}