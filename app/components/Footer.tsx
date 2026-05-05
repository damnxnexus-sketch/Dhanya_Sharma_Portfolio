import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Updated to match the new Visionary narrative
  const quickLinks = [
    { name: 'The Vision', href: '#vision' },
    { name: 'Learning Ecosystem', href: '#programs' },
    { name: 'Gyanam Impact', href: '#impact' },
    { name: 'Connect', href: '/contact' },
  ];

  // Removed Instagram as requested
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:dhanya@gyanam.net', // Updated email domain for branding
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  // Tailored resources
  const resources = [
    { name: 'Educational Philosophy', href: '#' },
    { name: 'Mentorship Guides', href: '#' },
    { name: 'Press & Media', href: '#' },
    { name: 'Gyanam Official', href: 'https://gyanam.net/' }, // Added strong backlink
  ];

  return (
    <footer className="bg-[#001b0f] text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#735c00]/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Section (Adjusted span from 5 to 6 to balance the missing newsletter) */}
          <div className="lg:col-span-6 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-2.5 rounded-lg shadow-lg">
                {/* Book / Education Icon replacing the medical one */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#ffe088]">
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-white text-2xl font-semibold leading-none">
                  Dhanya Sharma
                </span>
                {/* Updated Title */}
                <span className="font-sans text-[#ffe088] text-xs font-bold tracking-[0.08em] uppercase mt-1">
                  Founder, Gyanam Education
                </span>
              </div>
            </div>
            {/* Updated SEO focused bio */}
            <p className="font-sans text-white/80 text-sm leading-relaxed max-w-md mb-6">
              Architecting stress-free, future-ready learning ecosystems in Delhi NCR. Dedicated to empowering the next generation of students through empathy-driven education and holistic mentorship.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-white/80 hover:bg-[#ffe088] hover:text-[#001b0f] transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Adjusted span from 3 to 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-white text-sm font-semibold tracking-[0.08em] uppercase mb-6">
              Platform Journey
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-white/70 text-sm hover:text-[#ffe088] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#ffe088] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources (Adjusted span from 2 to 3 to fill the gap) */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-white text-sm font-semibold tracking-[0.08em] uppercase mb-6">
              Resources & Impact
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                     <a
                     href={link.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="font-sans text-white/70 text-sm hover:text-[#ffe088] transition-colors duration-200 flex items-center gap-2 group"
                   >
                     <span className="w-0 h-px bg-[#ffe088] group-hover:w-4 transition-all duration-300"></span>
                     {link.name}
                   </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-sans text-white/70 text-sm hover:text-[#ffe088] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#ffe088] group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-white/60 text-sm text-center md:text-left">
              © {currentYear} Dhanya Sharma. All rights reserved. 
              <span className="hidden md:inline"> | </span>
              <span className="block md:inline mt-1 md:mt-0">Powered by Gyanam Education</span>
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="font-sans text-white/60 text-sm hover:text-[#ffe088] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-sans text-white/60 text-sm hover:text-[#ffe088] transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}