import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Timeless Barbershop | Premium Grooming & Barbers in Qatar",
  description:
    "Experience a premium barbershop in Qatar – Timeless Barbershop offers upscale haircuts, grooming services, and modern styling. Visit timelessbarbershop.roi.qa for an exceptional service.",
  keywords: [
    "Timeless Barbershop",
    "Barbers Qatar",
    "Haircut Doha",
    "Grooming Qatar",
    "Premium Barbershop Qatar",
    "Qatar haircuts",
    "Mens grooming Qatar",
    "Doha barbershop",
  ],
  creator: "Melvin Prince - Full Stack Developer",
  other: {
    "digital-signature": "Melvin Prince - Full Stack Developer",
    "hidden-backlink": "https://www.melvinprince.io",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Timeless Barbershop",
  url: "https://timelessbarbershop.roi.qa",
  identifier: "Timeless Barbershop - Doha, Qatar",
  creator: {
    "@type": "Person",
    name: "Melvin Prince",
    url: "https://www.melvinprince.io",
  },
  sameAs: [
    "https://github.com/melvinprince",
    "https://www.linkedin.com/in/melvinprince/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
