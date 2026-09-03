import React from 'react'
import RatingReviews from './RatingReviews'

const ProductInfoTabs = () => {
  return (
    <section className='relative pb-10'>
        <div className='max-w-7xl w-full mx-auto px-10'>
            <div className='grid grid-cols-3 text-center'>
                <div className='border-b border-gray-200 py-2'><h3 className='font-dm text-gray-500'>Product Details</h3></div>
                <div className='border-b-2 py-2'><h3 className='font-dm'>Rating & Reviews</h3></div>
                <div className='border-b border-gray-200 py-2'><h3 className='font-dm text-gray-500'>FAQs</h3></div>
            </div>
        </div>
        <RatingReviews/>
    </section>
  )
}

export default ProductInfoTabs