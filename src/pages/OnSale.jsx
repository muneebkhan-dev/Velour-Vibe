import React from "react"
import {
  FiArrowRight,
  FiChevronDown,
  FiTag,
  FiPercent,
  FiTruck,
} from "react-icons/fi";
import ProductCard from "../Components/ProductCard";

const OnSale = () => {

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
    <main>
      <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8'>
        <div className='relative overflow-hidden rounded-3xl bg-black px-6 py-12 text-white sm:px-10 md:px-14 md:py-16'>
          {/* Decorative circles */}
          <div className='absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#00D0B0]/20 blur-2xl' />
          <div className='absolute -bottom-24 right-24 h-48 w-48 rounded-full bg-[#00D0B0]/10 blur-2xl' />

          <div className='relative z-10 max-w-2xl'>
            <div className='mb-5 inline-flex items-center gap-2 rounded-full bg-[#00D0B0] px-4 py-2 text-xs font-semibold text-black'>
              <FiTag />
              LIMITED TIME OFFERS
            </div>

            <h1 className='max-w-xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl'>
              BIG STYLE.
              <br />
              <span className='text-[#00D0B0]'>BIGGER SAVINGS.</span>
            </h1>

            <p className='mt-5 max-w-lg text-sm leading-6 text-white/70 sm:text-base'>
              Discover your favorite styles at prices you won't want to miss.
              Shop our exclusive sale collection before the offers end.
            </p>

            <button className='mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00D0B0]'>
              Shop Sale
              <FiArrowRight />
            </button>
          </div>

          {/* Right discount badge */}
          <div className='absolute bottom-8 right-8 hidden h-40 w-40 items-center justify-center rounded-full border border-[#00D0B0]/40 bg-[#00D0B0]/10 md:flex lg:h-48 lg:w-48'>
            <div className='text-center'>
              <p className='text-4xl font-bold text-[#00D0B0] lg:text-5xl'>
                50%
              </p>

              <p className='mt-1 text-xs font-semibold tracking-widest'>OFF</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 sm:grid-cols-3'>
          <div className='flex items-center gap-4 border-b border-gray-200 p-5 sm:border-b-0 sm:border-r'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10'>
              <FiPercent className='text-xl text-[#00A990]' />
            </div>
            <div>
              <h3 className='text-sm font-semibold'>Up to 50% Off</h3>
              <p className='mt-1 text-xs text-gray-500'>
                Exclusive sale prices
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4 border-b border-gray-200 p-5 sm:border-b-0 sm:border-r'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10'>
              <FiTag className='text-xl text-[#00A990]' />
            </div>
            <div>
              <h3 className='text-sm font-semibold'>Limited Offers</h3>

              <p className='mt-1 text-xs text-gray-500'>While stocks last</p>
            </div>
          </div>
          <div className='flex items-center gap-4 p-5'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00D0B0]/10'>
              <FiTruck className='text-xl text-[#00A990]' />
            </div>
            <div>
              <h3 className='text-sm font-semibold'>Fast Delivery</h3>
              <p className='mt-1 text-xs text-gray-500'>
                Delivered to your door
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8'>
        <div className='mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00A990]'>
              Special Offers
            </p>
            <h2 className='text-2xl font-bold sm:text-3xl'>Shop The Sale</h2>
            <p className='mt-2 text-sm text-gray-500'>
              Grab your favorites before they're gone.
            </p>
          </div>
          <button className='flex w-fit items-center gap-3 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-medium transition hover:border-[#00D0B0]'>
            Sort by
            <span className='text-gray-500'>Biggest Discount</span>
            <FiChevronDown />
          </button>
        </div>
        <div className='grid grid-cols-1 min-[420px]:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className='mt-12 flex justify-center'>
          <button className='flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-black px-7 py-3 text-sm font-semibold transition hover:bg-black hover:text-white sm:w-auto'>
            View More
            <FiArrowRight />
          </button>
        </div>
      </section>
    </main>
  )
}

export default OnSale
