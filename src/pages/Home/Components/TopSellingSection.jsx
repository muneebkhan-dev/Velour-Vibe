import React from "react"
import ProductCard from "../../../Components/ProductCard"
import { useProducts } from "../../../context/ProductContext"

import {
  FiArrowRight,
} from "react-icons/fi"

const TopSellingSection = () => {
  const { products, loading, error } = useProducts()

  const sortedProducts = [...products].filter((p) => {
    return p.rating >= 4.9
  })
  const topFour = sortedProducts.slice(0, 4)

  return (
    <section className='topselling-sec relative flex justify-center'>
      <div className='topselling-cont max-w-7xl px-4 md:px-5 lg:px-10 py-5 lg:py-0'>
        <div className='topselling__info'>
          <h1 className='font-dm text-3xl lg:text-5xl font-extrabold py-5 md:py-10 lg:py-0 lg:pt-20 lg:pb-15 flex justify-center'>
            Top Selling
          </h1>
        </div>
        <div className='flex gap-4'>
          {topFour.map((product, index) => (
            <div
              className={`product-card  ${index >= 2 ? "hidden md:flex" : ""}`}
            >
              <ProductCard product={product} key={product.id} />
            </div>
          ))}
          {loading && (
            <div className='text-center py-10 font-dm text-gray-500'>
              Products Loading...
            </div>
          )}
        </div>
        <div className='mt-12 flex justify-center'>
          <button className='flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-black px-7 py-3 text-sm font-semibold transition hover:bg-black hover:text-white sm:w-auto'>
            View More
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopSellingSection
