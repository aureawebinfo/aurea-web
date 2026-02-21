// import { useEffect } from 'react';

// export const useSeo = (
//   title?: string,
//   description?: string,
//   canonical?: string
// ) => {
//   useEffect(() => {
//     // Actualizar título
//     if (title) {
//       document.title = title.includes("Aurea Web") ? title : `${title} | Aurea Web`;
//     }

//     // Actualizar meta description
//     if (description) {
//       const metaDescription = document.querySelector('meta[name="description"]');
//       if (metaDescription) {
//         metaDescription.setAttribute('content', description);
//       }
//     }

//     // Actualizar canonical
//     if (canonical) {
//       let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
//       if (!linkCanonical) {
//         linkCanonical = document.createElement('link');
//         linkCanonical.rel = 'canonical';
//         document.head.appendChild(linkCanonical);
//       }
//       linkCanonical.href = canonical;
//     }
//   }, [title, description, canonical]);
// };