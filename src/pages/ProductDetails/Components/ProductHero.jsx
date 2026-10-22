import React from "react"
import Rating from "../../../Components/Rating"
import { FaMinus } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"
import { useParams } from 'react-router-dom';
import { useProducts } from "../../../context/ProductContext"

const ProductHero = () => {
   const { id } = useParams();
  const { products, loading, error } = useProducts()
  console.log(products)

  if (loading) {
    return <h2>Loading product details...</h2>;
  }

  // 2. Agar koi error aagya hai
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  const singleProduct = products.find(p => String(p.id) === String(id))
  if (!singleProduct) {
    return <h2>Product not found!</h2>;
  }

  return (
    <section className='relative pb-10'>
      
      <div className='max-w-7xl w-full flex flex-col lg:flex-row gap-10 lg:gap-12 mx-auto px-4 sm:px-6 lg:px-10'>
        <div className='w-full lg:w-1/2 flex gap-2 sm:gap-4'>
          <div className='w-1/4 sm:w-1/5 lg:w-1/4'>
            <ul className='flex flex-col gap-3'>
              <li>
                <img
                  className='w-full rounded-md'
                  src={singleProduct.images[0]}
                  alt=''
                />
              </li>
              <li>
                <img
                  className='w-full rounded-md'
                  src={singleProduct.images[1]}
                  alt=''
                />
              </li>
              <li>
                <img
                  className='w-full rounded-md'
                  src={singleProduct.images[2]}
                  alt=''
                />
              </li>
            </ul>
          </div>
          <div className='w-3/4 sm:w-4/5 lg:w-3/4'>
            <img
              className='w-full h-auto rounded-md'
              src='/src/assets/images/Tshirt-4.png'
              alt=''
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col gap-3 border-b border-gray-300 pb-5'>
            <h1 className='font-dm text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase'>
              {singleProduct.title}
            </h1>
            <span>{singleProduct.rating}</span>
            <div className='flex flex-wrap items-center gap-3'>
              <h3 className='font-dm text-xl sm:text-2xl lg:text-3xl font-semibold'>
                {singleProduct.price}
              </h3>

              {singleProduct.originalPrice && (
                <div className='flex flex-wrap items-center gap-2'>
                  <span className='line-through text-gray-400 font-dm text-xl sm:text-2xl lg:text-3xl font-semibold'>
                    {singleProduct.originalPrice}
                  </span>

                  <span className='text-sm sm:text-base bg-[#FF3333]/10 text-[#FF3333] rounded-3xl flex items-center px-2'>
                    -40%
                  </span>
                </div>
              )}
            </div>

            <p className='font-dm text-gray-500 text-sm md:text-base leading-relaxed'>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>

          {/* Colors */}
          <div className='flex flex-col gap-2 py-5 border-b border-gray-300'>
            <h4 className='font-dm text-base text-gray-400'>Select Color</h4>

            <div className='flex flex-wrap gap-3 sm:gap-4'>
              {/* {singleProduct.map((color) => (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className='p-5 rounded-full'
                ></button>
              ))} */}
            </div>
          </div>

          {/* Sizes */}
          <div className='flex flex-col gap-2 py-5 border-b border-gray-300'>
            <h4 className='font-dm text-base text-gray-400'>Choose Size</h4>

            <div className='flex flex-wrap gap-2 sm:gap-4'>
              {/* {singleProduct.sizes.map((size) => (
                <button
                  key={size}
                  className='font-dm text-sm sm:text-sm py-3 px-4 sm:px-5 rounded-full bg-gray-100 text-gray-600'
                >
                  {size}
                </button>
              ))} */}
            </div>
          </div>
          <div className='py-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5'>
            <div className='flex gap-7 bg-gray-100 items-center justify-center py-3 px-7 rounded-3xl'>
              <button className='text-xl flex'>
                <FaMinus />
              </button>

              <span className='text-xl'>1</span>

              <button className='text-xl'>
                <FaPlus />
              </button>
            </div>

            <div className='w-full'>
              <button className='w-full font-dm text-base py-3 px-10 rounded-3xl bg-black text-white'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductHero
