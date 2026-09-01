import React from "react"
import { IoIosStar } from "react-icons/io"
import { LiaStarHalfSolid } from "react-icons/lia"

const Rating = () => {
  return (
    <div className='flex items-center gap-1 text-[#FFC633]'>
      <IoIosStar className='size-4 md:size-4 lg:size-5' />
      <IoIosStar className='size-4 md:size-4 lg:size-5' />
      <IoIosStar className='size-4 md:size-4 lg:size-5' />
      <IoIosStar className='size-4 md:size-4 lg:size-5' />
      <LiaStarHalfSolid className='size-5' />
      <p className='text-black text-xs md:text-sm lg:text-base'>4.5/5</p>
    </div>
  )
}

export default Rating
