import React from "react";
const content = [
  {
    image:
      "https://www.resolveindia.com/wp-content/uploads/2020/07/Attendance-e1596178319100.png",
    logo:
      "https://www.resolveindia.com/wp-content/uploads/2018/09/Work-Logo-v2-1.png",
    content:
      "With Resolve Work, mark and analyze attendance from anywhere at any time. Access right from your fingertips with web & mobile app.",
  },
  {
    image:
      "https://www.resolveindia.com/wp-content/uploads/2020/10/Resolve-leave.png",
    logo:
      "https://www.resolveindia.com/wp-content/uploads/2018/07/Leave-Logo-1.png",
    content:
      "Apply for leave from anywhere and Managers get notified and can approve the same in real-time.",
  },
  {
    image:
      "https://www.resolveindia.com/wp-content/uploads/2020/07/Expense-e1596178379812.png",
    logo:
      "https://www.resolveindia.com/wp-content/uploads/2020/07/Expense-Logo.png",
    content:
      "Smart Expense management app for a smarter world.  Resolve Expense gives your employees an option to Scan, Submit and claim for the expenses.",
  },
  {
    image:
      "https://www.resolveindia.com/wp-content/uploads/2020/07/ResolveTax-e1596178750161.png",
    logo:
      "https://www.resolveindia.com/wp-content/uploads/2020/07/tax_logo.png",
    content:
      "A smart App that optimizes your taxes. New Tax Regime or Old Tax Regime Financial Year 2020-21.The Finance Budget 2020 has given all taxpayers an option of choosing",
  },
];

function Products() {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-[34px] font-bold text-center mb-10 text-[#204e69]">PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 justify-items-center">
        {content.map((item, index) => (
          <div
            key={index}
            className="w-[564px]  bg-white rounded-lg  flex flex-col items-center p-4 text-center hover:shadow-xl transition-all"
          >
            <div className="w-full h-[420px] mb-4">
              <img
                src={item.image}
                alt="Product Screenshot"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mb-3">
              <img
                src={item.logo}
                alt="Product Logo"
                className="h-10 object-contain mx-auto"
              />
            </div>
            <p className="text-sm text-gray-700 px-2 mb-4">{item.content}</p>
            <button className="mt-auto bg-[#007bff] text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
