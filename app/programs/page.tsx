import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Education Programs | Gyanam Education | Dr. Dhanya Sharma",
  description: "Explore comprehensive medical education programs at Gyanam Education, founded by Dr. Dhanya Sharma. NEET preparation, USMLE coaching, clinical skills training, and healthcare leadership programs.",
  keywords: "Gyanam Education programs, medical education courses, NEET coaching, USMLE preparation, clinical skills training, healthcare leadership, Dhanya Sharma programs, medical exam preparation",
  openGraph: {
    title: "Medical Education Programs | Gyanam Education",
    description: "Transform your medical career with world-class programs from Gyanam Education",
    type: "website",
  },
};

export default function ProgramsPage() {
  const programs = [
    {
      title: "NEET Excellence Program",
      tagline: "Master India's Most Competitive Medical Entrance",
      description: "Comprehensive preparation program combining conceptual clarity, strategic problem-solving, and exam psychology. Designed by Dr. Dhanya Sharma with proven track record of top ranks.",
      duration: "12-18 Months",
      level: "Undergraduate Entry",
      features: [
        "Live interactive classes with expert faculty",
        "10,000+ practice questions with detailed solutions",
        "Weekly mock tests with performance analytics",
        "Personalized study plans and mentorship",
        "Doubt resolution within 24 hours",
        "Comprehensive study materials and video library",
      ],
      outcomes: "95% success rate with 500+ students scoring 650+",
      color: "from-[#735c00] to-[#a08000]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        </svg>
      ),
    },
    {
      title: "USMLE Mastery Program",
      tagline: "Your Pathway to US Medical Practice",
      description: "Complete preparation for USMLE Steps 1, 2 CK, and 3. Combines high-yield content review, clinical reasoning, and test-taking strategies for international medical graduates.",
      duration: "6-12 Months per Step",
      level: "Medical Graduates",
      features: [
        "Step-specific curriculum aligned with NBME guidelines",
        "Clinical case discussions and diagnostic reasoning",
        "QBank with 5,000+ USMLE-style questions",
        "Mock exams simulating real test conditions",
        "US clinical experience guidance and networking",
        "Residency application support and interview prep",
      ],
      outcomes: "88% first-attempt pass rate, average score 240+",
      color: "from-[#001b0f] to-[#003d28]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
        </svg>
      ),
    },
    {
      title: "Clinical Skills Bootcamp",
      tagline: "Bridge Theory to Practice",
      description: "Intensive hands-on training in clinical examination, diagnostic reasoning, and patient communication. Perfect for medical students and recent graduates preparing for clinical rotations.",
      duration: "3-6 Months",
      level: "Medical Students & Graduates",
      features: [
        "Simulated patient encounters and OSCE preparation",
        "Physical examination techniques with video demonstrations",
        "Clinical reasoning frameworks and case presentations",
        "Communication skills and patient counseling",
        "Emergency medicine protocols and procedures",
        "Certificate recognized by healthcare institutions",
      ],
      outcomes: "1,000+ students placed in clinical rotations",
      color: "from-[#735c00] to-[#a08000]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm9 4.5a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Healthcare Leadership MBA",
      tagline: "Lead the Future of Healthcare",
      description: "Executive program combining clinical expertise with business acumen. Designed for physicians and healthcare professionals aspiring to leadership roles in hospitals, startups, or policy.",
      duration: "12-24 Months",
      level: "Healthcare Professionals",
      features: [
        "Healthcare strategy and operations management",
        "Financial management and healthcare economics",
        "Digital health and innovation in medicine",
        "Healthcare policy and regulatory frameworks",
        "Leadership development and change management",
        "Capstone project with real healthcare organizations",
      ],
      outcomes: "85% graduates in leadership positions within 2 years",
      color: "from-[#001b0f] to-[#003d28]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Research & Publication Program",
      tagline: "Advance Medical Science",
      description: "Comprehensive training in clinical research methodology, biostatistics, and academic writing. From research design to publication in peer-reviewed journals.",
      duration: "6-9 Months",
      level: "Medical Professionals & Researchers",
      features: [
        "Research methodology and study design",
        "Biostatistics and data analysis (SPSS, R)",
        "Academic writing and manuscript preparation",
        "Ethics and regulatory compliance",
        "Grant writing and funding strategies",
        "Mentorship from published researchers",
      ],
      outcomes: "200+ publications in indexed journals",
      color: "from-[#735c00] to-[#a08000]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      ),
    },
    {
      title: "Medical Entrepreneurship",
      tagline: "Build Healthcare Ventures",
      description: "For physicians and healthcare professionals looking to launch startups, clinics, or health-tech ventures. Combines medical expertise with entrepreneurial skills.",
      duration: "6 Months",
      level: "Aspiring Healthcare Entrepreneurs",
      features: [
        "Healthcare business model development",
        "Regulatory compliance and licensing",
        "Digital health and telemedicine platforms",
        "Fundraising and investor pitching",
        "Marketing and patient acquisition",
        "Mentorship from successful healthcare entrepreneurs",
      ],
      outcomes: "50+ healthcare startups launched by alumni",
      color: "from-[#001b0f] to-[#003d28]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#fcf9f8] via-white to-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="bg-[#ffe088] text-[#574500] px-3 py-1.5 rounded-sm font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
            Gyanam Education Programs
          </div>
          <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
            Transform Your <span className="text-[#735c00] italic font-normal">Medical Career</span>
          </h1>
          <p className="font-sans text-[#414943] text-xl leading-[1.7] max-w-3xl mx-auto mb-8">
            World-class medical education programs designed by Dr. Dhanya Sharma. From exam preparation to leadership development, we empower healthcare professionals at every stage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#programs"
              className="bg-[#001b0f] text-white font-sans text-base font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#735c00] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-[#001b0f] text-[#001b0f] font-sans text-base font-semibold px-8 py-4 rounded-xl hover:bg-[#fcf9f8] transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#001b0f]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50,000+", label: "Students Trained" },
              { number: "10+", label: "Programs Offered" },
              { number: "95%", label: "Success Rate" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
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
                className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(1,50,32,0.06)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.12)] transition-all duration-500 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Icon & Meta */}
                  <div className="lg:col-span-3">
                    <div className={`bg-gradient-to-br ${program.color} p-5 rounded-xl text-white inline-block mb-4`}>
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
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                        </svg>
                        <span className="font-sans text-[#414943] text-sm font-medium">{program.level}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-9">
                    <h3 className="font-serif text-[#1b1c1c] text-3xl font-semibold mb-2">
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
                        Program Features
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
                          Program Outcomes
                        </span>
                        <span className="font-sans text-[#1b1c1c] text-base font-semibold">
                          {program.outcomes}
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="bg-[#001b0f] text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#735c00] transition-all duration-300 whitespace-nowrap"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#fcf9f8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-12">
            What Our <span className="text-[#735c00] italic font-normal">Students Say</span>
          </h2>
          <div className="bg-white rounded-2xl p-10 shadow-[0_16px_48px_rgba(1,50,32,0.08)]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#ffe088] mx-auto mb-6">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
            </svg>
            <p className="font-serif text-[#1b1c1c] text-2xl leading-[1.6] italic mb-6">
              "Dr. Dhanya Sharma's programs at Gyanam Education transformed my career. The USMLE preparation was comprehensive, strategic, and exactly what I needed. I scored 248 on Step 1 and matched into my dream residency!"
            </p>
            <div className="flex flex-col items-center">
              <p className="font-sans text-[#1b1c1c] text-lg font-semibold">Dr. Priya Mehta</p>
              <p className="font-sans text-[#717973] text-sm">Internal Medicine Resident, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#001b0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-white text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
            Ready to <span className="text-[#ffe088] italic font-normal">Begin Your Journey?</span>
          </h2>
          <p className="font-sans text-white/90 text-xl leading-[1.7] mb-10">
            Join 50,000+ students who have transformed their medical careers with Gyanam Education programs designed by Dr. Dhanya Sharma.
          </p>
          <Link
            href="/contact"
            className="bg-[#ffe088] text-[#001b0f] font-sans text-base font-semibold px-10 py-5 rounded-xl shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-block"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
