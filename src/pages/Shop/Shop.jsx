import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import ProductCard from "../../Components/ProductCard";
const shop = () => {

  const products = [
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
    <section className='relative py-8 md:py-10'>
      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
          <div className='w-full lg:w-1/4 xl:w-[23%] border border-gray-200 rounded-2xl p-5'>
            <div className='flex items-center justify-between pb-5 border-b border-gray-200'>
              <h3 className='font-dm font-bold text-lg'>Filters</h3>
              <button className='text-gray-400 text-xl'>×</button>
            </div>
            <div className='py-5 border-b border-gray-200'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                  <span className='font-dm text-sm text-gray-600'>
                    T-Shirts
                  </span>
                  <IoIosArrowForward className='text-gray-400 size-4' />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='font-dm text-sm text-gray-600'>Shirts</span>
                  <IoIosArrowForward className='text-gray-400 size-4' />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='font-dm text-sm text-gray-600'>Jeans</span>
                  <IoIosArrowForward className='text-gray-400 size-4' />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='font-dm text-sm text-gray-600'>Shorts</span>
                  <IoIosArrowForward className='text-gray-400 size-4' />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='font-dm text-sm text-gray-600'>Hoodies</span>
                  <IoIosArrowForward className='text-gray-400 size-4' />
                </div>
              </div>
            </div>
            <div className='py-5 border-b border-gray-200'>
              <div className='flex items-center justify-between mb-5'>
                <h4 className='font-dm font-semibold'>Price</h4>
                <IoIosArrowDown className='size-4' />
              </div>
              <div className='relative h-1 bg-gray-200 rounded-full'>
                <div className='absolute left-0 right-0 h-1 bg-black rounded-full' />
                <span className='absolute left-0 -top-1.5 w-4 h-4 bg-black rounded-full' />
                <span className='absolute right-0 -top-1.5 w-4 h-4 bg-black rounded-full' />
              </div>
              <div className='flex justify-between mt-4'>
                <span className='font-dm text-xs text-gray-500'>$50</span>
                <span className='font-dm text-xs text-gray-500'>$500</span>
              </div>
            </div>
            <div className='py-5 border-b border-gray-200'>
              <div className='flex items-center justify-between mb-4'>
                <h4 className='font-dm font-semibold'>Colors</h4>
                <IoIosArrowDown className='size-4' />
              </div>
              <div className='grid grid-cols-7 gap-3'>
                {[
                  "#00C12B",
                  "#F50606",
                  "#F5DD06",
                  "#F57906",
                  "#06CAF5",
                  "#063AF5",
                  "#7D06F5",
                  "#F506A4",
                  "#FFFFFF",
                  "#000000",
                ].map((color, index) => (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                    className='w-5 h-5 rounded-full border border-gray-200'
                  />
                ))}
              </div>
            </div>
            <div className='py-5 border-b border-gray-200'>
              <div className='flex items-center justify-between mb-4'>
                <h4 className='font-dm font-semibold'>Size</h4>
                <IoIosArrowDown className='size-4' />
              </div>
              <div className='flex flex-wrap gap-2'>
                {[
                  "XX-Small",
                  "X-Small",
                  "Small",
                  "Medium",
                  "Large",
                  "X-Large",
                  "XX-Large",
                ].map((size) => (
                  <button
                    key={size}
                    className='font-dm text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-full'
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className='py-5'>
              <div className='flex items-center justify-between mb-4'>
                <h4 className='font-dm font-semibold'>Dress Style</h4>
                <IoIosArrowDown className='size-4' />
              </div>
              <div className='flex flex-col gap-4'>
                {["Casual", "Formal", "Party", "Gym"].map((style) => (
                  <div
                    key={style}
                    className='flex items-center justify-between'
                  >
                    <span className='font-dm text-sm text-gray-500'>
                      {style}
                    </span>
                    <IoIosArrowForward className='size-4 text-gray-400' />
                  </div>
                ))}
              </div>
            </div>
            <button className='w-full bg-black text-white font-dm text-sm py-3 rounded-full'>
              Apply Filter
            </button>
          </div>
          <div className='w-full lg:w-3/4 xl:w-[77%]'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5'>
              <div className='flex items-center gap-3'>
                <h1 className='font-dm font-bold text-2xl md:text-3xl'>
                  Casual
                </h1>
                <span className='font-dm text-xs md:text-sm text-gray-400'>
                  Showing 1-9 of 100 Products
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-dm text-sm text-gray-400'>Sort by:</span>
                <button className='flex items-center gap-2 font-dm text-sm'>
                  Most Popular
                  <IoIosArrowDown className='size-4' />
                </button>
              </div>
            </div>
            <div className='grid grid-cols-1 min-[420px]:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8'>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className='flex items-center justify-between border-t border-gray-200 mt-10 pt-5'>
              <button className='flex items-center gap-2 border border-gray-200 rounded-full py-2 px-4 font-dm text-sm'>
                ←<span className='hidden sm:block'>Previous</span>
              </button>
              <div className='flex items-center gap-2'>
                <button className='w-8 h-8 rounded-lg bg-gray-100 font-dm text-sm'>
                  1
                </button>

                <button className='w-8 h-8 font-dm text-sm text-gray-500'>
                  2
                </button>

                <button className='w-8 h-8 font-dm text-sm text-gray-500'>
                  3
                </button>

                <span className='text-gray-400'>...</span>

                <button className='w-8 h-8 font-dm text-sm text-gray-500'>
                  10
                </button>
              </div>
              <button className='flex items-center gap-2 border border-gray-200 rounded-full py-2 px-4 font-dm text-sm'>
                <span className='hidden sm:block'>Next</span>→
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default shop
