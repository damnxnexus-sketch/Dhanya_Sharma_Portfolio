import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Dr. Dhanya Sharma | Founder of Gyanam Education | Medical Educator & Healthcare Leader",
  description: "Learn about Dr. Dhanya Sharma, MD, MBA - Founder of Gyanam Education. A visionary medical educator, healthcare strategist, and leader transforming medical education globally with 15+ years of experience.",
  keywords: "Dhanya Sharma, Gyanam Education founder, medical educator, healthcare leadership, MD MBA, medical education expert, clinical educator, healthcare innovation",
  openGraph: {
    title: "About Dr. Dhanya Sharma | Founder of Gyanam Education",
    description: "Visionary medical educator and founder of Gyanam Education, transforming healthcare education globally.",
    type: "profile",
  },
};

export default function AboutPage() {
  const milestones = [
    {
      year: "2008",
      title: "Medical Degree (MD)",
      description: "Graduated with distinction, beginning a journey in clinical excellence and patient care.",
    },
    {
      year: "2012",
      title: "Clinical Practice",
      description: "Established successful clinical practice, treating thousands of patients with compassionate care.",
    },
    {
      year: "2015",
      title: "MBA in Healthcare",
      description: "Pursued business education to bridge clinical expertise with strategic healthcare management.",
    },
    {
      year: "2018",
      title: "Founded Gyanam Education",
      description: "Launched Gyanam Education to revolutionize medical education and empower future healthcare leaders.",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded programs internationally, impacting 50,000+ students across multiple countries.",
    },
    {
      year: "2023",
      title: "Top Educator Award",
      description: "Recognized globally for innovation in medical education and transformative teaching methodologies.",
    },
  ];

  const expertise = [
    {
      title: "Clinical Medicine",
      description: "Deep expertise in clinical practice with years of hands-on patient care experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm9 4.5a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Educational Innovation",
      description: "Pioneer in developing cutting-edge pedagogical methods for medical education.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Strategic Leadership",
      description: "MBA-trained leader with expertise in healthcare business strategy and organizational growth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Global Impact",
      description: "International educator reaching students across continents with culturally adaptive programs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#fcf9f8] via-white to-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#ffe088] text-[#574500] px-3 py-1.5 rounded-sm font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
                About Dr. Dhanya Sharma
              </div>
              <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
                Transforming Healthcare Through <span className="text-[#735c00] italic font-normal">Education & Leadership</span>
              </h1>
              <p className="font-sans text-[#414943] text-xl leading-[1.7] mb-8">
                Dr. Dhanya Sharma is the visionary founder of <strong>Gyanam Education</strong>, a pioneering platform revolutionizing medical education globally. With an MD in Clinical Medicine and an MBA in Healthcare Management, she bridges clinical precision with strategic business acumen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/programs"
                  className="bg-[#001b0f] text-white font-sans text-base font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#735c00] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  Explore Programs
                </Link>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-[#001b0f] text-[#001b0f] font-sans text-base font-semibold px-8 py-4 rounded-xl hover:bg-[#fcf9f8] transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(1,50,32,0.12)] aspect-[4/5] bg-[#e4e2e1]">
                <Image
                  src="/images/dhanya-about.jpg"
                  alt="Dr. Dhanya Sharma - Founder of Gyanam Education"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
              A Journey of <span className="text-[#735c00] italic font-normal">Excellence</span>
            </h2>
            <p className="font-sans text-[#414943] text-lg leading-[1.7] max-w-2xl mx-auto">
              From clinical practice to founding Gyanam Education, every milestone reflects a commitment to transforming healthcare education.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ffe088] via-[#735c00] to-[#001b0f] hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-[0_8px_32px_rgba(1,50,32,0.08)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.12)] transition-all duration-300">
                      <span className="font-serif text-[#735c00] text-3xl font-bold">{milestone.year}</span>
                      <h3 className="font-serif text-[#1b1c1c] text-2xl font-semibold mt-2 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="font-sans text-[#414943] text-base leading-[1.7]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-6 h-6 bg-[#ffe088] rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
              Areas of <span className="text-[#735c00] italic font-normal">Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-[0_8px_32px_rgba(1,50,32,0.06)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.12)] transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="bg-gradient-to-br from-[#001b0f] to-[#735c00] p-4 rounded-xl text-white inline-block mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-[#1b1c1c] text-xl font-semibold mb-3">{item.title}</h3>
                <p className="font-sans text-[#414943] text-sm leading-[1.7]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 lg:px-8 bg-[#001b0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-white text-4xl lg:text-5xl font-semibold leading-[1.2] mb-8">
            Mission & Vision
          </h2>
          <p className="font-sans text-white/90 text-xl leading-[1.8] mb-6">
            "To empower the next generation of healthcare professionals with world-class education, ethical leadership, and the tools to create meaningful impact in global health."
          </p>
          <p className="font-sans text-white/80 text-lg leading-[1.7]">
            Through Gyanam Education, Dr. Sharma has impacted over 50,000 students worldwide, creating innovative programs that blend clinical excellence with strategic thinking, preparing healthcare leaders for the challenges of tomorrow.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
