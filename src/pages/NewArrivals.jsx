import React from 'react'
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import ProductCard from '../Components/ProductCard';
import Breadcrumb from '../Components/Breadcrumb';

const NewArrivals = () => {

   const newProducts = [
    {
      id: 1,
      img: "/src/assets/images/CardImages/proimg-1.png",
      title: "T-shirt with Tape",
      rating: 4.5,
      price: "$120",
      
      category: "shirts",
    },

    {
      id: 2,
      img: "/src/assets/images/CardImages/proimg-2.png",
      title: "Skinny Fit Jeans",
      rating: 4.5,
      price: "$240",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 3,
      img: "/src/assets/images/CardImages/proimg-3.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: "$180",
      
      category: "shirts",
    },
    
    {
      id: 4,
      img: "/src/assets/images/CardImages/proimg-4.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: "$130",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 5,
      img: "/src/assets/images/CardImages/proimg-1.png",
      title: "T-shirt with Tape",
      rating: 4.5,
      price: "$120",
      
      category: "shirts",
    },

    {
      id: 6,
      img: "/src/assets/images/CardImages/proimg-2.png",
      title: "Skinny Fit Jeans",
      rating: 4.5,
      price: "$240",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 7,
      img: "/src/assets/images/CardImages/proimg-3.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: "$180",
      
      category: "shirts",
    },
    
    {
      id: 8,
      img: "/src/assets/images/CardImages/proimg-4.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: "$130",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 9,
      img: "/src/assets/images/CardImages/proimg-2.png",
      title: "Skinny Fit Jeans",
      rating: 4.5,
      price: "$240",
      originalPrice: "$260",
      
      category: "shirts",
    },
    
  ]


  return (
    <main>
      <Breadcrumb/>
      <section className="mx-auto max-w-7xl px-4 pb-7 pt-8 sm:px-6 md:pt-10 lg:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00A990]">
              Just In
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              New Arrivals
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Discover the latest styles and fresh additions to our
              collection.
            </p>
          </div>
          <button
            type="button"
            className="flex w-fit items-center gap-3 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-medium transition hover:border-[#00D0B0]"
          >
            Sort by
            <span className="text-gray-500">
              Latest
            </span>
            <FiChevronDown />
          </button>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4">

          {newProducts.map((product) => (
           <ProductCard key={product.id} product={product} />
          ))}

        </div>

        {/* View All */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-black px-7 py-3 text-sm font-semibold transition hover:bg-black hover:text-white sm:w-auto"
          >
            View All New Arrivals
            <FiArrowRight />
          </button>
        </div>

      </section>
    </main>
  )
}

export default NewArrivals