import Link from 'next/link';

export default function ExternalLinks() {
  const articles = [
    {
      title: "How Dhanya Sharma Built Gyanam Education into a Trusted Tutor Platform",
      url: "https://medium.com/@teamgyanam/how-dhanya-sharma-built-gyanam-education-into-a-trusted-tutor-platform-in-delhi-ncr-345d8e635298",
      platform: "Medium",
      description: "The inspiring journey of building India's leading tutor platform in Delhi NCR"
    },
    {
      title: "Why Gyanam Education is the Preferred Coaching Platform",
      url: "https://medium.com/@teamgyanam/why-gyanam-education-is-becoming-the-preferred-coaching-tutor-platform-in-delhi-gurgaon-and-5b854004ca79",
      platform: "Medium",
      description: "Discover why students choose Gyanam for coaching in Delhi and Gurgaon"
    },
    {
      title: "Best Home Tuition and Coaching Services in Delhi NCR",
      url: "https://dhanyaforgyanam.substack.com/p/best-home-tuition-and-coaching-services",
      platform: "Substack",
      description: "Comprehensive guide to home tuition services by Dr. Dhanya Sharma"
    },
    {
      title: "Why Gyanam Education is Becoming the Preferred Platform",
      url: "https://dhanyaforgyanam.substack.com/p/why-gyanam-education-is-becoming",
      platform: "Substack",
      description: "Understanding the success behind Gyanam Education's growth"
    },
    {
      title: "Elevating Ed-Tech: When Elite Coaching Meets Innovation",
      url: "https://www.tumblr.com/dhanyaforgyanam/816218430288117760/elevating-ed-tech-when-elite-coaching-meets",
      platform: "Tumblr",
      description: "How technology and elite coaching create exceptional learning experiences"
    },
    {
      title: "Romanticizing the Grind But Actually Getting Results",
      url: "https://www.tumblr.com/dhanyaforgyanam/816218367023267840/romanticizing-the-grind-but-actually-getting",
      platform: "Tumblr",
      description: "The philosophy behind effective student success strategies"
    },
    {
      title: "Dr. Dhanya Sharma on Medical Education Excellence",
      url: "https://qr.ae/pFvNAh",
      platform: "Quora",
      description: "Expert insights on medical education and NEET preparation"
    },
    {
      title: "USMLE Preparation Strategies by Dr. Dhanya Sharma",
      url: "https://qr.ae/pFvNHm",
      platform: "Quora",
      description: "Proven strategies for USMLE success from India's top educator"
    },
    {
      title: "Home Tuition vs Coaching: Expert Analysis",
      url: "https://qr.ae/pFvNAR",
      platform: "Quora",
      description: "Dr. Dhanya Sharma's perspective on choosing the right learning path"
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="bg-[#ffe088] text-[#574500] px-3 py-1.5 rounded-sm font-sans text-[0.75rem] font-semibold leading-none tracking-[0.05em] uppercase mb-6 inline-block shadow-sm">
            Featured Content
          </div>
          <h2 className="font-serif text-[#1b1c1c] text-4xl lg:text-5xl font-semibold leading-[1.2] mb-6">
            Dr. Dhanya Sharma <span className="text-[#735c00] italic font-normal">In The Media</span>
          </h2>
          <p className="font-sans text-[#414943] text-lg leading-[1.7] max-w-2xl mx-auto">
            Read articles, insights, and success stories about Dr. Dhanya Sharma and Gyanam Education featured across leading platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group bg-gradient-to-br from-[#fcf9f8] to-white rounded-xl p-6 shadow-[0_4px_16px_rgba(1,50,32,0.04)] hover:shadow-[0_12px_32px_rgba(1,50,32,0.12)] transition-all duration-300 hover:-translate-y-2 border border-[#e4e2e1] hover:border-[#ffe088]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-br from-[#001b0f] to-[#735c00] text-white px-3 py-1 rounded-full font-sans text-xs font-semibold">
                  {article.platform}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-[#735c00] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-[#1b1c1c] text-lg font-semibold mb-3 group-hover:text-[#735c00] transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="font-sans text-[#414943] text-sm leading-[1.6] line-clamp-3">
                {article.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-[#735c00] font-sans text-sm font-medium">
                Read Article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Gyanam.net Link */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#001b0f] to-[#735c00] rounded-2xl p-10 shadow-[0_16px_48px_rgba(1,50,32,0.12)]">
            <h3 className="font-serif text-white text-3xl font-semibold mb-4">
              Visit Gyanam Education
            </h3>
            <p className="font-sans text-white/90 text-lg leading-[1.7] mb-8 max-w-2xl mx-auto">
              Explore our comprehensive programs, book home tuition, and discover why we're the preferred coaching platform in Delhi NCR.
            </p>
            <a
              href="https://gyanam.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#ffe088] text-[#001b0f] font-sans text-base font-semibold px-10 py-4 rounded-xl hover:bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Visit Gyanam.net
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
