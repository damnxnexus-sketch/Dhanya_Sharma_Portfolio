import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modern Learning Programs | Gyanam Education Delhi NCR | Dhanya Sharma",
  description: "Discover Gyanam Education's student-centric programs designed by Dhanya Sharma. Offering stress-free competitive preparation, holistic mentoring, and future-ready skills in Delhi NCR.",
  keywords: "Gyanam Education programs, holistic learning Noida, student-centric education Delhi NCR, modern pedagogy, stress-free board preparation, Dhanya Sharma education model, competitive exams mentorship",
  openGraph: {
    title: "Future-Ready Educational Programs | Gyanam Education",
    description: "Transforming the learning experience with empathy-driven, modern educational programs.",
    type: "website",
  },
};

export default function ProgramsPage() {
  const programs = [
    {
      title: "The Foundation Framework",
      tagline: "Building Strong Concepts Without the Pressure",
      description: "A radically new approach to middle and high school education. We focus on deep conceptual clarity rather than rote memorization, helping students build a lifelong love for learning.",
      duration: "Academic Year Curriculum",
      level: "Middle & High School",
      features: [
        "Interactive, visual-first learning modules",
        "No-stress evaluation and continuous feedback",
        "Focus on 'Why' and 'How' over 'What'",
        "Integration of practical, real-world examples",
        "Small cohort sizes for personalized attention",
      ],
      outcomes: "Cultivates analytical thinking and natural curiosity",
      color: "from-[#735c00] to-[#a08000]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        </svg>
      ),
    },
    {
      title: "Competitive Excellence Pathway",
      tagline: "Navigate Delhi NCR's Competitive Landscape Smartly",
      description: "Designed specifically for the intense academic environment of the Delhi NCR region. We prepare students for top-tier competitive exams through strategic planning, not just endless studying.",
      duration: "12-24 Months",
      level: "Senior Secondary",
      features: [
        "Smart study frameworks to maximize retention",
        "Mental health monitoring and burnout prevention",
        "Strategic time management and exam psychology",
        "Customized roadmaps based on individual strengths",
        "Regular 1-on-1 progress alignment sessions",
      ],
      outcomes: "High academic performance with zero burnout",
      color: "from-[#001b0f] to-[#003d28]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477z" />
        </svg>
      ),
    },
    {
      title: "Holistic Mentorship Clinic",
      tagline: "Empowering the Student Mind",
      description: "Education isn't just academic; it's psychological. This program offers dedicated counseling and mentorship to help students navigate peer pressure, career confusion, and anxiety.",
      duration: "Ongoing Support",
      level: "All Students & Parents",
      features: [
        "Confidential psychological support and counseling",
        "Career discovery workshops tailored to modern industries",
        "Parent-student communication bridging sessions",
        "Confidence and public speaking modules",
        "Mindfulness and emotional intelligence training",
      ],
      outcomes: "Resilient, confident, and self-aware individuals",
      color: "from-[#735c00] to-[#a08000]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm9 4.5a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-[#fcf9f8] to-[#f3f0ef] relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6f9c84]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="bg-white/80 backdrop-blur-sm border border-[#ffe088] text-[#574500] px-4 py-2 rounded-full font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
            Gyanam Learning Ecosystem
          </div>
          <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
            Learning, <span className="text-[#735c00] italic font-normal">Reimagined.</span>
          </h1>
          <p className="font-sans text-[#414943] text-xl leading-[1.7] max-w-3xl mx-auto mb-8">
            Step away from the factory model of education. Dr. Dhanya Sharma's methodology at Gyanam Education prioritizes your mental well-being alongside academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#programs"
              className="bg-[#001b0f] text-white font-sans text-base font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(0,27,15,0.2)] hover:bg-[#735c00] transition-all duration-300 hover:shadow-[0_0_30px_rgba(115,92,0,0.3)] hover:-translate-y-1"
            >
              Explore Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* SEO/Ideology Stats Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#001b0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {[
              { number: "100%", label: "Student-First Philosophy" },
              { number: "Delhi NCR", label: "Primary Impact Zone" },
              { number: "0", label: "Tolerance for Burnout" },
            ].map((stat, index) => (
              <div key={index} className="py-4 md:py-0">
                <div className="font-serif text-[#ffe088] text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="font-sans text-white/80 text-sm tracking-[0.05em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-[0_8px_32px_rgba(1,50,32,0.04)] hover:shadow-[0_20px_50px_rgba(1,50,32,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Icon & Meta */}
                  <div className="lg:col-span-3">
                    <div className={`bg-gradient-to-br ${program.color} p-5 rounded-xl text-white inline-block mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      {program.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#735c00]">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                        </svg>
                        <span className="font-sans text-[#414943] text-sm font-medium">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#735c00]">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-sans text-[#414943] text-sm font-medium">{program.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-9">
                    <h3 className="font-serif text-[#1b1c1c] text-3xl font-semibold mb-2 group-hover:text-[#735c00] transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="font-sans text-[#735c00] text-lg font-medium mb-4">
                      {program.tagline}
                    </p>
                    <p className="font-sans text-[#414943] text-base leading-[1.7] mb-6">
                      {program.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-sans text-[#1b1c1c] text-sm font-semibold tracking-[0.05em] uppercase mb-4">
                        Key Pillars
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#735c00] flex-shrink-0 mt-0.5">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                            <span className="font-sans text-[#414943] text-sm leading-[1.6]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#e4e2e1]">
                      <div>
                        <span className="font-sans text-[#717973] text-xs font-semibold tracking-[0.05em] uppercase block mb-1">
                          Core Outcome
                        </span>
                        <span className="font-sans text-[#1b1c1c] text-base font-semibold">
                          {program.outcomes}
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="bg-[#001b0f] text-white font-sans text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#735c00] transition-all duration-300 whitespace-nowrap"
                      >
                        Join the Movement
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy/Testimonial Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#fcf9f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-12">
            The <span className="text-[#735c00] italic font-normal">Gyanam Impact</span>
          </h2>
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-[0_16px_48px_rgba(1,50,32,0.06)] border border-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#ffe088] mx-auto mb-6 opacity-80">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
            </svg>
            <p className="font-serif text-[#1b1c1c] text-2xl leading-[1.6] italic mb-6">
              "Gyanam Education didn't just teach me the syllabus; they taught me how to learn without anxiety. Dr. Dhanya Sharma’s vision completely shifted my perspective—from chasing marks to actually building skills for the future."
            </p>
            <div className="flex flex-col items-center">
              <p className="font-sans text-[#1b1c1c] text-lg font-semibold">Ananya R.</p>
              <p className="font-sans text-[#717973] text-sm">Alumnus, Delhi NCR</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#001b0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-white text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
            Ready to <span className="text-[#ffe088] italic font-normal">Change the Narrative?</span>
          </h2>
          <p className="font-sans text-white/90 text-xl leading-[1.7] mb-10">
            Connect with us to understand how Gyanam Education's unique frameworks can transform your educational journey.
          </p>
          <Link
            href="/contact"
            className="bg-[#ffe088] text-[#001b0f] font-sans text-base font-semibold px-10 py-5 rounded-xl shadow-[0_0_20px_rgba(255,224,136,0.3)] hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1 inline-block"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}