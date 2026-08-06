import React from "react"
import { IoIosStar } from "react-icons/io"

const rating = () => {
  return (
    <div className='flex items-center gap-1 text-[#FFC633]'>
      <IoIosStar className='size-6' />
      <IoIosStar className='size-6' />
      <IoIosStar className='size-6' />
      <IoIosStar className='size-6' />
      <IoIosStar className='size-6' />
    </div>
  )
}

export default rating
