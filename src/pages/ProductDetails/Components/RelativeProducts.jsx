import React from 'react'
import ProductCard from '../../../Components/ProductCard'

const RelativeProducts = () => {

    const Products = [
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
    <section className="newarrivals-sec relative flex justify-center px-4 lg:px-0">
          <div className="newarrivals-cont max-w-7xl w-full py-15 lg:py-0 lg:pb-15 md:px-5 lg:px-10">
            <div>
              <h1 className='font-dm text-3xl lg:text-5xl font-extrabold pb-10 lg:pb-15 flex justify-center uppercase'>
                You might also like
              </h1>
            </div>
            <div className="flex gap-4 justify-center">
             { Products.map((product, index) => (
              <div className={`product-card  ${index >= 2 ? 'hidden md:flex' : ''}`}>
              <ProductCard product={product} key={product.id} />
              </div>
             ))}
            </div>
          </div>
        </section>
  )
}

export default RelativeProducts