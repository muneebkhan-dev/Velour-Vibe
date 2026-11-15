import React, { useEffect, useState } from "react"
import RatingReviews from "./RatingReviews"
import Details from "./Details"
import Faqs from "./Faqs"
import { useParams } from "react-router-dom"
import { useProducts } from "../../../context/ProductContext"
import ProductCard from "../../../Components/ProductCard"

const ProductInfoTabs = () => {
  const { id } = useParams()
  const { products, loading, error } = useProducts()
  const [activeTab, setActiveTab] = useState("rating")

  useEffect(() => {
   window.scrollTo({
    top: 0,
    behavior: "smooth"
   })
  }, [id]);
  

  if (loading) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-16 text-center text-gray-500'>
        Loading product details...
      </div>
    )
  }

  if (error) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-16 text-center text-red-500'>
        Error: {error}
      </div>
    )
  }

  const singleProduct = products.find((p) => String(p.id) === String(id))

  if (!singleProduct) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-16 text-center text-gray-500'>
        Product not found!
      </div>
    )
  }

  const relatedProducts = products.filter(
      (product) =>
        product.category === singleProduct.category &&
        product.id !== singleProduct.id,
    )
    .slice(0, 4)

  return (
    <section>
      <section className='relative pb-10'>
        <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
          <div className='grid grid-cols-3 text-center items-'>
            <div
              className={`${
                activeTab === "details"
                  ? "border-b-2 border-black"
                  : "border-gray-200 text-gray-500"
              } py-2 border-b`}
            >
              <button
                onClick={() => setActiveTab("details")}
                className='font-dm cursor-pointer text-sm md:text-base'
              >
                Product Details
              </button>
            </div>

            <div
              className={`${
                activeTab === "rating"
                  ? "border-b-2 border-black"
                  : "border-gray-200 text-gray-500"
              } border-b py-2`}
            >
              <button
                onClick={() => setActiveTab("rating")}
                className='font-dm cursor-pointer text-sm md:text-base'
              >
                Rating & Reviews
              </button>
            </div>

            <div
              className={`${
                activeTab === "faqs"
                  ? "border-b-2 border-black"
                  : "border-gray-200 text-gray-500"
              } border-b py-2`}
            >
              <button
                onClick={() => setActiveTab("faqs")}
                className='font-dm cursor-pointer text-sm md:text-base'
              >
                FAQs
              </button>
            </div>
          </div>
        </div>

        {activeTab === "details" && <Details />}
        {activeTab === "rating" && <RatingReviews />}
        {activeTab === "faqs" && <Faqs />}
      </section>
      <section className='newarrivals-sec relative flex justify-center px-4 lg:px-0'>
        <div className='newarrivals-cont max-w-7xl w-full py-10 md:py-15 lg:py-0 lg:pb-15 md:px-5 lg:px-10'>
          <div className='flex items-center justify-center'>
            <h1 className='font-dm text-3xl lg:text-5xl font-extrabold pb-10 lg:pb-15 flex justify-center uppercase text-center'>
              You might also like
            </h1>
          </div>
          <div className='flex gap-4 justify-center'>
            {relatedProducts.map((product, index) => (
              <div
                className={`product-card  ${index >= 2 ? "hidden md:flex" : ""}`}
              >
                <ProductCard key={product.id} product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default ProductInfoTabs
