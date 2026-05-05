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
    default: "Dhanya Sharma | Founder of Gyanam Education | Visionary Leader",
    template: "%s | Dhanya Sharma - Gyanam Education"
  },
  description: "Dhanya Sharma is the visionary founder of Gyanam Education. Discover her mission to revolutionize learning in Delhi NCR through student-first pedagogy and stress-free education.",
  keywords: "Dhanya Sharma, Founder of Gyanam Education, educational reformer Delhi NCR, modern pedagogy, student-centric learning, holistic mentoring, education leadership India, Gyanam Education Noida",
  authors: [{ name: "Dhanya Sharma" }],
  creator: "Dhanya Sharma",
  publisher: "Gyanam Education",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gyanam.net",
    siteName: "Dhanya Sharma - Gyanam Education",
    title: "Dhanya Sharma | Architect of Modern Education",
    description: "Transforming the educational landscape in Delhi NCR with empathy, strategy, and student-first learning ecosystems.",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure to replace this image in your public folder
        width: 1200,
        height: 630,
        alt: "Dhanya Sharma - Founder of Gyanam Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanya Sharma | Founder of Gyanam Education",
    description: "Rewriting the rules of education with a 100% student-first philosophy.",
    creator: "@gyanameducation", // Update if she has a personal handle
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code", // Uncomment and add actual code when ready
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // High-Impact Entity SEO Schema
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://gyanam.net/#dhanya-sharma",
        "name": "Dhanya Sharma",
        "jobTitle": "Founder & Visionary",
        "description": "Architecting stress-free, future-ready learning ecosystems in Delhi NCR. Dedicated to empowering students through empathy-driven education.",
        "url": "https://gyanam.net",
        "worksFor": {
          "@id": "https://gyanam.net/#organization"
        },
        "knowsAbout": [
          "Educational Leadership",
          "Modern Pedagogy",
          "Student Psychology",
          "Holistic Mentorship",
          "Curriculum Development",
          "Educational Reform"
        ],
        "sameAs": [
          "https://linkedin.com/in/dhanyasharma"
          // Add her Twitter/Instagram here if she has PR accounts
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://gyanam.net/#organization",
        "name": "Gyanam Education",
        "url": "https://gyanam.net",
        "logo": "https://gyanam.net/logo.png",
        "founder": {
          "@id": "https://gyanam.net/#dhanya-sharma"
        },
        "areaServed": ["Delhi NCR", "Noida", "India"],
        "description": "A pioneering educational institution focused on student-first learning, modern pedagogy, and holistic development."
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