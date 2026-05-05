import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visionary Leadership & Educational Reform | Dhanya Sharma | Gyanam Education",
  description: "Discover the educational philosophy of Dhanya Sharma, Founder of Gyanam Education. Championing student-first learning, modern pedagogy, and accessible education in Delhi NCR.",
  keywords: "Dhanya Sharma vision, educational reformer Delhi NCR, Gyanam Education philosophy, student-first learning Noida, modern pedagogy, educational leadership, accessible education India",
  openGraph: {
    title: "Educational Vision & Leadership | Dhanya Sharma",
    description: "Transforming the educational landscape with a student-first approach.",
    type: "profile",
  },
};

export default function VisionaryLeadershipPage() {
  const leadershipPhases = [
    {
      period: "The Present & Future",
      role: "Founder & Chief Visionary",
      organization: "Gyanam Education",
      location: "Delhi NCR & Beyond",
      description: "Driving a paradigm shift in how education is delivered. At Gyanam, Dhanya established a culture where student mental health, practical skill-building, and accessible learning take precedence over rote memorization.",
      achievements: [
        "Pioneered a 100% student-centric learning framework",
        "Bridged the gap between traditional syllabus and modern industry needs",
        "Built an inclusive community for localized student support in Delhi NCR",
        "Fostered an ecosystem of empathy-driven educators",
      ],
      color: "from-[#735c00] to-[#a08000]",
    },
    {
      period: "The Foundation",
      role: "Educational Reform Advocate",
      organization: "Community Learning Initiatives",
      location: "North India",
      description: "Recognized the critical flaws in traditional education systems. Dedicated early efforts to understanding student psychology, identifying learning roadblocks, and researching modern pedagogical methods.",
      achievements: [
        "Advocated for stress-free learning environments",
        "Developed actionable frameworks for personalized student mentoring",
        "Collaborated with local educators to modernize teaching techniques",
        "Layed the ideological groundwork for what would become Gyanam Education",
      ],
      color: "from-[#001b0f] to-[#003d28]",
    },
  ];

  const impactMilestones = [
    {
      year: "Vision",
      title: "Redefining Success Metrics",
      category: "Student Mental Health",
      description: "Shifting the focus from mere academic grading to holistic student well-being and practical problem-solving capabilities.",
    },
    {
      year: "Impact",
      title: "Democratizing Quality Education",
      category: "Accessibility & Reach",
      description: "Ensuring that premium, modern educational resources at Gyanam Education are accessible to students across diverse socio-economic backgrounds.",
    },
    {
      year: "Innovation",
      title: "Tech-Enabled Pedagogy",
      category: "Digital Transformation",
      description: "Integrating smart digital tools to create interactive, engaging, and personalized learning pathways for the modern Gen-Z student.",
    },
    {
      year: "Community",
      title: "Empowering Local Learners",
      category: "Delhi NCR Focus",
      description: "Building strong grassroots educational programs tailored specifically for the competitive landscape of the Delhi NCR region.",
    },
  ];

  const corePhilosophies = [
    "Student-First Curriculum Design",
    "Empathy-Driven Mentorship",
    "Stress-Free Evaluation Methods",
    "Focus on Real-World Application",
    "Inclusive & Accessible Learning",
    "Continuous Pedagogical Evolution",
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-[#fcf9f8] to-[#f3f0ef] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6f9c84]/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <div className="bg-white/80 backdrop-blur-sm border border-[#ffe088] text-[#574500] px-4 py-2 rounded-full font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
            The Ideology
          </div>
          <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
            A Vision for <span className="text-[#735c00] italic font-normal">Transformation</span>
          </h1>
          <p className="font-sans text-[#414943] text-xl leading-[1.7] max-w-3xl mx-auto">
            Education shouldn't be a factory; it should be an incubator for thought. Dhanya Sharma's journey is defined by a singular mission: to build learning ecosystems at Gyanam Education where every student feels seen, supported, and equipped for the future.
          </p>
        </div>
      </section>

      {/* Evolution of Vision Timeline */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-16 text-center">
            The Evolution of a <span className="text-[#735c00] italic font-normal">Movement</span>
          </h2>

          <div className="space-y-12">
            {leadershipPhases.map((phase, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-[0_8px_32px_rgba(1,50,32,0.04)] hover:shadow-[0_20px_50px_rgba(1,50,32,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${phase.color}`}></div>
                
                <div className="ml-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <span className="font-sans text-[#735c00] text-sm font-semibold tracking-[0.05em] uppercase bg-[#ffe088]/20 px-3 py-1 rounded-md">
                        {phase.period}
                      </span>
                      <h3 className="font-serif text-[#1b1c1c] text-2xl lg:text-3xl font-semibold mt-4 mb-1">
                        {phase.role}
                      </h3>
                      <p className="font-sans text-[#6f9c84] text-lg font-medium">
                        {phase.organization} • {phase.location}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-[#414943] text-base leading-[1.7] mb-6">
                    {phase.description}
                  </p>

                  <div>
                    <h4 className="font-sans text-[#1b1c1c] text-sm font-semibold tracking-[0.05em] uppercase mb-4">
                      Core Initiatives
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-[#735c00] flex-shrink-0 mt-0.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-sans text-[#414943] text-sm leading-[1.6]">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Ideology Blocks */}
      <section className="py-20 px-6 lg:px-8 bg-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-16 text-center">
            Pillars of <span className="text-[#735c00] italic font-normal">Impact</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactMilestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-xl p-8 border border-white shadow-[0_8px_32px_rgba(1,50,32,0.04)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.08)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#ffe088] to-[#735c00] p-3 rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#001b0f]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-[#735c00] text-xs font-bold tracking-widest uppercase">{milestone.year}</span>
                    <h3 className="font-serif text-[#1b1c1c] text-xl font-semibold mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-sans text-[#717973] text-sm font-medium mb-2">
                      {milestone.category}
                    </p>
                    <p className="font-sans text-[#414943] text-sm leading-[1.6]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophies (Replaced Certifications) */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-16 text-center">
            Educational <span className="text-[#735c00] italic font-normal">Philosophies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePhilosophies.map((philosophy, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#fcf9f8] to-white rounded-xl p-6 border border-[#e4e2e1] hover:border-[#ffe088] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-[#735c00] flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-sans text-[#1b1c1c] text-base font-medium leading-[1.5]">
                    {philosophy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#001b0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-white text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
            Experience the <span className="text-[#ffe088] italic font-normal">Gyanam Difference</span>
          </h2>
          <p className="font-sans text-white/90 text-xl leading-[1.7] mb-10">
            Join the community of forward-thinking students in Delhi NCR and embrace an education system built entirely around your success and well-being.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/programs"
              className="bg-[#ffe088] text-[#001b0f] font-sans text-base font-semibold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(255,224,136,0.3)] hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1"
            >
              Explore Our Approach
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-sans text-base font-semibold px-8 py-4 rounded-xl hover:bg-white/20 hover:border-white transition-all duration-300"
            >
              Connect with Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}