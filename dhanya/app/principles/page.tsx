import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PrinciplesPage() {
  const principles = [
    {
      number: "01",
      title: "Evidence-Based Excellence",
      description: "Every decision, every strategy, every teaching moment is grounded in rigorous research and clinical evidence. We don't follow trends—we follow data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-[#735c00] to-[#a08000]",
      bgAccent: "bg-[#ffe088]/10",
    },
    {
      number: "02",
      title: "Student-Centered Impact",
      description: "Education is not about us—it's about them. Every program is designed with the student's journey, challenges, and aspirations at the core.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        </svg>
      ),
      color: "from-[#001b0f] to-[#003d28]",
      bgAccent: "bg-[#001b0f]/10",
    },
    {
      number: "03",
      title: "Innovation Through Tradition",
      description: "We honor the timeless principles of medical education while embracing cutting-edge pedagogical methods and technology to enhance learning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-[#735c00] to-[#a08000]",
      bgAccent: "bg-[#ffe088]/10",
    },
    {
      number: "04",
      title: "Global Perspective, Local Impact",
      description: "Healthcare is universal, but its application is local. We prepare professionals to think globally while serving their communities with cultural competence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
        </svg>
      ),
      color: "from-[#001b0f] to-[#003d28]",
      bgAccent: "bg-[#001b0f]/10",
    },
    {
      number: "05",
      title: "Ethical Leadership",
      description: "Healthcare leadership demands unwavering integrity. We cultivate professionals who lead with compassion, transparency, and accountability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-[#735c00] to-[#a08000]",
      bgAccent: "bg-[#ffe088]/10",
    },
    {
      number: "06",
      title: "Continuous Growth",
      description: "Medicine evolves, and so must we. Lifelong learning isn't optional—it's essential. We foster a culture of curiosity and continuous improvement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-[#001b0f] to-[#003d28]",
      bgAccent: "bg-[#001b0f]/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#fcf9f8] via-white to-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="font-sans text-[#717973] text-sm hover:text-[#735c00] transition-colors">
              Home
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#717973]">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
            <span className="font-sans text-[#1b1c1c] text-sm font-medium">Principles</span>
          </div>

          {/* Title Section */}
          <div className="max-w-3xl">
            <div className="bg-[#ffe088] text-[#574500] px-3 py-1.5 rounded-sm font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
              Core Philosophy
            </div>
            <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
              Guiding Principles That <span className="text-[#735c00] italic font-normal">Define Our Work</span>
            </h1>
            <p className="font-sans text-[#414943] text-xl leading-[1.7] max-w-2xl">
              These principles are not aspirations—they are commitments. They shape every decision, every program, and every interaction in our mission to transform healthcare education.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(1,50,32,0.06)] hover:shadow-[0_16px_48px_rgba(1,50,32,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${principle.bgAccent} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0`}></div>
                
                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-serif text-[#e4e2e1] text-7xl font-bold leading-none">
                      {principle.number}
                    </span>
                    <div className={`bg-gradient-to-br ${principle.color} p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {principle.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-[#1b1c1c] text-2xl lg:text-3xl font-semibold leading-[1.3] mb-4">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-[#414943] text-base leading-[1.7]">
                    {principle.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#735c00] to-transparent group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#001b0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#ffe088] mx-auto mb-8 opacity-50">
            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
          </svg>
          <blockquote className="font-serif text-white text-3xl lg:text-4xl font-normal leading-[1.4] italic mb-8">
            "Excellence in healthcare education is not about teaching what we know—it's about inspiring the pursuit of what we don't yet understand."
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <p className="font-sans text-[#ffe088] text-lg font-semibold">Dr. Dhanya Sharma</p>
            <p className="font-sans text-white/70 text-sm tracking-[0.05em] uppercase">Founder & Educator</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[#fcf9f8] to-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-[0_16px_64px_rgba(1,50,32,0.08)] text-center">
            <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
              Ready to Experience These <span className="text-[#735c00] italic font-normal">Principles in Action?</span>
            </h2>
            <p className="font-sans text-[#414943] text-lg leading-[1.7] max-w-2xl mx-auto mb-10">
              Discover how our commitment to excellence translates into transformative educational experiences and measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
