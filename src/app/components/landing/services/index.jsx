import React from 'react';

const servicesData = [
  {
    title: 'Accounting',
    bg: '#1d5373',
    description: `When you outsource your Accounting management to Resolve Biz Services & Apps, you can rest assured of the fact that we will provide the optimum service model for your business. We discuss and develop solutions that are structured especially for your business.`,
    button: 'LEARN MORE',
    buttonColor: '#1d5373',
    aria: 'Learn more about our Accounting Services',
  },
  {
    title: 'Payroll',
    bg: '#0A395B',
    description: `Partner with Resolve Biz Services & Apps, and let us handle all your payroll processes. We support Multi-layer pay structures across different branches, sub-contractor payroll, and more. We even handle all statutory forms, manage SLA and MIS reporting.`,
    button: 'LEARN MORE',
    buttonColor: '#1d5373',
    aria: 'Learn more about our Payroll Services',
  },
];

const blogData = {
  title: 'Our Blog',
  bg: '#0A395B',
  description: (
    <>
      We are true believers of being <strong>'Lifelong Students'</strong>. When
      you stop learning, that is when you stagnate and stop growing.
      <br />
      Access our wide range of blogs to learn more!
    </>
  ),
  button: 'LEARN MORE',
  buttonColor: '#224f6e',
  aria: 'Discover our blog articles',
};

const postsData = {
  title: 'Latest Blog Posts',
  bg: '#224f6e',
  posts: [
    'Double Income No Kids (DINK) Couples',
    'PF Scheme – It’s Features & Benefits',
    'Young Professional – Single',
    'COVID-19 Lockdown – Financial Relief To Small Business 3 Months PF Subsidy',
  ],
};

function Services() {
  return (
    <section
      className='bg-[#0A395B] w-full '
      aria-labelledby='services-heading'
    >
      <header className='m-[30px] h-[100px] '>
        <h1
          id='services-heading'
          className='text-white text-3xl font-bold text-center py-10'
        >
          SERVICES
        </h1>
        <meta
          name='description'
          content='Professional Accounting, Payroll and Business Blog Services for sustained business growth'
        />
      </header>
      {/* Services Row */}
      <div className='flex flex-col md:flex-row w-full'>
        {servicesData.map((srv, idx) => (
          <article
            key={srv.title}
            className={`flex-1`}
            style={{ backgroundColor: srv.bg, minHeight: '440px' }}
            aria-label={srv.title}
          >
            <div
              className={`p-8 flex flex-col justify-center items-center h-full border-b md:border-b-0 ${idx === 0 ? 'md:border-r' : ''} border-[#15334a]`}
            >
              <h2 className='text-white text-2xl mb-4 font-bold'>
                {srv.title}
              </h2>
              <p className='text-base text-white mb-6 max-w-md text-left'>
                {srv.description}
              </p>
              <button
                className='border border-white text-white py-1 px-6 rounded-full text-sm transition hover:bg-white hover:text-[#1d5373]'
                aria-label={srv.aria}
              >
                {srv.button}
              </button>
            </div>
          </article>
        ))}
      </div>
      {/* Blog Row */}
      <div className='flex flex-col md:flex-row w-full'>
        <article
          className='flex-1'
          style={{ backgroundColor: blogData.bg, minHeight: '440px' }}
          aria-label={blogData.title}
        >
          <div className='p-8 flex flex-col justify-center items-center h-full border-b md:border-b-0 md:border-r border-[#15334a]'>
            <h2 className='text-white text-2xl mb-4 font-bold'>
              {blogData.title}
            </h2>
            <p className='text-base text-white mb-6 max-w-md text-left'>
              {blogData.description}
            </p>
            <button
              className='border border-white text-white py-1 px-6 rounded-full text-sm transition hover:bg-white hover:text-[#224f6e]'
              aria-label={blogData.aria}
            >
              {blogData.button}
            </button>
          </div>
        </article>
        <nav
          className='flex-1'
          style={{ backgroundColor: postsData.bg, minHeight: '440px' }}
          aria-label={postsData.title}
        >
          <div className='p-8 h-full'>
            <h2 className='text-white text-2xl mb-4 font-bold text-center'>
              {postsData.title}
            </h2>
            <ul className='text-base text-white list-disc list-inside ml-2 space-y-2'>
              {postsData.posts.map((post, idx) => (
                <li key={idx}>{post}</li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Services;
