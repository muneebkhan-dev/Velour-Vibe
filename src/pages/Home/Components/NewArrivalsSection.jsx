import React from "react"
import ProductCard from "../../../Components/ProductCard"
import { useProducts } from "../../../context/ProductContext"

const NewArrivalsSection = () => {
  const { products, loading, error } = useProducts()

  return (
    <section className='newarrivals-sec relative flex justify-center px-4 lg:px-0'>
      <div className='newarrivals-cont max-w-7xl w-full border-b border-gray-300 py-15 lg:py-20 md:px-5 lg:px-10'>
        <div>
          <h1 className='font-dm text-3xl lg:text-5xl font-extrabold pb-10 lg:pb-15 flex justify-center'>
            NEW ARRIVALS
          </h1>
        </div>
        <div className='flex gap-4 justify-center'>
          {products.map((product, index) => (
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
        <div className='flex justify-center pt-5 md:pt-10'>
          <button className='w-full md:w-auto font-dm text-sm lg:text-base py-3 md:px-15 lg:px-18 border border-[#000000]/10 rounded-3xl'>
            View All
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewArrivalsSection
