import React from "react"
import ProductCard from "../../../Components/ProductCard"
import { useProducts } from "../../../context/ProductContext"
import { Link } from "react-router-dom"
import {
  FiArrowRight,
} from "react-icons/fi"

const NewArrivalsSection = () => {
  const { products, loading, error } = useProducts()

  const sortedProducts = [...products].sort((a, b) => {
    return new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
  })
  const latestFour = sortedProducts.slice(0, 4)

  return (
    <section className='newarrivals-sec relative flex justify-center px-4 lg:px-0'>
      <div className='newarrivals-cont max-w-7xl w-full border-b border-gray-300 py-15 lg:py-20 md:px-5 lg:px-10'>
        <div>
          <h1 className='font-dm text-3xl lg:text-5xl font-extrabold pb-10 lg:pb-15 flex justify-center'>
            NEW ARRIVALS
          </h1>
        </div>
        <div className='flex gap-4 justify-center'>
          {latestFour.map((product, index) => (
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
        <Link to="/newarrivals" className='mt-12 flex justify-center'>
          <button className='flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-black px-7 py-3 text-sm font-semibold transition hover:bg-black hover:text-white sm:w-auto'>
            View More
            <FiArrowRight />
          </button>
          </Link>
        
      </div>
    </section>
  )
}

export default NewArrivalsSection
