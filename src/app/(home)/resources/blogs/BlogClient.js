"use client"
import React, { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from 'prop-types';
import { FaTag, FaRegHeart, FaTimes, FaCode, FaImage, FaQuoteLeft, FaVideo, FaYoutube, FaLink } from "react-icons/fa";

// Lazy loaded Content Renderer Component
const ContentRenderer = React.memo(({ content }) => {
  const renderContentBlock = useCallback((block, index) => {
    switch (block.type) {
      case 'heading': {
        const HeadingTag = `h${block.data.level || 2}`;
        return (
          <HeadingTag 
            key={index} 
            className={`font-bold mb-4 mt-8 text-gray-900 ${block.data.level === 1 ? 'text-3xl' : block.data.level === 2 ? 'text-2xl' : 'text-xl'}`}
            style={{ color: 'rgb(2,126,197)' }}
          >
            {block.data.text}
          </HeadingTag>
        );
      }

      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 mb-6 leading-relaxed text-base">
            {block.data.text}
          </p>
        );

      case 'list': {
        const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
        const listStyle = block.data.style === 'ordered' ? 'list-decimal' : 'list-disc';
        return (
          <div key={index} className="mb-6">
            <ListTag className={`${listStyle} list-inside space-y-2 text-gray-700`}>
              {block.data.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-700 leading-relaxed">
                  {item}
                </li>
              ))}
            </ListTag>
          </div>
        );
      }

      case 'image':
        return (
          <div key={index} className="mb-4">
            <div className="relative group max-w-xl mx-auto">
            <img
                src={block.data.src}
                alt={block.data.alt}
                className="w-full h-auto max-h-64 object-contain hover:opacity-90 transition-opacity duration-300 rounded-lg"
                loading="lazy"
                decoding="async"
                
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                {/* <FaImage className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg" /> */}
              </div>
            </div>
            {block.data.alt && (
              <p className="text-sm text-gray-500 mt-2 italic text-center">{block.data.alt}</p>
            )}
          </div>
        );

      case 'video':
        return (
          <div key={index} className="mb-4">
            <div className="relative group max-w-2xl mx-auto">
              <video
                src={block.data.src}
                controls
                preload="metadata"
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md"
                poster="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                <FaVideo className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl" />
              </div>
            </div>
            {block.data.caption && (
              <p className="text-sm text-gray-500 mt-2 italic text-center">{block.data.caption}</p>
            )}
          </div>
        );

      case 'embed':
        return (
          <div key={index} className="mb-4">
            <div className="relative group max-w-2xl mx-auto">
              <div 
                className="w-full rounded-lg shadow-md overflow-hidden"
                style={{ 
                  width: block.data.width || '100%', 
                  height: block.data.height || '300px',
                  maxWidth: '100%'
                }}
                dangerouslySetInnerHTML={{ __html: block.data.embed }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                {block.data.service === 'youtube' ? (
                  <FaYoutube className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl" />
                ) : (
                  <FaLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl" />
                )}
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 italic text-center">
              {block.data.service === 'youtube' ? 'YouTube Video' : 'Embedded Content'}
            </p>
          </div>
        );

      case 'table':
        return (
          <div key={index} className="mb-6 overflow-x-auto">
            <div className="min-w-full rounded-lg shadow-md border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {block.data.content.slice(0, 1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <th
                          key={cellIndex}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {cell}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {block.data.content.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50 transition-colors duration-200">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div key={index} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {block.data.images.map((image, imageIndex) => (
                <div key={imageIndex} className="relative group">
                  <img
                    src={image}
                    alt={`Gallery image ${imageIndex + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <FaImage className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'code':
        return (
          <div key={index} className="mb-6">
            <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
                <div className="flex items-center gap-2">
                  <FaCode className="text-gray-400 text-sm" />
                  <span className="text-gray-300 text-sm font-medium">
                    {block.data.language || 'Code'}
                  </span>
                </div>
                <button 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={() => navigator.clipboard.writeText(block.data.code)}
                  title="Copy code"
                  aria-label="Copy code to clipboard"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-gray-100 text-sm leading-relaxed">
                  {block.data.code}
                </code>
              </pre>
            </div>
          </div>
        );

      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 pl-6 py-4 mb-6 bg-gray-50 rounded-r-lg" style={{ borderColor: 'rgb(2,126,197)' }}>
            <div className="flex items-start gap-3">
              <FaQuoteLeft className="text-2xl mt-1" style={{ color: 'rgb(2,126,197)' }} />
              <div>
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  &ldquo;{block.data.text}&rdquo;
                </p>
                {block.data.caption && (
                  <footer className="text-sm text-gray-500 mt-3 font-medium">
                    — {block.data.caption}
                  </footer>
                )}
              </div>
            </div>
          </blockquote>
        );

      case 'divider':
        return (
          <hr key={index} className="my-8 border-gray-200" />
        );

      default:
        return null;
    }
  }, []);

  return (
    <div className="space-y-6">
      {content.map((block, index) => renderContentBlock(block, index))}
    </div>
  );
});

ContentRenderer.propTypes = {
  content: PropTypes.array.isRequired
};

ContentRenderer.displayName = 'ContentRenderer';

// Blog Card Component for better performance
const BlogCard = React.memo(({ blog, onOpenModal }) => {
  const handleCardClick = useCallback(() => {
    onOpenModal(blog);
  }, [blog, onOpenModal]);

  const handleLearnMoreClick = useCallback((e) => {
    e.stopPropagation();
    onOpenModal(blog);
  }, [blog, onOpenModal]);

  const handleLikeClick = useCallback((e) => {
    e.stopPropagation();
    // Like functionality - you can add your like logic here
    console.log('Liked:', blog.title);
  }, [blog.title]);

  const handleTagClick = useCallback((e) => {
    e.stopPropagation();
    // Tag functionality - you can add your tag logic here
    console.log('Tagged:', blog.title);
  }, [blog.title]);

  return (
    <article 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Blog Image */}
      <div className="relative h-48 w-full group">
        <img
          src={blog.coverImage || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop"}
          alt={blog.title}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-all duration-300 rounded-top-xl"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop";
          }}
        />
        
        {/* Hover Overlay with Tag and Like Icon Only */}
        <div className="absolute inset-0 bg-gradient-to-t rounded-top-xl from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
          <div className="flex items-center gap-4">
            {/* Tag */}
            <button 
              className="bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
              onClick={handleTagClick}
              aria-label="Tag this post"
            >
              <FaTag className="w-5 h-5" style={{ color: 'rgb(2,126,197)' }} />
            </button>
            
            {/* Like Icon */}
            <button 
              className="bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
              onClick={handleLikeClick}
              aria-label="Like this post"
            >
              <FaRegHeart className="w-5 h-5" style={{ color: 'rgb(2,126,197)' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Content Below Image */}
      <div className="p-3">
        {/* Blog Title */}
        <h3 className="text-base font-bold text-gray-900 mb-2 overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {blog.title}
        </h3>
        
        {/* Blog Description with More Link */}
        {blog.description && (
          <div className="text-sm text-gray-600 mb-4">
            <span className="overflow-hidden" style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {blog.description}
            </span>
            <button 
              className="text-blue-600 hover:text-blue-800 font-medium ml-1 transition-colors duration-200"
              onClick={handleLearnMoreClick}
              aria-label="Read more about this blog post"
            >
              ...more
            </button>
          </div>
        )}
      </div>
    </article>
  );
});

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    createdAt: PropTypes.string,
    coverImage: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.array
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired
};

BlogCard.displayName = 'BlogCard';

function BlogClient({ blogs }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState(12);

  // Memoize blogs data
  const displayedBlogs = useMemo(() => blogs.slice(0, visibleBlogs), [visibleBlogs, blogs]);

  // Effect to handle body scroll when modal opens/closes
  useEffect(() => {
    if (isModalOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isModalOpen]);

  const openModal = useCallback((blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  }, []);

  const loadMoreBlogs = useCallback(() => {
    setVisibleBlogs(prev => Math.min(prev + 12, blogs.length));
  }, [blogs.length]);

  return (
    <>
      {/* Blog Cards Grid */}
      <section className="container mx-auto px-[34px] py-12" aria-label="Blog posts">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedBlogs.map((blog, index) => (
            <BlogCard 
              key={`${blog.title}-${index}`}
              blog={blog} 
              index={index} 
              onOpenModal={openModal}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleBlogs < blogs.length && (
          <div className="text-center mt-12">
            <button 
              className="px-8 py-3 text-white rounded-lg font-medium transition-colors duration-200" 
              style={{ backgroundColor: 'rgb(2,126,197)' }}
              onClick={loadMoreBlogs}
              aria-label="Load more blog posts"
            >
              Load More Articles
            </button>
          </div>
        )}
      </section>

      {/* Enhanced Blog Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 animate-fade-in"
            onClick={closeModal}
            aria-hidden="true"
          ></div>
          
          {/* Modal Content */}
          <div className="relative h-full flex bg-white animate-slide-up">
            {/* Main Content Area */}
            <div className="flex-1 bg-white relative overflow-y-auto">
              {/* Dark Gray Top Bar */}
              <header className="bg-gray-800 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
                <div className="flex items-center">
                  <h2 id="modal-title" className="text-white font-semibold truncate">
                    {selectedBlog.title}
                  </h2>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-white hover:text-gray-300 transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </header>

              {/* Main Content */}
              <main className="p-6 max-w-6xl mx-auto bg-white">
                {/* Blog Header */}
                <div className="mb-6 animate-fade-in-delay">
                  <h1 className="text-2xl font-bold mb-3" style={{ color: 'rgb(2,126,197)' }}>
                    {selectedBlog.title}
                  </h1>
                  
                  {/* Author and Date */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span>by {selectedBlog.author || 'Anonymous'}</span>
                    <span>•</span>
                    <span>{selectedBlog.createdAt ? new Date(selectedBlog.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }) : 'No date'}</span>
                  </div>
                  
                  {/* Blog Description */}
                  {selectedBlog.description && (
                    <p className="text-base text-gray-600 mb-6 leading-relaxed">
                      {selectedBlog.description}
                    </p>
                  )}
                </div>

                {/* Blog Cover Image */}
                {selectedBlog.coverImage && (
                  <div className="mb-6 max-w-xl mx-auto">
                    <img
                      src={selectedBlog.coverImage}
                      alt={selectedBlog.title}
                      className="w-full h-auto max-h-48 object-contain rounded-lg"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop";
                      }}
                    />
                  </div>
                )}

                {/* Blog Content */}
                <article className="prose prose-base max-w-none bg-white animate-fade-in-delay-2">
                  <ContentRenderer content={selectedBlog.content} />
                </article>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

BlogClient.propTypes = {
  blogs: PropTypes.array.isRequired
};

export default BlogClient;


