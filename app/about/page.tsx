import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Dhanya Sharma | Founder & Visionary | Gyanam Education",
  description: "Learn about Dhanya Sharma, the visionary founder of Gyanam Education. Discover her mission to revolutionize learning in Delhi NCR through student-first pedagogy and holistic mentorship.",
  keywords: "Dhanya Sharma, Founder of Gyanam Education, educational reformer Delhi NCR, modern pedagogy, student-centric learning, holistic mentoring, education leadership India, stress-free education",
  openGraph: {
    title: "About Dhanya Sharma | Architect of Modern Education",
    description: "Meet the founder of Gyanam Education, transforming the educational landscape with empathy and innovation.",
    type: "profile",
  },
};

export default function AboutPage() {
  const milestones = [
    {
      year: "The Observation",
      title: "Identifying the Gaps",
      description: "Recognized the growing burnout among students in traditional academic structures, sparking the need for a system built on empathy and cognitive growth.",
    },
    {
      year: "The Catalyst",
      title: "Designing the Framework",
      description: "Collaborated with educational psychologists and subject matter experts to design a curriculum that prioritizes conceptual clarity over rote memorization.",
    },
    {
      year: "The Inception",
      title: "Founding Gyanam Education",
      description: "Launched Gyanam Education to bring this student-first ideology to life, breaking away from the toxic competitive culture of Delhi NCR.",
    },
    {
      year: "The Impact",
      title: "Empowering Thousands",
      description: "Successfully guided thousands of students to not just academic excellence, but also mental resilience and clarity about their future careers.",
    },
    {
      year: "The Future",
      title: "Scaling the Vision",
      description: "Continuously innovating digital and offline learning ecosystems to make premium, stress-free education accessible to every aspiring learner.",
    },
  ];

  const expertise = [
    {
      title: "Cognitive Pedagogy",
      description: "Designing learning systems that align with how the modern student's brain actually processes and retains information.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.758a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      ),
    },
    {
      title: "Student Psychology",
      description: "Deep understanding of adolescent pressure points, offering holistic mentorship to build unshakeable confidence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Educational Strategy",
      description: "Bridging the gap between traditional syllabus requirements and future-ready skill building.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM15 15.75a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h6a.75.75 0 01.75.75zm-9.75-9.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-3z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Community Building",
      description: "Fostering an inclusive ecosystem where educators, parents, and students collaborate for holistic growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path fillRule="evenodd" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#fcf9f8] via-[#f3f0ef] to-[#fcf9f8] relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6f9c84]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/80 backdrop-blur-sm border border-[#ffe088] text-[#574500] px-4 py-2 rounded-full font-sans text-[0.75rem] font-bold tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
                The Architect of Gyanam
              </div>
              <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em] mb-6">
                Rewriting the Rules of <span className="text-[#735c00] italic font-normal">Education</span>
              </h1>
              <p className="font-sans text-[#414943] text-lg lg:text-xl leading-[1.7] mb-8">
                <strong>Dhanya Sharma</strong> is not just an educator; she is a disruptor. As the founder of <strong>Gyanam Education</strong>, she is dismantling the high-pressure factory model of learning in Delhi NCR and replacing it with an ecosystem built on empathy, strategy, and genuine intellectual growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#mission"
                  className="bg-[#001b0f] text-white font-sans text-base font-semibold px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(0,27,15,0.2)] hover:bg-[#735c00] transition-all duration-300 hover:-translate-y-1"
                >
                  Discover the Mission
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/50 backdrop-blur-sm border-2 border-[#001b0f] text-[#001b0f] font-sans text-base font-semibold px-8 py-4 rounded-xl hover:bg-white transition-all duration-300"
                >
                  Connect with Dhanya
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_24px_64px_rgba(1,50,32,0.15)] aspect-[4/5] bg-[#e4e2e1] border border-white/50">
                {/* Glow Effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001b0f]/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/dhanya.png"
                  alt="Dhanya Sharma - Founder of Gyanam Education"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 text-white">
                    <p className="font-serif italic text-lg">"Learning should inspire, not intimidate."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-bold leading-[1.2] mb-6">
              The Genesis of <span className="text-[#735c00] italic font-normal">Gyanam</span>
            </h2>
            <p className="font-sans text-[#414943] text-lg leading-[1.7] max-w-2xl mx-auto">
              Building an educational institution wasn't a business decision; it was a response to a broken system. Here is how the vision evolved.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ffe088] via-[#735c00] to-[#001b0f] hidden lg:block rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } group`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-gray-100 shadow-[0_8px_32px_rgba(1,50,32,0.04)] group-hover:shadow-[0_20px_50px_rgba(1,50,32,0.1)] transition-all duration-500 group-hover:-translate-y-2">
                      <span className="inline-block bg-[#ffe088]/20 text-[#735c00] font-sans text-xs font-bold px-3 py-1 rounded-md uppercase tracking-widest mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-serif text-[#1b1c1c] text-3xl font-bold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="font-sans text-[#414943] text-base leading-[1.7]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex items-center justify-center w-8 h-8 bg-[#001b0f] rounded-full border-4 border-white shadow-[0_0_15px_rgba(115,92,0,0.5)] z-10 group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 bg-[#ffe088] rounded-full"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-bold leading-[1.2] mb-6">
              Pillars of <span className="text-[#735c00] italic font-normal">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[1.5rem] p-8 border border-white/50 shadow-[0_8px_32px_rgba(1,50,32,0.04)] hover:shadow-[0_24px_64px_rgba(1,50,32,0.12)] transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-[#fcf9f8] to-[#ffe088]/30 p-4 rounded-xl text-[#735c00] inline-block mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-[#1b1c1c] text-xl font-bold mb-3">{item.title}</h3>
                <p className="font-sans text-[#414943] text-sm leading-[1.7]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="py-24 px-6 lg:px-8 bg-[#001b0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/20 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffe088]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#ffe088] mx-auto mb-8 opacity-80">
            <path fillRule="evenodd" d="M12.971 1.816A5.208 5.208 0 0014.39 5.2v.001c0 1.942-1.129 3.65-2.83 4.475M12.97 1.816c-.035.034-.07.069-.104.105l-5.18 5.433a2.646 2.646 0 00-.737 1.844v.534A2.625 2.625 0 009.574 12.3h2.385a2.625 2.625 0 002.593-2.22l.536-3.418c.038-.242.062-.486.062-.731A5.209 5.209 0 0012.97 1.816zM12 14.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM12 15a4.875 4.875 0 100-9.75 4.875 4.875 0 000 9.75z" clipRule="evenodd" />
          </svg>

          <h2 className="font-serif text-white text-4xl lg:text-5xl font-bold leading-[1.2] mb-8">
            The Ultimate <span className="text-[#ffe088] italic font-normal">Mission</span>
          </h2>
          <p className="font-serif text-white/95 text-2xl lg:text-3xl leading-[1.6] italic mb-10">
            "Education should build minds, not just transcripts. We are here to create an environment where a student's mental well-being and academic success go hand in hand."
          </p>
          <p className="font-sans text-white/80 text-lg leading-[1.7] max-w-2xl mx-auto">
            Under her leadership, Gyanam Education is setting a new benchmark in the Delhi NCR region, proving that stress-free learning is not a myth, but a highly effective reality.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}