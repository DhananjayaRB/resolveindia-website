import { blogs } from "../blogData/db";
import React from "react";
import Head from 'next/head';
import BlogClient from './BlogClient';

// Generate structured data for SEO
const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Resolve Blog",
  "description": "Business insights, industry trends, and stories that inspire your next business transformation",
  "publisher": {
    "@type": "Organization",
    "name": "Resolve",
    "logo": {
      "@type": "ImageObject",
      "url": "/assets/landingPageImage/logo.png"
    }
  },
  "blogPost": blogs.slice(0, 9).map(blog => ({
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": blog.coverImage,
    "description": blog.description || blog.content.find(block => block.type === 'paragraph')?.data?.text || blog.title
  }))
});

function BlogsPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      <Head>
        <title>Blog - Resolve | Business Insights & Industry Trends</title>
        <meta name="description" content="Discover business insights, industry trends, and stories that inspire your next business transformation. Read our latest blog posts on accounting, payroll, and business solutions." />
        <meta name="keywords" content="business blog, accounting insights, payroll services, business transformation, industry trends" />
        <meta name="author" content="Resolve" />
        <meta property="og:title" content="Blog - Resolve | Business Insights & Industry Trends" />
        <meta property="og:description" content="Discover business insights, industry trends, and stories that inspire your next business transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/landingPageImage/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Resolve | Business Insights & Industry Trends" />
        <meta name="twitter:description" content="Discover business insights, industry trends, and stories that inspire your next business transformation." />
        <meta name="twitter:image" content="/assets/landingPageImage/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
                Blog
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Here, we share business insights, industry trends, and stories that inspire your next business transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Client Component */}
        <BlogClient blogs={blogs} />
      </div>
    </>
  );
}

export default BlogsPage;