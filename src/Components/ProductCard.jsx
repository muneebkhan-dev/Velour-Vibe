import React from "react"
import { IoIosStar } from "react-icons/io"
import { LiaStarHalfSolid } from "react-icons/lia"

const ProductCard = ({ product }) => {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <span>{product.img}</span>
        <h3 className='font-dm text-xl font-semibold'>{product.title}</h3>
        {product.rating === 4.5 && (
          <>
            <div className='flex items-center gap-1 text-[#FFC633]'>
              <IoIosStar className='size-5' />
              <IoIosStar className='size-5' />
              <IoIosStar className='size-5' />
              <IoIosStar className='size-5' />
              <LiaStarHalfSolid className='size-5' />
              <p className='text-black'>4.5/5</p>
            </div>
          </>
        )}
        <div className='flex gap-3'>
          <span className='font-dm text-2xl font-semibold'>
            {product.price}
          </span>
          {product.originalPrice && (
            <div className="flex gap-2">
            <span className='line-through text-gray-400 font-dm text-2xl font-semibold'>
              {product.originalPrice}
            </span>
            <span className="text-xs bg-[#FF3333]/10 text-[#FF3333] rounded-2xl p-2">-20%</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductCard
