import React from "react"
import Rating from "../../../Components/Rating"
import { FaMinus } from "react-icons/fa6"
import { FaPlus } from "react-icons/fa6"

const ProductHero = () => {
  const product = {
    id: 1,
    title: "One Life Graphic T-shirt",
    description: "A comfortable casual t-shirt.",
    price: 260,
    originalPrice: "$300",
    rating: <Rating />,
    image: "/src/assets/images/Tshirt-1.png",
    images: [
      "/src/assets/images/Tshirt-1.png",
      "/src/assets/images/Tshirt-2.png",
      "/src/assets/images/Tshirt-3.png",
    ],
    colors: ["#31344F", "#314F4A", "#4F4631"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
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
                  src={product.images[0]}
                  alt=''
                />
              </li>
              <li>
                <img
                  className='w-full rounded-md'
                  src={product.images[1]}
                  alt=''
                />
              </li>
              <li>
                <img
                  className='w-full rounded-md'
                  src={product.images[2]}
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
              {product.title}
            </h1>
            <span>{product.rating}</span>
            <div className='flex flex-wrap items-center gap-3'>
              <h3 className='font-dm text-xl sm:text-2xl lg:text-3xl font-semibold'>
                {product.price}
              </h3>

              {product.originalPrice && (
                <div className='flex flex-wrap items-center gap-2'>
                  <span className='line-through text-gray-400 font-dm text-xl sm:text-2xl lg:text-3xl font-semibold'>
                    {product.originalPrice}
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
              {product.colors.map((color) => (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className='p-5 rounded-full'
                ></button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className='flex flex-col gap-2 py-5 border-b border-gray-300'>
            <h4 className='font-dm text-base text-gray-400'>Choose Size</h4>

            <div className='flex flex-wrap gap-2 sm:gap-4'>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className='font-dm text-sm sm:text-sm py-3 px-4 sm:px-5 rounded-full bg-gray-100 text-gray-600'
                >
                  {size}
                </button>
              ))}
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
