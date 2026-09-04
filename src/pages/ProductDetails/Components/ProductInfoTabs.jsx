import React, { useState } from "react"
import RatingReviews from "./RatingReviews"
import Details from "./Details"
import Faqs from "./Faqs"

const ProductInfoTabs = () => {
  const [activeTab, setActiveTab] = useState("details")

  return (
    <section className='relative pb-10'>
      <div className='max-w-7xl w-full mx-auto px-10'>
        <div className='grid grid-cols-3 text-center'>
          <div className='border-b border-gray-200 py-2'>
            <button onClick={()=> setActiveTab("details")} className='font-dm text-gray-500'>Product Details</button>
          </div>
          <div className='border-b-2 py-2'>
            <button onClick={()=> setActiveTab("rating")} className='font-dm'>Rating & Reviews</button>
          </div>
          <div className='border-b border-gray-200 py-2'>
            <button onClick={()=> setActiveTab("faqs")} className='font-dm text-gray-500'>FAQs</button>
          </div>
        </div>
      </div>
      {activeTab === "details" && <Details />}
      {activeTab === "rating" && <RatingReviews />}
      {activeTab === "faqs" && <Faqs />}
    </section>
  )
}

export default ProductInfoTabs
