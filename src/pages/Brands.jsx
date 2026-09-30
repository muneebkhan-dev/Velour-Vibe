import React from "react"
import {
  FiSearch,
  FiArrowRight,
  FiChevronRight,
} from "react-icons/fi";
import Breadcrumb from "../Components/Breadcrumb";


const Brands = () => {

  const featuredBrands = [
    {
      id: 1,
      name: "Nike",
      image: "/images/brands/nike.png",
      products: "120+ Products",
    },
    {
      id: 2,
      name: "Adidas",
      image: "/images/brands/adidas.png",
      products: "95+ Products",
    },
    {
      id: 3,
      name: "Zara",
      image: "/images/brands/zara.png",
      products: "80+ Products",
    },
    {
      id: 4,
      name: "Levi's",
      image: "/images/brands/levis.png",
      products: "70+ Products",
    },
  ];

  const brands = [
    "Adidas",
    "Calvin Klein",
    "Champion",
    "Converse",
    "Gap",
    "H&M",
    "Levi's",
    "Nike",
    "Puma",
    "Reebok",
    "Tommy Hilfiger",
    "Uniqlo",
    "Zara",
    "New Balance",
    "Under Armour",
    "Vans",
    "Pull&Bear",
    "Bershka",
    "Mango",
    "Diesel",
    "Lacoste",
    "Gucci",
    "Guess",
    "Jack & Jones",
  ];

  const alphabet = [
    "All",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <main>
      <Breadcrumb/>
      <section className='mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 md:pt-10 lg:px-8'>
        <div className='text-center'>
          <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00A990]'>
            Discover Your Favorites
          </p>
          <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Shop By Brand
          </h1>
          <p className='mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base'>
            Explore our collection from the brands you love. Find your favorite
            styles, discover new names and shop everything in one place.
          </p>
        </div>
        <div className='mx-auto mt-7 max-w-xl'>
          <div className='flex h-12 items-center gap-3 rounded-full border border-gray-200 bg-[#F7F7F7] px-5 transition focus-within:border-[#00D0B0] focus-within:bg-white'>
            <FiSearch className='shrink-0 text-lg text-gray-400' />
            <input
              type='text'
              placeholder='Search for a brand...'
              className='w-full bg-transparent text-sm outline-none placeholder:text-gray-400'
            />
          </div>
        </div>
      </section>
      <section className='mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8'>
        <div className='mb-5 flex items-end justify-between'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#00A990]'>
              Popular
            </p>
            <h2 className='mt-1 text-2xl font-bold'>Featured Brands</h2>
          </div>
          <button
            type='button'
            className='hidden items-center gap-1 text-sm font-medium transition hover:text-[#00A990] sm:flex'
          >
            View all
            <FiArrowRight />
          </button>
        </div>
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4'>
          {featuredBrands.map((brand) => (
            <button
              key={brand.id}
              type='button'
              className='group relative overflow-hidden rounded-2xl border border-gray-200 bg-[#F7F7F7] text-left transition duration-300 hover:-translate-y-1 hover:border-[#00D0B0]/50 hover:shadow-md'
            >
              <div className='flex h-32 items-center justify-center bg-white p-6 sm:h-40'>
                <img
                  src={brand.image}
                  alt={brand.name}
                  className='max-h-16 max-w-[75%] object-contain grayscale transition duration-300 group-hover:grayscale-0 sm:max-h-20'
                />
              </div>
              <div className='flex items-center justify-between border-t border-gray-100 px-4 py-3'>
                <div>
                  <h3 className='text-sm font-semibold'>{brand.name}</h3>

                  <p className='mt-0.5 text-[11px] text-gray-500'>
                    {brand.products}
                  </p>
                </div>
                <span className='flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition group-hover:bg-[#00D0B0] group-hover:text-black'>
                  <FiArrowRight className='text-xs' />
                </span>
              </div>
            </button>
          ))}
        </div>
        <button
          type='button'
          className='mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 py-3 text-sm font-medium sm:hidden'
        >
          View All Brands
          <FiArrowRight />
        </button>
      </section>
      <section className='border-y border-gray-100 bg-[#F8F8F8]'>
        <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8'>
          <div className='mb-7'>
            <p className='text-xs font-semibold uppercase tracking-[0.18em] text-[#00A990]'>
              Explore
            </p>
            <h2 className='mt-1 text-2xl font-bold sm:text-3xl'>All Brands</h2>
            <p className='mt-2 text-sm text-gray-500'>
              Browse our complete collection of brands.
            </p>
          </div>
          <div className='mb-8 flex flex-wrap gap-2'>
            {alphabet.map((letter) => (
              <button
                key={letter}
                type='button'
                className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-xs font-semibold transition ${
                  letter === "All"
                    ? "bg-black text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-[#00D0B0] hover:text-black"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
          <div className='grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {brands.map((brand, index) => (
              <button
                key={brand}
                type='button'
                className='group flex min-h-[82px] items-center justify-between border-b border-r border-gray-100 px-4 py-4 text-left transition hover:bg-black hover:text-white'
              >
                <div>
                  <span className='text-sm font-semibold'>{brand}</span>

                  <p className='mt-1 text-[10px] text-gray-400 transition group-hover:text-white/50'>
                    Explore collection
                  </p>
                </div>
                <FiChevronRight className='shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#00D0B0]' />
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Brands
