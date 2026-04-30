import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Dhanya Sharma | Founder of Gyanam Education',
  description: 'Bridging clinical mastery with human potential. Discover the journey of Dhanya Sharma, a visionary leader in healthcare and education.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#fcf9f8] font-sans text-[#1b1c1c] selection:bg-[#ffe088] selection:text-[#241a00]">
      
      {/* 1. Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif textxl font-semibold text-[#1b1c1c]">
            Dhanya Sharma
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[#414943] text-sm font-medium">
            <Link href="#philosophy" className="hover:text-[#735c00] transition-colors">Philosophy</Link>
            <Link href="#leadership" className="hover:text-[#735c00] transition-colors">Leadership</Link>
            <Link href="#education" className="hover:text-[#735c00] transition-colors">Education</Link>
            <Link href="#awards" className="hover:text-[#735c00] transition-colors">Awards</Link>
            <Link href="#manifesto" className="hover:text-[#735c00] transition-colors">Manifesto</Link>
          </nav>
          <Link 
            href="#contact" 
            className="bg-[#001b0f] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact
          </Link>
        </div>
      </header>

      <main className="pt-20">
        
        {/* 2. Hero Section */}
        <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 lg:px-8 pt-20">
          {/* Background Image Setup */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/dhanya-hero-bg.jpg" 
              alt="Dhanya Sharma" 
              fill 
              className="object-cover object-top opacity-30 grayscale" 
              priority
            />
            {/* High-end gradient fade to blend into the background color */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f8]/40 via-[#fcf9f8]/80 to-[#fcf9f8]"></div>
          </div>

          <div className="max-w-[1200px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="font-sans text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase mb-6">
                Physician • Educator • Visionary
              </span>
              <h1 className="font-serif text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.1] tracking-tight mb-8">
                Bridging Clinical <br />
                Mastery with Human <br />
                Potential.
              </h1>
              <p className="font-sans text-[#414943] text-lg lg:text-[1.125rem] leading-[1.7] max-w-2xl mb-12">
                Dhanya Sharma's journey is a tapestry of rigorous scientific inquiry and a profound commitment to the evolution of education through Gyanam.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#735c00]"></div>
                <span className="font-serif italic text-[#735c00] text-xl">The Pursuit of Excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Journey (Timeline) Section */}
        <section className="w-full py-[120px] px-6 lg:px-8 bg-[#fcf9f8]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <h2 className="font-serif text-[2.25rem] font-semibold leading-[1.3] mb-4">
                The Journey
              </h2>
              <p className="font-sans text-[#717973] text-base leading-[1.6] max-w-xs mb-8">
                A chronicle of dedication, from the sterile halls of medicine to the transformative space of education.
              </p>
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-[#e4e2e1]">
                <div className="bg-[#001b0f] w-6 h-6 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#414943]">Track Record of Leadership</span>
              </div>
            </div>

            {/* Right Timeline Content */}
            <div className="lg:col-span-7 lg:col-start-6 relative border-l border-[#e4e2e1] pl-8 lg:pl-12 pb-8">
              
              {/* Timeline Item 1 */}
              <article className="mb-20 relative">
                <div className="absolute w-3 h-3 bg-[#e9c349] rounded-full -left-[38px] lg:-left-[54px] top-2 ring-4 ring-[#fcf9f8]"></div>
                <span className="text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase block mb-3">Early Career • 2010</span>
                <h3 className="font-serif text-[1.5rem] font-medium mb-6">Medical Excellence</h3>
                <div className="relative w-full aspect-[16/9] rounded-[1rem] overflow-hidden mb-6 shadow-sm">
                  <Image src="/images/medical-room.jpg" alt="Operating room representing medical excellence" fill className="object-cover grayscale" />
                </div>
                <p className="font-sans text-[#414943] leading-[1.7]">
                  Beginning in the demanding field of internal medicine, Dhanya developed a deep respect for clinical precision and the resilience of the human spirit. This era defined her analytical approach and empathetic leadership.
                </p>
              </article>

              {/* Timeline Item 2 */}
              <article className="mb-20 relative">
                <div className="absolute w-3 h-3 bg-[#001b0f] rounded-full -left-[38px] lg:-left-[54px] top-2 ring-4 ring-[#fcf9f8]"></div>
                <span className="text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase block mb-3">The Milestone • 2018</span>
                <h3 className="font-serif text-[1.5rem] font-medium mb-6">Gyanam Education</h3>
                <div className="relative w-full aspect-[16/9] rounded-[1rem] overflow-hidden mb-6 shadow-sm">
                  <Image src="/images/library.jpg" alt="Library representing Gyanam Education" fill className="object-cover grayscale" />
                </div>
                <p className="font-sans text-[#414943] leading-[1.7]">
                  Recognizing the gaps in traditional learning, Dhanya founded Gyanam Education. It was here that her passion for pedagogy met her business acumen, creating a platform designed to nurture the next generation of thinkers and leaders.
                </p>
              </article>

              {/* Timeline Item 3 */}
              <article className="relative">
                <div className="absolute w-3 h-3 bg-[#001b0f] rounded-full -left-[38px] lg:-left-[54px] top-2 ring-4 ring-[#fcf9f8]"></div>
                <span className="text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase block mb-3">The Vision • Present</span>
                <h3 className="font-serif text-[1.5rem] font-medium mb-6">Executive Leadership</h3>
                <div className="relative w-full aspect-[16/9] rounded-[1rem] overflow-hidden mb-6 shadow-sm">
                  <Image src="/images/boardroom.jpg" alt="Boardroom representing executive leadership" fill className="object-cover grayscale" />
                </div>
                <p className="font-sans text-[#414943] leading-[1.7]">
                  Today, she integrates these worlds—science and soul, education and enterprise. Her objective is to create sustainable, knowledge-driven ecosystems that empower individuals to reach their highest potential.
                </p>
              </article>

            </div>
          </div>
        </section>

        {/* 4. Guiding Principles (Bento Grid) */}
        <section className="w-full py-[120px] px-6 lg:px-8 bg-[#001b0f] text-white">
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center mb-16">
            <h2 className="font-serif text-[2.25rem] font-semibold leading-[1.3] mb-4">
              Guiding Principles
            </h2>
            <p className="font-sans text-[#a2d1b7] text-lg max-w-2xl">
              The core tenets that define Dhanya's approach to healthcare, business, and education.
            </p>
          </div>

          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Intellectual Integrity */}
            <div className="bg-[#013220] p-10 rounded-[1.5rem] border border-white/5 flex flex-col justify-end min-h-[280px]">
              <div className="text-[#a2d1b7] mb-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Intellectual Integrity</h3>
              <p className="font-sans text-[#6f9c84] text-sm leading-relaxed">
                An unyielding commitment to truth, evidence-based practices, and the relentless pursuit of knowledge in all its forms.
              </p>
            </div>

            {/* Card 2: Empathetic Strategy (Highlight) */}
            <div className="bg-[#ffe088] text-[#241a00] p-10 rounded-[1.5rem] flex flex-col justify-end min-h-[280px] shadow-[0_24px_64px_rgba(255,224,136,0.1)]">
              <div className="text-[#745c00] mb-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Empathetic Strategy</h3>
              <p className="font-sans text-[#574500] text-sm leading-relaxed">
                Leading with the heart while planning with the mind. Every decision is measured by its impact on the individual and the community.
              </p>
            </div>

            {/* Card 3: Radical Innovation */}
            <div className="bg-[#013220] p-10 rounded-[1.5rem] border border-white/5 flex flex-col justify-end min-h-[280px]">
              <div className="text-[#a2d1b7] mb-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Radical Innovation</h3>
              <p className="font-sans text-[#6f9c84] text-sm leading-relaxed">
                Challenging the status quo to find more efficient, more humane, and more effective ways to serve.
              </p>
            </div>

            {/* Card 4: Quote Banner (Spans 2 columns on lg) */}
            <div className="lg:col-span-2 relative bg-[#013220] p-10 lg:p-16 rounded-[1.5rem] overflow-hidden flex items-center">
              <div className="absolute inset-0 z-0">
                <Image src="/images/forest-abstract.jpg" alt="Abstract forest background" fill className="object-cover opacity-30 mix-blend-overlay" />
              </div>
              <div className="relative z-10">
                <p className="font-serif text-[1.75rem] md:text-[2rem] font-semibold italic leading-[1.3] text-[#e9c349]">
                  "True leadership is the act of illuminating the path for others to find their own light."
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Leadership Style */}
        <section className="w-full py-[120px] px-6 lg:px-8 bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[1.5rem] overflow-hidden shadow-[0_24px_64px_rgba(1,50,32,0.08)]">
              <Image src="/images/dhanya-speaking.jpg" alt="Dhanya Sharma leading a discussion" fill className="object-cover" />
            </div>

            {/* Right Content */}
            <div className="flex flex-col">
              <span className="text-[#717973] text-[0.75rem] font-semibold tracking-[0.05em] uppercase mb-4">Leadership Style</span>
              <h2 className="font-serif text-[2.25rem] lg:text-[3rem] font-semibold leading-[1.2] tracking-tight mb-10 text-[#1b1c1c]">
                Quiet Authority, <br /> Resonant Impact.
              </h2>

              <div className="flex flex-col gap-8">
                {/* Point 1 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-[#f6f3f2] p-3 rounded-xl text-[#001b0f] flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold mb-1">Cognitive Agility</h4>
                    <p className="font-sans text-[#414943] text-sm leading-[1.6]">
                      The ability to pivot between micro-level clinical details and macro-level organizational strategy.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4 items-start">
                  <div className="bg-[#f6f3f2] p-3 rounded-xl text-[#001b0f] flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold mb-1">Authentic Presence</h4>
                    <p className="font-sans text-[#414943] text-sm leading-[1.6]">
                      Fostering environments of trust where transparency and human connection are the cornerstones of progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Call to Action Banner */}
        <section className="w-full py-[80px] px-6 lg:px-8 bg-white">
          <div className="max-w-[1000px] mx-auto bg-[#001b0f] rounded-[1.5rem] p-12 lg:p-16 text-center flex flex-col items-center shadow-[0_24px_64px_rgba(1,50,32,0.15)]">
            <h2 className="font-serif text-white text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.2] mb-6">
              Let's Shape the Future of <br className="hidden md:block"/> Learning.
            </h2>
            <p className="font-sans text-[#a2d1b7] text-sm lg:text-base max-w-xl mb-10">
              Explore collaborative synergies across healthcare, educational philosophy, or the Gyanam network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-[#ffe088] text-[#241a00] px-8 py-3.5 rounded-full font-semibold text-sm transition-transform hover:-translate-y-0.5 shadow-md">
                Inquire for Collaboration
              </button>
              <button className="bg-transparent border border-[#a2d1b7] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-colors hover:bg-white/5">
                Download Portfolio
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* 7. Footer */}
      <footer className="bg-[#001b0f] text-white pt-16 pb-8 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-0">
          
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold mb-4">Dhanya Sharma</span>
            <p className="font-sans text-[#6f9c84] text-xs max-w-[250px] leading-relaxed">
              © {new Date().getFullYear()} Dhanya Sharma. Medicine, Education, Leadership. All rights reserved.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-[#a2d1b7] mb-1">Connect</span>
              <a href="#" className="font-sans text-sm text-[#e4e2e1] hover:text-[#ffe088] transition-colors">LinkedIn</a>
              <a href="#" className="font-sans text-sm text-[#e4e2e1] hover:text-[#ffe088] transition-colors">Publications</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-[#a2d1b7] mb-1">Legal</span>
              <a href="#" className="font-sans text-sm text-[#e4e2e1] hover:text-[#ffe088] transition-colors">Terms</a>
              <a href="#" className="font-sans text-sm text-[#e4e2e1] hover:text-[#ffe088] transition-colors">Privacy</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}