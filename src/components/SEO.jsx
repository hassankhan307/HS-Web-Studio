import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({
  title = "HS Web Studio | Digital Agency & Web Development Karachi",
  description = "HS Web Studio builds modern, high-performance websites, Shopify stores, custom web applications, and POS systems for businesses in Karachi and globally.",
  canonical,
  schemaType = "ProfessionalService"
}) {
  const location = useLocation();
  const currentUrl = `https://hswebstudio.site${location.pathname}`;

  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical || currentUrl;

    // Update OG Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = currentUrl;

    // JSON-LD Schema
    let schemaScript = document.getElementById('schema-json-ld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-json-ld';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": "HS Web Studio",
      "url": "https://hswebstudio.site/",
      "logo": "https://hswebstudio.site/assets/images/logo.png",
      "description": "Professional web development, Shopify stores, custom web applications, and POS software in Karachi, Pakistan.",
      "telephone": "+92 331 2901930",
      "email": "hswebstudio3@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karachi",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.8607",
        "longitude": "67.0011"
      },
      "sameAs": [
        "https://www.instagram.com/has_sanwebstudio/",
        "https://github.com/hassankhan307/HS-Web-Studio"
      ],
      "priceRange": "$$"
    };

    schemaScript.text = JSON.stringify(structuredData);
  }, [title, description, canonical, currentUrl, schemaType]);

  return null;
}
