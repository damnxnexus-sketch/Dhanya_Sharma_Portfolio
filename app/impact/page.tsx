import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact & Success Stories | Gyanam Education | Dr. Dhanya Sharma",
  description: "Discover the transformative impact of Gyanam Education founded by Dr. Dhanya Sharma. 50,000+ students empowered, 95% success rate, and global recognition in medical education.",
  keywords: "Gyanam Education impact, medical education success stories, Dhanya Sharma achievements, student testimonials, medical exam results, healthcare education outcomes",
  openGraph: {
    title: "Impact & Success Stories | Gyanam Education",
    description: "Transforming lives through world-class medical education",
    type: "website",
  },
};

export default function ImpactPage() {
  const impactMetrics = [
    {
      number: "50,000+",
      label: "Students Empowered",
      description: "Across 25+ countries worldwide",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "In competitive medical exams",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      number: "10+",
      label: "Programs Created",
      description: "Comprehensive medical education",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
        </svg>
      ),
    },
    {
      number: "25+",
      label: "Countries Reached",
      description: "Global educational impact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816z" />
        </svg>
      ),
    },
    {
      number: "500+",
      label: "Top Ranks Achieved",
      description: "In NEET, USMLE, and more",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      number: "5+",
      label: "Years of Excellence",
      description: "In education",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Dr. Rahul Verma",
      role: "NEET AIR 47",
      program: "NEET Excellence Program",
      quote: "Dr. Dhanya Sharma's teaching methodology at Gyanam Education is unparalleled. The structured approach, personalized mentorship, and comprehensive study materials helped me secure AIR 47 in NEET. Forever grateful!",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "USMLE Step 1: 252",
      program: "USMLE Mastery Program",
      quote: "As an IMG, I was overwhelmed by USMLE preparation. Gyanam Education's program gave me clarity, confidence, and a strategic roadmap. Scored 252 on Step 1 and matched into my dream residency in Internal Medicine!",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Dr. Amit Patel",
      role: "Healthcare Entrepreneur",
      program: "Medical Entrepreneurship",
      quote: "The Medical Entrepreneurship program transformed my vision into reality. Dr. Sharma's mentorship helped me launch my telemedicine startup, which now serves 10,000+ patients. The business acumen I gained was invaluable.",
      image: "/images/testimonial-3.jpg",
    },
    {
      name: "Dr. Priya Nair",
      role: "Clinical Researcher",
      program: "Research & Publication Program",
      quote: "Published 3 papers in indexed journals within 6 months! The Research Program at Gyanam Education taught me everything from study design to manuscript writing. Dr. Sharma's guidance was transformative.",
      image: "/images/testimonial-4.jpg",
    },
  ];

  const achievements = [
    {
      title: "Global Recognition",
      description: "Gyanam Education recognized as a leading medical education platform by International Education Council",
      year: "2023",
    },
    {
      title: "Innovation Award",
      description: "Awarded for pioneering digital transformation in medical education and adaptive learning technologies",
      year: "2022",
    },
    {
      title: "Student Success",
      description: "500+ students achieved top ranks in NEET, USMLE, and other competitive medical examinations",
      year: "2021-2023",
    },
    {
      title: "Global Expansion",
      description: "Expanded programs to 25+ countries, making quality medical education accessible worldwide",
      year: "2020",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#fcf9f8] via-white to-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="bg-[#ffe088] text-[#574500] px-3 py-1.5 rounded-sm font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
            Our Impact
          </div>
          <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
            Transforming Lives Through <span className="text-[#735c00] italic font-normal">Education</span>
          </h1>
          <p className="font-sans text-[#414943] text-xl leading-[1.7] max-w-3xl mx-auto">
            Since founding Gyanam Education, Dr. Dhanya Sharma has empowered over 50,000 students worldwide, creating measurable impact in medical education and healthcare leadership.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#fcf9f8] to-white rounded-2xl p-8 shadow-[0_8px_32px_rgba(1,50,32,0.06)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.12)] transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-gradient-to-br from-[#001b0f] to-[#735c00] p-4 rounded-xl text-white inline-block mb-6">
                  {metric.icon}
                </div>
                <div className="font-serif text-[#1b1c1c] text-5xl font-bold mb-2">
                  {metric.number}
                </div>
                <div className="font-sans text-[#1b1c1c] text-lg font-semibold mb-2">
                  {metric.label}
                </div>
                <div className="font-sans text-[#717973] text-sm">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 lg:px-8 bg-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
              Success <span className="text-[#735c00] italic font-normal">Stories</span>
            </h2>
            <p className="font-sans text-[#414943] text-lg leading-[1.7] max-w-2xl mx-auto">
              Real students, real results. Hear from those who transformed their careers with Gyanam Education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-[0_8px_32px_rgba(1,50,32,0.06)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.12)] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#ffe088] mb-4">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
                <p className="font-sans text-[#414943] text-base leading-[1.7] italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#735c00] to-[#a08000] rounded-full flex items-center justify-center text-white font-serif text-xl font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-sans text-[#1b1c1c] text-base font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-[#735c00] text-sm font-medium">
                      {testimonial.role}
                    </p>
                    <p className="font-sans text-[#717973] text-xs">
                      {testimonial.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
              Key <span className="text-[#735c00] italic font-normal">Achievements</span>
            </h2>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start bg-gradient-to-r from-[#fcf9f8] to-white rounded-xl p-8 shadow-[0_4px_16px_rgba(1,50,32,0.04)] hover:shadow-[0_8px_32px_rgba(1,50,32,0.08)] transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#ffe088] to-[#735c00] px-4 py-2 rounded-lg">
                    <span className="font-serif text-[#001b0f] text-2xl font-bold">
                      {achievement.year}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-[#1b1c1c] text-2xl font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="font-sans text-[#414943] text-base leading-[1.7]">
                    {achievement.description}
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
            Be Part of Our <span className="text-[#ffe088] italic font-normal">Success Story</span>
          </h2>
          <p className="font-sans text-white/90 text-xl leading-[1.7] mb-10">
            Join thousands of successful students who have transformed their medical careers with Dr. Dhanya Sharma's programs at Gyanam Education.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/programs"
              className="bg-[#ffe088] text-[#001b0f] font-sans text-base font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-sans text-base font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
