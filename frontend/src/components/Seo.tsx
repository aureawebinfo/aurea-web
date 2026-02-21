// import React from "react";
// import {
//   Title,
//   Meta,
//   Link,
// } from "react-head";

// interface SeoProps {
//   title?: string;
//   description?: string;
//   canonicalUrl?: string;
//   ogImage?: string;
//   ogType?: string;
//   twitterCard?: string;
//   keywords?: string[];
//   noIndex?: boolean;
// }

// const Seo: React.FC<SeoProps> = ({
//   title = "Aurea Web - Desarrollo Web Profesional",
//   description = "Expertos en desarrollo web con html, css y javascript, usando tecnologías modernas. Creamos soluciones digitales innovadoras para tu negocio.",
//   canonicalUrl = "https://aurea-web.com",
//   ogImage = "/logo_aurea_name.png",
//   ogType = "website",
//   twitterCard = "summary_large_image",
//   keywords = [
//     "desarrollo web",
//     "html",
//     "css",
//     "javascript",
//     "React",
//     "TypeScript",
//     "Vite",
//     "aurea web",
//   ],
//   noIndex = false,
// }) => {
//   const fullTitle = title.includes("Aurea Web")
//     ? title
//     : `${title} | Aurea Web`;

//   const fullImageUrl = ogImage.startsWith("http")
//     ? ogImage
//     : `https://aurea-web.com${ogImage}`;

//   return (
//     <>
//       {/* Básicos */}
//       <Title>{fullTitle}</Title>
//       <Meta name="description" content={description} />
//       <Meta name="keywords" content={keywords.join(", ")} />

//       {/* Canonical */}
//       <Link rel="canonical" href={canonicalUrl} />

//       {/* Open Graph */}
//       <Meta property="og:title" content={fullTitle} />
//       <Meta property="og:description" content={description} />
//       <Meta property="og:url" content={canonicalUrl} />
//       <Meta property="og:type" content={ogType} />
//       <Meta property="og:image" content={fullImageUrl} />
//       <Meta property="og:site_name" content="Aurea Web" />
//       <Meta property="og:locale" content="es_ES" />

//       {/* Twitter */}
//       <Meta name="twitter:card" content={twitterCard} />
//       <Meta name="twitter:title" content={fullTitle} />
//       <Meta name="twitter:description" content={description} />
//       <Meta name="twitter:image" content={fullImageUrl} />

//       {/* Robots */}
//       <Meta
//         name="robots"
//         content={noIndex ? "noindex, nofollow" : "index, follow"}
//       />

//       {/* Schema.org */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Organization",
//           name: "Aurea Web",
//           url: "https://aurea-web.com",
//           logo: "https://aurea-web.com/logo_aurea_name.png",
//           description,
//           sameAs: [],
//           contactPoint: {
//             "@type": "ContactPoint",
//             contactType: "customer service",
//           },
//         })}
//       </script>
//     </>
//   );
// };

// export default Seo;