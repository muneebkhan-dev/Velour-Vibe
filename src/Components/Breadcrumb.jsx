import React from "react"
import { IoIosArrowForward } from "react-icons/io"

const Breadcrumb = () => {
  return (
    <section className='relative py-5 md:py-10'>
      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
        <div>
          <ul className='flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap'>
            <li className='font-dm text-gray-400 text-sm sm:text-base'>Home</li>
            <IoIosArrowForward className='text-gray-500 shrink-0' />
            <li className='font-dm text-gray-400 text-sm sm:text-base'>Shop</li>
            <IoIosArrowForward className='text-gray-500 shrink-0' />
            <li className='font-dm text-gray-400 text-sm sm:text-base'>Men</li>
            <IoIosArrowForward className='text-gray-500 shrink-0' />
            <li className='font-dm text-sm sm:text-base'>T-shirts</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
