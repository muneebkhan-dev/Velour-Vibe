import React from 'react'
import ProductCard from '../../../Components/ProductCard'

const TopSellingSection = () => {

    const TopSellingSecProduct = [
    {
      id: 1,
      img: <img src="/src/assets/images/CardImages/proimg-5.png" alt="" />,
      title: "Vertical Striped Shirt",
      rating: 4.5,
      price: "$212",
      originalPrice: "$232",
      
      category: "shirts",
    },

    {
      id: 2,
      img: <img src="/src/assets/images/CardImages/proimg-6.png" alt="" />,
      title: "Courage Graphic T-shirt",
      rating: 4.5,
      price: "$145",
      
      category: "shirts",
    },

    {
      id: 3,
      img: <img src="/src/assets/images/CardImages/proimg-7.png" alt="" />,
      title: "Loose Fit Bermuda Shorts",
      rating: 4.5,
      price: "$80",
      
      category: "shirts",
    },
    
    {
      id: 4,
      img: <img src="/src/assets/images/CardImages/proimg-8.png" alt="" />,
      title: "Faded Skinny Jeans",
      rating: 4.5,
      price: "$210",
      
      category: "shirts",
    },
  ]

  return (
    <section className="relative flex justify-center">
      <div className="max-w-7xl border-b border-gray-300">
        <div>
          <h1 className='font-dm text-5xl font-extrabold pt-20 pb-15 flex justify-center'>
            Top Selling
          </h1>
        </div>
        <div className="flex  gap-4">
         {TopSellingSecProduct.map((product) => (
          <ProductCard product={product} key={product.id} />
         ))}
        </div>
        <div className="flex justify-center py-10">
          <button className="font-dm text-base py-3 px-18 border border-[#000000]/10 rounded-3xl">
             View All
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopSellingSection