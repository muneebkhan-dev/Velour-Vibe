import React from "react"
import { IoIosStar } from "react-icons/io"
import { LiaStarHalfSolid } from "react-icons/lia"
import Breadcrumb from "./Breadcrumb"

const ProductCard = ({ product }) => {
  return (
    <>
      <div className='flex flex-col md:gap-2'>
        <span className="aspect-4/3 pb-2 md:pb-0"><img className="h-full w-full object-cover" src={product.img} alt="" /></span>
        <h3 className='font-dm text-base lg:text-xl font-semibold'>{product.title}</h3>
        {product.rating === 4.5 && (
          <>
            <div className='flex items-center gap-1 text-[#FFC633]'>
              <IoIosStar className='size-4 md:size-4 lg:size-5' />
              <IoIosStar className='size-4 md:size-4 lg:size-5' />
              <IoIosStar className='size-4 md:size-4 lg:size-5' />
              <IoIosStar className='size-4 md:size-4 lg:size-5' />
              <LiaStarHalfSolid className='size-5' />
              <p className='text-black text-xs md:text-sm lg:text-base'>4.5/5</p>
            </div>
          </>
        )}
        <div className='flex gap-3'>
          <span className='font-dm text-xl lg:text-2xl font-semibold'>
            {product.price}
          </span>
          {product.originalPrice && (
            <div className="flex gap-2">
            <span className='line-through text-gray-400 font-dm text-xl lg:text-2xl font-semibold'>
              {product.originalPrice}
            </span>
            <span className="text-xs bg-[#FF3333]/10 text-[#FF3333] rounded-3xl md:rounded-2xl flex items-center px-2 md:p-2">-20%</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductCard
