import React from "react"
import ProductCard from "../../../Components/ProductCard"


const NewArrivalsSection = () => {
  const NewArrivalsSecProduct = [
    {
      id: 1,
      img: "/src/assets/images/CardImages/proimg-1.png",
      title: "T-shirt with Tape",
      rating: 4.5,
      price: "$120",
      
      category: "shirts",
    },

    {
      id: 2,
      img: "/src/assets/images/CardImages/proimg-2.png",
      title: "Skinny Fit Jeans",
      rating: 4.5,
      price: "$240",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 3,
      img: "/src/assets/images/CardImages/proimg-3.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: "$180",
      
      category: "shirts",
    },
    
    {
      id: 4,
      img: "/src/assets/images/CardImages/proimg-4.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: "$130",
      originalPrice: "$260",
      
      category: "shirts",
    },
  ]

  return (
    <section className="newarrivals-sec relative flex justify-center">
      <div className="newarrivals-cont max-w-7xl w-full border-b border-gray-300 py-15 lg:py-20 px-5 lg:px-10">
        <div>
          <h1 className='font-dm text-2xl md:text-3xl lg:text-5xl font-extrabold pb-10 lg:pb-15 flex justify-center'>
            NEW ARRIVALS
          </h1>
        </div>
        <div className="flex gap-4">
         { NewArrivalsSecProduct.map((product) => (
          <ProductCard product={product} key={product.id} />
         ))}
        </div>
        <div className="flex justify-center pt-10">
          <button className="font-dm text-sm lg:text-base py-3 px-15 lg:px-18 border border-[#000000]/10 rounded-3xl">
             View All
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewArrivalsSection
