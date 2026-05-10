import type { Metadata } from "next";
import { Noto_Serif, Inter } from 'next/font/google';
import "./globals.css";

const notoSerif = Noto_Serif({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-noto-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gyanam.net'),
  title: {
    default: "Dhanya Sharma | Founder Gyanam Education | Top Medical Educator & Home Tuition Expert Delhi NCR",
    template: "%s | Dhanya Sharma - Gyanam Education"
  },
  description: "Dhanya Sharma - Founder & CEO of Gyanam Education (gyanam.net). India's #1 medical educator, NEET coach, USMLE expert. Best home tuition & coaching services in Delhi NCR, Gurgaon, Noida. 50,000+ students. Trusted tutor platform.",
  keywords: [
    "Dhanya Sharma",
    "Dhanya Sharma",
    "Dhanya Sharma Gyanam",
    "Dhanya Sharma Gyanam Education",
    "Gyanam Education founder",
    "Gyanam.net founder",
    "best medical educator India",
    "top NEET coach Delhi",
    "NEET coaching Delhi NCR",
    "USMLE preparation India",
    "home tuition Delhi NCR",
    "home tuition Gurgaon",
    "home tuition Noida",
    "coaching services Delhi",
    "coaching services Gurgaon",
    "best tutor platform Delhi",
    "trusted tutor platform",
    "medical education expert",
    "healthcare leadership India",
    "educational entrepreneur",
    "clinical training expert",
    "medical exam preparation",
    "ed-tech India",
    "elite coaching India",
    "best coaching institute Delhi",
    "Dhanya Sharma medical educator",
    "Gyanam tuition services",
    "preferred coaching platform"
  ],
  authors: [{ name: "Dhanya Sharma", url: "https://gyanam.net" }],
  creator: "Dhanya Sharma",
  publisher: "Gyanam Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gyanam.net",
    siteName: "Dhanya Sharma - Gyanam Education",
    title: "Dhanya Sharma | Founder Gyanam Education | Top Medical Educator India",
    description: "India's leading medical educator & founder of Gyanam Education. 50,000+ students. Best home tuition & coaching in Delhi NCR, Gurgaon. NEET, USMLE expert. Trusted tutor platform.",
    images: [
      {
        url: "/dhanya.png",
        width: 1200,
        height: 630,
        alt: "Dhanya Sharma - Founder of Gyanam Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gyanameducation",
    creator: "@dhanyasharma",
    title: "Dhanya Sharma | Founder Gyanam Education",
    description: "India's top medical educator. Founder Gyanam Education (gyanam.net). 50,000+ students. Best home tuition & coaching Delhi NCR.",
    images: ["/dhanya.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gyanam.net",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // High-Impact Entity SEO Schema with External Links
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gyanam.net/#dhanya-sharma",
        "name": "Dhanya Sharma",
        "alternateName": ["Dhanya Sharma", "Dhanya Sharma"],
        "jobTitle": "Founder & CEO",
        "description": "Dhanya Sharma is the founder of Gyanam Education (gyanam.net), India's leading medical educator with 50,000+ students. Expert in NEET coaching, USMLE preparation, home tuition, and coaching services in Delhi NCR, Gurgaon, Noida. Founder & CEO in Healthcare Leadership.",
        "url": "https://gyanam.net",
        "image": "https://gyanam.net/dhanya.png",
        "worksFor": {
          "@id": "https://gyanam.net/#organization"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Business School",
            "degree": "Master of Business Administration (MBA) - Healthcare Management"
          }
        ],
        "knowsAbout": [
          "Medical Education",
          "NEET Coaching",
          "USMLE Preparation",
          "Home Tuition Services",
          "Coaching Services",
          "Healthcare Leadership",
          "Clinical Medicine",
          "Educational Technology",
          "Student Mentorship",
          "Curriculum Development",
          "Medical Exam Preparation",
          "Tutor Platform Management"
        ],
        "sameAs": [
          "https://gyanam.net",
          "https://www.tumblr.com/dhanyaforgyanam",
          "https://dhanyaforgyanam.substack.com",
          "https://medium.com/@teamgyanam",
          "https://www.quora.com/profile/Dhanya-Sharma",
          "https://linkedin.com/in/dhanyasharma"
        ],
        "subjectOf": [
          {
            "@type": "Article",
            "headline": "How Dhanya Sharma Built Gyanam Education into a Trusted Tutor Platform in Delhi NCR",
            "url": "https://medium.com/@teamgyanam/how-dhanya-sharma-built-gyanam-education-into-a-trusted-tutor-platform-in-delhi-ncr-345d8e635298",
            "author": {
              "@type": "Organization",
              "name": "Gyanam Education"
            }
          },
          {
            "@type": "Article",
            "headline": "Why Gyanam Education is Becoming the Preferred Coaching Tutor Platform in Delhi Gurgaon",
            "url": "https://medium.com/@teamgyanam/why-gyanam-education-is-becoming-the-preferred-coaching-tutor-platform-in-delhi-gurgaon-and-5b854004ca79",
            "author": {
              "@type": "Organization",
              "name": "Gyanam Education"
            }
          },
          {
            "@type": "Article",
            "headline": "Best Home Tuition and Coaching Services in Delhi NCR",
            "url": "https://dhanyaforgyanam.substack.com/p/best-home-tuition-and-coaching-services",
            "author": {
              "@type": "Person",
              "name": "Dhanya Sharma"
            }
          },
          {
            "@type": "Article",
            "headline": "Why Gyanam Education is Becoming the Preferred Platform",
            "url": "https://dhanyaforgyanam.substack.com/p/why-gyanam-education-is-becoming",
            "author": {
              "@type": "Person",
              "name": "Dhanya Sharma"
            }
          },
          {
            "@type": "BlogPosting",
            "headline": "Elevating Ed-Tech: When Elite Coaching Meets Innovation",
            "url": "https://www.tumblr.com/dhanyaforgyanam/816218430288117760/elevating-ed-tech-when-elite-coaching-meets",
            "author": {
              "@type": "Person",
              "name": "Dhanya Sharma"
            }
          },
          {
            "@type": "BlogPosting",
            "headline": "Romanticizing the Grind But Actually Getting Results",
            "url": "https://www.tumblr.com/dhanyaforgyanam/816218367023267840/romanticizing-the-grind-but-actually-getting",
            "author": {
              "@type": "Person",
              "name": "Dhanya Sharma"
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://gyanam.net/#organization",
        "name": "Gyanam Education",
        "alternateName": "Gyanam",
        "url": "https://gyanam.net",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gyanam.net/logo.png"
        },
        "founder": {
          "@id": "https://gyanam.net/#dhanya-sharma"
        },
        "foundingDate": "2018",
        "areaServed": [
          "Delhi",
          "NCR",
          "Gurgaon",
          "Noida",
          "India"
        ],
        "description": "Gyanam Education is India's leading medical education and tutor platform founded by Dhanya Sharma. Offering NEET coaching, USMLE preparation, home tuition, and coaching services in Delhi NCR with 50,000+ students.",
        "serviceType": [
          "Medical Education",
          "NEET Coaching",
          "USMLE Preparation",
          "Home Tuition Services",
          "Coaching Services",
          "Online Tutoring",
          "Clinical Skills Training",
          "Medical Exam Preparation"
        ],
        "sameAs": [
          "https://gyanam.net",
          "https://www.tumblr.com/dhanyaforgyanam",
          "https://dhanyaforgyanam.substack.com",
          "https://medium.com/@teamgyanam"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://gyanam.net/#website",
        "url": "https://gyanam.net",
        "name": "Dhanya Sharma - Gyanam Education",
        "description": "Official website of Dhanya Sharma, Founder of Gyanam Education",
        "publisher": {
          "@id": "https://gyanam.net/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://gyanam.net/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "Gyanam Education",
        "url": "https://gyanam.net",
        "founder": {
          "@type": "Person",
          "name": "Dhanya Sharma"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi NCR",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "5000"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-[#fcf9f8] text-[#1b1c1c]">
        {children}
      </body>
    </html>
  );
}