import React from "react"
import { FiSliders } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"
import ReviewCard from "../../../Components/ReviewCard"
import Rating from "../../../Components/Rating"
import { useProducts } from "../../../context/ProductContext"
import { useParams } from "react-router-dom"

const RatingReviews = () => {

  const { id } = useParams()
  const { products, loading, error } = useProducts()

  const singleProduct = products.find(
    (p) => String(p.id) === String(id)
  );

  const productReviews = singleProduct.reviews

  return (
    <section className='relative py-5'>
      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-5'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-4'>
          <div className='flex gap-2 items-center'>
            <h2 className='font-dm font-bold text-lg'>All Reviews</h2>
          </div>
          <div className='flex gap-2 items-center flex-wrap'>
            <div className='bg-gray-100 p-3 rounded-full'>
              <FiSliders className='size-5' />
            </div>
            <div className='flex items-center gap-2 bg-gray-100 py-3 px-5 rounded-3xl'>
              <button className='font-dm text-sm'>Latest</button>
              <IoIosArrowDown className='size-4' />
            </div>
            <div className='flex items-center gap-2'>
              <button className='font-dm bg-black text-white text-sm py-3 px-5 rounded-3xl whitespace-nowrap'>
                Right a Review
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {productReviews.map((product, index) => (
            <ReviewCard
              key={product.id || index}
              className='w-full'
              product={product}
            />
          ))}
        </div>
        <div className='flex items-center justify-center pt-3'>
          <button className='font-dm text-sm border border-gray-300 py-3 px-6 sm:px-8 rounded-3xl'>
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}

export default RatingReviews
