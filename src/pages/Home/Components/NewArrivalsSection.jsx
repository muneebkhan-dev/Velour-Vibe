import React from "react"
import ProductCard from "../../../Components/ProductCard"


const NewArrivalsSection = () => {
  const NewArrivalsSecProduct = [
    {
      id: 1,
      img: <img src="/src/assets/images/CardImages/proimg-1.png" alt="" />,
      title: "T-shirt with Tape Details",
      rating: 4.5,
      price: "$120",
      
      category: "shirts",
    },

    {
      id: 2,
      img: <img src="/src/assets/images/CardImages/proimg-2.png" alt="" />,
      title: "Skinny Fit Jeans",
      rating: 4.5,
      price: "$240",
      originalPrice: "$260",
      
      category: "shirts",
    },

    {
      id: 3,
      img: <img src="/src/assets/images/CardImages/proimg-3.png" alt="" />,
      title: "Checkered Shirt",
      rating: 4.5,
      price: "$180",
      
      category: "shirts",
    },
    
    {
      id: 4,
      img: <img src="/src/assets/images/CardImages/proimg-4.png" alt="" />,
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: "$130",
      originalPrice: "$260",
      
      category: "shirts",
    },
  ]

  return (
    <section className="relative flex justify-center">
      <div className="max-w-7xl border-b border-gray-300 py-20">
        <div>
          <h1 className='font-dm text-5xl font-extrabold pb-15 flex justify-center'>
            NEW ARRIVALS
          </h1>
        </div>
        <div className="flex  gap-4">
         { NewArrivalsSecProduct.map((product) => (
          <ProductCard product={product} key={product.id} />
         ))}
        </div>
        <div className="flex justify-center pt-10">
          <button className="font-dm text-base py-3 px-18 border border-[#000000]/10 rounded-3xl">
             View All
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewArrivalsSection
