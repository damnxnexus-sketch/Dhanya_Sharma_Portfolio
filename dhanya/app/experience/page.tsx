import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience & Achievements | Dr. Dhanya Sharma | Gyanam Education Founder",
  description: "Explore Dr. Dhanya Sharma's extensive experience in medical education, clinical practice, and healthcare leadership. 15+ years of transforming medical education at Gyanam Education.",
  keywords: "Dhanya Sharma experience, medical educator achievements, Gyanam Education, healthcare leadership, clinical experience, medical education expert, teaching awards",
  openGraph: {
    title: "Experience & Achievements | Dr. Dhanya Sharma",
    description: "15+ years of excellence in medical education and healthcare leadership",
    type: "profile",
  },
};

export default function ExperiencePage() {
  const experiences = [
    {
      period: "2018 - Present",
      role: "Founder & Chief Executive Officer",
      organization: "Gyanam Education",
      location: "Global",
      description: "Founded and scaled Gyanam Education into a leading medical education platform, impacting 50,000+ students across multiple countries. Developed innovative curriculum, built strategic partnerships, and established a culture of excellence.",
      achievements: [
        "Scaled organization from 0 to 50,000+ students in 5 years",
        "Created 10+ comprehensive medical education programs",
        "Established partnerships with leading healthcare institutions",
        "Built a team of 50+ expert educators and administrators",
      ],
      color: "from-[#735c00] to-[#a08000]",
    },
    {
      period: "2015 - 2018",
      role: "Medical Education Consultant",
      organization: "Healthcare Institutions Worldwide",
      location: "International",
      description: "Consulted with hospitals, medical schools, and healthcare organizations to design and implement evidence-based educational programs. Specialized in curriculum development and faculty training.",
      achievements: [
        "Consulted for 15+ healthcare institutions",
        "Trained 200+ medical educators in modern teaching methods",
        "Developed competency-based assessment frameworks",
        "Published research on medical education innovation",
      ],
      color: "from-[#001b0f] to-[#003d28]",
    },
    {
      period: "2012 - 2018",
      role: "Clinical Practitioner & Educator",
      organization: "Multi-Specialty Hospital",
      location: "India",
      description: "Provided comprehensive patient care while simultaneously teaching medical students and residents. Integrated clinical practice with educational innovation, developing case-based learning methodologies.",
      achievements: [
        "Treated 5,000+ patients with exceptional outcomes",
        "Mentored 100+ medical students and residents",
        "Developed clinical teaching protocols adopted hospital-wide",
        "Received 'Best Clinical Teacher' award 3 consecutive years",
      ],
      color: "from-[#735c00] to-[#a08000]",
    },
    {
      period: "2008 - 2012",
      role: "Medical Resident & Researcher",
      organization: "Teaching Hospital",
      location: "India",
      description: "Completed rigorous medical residency while conducting clinical research. Focused on evidence-based medicine and patient-centered care approaches.",
      achievements: [
        "Published 8 peer-reviewed research papers",
        "Presented at 5 international medical conferences",
        "Graduated with distinction and clinical excellence award",
        "Initiated quality improvement projects in patient care",
      ],
      color: "from-[#001b0f] to-[#003d28]",
    },
  ];

  const awards = [
    {
      year: "2023",
      title: "Global Top Educator Award",
      organization: "International Education Council",
      description: "Recognized for transformative impact in medical education and innovative teaching methodologies.",
    },
    {
      year: "2022",
      title: "Healthcare Innovation Leader",
      organization: "Healthcare Leadership Forum",
      description: "Honored for pioneering digital transformation in medical education.",
    },
    {
      year: "2021",
      title: "Excellence in Medical Education",
      organization: "Medical Education Association",
      description: "Awarded for outstanding contribution to advancing medical pedagogy.",
    },
    {
      year: "2019",
      title: "Emerging Entrepreneur of the Year",
      organization: "Business Excellence Awards",
      description: "Recognized for successfully launching and scaling Gyanam Education.",
    },
  ];

  const certifications = [
    "Doctor of Medicine (MD) - Clinical Medicine",
    "Master of Business Administration (MBA) - Healthcare Management",
    "Advanced Certificate in Medical Education",
    "Leadership in Healthcare Organizations",
    "Digital Learning & Educational Technology",
    "Clinical Research & Evidence-Based Medicine",
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#fcf9f8] via-white to-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="bg-[#ffe088] text-[#574500] px-3 py-1.5 rounded-sm font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
            Professional Journey
          </div>
          <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
            15+ Years of <span className="text-[#735c00] italic font-normal">Excellence</span>
          </h1>
          <p className="font-sans text-[#414943] text-xl leading-[1.7] max-w-3xl mx-auto">
            A distinguished career spanning clinical medicine, medical education, and healthcare entrepreneurship. Dr. Dhanya Sharma's journey reflects unwavering commitment to transforming healthcare through education.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-16 text-center">
            Professional <span className="text-[#735c00] italic font-normal">Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(1,50,32,0.06)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.12)] transition-all duration-500 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.color}`}></div>
                
                <div className="ml-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <span className="font-sans text-[#735c00] text-sm font-semibold tracking-[0.05em] uppercase">
                        {exp.period}
                      </span>
                      <h3 className="font-serif text-[#1b1c1c] text-2xl lg:text-3xl font-semibold mt-2 mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-sans text-[#414943] text-lg font-medium">
                        {exp.organization} • {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-[#414943] text-base leading-[1.7] mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-sans text-[#1b1c1c] text-sm font-semibold tracking-[0.05em] uppercase mb-4">
                      Key Achievements
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
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

      {/* Awards & Recognition */}
      <section className="py-20 px-6 lg:px-8 bg-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-16 text-center">
            Awards & <span className="text-[#735c00] italic font-normal">Recognition</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-[0_8px_32px_rgba(1,50,32,0.06)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.12)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#ffe088] to-[#735c00] p-3 rounded-lg flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-[#001b0f]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-sans text-[#735c00] text-sm font-semibold">{award.year}</span>
                    <h3 className="font-serif text-[#1b1c1c] text-xl font-semibold mt-1 mb-2">
                      {award.title}
                    </h3>
                    <p className="font-sans text-[#717973] text-sm font-medium mb-2">
                      {award.organization}
                    </p>
                    <p className="font-sans text-[#414943] text-sm leading-[1.6]">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-16 text-center">
            Qualifications & <span className="text-[#735c00] italic font-normal">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#fcf9f8] to-white rounded-xl p-6 border-2 border-[#e4e2e1] hover:border-[#ffe088] transition-all duration-300 hover:shadow-lg"
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
                    {cert}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#001b0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-white text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
            Learn From <span className="text-[#ffe088] italic font-normal">Experience</span>
          </h2>
          <p className="font-sans text-white/90 text-xl leading-[1.7] mb-10">
            Join thousands of students who have transformed their careers through programs designed by Dr. Dhanya Sharma at Gyanam Education.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/programs"
              className="bg-[#ffe088] text-[#001b0f] font-sans text-base font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              View Programs
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-sans text-base font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
