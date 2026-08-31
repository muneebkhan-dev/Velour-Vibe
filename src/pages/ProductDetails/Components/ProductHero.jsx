import React from "react"

const ProductHero = () => {
  const product = {
    id: 1,
    title: "T-Shirt",
    description: "A comfortable casual t-shirt.",
    price: 120,
    originalPrice: 150,
    rating: 4.5,
    image: "/src/assets/images/Tshirt-1.png",
    images: ["/src/assets/images/Tshirt-1.png", "/src/assets/images/Tshirt-2.png", "/src/assets/images/Tshirt-3.png"],
  }

  return (
    <section className='relative py-10'>
      <div className='max-w-7xl w-full mx-auto px-10'>
        <div className="flex">
          <div>
            <ul>
              <li><img src={product.images[0]} alt="" /></li>
              <li><img src={product.images[1]} alt="" /></li>
              <li><img src={product.images[2]} alt="" /></li>
            </ul>
          </div>
          <div>
            <img src="/src/assets/images/Tshirt-1.png" alt="" />
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </section>
  )
}

export default ProductHero
