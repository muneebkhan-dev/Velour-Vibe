import React from 'react'
import ProductCard from '../../../Components/ProductCard'

const TopSellingSection = () => {

    const TopSellingSecProduct = [
    {
      id: 1,
      img: "/src/assets/images/CardImages/proimg-5.png",
      title: "Vertical Striped Shirt",
      rating: 4.5,
      price: "$212",
      originalPrice: "$232",
      
      category: "shirts",
    },

    {
      id: 2,
      img: "/src/assets/images/CardImages/proimg-6.png",
      title: "Courage Graphic T-shirt",
      rating: 4.5,
      price: "$145",
      
      category: "shirts",
    },

    {
      id: 3,
      img: "/src/assets/images/CardImages/proimg-7.png",
      title: "Loose Fit Bermuda Shorts",
      rating: 4.5,
      price: "$80",
      
      category: "shirts",
    },
    
    {
      id: 4,
      img: "/src/assets/images/CardImages/proimg-8.png",
      title: "Faded Skinny Jeans",
      rating: 4.5,
      price: "$210",
      
      category: "shirts",
    },
  ]

  return (
    <section className="topselling-sec relative flex justify-center">
      <div className="topselling-cont max-w-7xl px-4 md:px-5 lg:px-10 py-5 lg:py-0">
        <div className='topselling__info'>
          <h1 className='font-dm text-3xl lg:text-5xl font-extrabold py-5 md:py-10 lg:py-0 lg:pt-20 lg:pb-15 flex justify-center'>
            Top Selling
          </h1>
        </div>
        <div className="flex gap-4">
         {TopSellingSecProduct.map((product, index) => (
          <div className={`product-card  ${index >= 2 ? 'hidden md:flex' : ''}`}>
          <ProductCard product={product} key={product.id} />
          </div>
         ))}
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