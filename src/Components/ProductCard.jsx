import React from "react"
import { IoIosStar } from "react-icons/io"
import { LiaStarHalfSolid } from "react-icons/lia"
import Breadcrumb from "./Breadcrumb"
import Rating from "./Rating"
import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <>
   <Link to={`/products/${product.id}`}>
      <div className='flex flex-col md:gap-2'>
        <span className="aspect-4/3 pb-2 md:pb-0"><img className="h-full w-full object-cover" src={product.images[1]} alt="" /></span>
        <h3 className='font-dm text-base lg:text-xl font-semibold'>{product.title}</h3>
          <>
            <Rating rating={product.rating}/>
          </>
        <div className='flex gap-3'>
          <span className='font-dm text-xl lg:text-2xl font-semibold'>
            ${product.price}
          </span>
            <div className="flex gap-2">
            <span className="text-xs bg-[#FF3333]/10 text-[#FF3333] rounded-3xl md:rounded-2xl flex items-center px-2 md:p-2">-{product.discountPercentage}%</span>
            </div>
        </div>
      </div>
      </Link>
    </>
  )
}

export default ProductCard
