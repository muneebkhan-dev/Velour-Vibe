import React, { useState } from "react"
import RatingReviews from "./RatingReviews"
import Details from "./Details"
import Faqs from "./Faqs"

const ProductInfoTabs = () => {
  const [activeTab, setActiveTab] = useState("rating")

  return (
    <section className='relative pb-10'>
      <div className='max-w-7xl w-full mx-auto px-10'>
        <div className='grid grid-cols-3 text-center'>
          <div className={`${activeTab === "details" ? "border-b-2 border-black" : "border-gray-200 text-gray-500"} py-2 border-b`}>
            <button onClick={()=> setActiveTab("details")} className='font-dm cursor-pointer'>Product Details</button>
          </div>
          <div className={`${activeTab === "rating" ? "border-b-2 border-black" : "border-gray-200 text-gray-500"} border-b py-2`}>
            <button onClick={()=> setActiveTab("rating")} className='font-dm cursor-pointer'>Rating & Reviews</button>
          </div>
          <div className={`${activeTab === "faqs" ? "border-b-2 border-black" : "border-gray-200 text-gray-500"} border-b py-2`}>
            <button onClick={()=> setActiveTab("faqs")} className='font-dm cursor-pointer'>FAQs</button>
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
