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
  title: "Dr. Dhanya Sharma | Founder of Gyanam Education | Medical Educator & Healthcare Leader",
  description: "Dr. Dhanya Sharma, MD, MBA - Founder of Gyanam Education. Transforming medical education globally with 50,000+ students impacted. Expert in NEET, USMLE preparation, clinical skills training, and healthcare leadership.",
  keywords: "Dhanya Sharma, Gyanam Education, medical education, NEET coaching, USMLE preparation, healthcare leadership, medical educator, clinical training, MD MBA, medical exam preparation",
  authors: [{ name: "Dr. Dhanya Sharma" }],
  creator: "Dr. Dhanya Sharma",
  publisher: "Gyanam Education",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gyanameducation.com",
    siteName: "Gyanam Education",
    title: "Dr. Dhanya Sharma | Founder of Gyanam Education",
    description: "Transforming medical education globally. 50,000+ students empowered by world-class programs.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Dhanya Sharma - Gyanam Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dhanya Sharma | Founder of Gyanam Education",
    description: "Transforming medical education globally with innovative programs and expert mentorship.",
    creator: "@gyanameducation",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Dhanya Sharma",
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "Gyanam Education",
      url: "https://gyanameducation.com",
      logo: "https://gyanameducation.com/logo.png",
      description: "Leading medical education platform transforming healthcare education globally",
      foundingDate: "2018",
      founder: {
        "@type": "Person",
        name: "Dr. Dhanya Sharma"
      }
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Medical School",
        degree: "Doctor of Medicine (MD)"
      },
      {
        "@type": "EducationalOrganization", 
        name: "Business School",
        degree: "Master of Business Administration (MBA)"
      }
    ],
    knowsAbout: ["Medical Education", "Healthcare Leadership", "Clinical Medicine", "NEET Preparation", "USMLE Coaching", "Healthcare Management"],
    description: "Visionary medical educator and founder of Gyanam Education, transforming healthcare education globally with 50,000+ students impacted.",
    url: "https://gyanameducation.com",
    sameAs: [
      "https://linkedin.com/in/dhanyasharma",
      "https://twitter.com/gyanameducation",
      "https://instagram.com/gyanameducation"
    ]
  };

  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}