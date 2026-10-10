import React from 'react'
import ProductCard from '../../../Components/ProductCard'
import { useProducts } from '../../../context/ProductContext'

const TopSellingSection = () => {
  const { products, loading, error } = useProducts()

  return (
    <section className="topselling-sec relative flex justify-center">
      <div className="topselling-cont max-w-7xl px-4 md:px-5 lg:px-10 py-5 lg:py-0">
        <div className='topselling__info'>
          <h1 className='font-dm text-3xl lg:text-5xl font-extrabold py-5 md:py-10 lg:py-0 lg:pt-20 lg:pb-15 flex justify-center'>
            Top Selling
          </h1>
        </div>
        <div className="flex gap-4">
         {products.map((product, index) => (
          <div className={`product-card  ${index >= 2 ? 'hidden md:flex' : ''}`}>
          <ProductCard product={product} key={product.id} />
          </div>
         ))}
         {loading && (
            <div className='text-center py-10 font-dm text-gray-500'>
              Products Loading...
            </div>
          )}
        </div>
        <div className="flex justify-center py-5 md:py-10">
          <button className="w-full md:w-auto font-dm text-sm lg:text-base py-3 px-15 lg:px-18 border border-[#000000]/10 rounded-3xl">
             View All
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopSellingSection