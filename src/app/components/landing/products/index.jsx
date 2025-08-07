import React from 'react';
const content = [
  {
    image:
      "/assets/landingPageImage/productSectionImg/Attendance-e.png",
    logo:
      "/assets/landingPageImage/logo.png",
    content:
      "With Resolve Work, mark and analyze attendance from anywhere at any time. Access right from your fingertips with web & mobile app.",
  },
  {
    image:
      "/assets/landingPageImage/productSectionImg/Resolve-leave.png",
    logo:
      "/assets/landingPageImage/logo.png",
    content:
      "Apply for leave from anywhere and Managers get notified and can approve the same in real-time.",
  },
  {
    image:
      "/assets/landingPageImage/productSectionImg/Expense-e.png",
    logo:
      "/assets/landingPageImage/logo.png",
    content:
      "Smart Expense management app for a smarter world.  Resolve Expense gives your employees an option to Scan, Submit and claim for the expenses.",
  },
  {
    image:
      "/assets/landingPageImage/productSectionImg/ResolveTax.png",
    logo:
      "/assets/landingPageImage/logo.png",
    content:
      "A smart App that optimizes your taxes. New Tax Regime or Old Tax Regime Financial Year 2020-21.The Finance Budget 2020 has given all taxpayers an option of choosing",
  },
];

function Products() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 max-w-7xl mx-auto" aria-labelledby="products-heading">
      <header className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 id="products-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#204e69]">
          PRODUCTS
        </h2>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {content.map((item, index) => (
          <article
            key={index}
            className="w-full max-w-md mx-auto bg-white rounded-lg flex flex-col items-center p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="w-full h-48 sm:h-64 lg:h-80 mb-4 sm:mb-6">
              <img
                src={item.image}
                alt={`${item.content.split(' ')[0]} Product Screenshot`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="mb-3 sm:mb-4">
              <img
                src={item.logo}
                alt="ResolveBiz Logo"
                className="h-8 sm:h-10 object-contain mx-auto"
                loading="lazy"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-700 px-2 sm:px-4 mb-4 sm:mb-6 flex-grow">
              {item.content}
            </p>
            <button 
              className="mt-auto bg-[rgb(2,126,197)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[rgb(2,126,197)]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(2,126,197)] focus:ring-opacity-50 transform hover:scale-105"
              aria-label={`Learn more about ${item.content.split(' ')[0]} product`}
            >
              Learn More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
