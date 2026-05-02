'use client';

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", phone: "", program: "", message: "" });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
      ),
      title: "Phone",
      details: ["+91 98765 43210", "+1 (555) 123-4567"],
      link: "tel:+919876543210",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
      title: "Email",
      details: ["dhanya@gyanameducation.com", "info@gyanameducation.com"],
      link: "mailto:dhanya@gyanameducation.com",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Office",
      details: ["Mumbai, India", "Global Operations"],
      link: "#",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Hours",
      details: ["Mon-Fri: 9AM - 6PM IST", "Sat: 10AM - 4PM IST"],
      link: "#",
    },
  ];

  const programs = [
    "NEET Excellence Program",
    "USMLE Mastery Program",
    "Clinical Skills Bootcamp",
    "Healthcare Leadership MBA",
    "Research & Publication Program",
    "Medical Entrepreneurship",
    "General Inquiry",
  ];

  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-[#fcf9f8] via-white to-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="bg-[#ffe088] text-[#574500] px-3 py-1.5 rounded-sm font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
            Get in Touch
          </div>
          <h1 className="font-serif text-[#1b1c1c] text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
            Start Your <span className="text-[#735c00] italic font-normal">Journey Today</span>
          </h1>
          <p className="font-sans text-[#414943] text-xl leading-[1.7] max-w-3xl mx-auto">
            Have questions about our programs? Want to schedule a consultation with Dr. Dhanya Sharma? We're here to help you transform your medical career.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-gradient-to-br from-[#fcf9f8] to-white rounded-xl p-6 shadow-[0_4px_16px_rgba(1,50,32,0.04)] hover:shadow-[0_8px_32px_rgba(1,50,32,0.08)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-br from-[#001b0f] to-[#735c00] p-3 rounded-lg text-white inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="font-sans text-[#1b1c1c] text-base font-semibold mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="font-sans text-[#414943] text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 lg:px-8 bg-[#fcf9f8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_32px_rgba(1,50,32,0.06)]">
                <h2 className="font-serif text-[#1b1c1c] text-3xl font-semibold mb-2">
                  Send Us a Message
                </h2>
                <p className="font-sans text-[#414943] text-base leading-[1.7] mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <p className="font-sans text-green-800 text-sm font-medium">
                        Thank you! Your message has been sent successfully.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="font-sans text-[#1b1c1c] text-sm font-semibold mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#e4e2e1] focus:border-[#735c00] focus:outline-none transition-colors font-sans text-[#1b1c1c]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-sans text-[#1b1c1c] text-sm font-semibold mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#e4e2e1] focus:border-[#735c00] focus:outline-none transition-colors font-sans text-[#1b1c1c]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="font-sans text-[#1b1c1c] text-sm font-semibold mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#e4e2e1] focus:border-[#735c00] focus:outline-none transition-colors font-sans text-[#1b1c1c]"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="program" className="font-sans text-[#1b1c1c] text-sm font-semibold mb-2 block">
                        Program of Interest *
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-[#e4e2e1] focus:border-[#735c00] focus:outline-none transition-colors font-sans text-[#1b1c1c]"
                      >
                        <option value="">Select a program</option>
                        {programs.map((program, index) => (
                          <option key={index} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-sans text-[#1b1c1c] text-sm font-semibold mb-2 block">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#e4e2e1] focus:border-[#735c00] focus:outline-none transition-colors font-sans text-[#1b1c1c] resize-none"
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#001b0f] text-white font-sans text-base font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#735c00] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Contact Us */}
              <div className="bg-white rounded-2xl p-8 shadow-[0_8px_32px_rgba(1,50,32,0.06)]">
                <h3 className="font-serif text-[#1b1c1c] text-2xl font-semibold mb-6">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free consultation with education counselors",
                    "Personalized program recommendations",
                    "Flexible payment plans available",
                    "24/7 student support",
                    "Career guidance and mentorship",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#735c00] flex-shrink-0 mt-0.5">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="font-sans text-[#414943] text-sm leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-[#001b0f] to-[#735c00] rounded-2xl p-8 text-white">
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  Connect With Us
                </h3>
                <p className="font-sans text-white/90 text-sm leading-[1.7] mb-6">
                  Follow Dr. Dhanya Sharma and Gyanam Education on social media for updates, tips, and success stories.
                </p>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                    { name: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                    { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
