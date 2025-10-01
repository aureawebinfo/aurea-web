import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string[];
  noIndex?: boolean;
}

const Seo: React.FC<SeoProps> = ({
  title = "Aurea Web - Desarrollo Web Profesional",
  description = "Expertos en desarrollo web con html, css y javascript, usando tecnologías modernas. Creamos soluciones digitales innovadoras para tu negocio.",
  canonicalUrl = "https://aurea-web.com",
  ogImage = "/logo_aurea_name.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = ["desarrollo web", "html", "css", "javascript", "React", "TypeScript", "Vite", "aurea web"],
  noIndex = false
}) => {
  const fullTitle = title.includes("Aurea Web") ? title : `${title} | Aurea Web`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `https://aurea-web.com${ogImage}`;

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Aurea Web" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Schema.org para Aurea Web */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Aurea Web",
          "url": "https://aurea-web.com",
          "logo": "https://aurea-web.com/logo_aurea_name.png",
          "description": description,
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default Seo;