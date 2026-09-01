import React from "react"
import Rating from "../../../Components/Rating"
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const ProductHero = () => {
  const product = {
    id: 1,
    title: "One Life Graphic T-shirt",
    description: "A comfortable casual t-shirt.",
    price: 260,
    originalPrice: "$300",
    rating: <Rating/>,
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
    <section className='relative py-10'>
      <div className='max-w-7xl w-full flex gap-10 mx-auto px-10'>
        <div className='flex gap-3 w-1/2'>
          <div className='w-1/3'>
            <ul className='flex flex-col gap-3 '>
              <li>
                <img className='w-full' src={product.images[0]} alt='' />
              </li>
              <li>
                <img className='w-full' src={product.images[1]} alt='' />
              </li>
              <li>
                <img className='w-full' src={product.images[2]} alt='' />
              </li>
            </ul>
          </div>
          <div className='w-full'>
            <img
              className='w-full'
              src='/src/assets/images/Tshirt-4.png'
              alt=''
            />
          </div>
        </div>
        <div className='w-1/2'>
          <div className='flex flex-col gap-3 border-b border-gray-300 pb-5'>
            <h1 className='font-dm text-4xl font-extrabold uppercase'>
              {product.title}
            </h1>
            <span className="">{product.rating}</span>
            <div className='flex gap-3'>
              <h3 className='font-dm text-xl lg:text-3xl font-semibold'>
                {product.price}
              </h3>
              {product.originalPrice && (
                <div className='flex gap-2'>
                  <span className='line-through text-gray-400 font-dm text-xl lg:text-3xl font-semibold'>
                    {product.originalPrice}
                  </span>
                  <span className='text-base bg-[#FF3333]/10 text-[#FF3333] rounded-3xl md:rounded-2xl flex items-center px-2 md:px-2'>
                    -40%
                  </span>
                </div>
              )}
            </div>
            <p className='font-dm text-gray-500 text-sm md:text-base'>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          <div className='flex flex-col gap-2 py-5 border-b border-gray-300'>
            <h4 className='font-dm text-base text-gray-400'>Select Color</h4>
            <div className='flex gap-4'>
              {product.colors.map((color) => (
                <button
                  style={{ backgroundColor: color }}
                  className='p-5 rounded-full'
                ></button>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2 py-5 border-b border-gray-300'>
            <h4 className='font-dm text-base text-gray-400'>Choose Size</h4>
            <div className='flex gap-4'>
              {product.sizes.map((size) => (
                <button className='py-3 px-5 rounded-full bg-gray-100 text-gray-600'>
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="py-5 flex items-center gap-5">
            <div className='flex gap-7 bg-gray-100 items-center justify-center py-3 px-7 rounded-3xl'>
              <button className="text-xl flex"><FaMinus /></button>
              <span className="text-xl">1</span>
              <button className="text-xl"><FaPlus /></button>
            </div>
            <div className="w-full">
                <button className="w-full font-dm text-base py-3 px-10 rounded-3xl bg-black text-white">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductHero
